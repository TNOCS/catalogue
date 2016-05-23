import {Request, Response, Router} from 'express';
import {authorize, AuthenticationService} from './authorization';

var jsonServer = require('json-server');
var server = jsonServer.create();
var router = jsonServer.router('data/database.json');
var middlewares: ((req, res, next) => void)[] = jsonServer.defaults();
var config = require('./config');

middlewares.push(authorize);
server.use(middlewares);

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
  console.log('JSON Server is running at port ' + port);
});