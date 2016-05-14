import {Request, Response, Express} from "express";

import fs = require('fs');
import path = require('path');
import express = require('express');
import jsonwebtoken = require('jsonwebtoken');
import jwt = require('express-jwt');

var config: IConfig = require('./config');

export interface IUser {
    email?: string;
    displayName?: string;
    password: string;
    role: string;
}
export interface IConfig {
    loginUrl: string;
    signupUrl: string;
    profileUrl: string;
    port: number;
    secret: string;
    apps: {
        [key: string]: {
            users: {
                [email: string]: IUser
            },
            folders: {
                path: string;
                create: string[];
                read: string[];
                update: string[];
                delete: string[];
            }[]
        }
    }
}

var server: Express = express();
var favicon = require('serve-favicon');
var bodyParser = require('body-parser');
var httpServer = require('http').Server(server);

// all environments 
server.set('port', config.port || 6543);
server.use(favicon(path.join(__dirname, '/favicon.ico')));
//increased limit size, see: http://stackoverflow.com/questions/19917401/node-js-express-request-entity-too-large
server.use(bodyParser.json({ limit: '25mb' })); // support json encoded bodies
server.use(bodyParser.urlencoded({ limit: '25mb', extended: true })); // support encoded bodies

// CORRS: see http://stackoverflow.com/a/25148861/319711
server.use(function (req, res, next) {
    res.header('Access-Control-Allow-Origin', 'http://localhost');
    res.header('Access-Control-Allow-Methods', 'GET,POST,UPDATE,DELETE');
    res.header('Access-Control-Allow-Headers', 'X-Requested-With, Content-Type, cache-control');
    // res.header('Access-Control-Max-Age', '3600');
    // res.header('Access-Control-Expose-Headers', 'Location');
    // res.header('cache-control', 'no-store');
    next();
});

server.get('/', (req: Request, res: Response) => {
    res.write('Welcome to our simple file sharing service!');
    res.end();
});

for (var appName in config.apps) {
    if (!config.apps.hasOwnProperty(appName)) continue;
    let app = config.apps[appName];
    registerSignup(appName);
    registerLogin(appName);
    registerProfile(appName);
    app.folders.forEach(f => {
        let pattern = `/api/${appName}/${f.path}`;
        let folder = path.join(__dirname, pattern);
        console.log(`Sharing folder ${folder} at ${pattern}...`);
        registerPath('read', pattern, f.read);
    });
}

httpServer.listen(server.get('port'), () => {
    console.info('Express server listening on port ' + server.get('port'));
});


/** Create a login path for the user */
function registerProfile(appName: string) {
    server.get(config.profileUrl.replace('%s', appName), jwt({ secret: config.secret }), (req: Request, res: Response) => {
        if (config.apps[appName].users.hasOwnProperty(req.user)) {
            console.log(`User profile found: ${req.user}`);
            res.json(config.apps[appName].users[req.user]);
        } else {
            res.sendStatus(403); // equivalent to res.status(403).send('Forbidden')
            res.end();
        }
    });
}


/** Create a login path for the user */
function registerLogin(appName: string) {
    server.post(config.loginUrl.replace('%s', appName), (req: Request, res: Response) => {
        let body: IUser = req.body;
        if (!body.email
            || !body.password
            || !config.apps[appName].users.hasOwnProperty(body.email)
            || config.apps[appName].users[body.email].password !== body.password) {
            res.sendStatus(403); // equivalent to res.status(403).send('Forbidden')
            res.end();
        } else {
            // Authenticated: generate a JSON web token and return it
            let user = config.apps[appName].users[body.email];
            let token = jsonwebtoken.sign({
                role: user.role
            }, config.secret, {
                    // expressed in seconds or a string describing a time span rauchg/ms. Eg: 60, "2 days", "10h", "7d"
                    expiresIn: '7 days',
                    audience: appName,
                    issuer: user.email
                });
            console.log('TOKEN: ' + token);
            res.json({
                token: token,
                user: JSON.stringify(user)
            });
        }
    });
}

/** Create a path to register a user, and generate a JSON web token */
function registerSignup(appName: string) {
    // TODO: Add authN to file path: should only be available to admin users 
    server.post(config.loginUrl.replace('%s', appName), (req: Request, res: Response) => {
        let body: IUser = req.body;
        if (!body.email || !body.password || !body.role) {
            res.sendStatus(403); // equivalent to res.status(403).send('Forbidden')
            res.end();
        } else {
            config.apps[appName].users[body.email] = {
                displayName: body.displayName,
                password: body.password,
                role: body.role
            };
            fs.writeFile('config.json', JSON.stringify(config, null, 4), (err) => {
                if (err) {
                    console.error(err.message);
                    res.sendStatus(500); // equivalent to res.status(500).send('Internal Server Error')
                } else {
                    console.log('Created new user:\n' + JSON.stringify(body, null, 2));
                    res.sendStatus(200); // equivalent to res.status(200).send('OK')
                }
                res.end();
            })
        }
    });
}

/** Register a path, based on the role permissions */
function registerPath(crud: string, pattern: string, roles: string[]) {
    switch (crud) {
        case "create":

            break;
        case "read":
            if (roles[0] === '*') {
                // Allow access to all static files
                server.use(pattern, express.static(path.join(__dirname, pattern)));
            } else {
                server.get(pattern,
                    jwt({ secret: config.secret }),
                    (req: Request, res: Response) => {
                        console.log(`User: ${req.user}`);
                    });
            }
            break;
        case "update":
            break;
        case "delete":
            break;
    }
}