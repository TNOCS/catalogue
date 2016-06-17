import {Request, Response, Router} from 'express';
import * as bodyParser from 'body-parser';
import {authorize, AuthenticationService} from './authorization';

var jsonServer = require('json-server');
var server = jsonServer.create();
var router = jsonServer.router('../data/database.json');
var middlewares: ((req, res, next) => void)[] = jsonServer.defaults();
var config = require('./config');

middlewares.push(authorize);
server.use(middlewares);
server.use(bodyParser.json({ limit: '50mb' }));
server.use(bodyParser.urlencoded({ extended: true, limit: '50mb' }));

AuthenticationService.registerRoutes(server);

// Add custom routes before JSON Server router
// server.get('/echo', function (req, res) {
//   res.jsonp(req.query)
// })

// server.use(function (req, res, next) {
//   if (req.method === 'POST') {
//     req.body.createdAt = Date.now()
//   }
//   // Continue to JSON Server router
//   next()
// })

server.use(router);
var port = config.port || 3000;
server.listen(port, function () {
    require('dns').lookup(require('os').hostname(), function (err, add, fam) {
        config.server = `http://${add}:${port}`;
        console.log(`JSON Server is running at ${config.server}.`);
    });
});