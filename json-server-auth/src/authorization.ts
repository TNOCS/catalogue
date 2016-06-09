import * as fs from 'fs';
import * as path from 'path';
import {Request, Response, Express, NextFunction} from 'express';
import * as bodyParser from 'body-parser';
import * as jsonwebtoken from 'jsonwebtoken';
import * as expressjwt from 'express-jwt';

var config: IConfig = require('./config');
var users: IUser[]  = require('./users');
// Get the jwt middleware method by adding the secret to the express-jwt method.
var jwt = expressjwt({ secret: config.secret });

export interface IUser {
    email?:       string;
    displayName?: string;
    password?:    string;
    newPassword?: string;
    role?:        string;
}

export interface IConfig {
    Url:        string;
    signupUrl:  string;
    profileUrl: string;
    usersUrl:   string;
    loginUrl:   string;
    logoutUrl:  string;
    port:       number;
    secret:     string;
    authorizations: {
        [httpMethod: string]: {
            routes: string[],
            roles?: string[]
        }[]
    };
}

/**
 * AuthenticationService is responsible for registering the login, signup and profile URL, according to the specification in the config file.
 * - When an existing user logs in successfully, a JSON Web Token is returned, containing the user role (role) and email/identity (sub).
 * - Only admins (user who's role is admin) are allowed to create new users (signup) by specifying their email, role and display name.
 *   On successful signup, a new user is created and saved to the config file. The initial password is generated by the client and
 *   should be provided to the new user.
 * - Via a post to the signup URL, setting password and newPassword in the body of the message, the user can change his password.
 * - Passwords should not be stored in clear text, but hashed.
 */
export class AuthenticationService {
    static registerRoutes(server: Express) {
        if (!config.authorizations) config.authorizations = {};
        // Authorize the users URL
        if (!config.authorizations.hasOwnProperty('GET')) config.authorizations['GET'] = [];
        config.authorizations['GET'].push({ routes: [config.usersUrl] });

        // Authorize the authentication URLs: since we authenticate them here, we can let them pass through in the authorize function. 
        if (!config.authorizations.hasOwnProperty('PUT')) config.authorizations['PUT'] = [];
        config.authorizations['PUT'].push({ routes: [config.profileUrl, config.usersUrl] });
        if (!config.authorizations.hasOwnProperty('POST')) config.authorizations['POST'] = [];
        config.authorizations['POST'].push({ routes: [config.loginUrl, config.signupUrl, config.usersUrl] });
        if (!config.authorizations.hasOwnProperty('DELETE')) config.authorizations['DELETE'] = [];
        config.authorizations['DELETE'].push({ routes: [config.usersUrl] });

        // parse body, either in JSON or as application/x-www-form-urlencoded
        server.use(bodyParser.json());
        server.use(bodyParser.urlencoded({ extended: false }));

        // Users: get
        server.get(config.usersUrl, jwt, (req, res) => {
            if (!req.user || req.user.role !== 'admin') return res.send(403);

            let userList: IUser[] = [];
            for (var key in users) {
                if (!users.hasOwnProperty(key)) continue;
                let user = users[key];
                userList.push(<IUser>{
                    email: key,
                    role: user.role,
                    displayName: user.displayName
                });
            }
            res.json(userList);
        });
        // Users: update
        server.put(config.usersUrl + '/:id', jwt, (req, res) => {
            this.updateUser(req, res);
        });
        // Users: create
        server.post(config.usersUrl, jwt, (req, res) => {
            this.createUser(req, res);
        });
        // Users: delete
        server.delete(config.usersUrl + '/:id', jwt, (req, res) => {
            this.deleteUser(req, res);
        });

        // Login
        server.post(config.loginUrl, (req: Request, res: Response) => {
            let body: IUser = req.body;

            if (!body
                || !body.email
                || !body.password
                || !users.hasOwnProperty(body.email)
                || users[body.email].password !== body.password) {
                // Perhaps we just want to refresh our existing token
                jwt(req, res, () => {
                    if (!req.user || !req.user.sub) {
                        res.sendStatus(403);
                    } else {
                        this.sendToken(res, req.user.sub);
                    }
                });
            } else {
                // Authenticated: generate a JSON web token and return it
                this.sendToken(res, body.email);
            }
        });

        // signup
        server.post(config.signupUrl, jwt, function (req, res) {
            this.createUser(req, res);
            // if (!body.email || !body.password || !body.role || !body.displayName) {
            //     res.sendStatus(403); // equivalent to res.status(403).send('Forbidden')
            // } else {
            //     config.users[body.email] = {
            //         displayName: body.displayName,
            //         password: body.password,
            //         role: body.role
            //     };
            //     AuthenticationService.saveConfig(res);
            // }
        });

        // profile
        server.get(config.profileUrl, jwt, (req: Request, res: Response) => {
            if (!users.hasOwnProperty(req.user.sub)) return res.sendStatus(403); // equivalent to res.status(403).send('Forbidden')
            // console.log(`User profile found: ${JSON.stringify(req.user)}`);
            let user = users[req.user.sub];
            res.json({
                user: {
                    displayName: user.displayName,
                    email: req.user.sub,
                    role: user.role
                }
            });
        });

        // update password and/or displayName
        server.put(config.profileUrl, jwt, (req: Request, res: Response) => {
            if (!users.hasOwnProperty(req.user.sub)) return res.sendStatus(403); // equivalent to res.status(403).send('Forbidden')
            let body: IUser = req.body;
            let user = users[req.user.sub];
            // Update password?
            if (body.newPassword && body.password && body.password === user.password) user.password = body.newPassword;
            if (body.displayName) user.displayName = body.displayName;
            AuthenticationService.saveUserConfig(res);
        });
    }

    /** Create a new user */
    private static createUser(req: Request, res: Response) {
        if (!req.user || req.user.role !== 'admin') return res.send(403);
        let newUser: IUser = req.body;
        if (!newUser.email || !newUser.password || !newUser.role || !newUser.displayName) {
            res.sendStatus(403); // equivalent to res.status(403).send('Forbidden')
        } else {
            users[newUser.email] = {
                displayName: newUser.displayName,
                password:    newUser.password,
                role:        newUser.role
            };
            AuthenticationService.saveUserConfig(res);
        }
    }

    /** Delete an existing user */
    private static deleteUser(req: Request, res: Response) {
        if (!req.user || req.user.role !== 'admin') return res.send(403);
        let id = req.params['id'];
        if (!id || !users.hasOwnProperty(id)) {
            res.sendStatus(403); // equivalent to res.status(403).send('Forbidden')
        } else {
            delete users[id];
            AuthenticationService.saveUserConfig(res);
        }
    }

    /** Update an existing user */
    private static updateUser(req: Request, res: Response) {
        if (!req.user || req.user.role !== 'admin') return res.send(403);
        let id = req.params['id'];
        let existingUser: IUser = req.body;
        if (!id || !existingUser.email || !existingUser.role || !existingUser.displayName) {
            res.sendStatus(403); // equivalent to res.status(403).send('Forbidden')
        } else {
            users[id] = {
                displayName: existingUser.displayName,
                role:        existingUser.role
            };
            AuthenticationService.saveUserConfig(res);
        }
    }

    private static sendToken(res: Response, sub: string) {
        let user = users[sub];
        if (!user) {
            res.sendStatus(403);
            return;
        }
        let token = jsonwebtoken.sign({
            role: user.role,
            displayName: user.displayName,
        }, config.secret, {
                // expressed in seconds or a string describing a time span rauchg/ms. Eg: 60, "2 days", "10h", "7d"
                expiresIn: '7 days',
                subject: sub
            });
        console.log('TOKEN: ' + token);
        res.json({
            token: token,
            refresh_token: token,
            user: {
                displayName: user.displayName,
                email: user.email,
                role: user.role
            }
        });
    }

    private static saveUserConfig(res: Response) {
        fs.writeFile(path.join(__dirname, 'users.json'), JSON.stringify(users, null, 4), (err) => {
            if (err) {
                console.error(err.message);
                res && res.sendStatus(500); // equivalent to res.status(500).send('Internal Server Error')
            } else {
                res && res.sendStatus(200); // equivalent to res.status(200).send('OK')
            }
        });
    }
}

function isSubPathOf(path: string, req: Request) {
    return req.originalUrl.indexOf(path) >= 0;
}

/** 
 * Authorization service: intercept all PUT, POST, GET and DELETE requests. 
 * Only pass through those that you allow, based on the req.user.role as specified by the JWT.
 * 
 * NOTE: The config URLs (profileUrl, signupUrl, loginUrl) are already protected.
 */
export function authorize(req: Request, res: Response, next: Function) {
    if (!config.authorizations.hasOwnProperty(req.method)) return res.sendStatus(403);
    var routes = config.authorizations[req.method];
    var url = req.originalUrl;
    for (var route of routes) {
        // does the route match?
        let routeFound = false;
        route.routes.some(r => {
            if (url.indexOf(r) < 0) return false;
            routeFound = true;
            return true;
        });
        if (!routeFound) continue;
        // route found, are there roles specified which we need to authenticate
        if (!route.roles) return next();
        // authentication required
        jwt(req, res, (err?) => {
            if (err) return res.sendStatus(403);
            if (route.roles.indexOf(req.user.role) >= 0) return next();
            return res.sendStatus(403);
        });
        return;
    }
    return res.sendStatus(403);
}

// https://jsfiddle.net/Guffa/DDn6W/
// function randomPassword(length) {
//     var chars = "abcdefghijklmnopqrstuvwxyz!@#$%^&*()-+<>ABCDEFGHIJKLMNOP1234567890";
//     var pass = "";
//     for (var x = 0; x < length; x++) {
//         var i = Math.floor(Math.random() * chars.length);
//         pass += chars.charAt(i);
//     }
//     return pass;
// }
