import {Request, Response, Router} from 'express';
import * as bodyParser from 'body-parser';
import {authorize, AuthenticationService} from './authorization';
import os = require('os');

var ifaces = os.networkInterfaces();
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
var port = config.port || 3000;
Object.keys(ifaces).forEach(function (ifname) {
  var alias = 0;

  ifaces[ifname].forEach(function (iface) {
    if ('IPv4' !== iface.family || iface.internal !== false) {
      // skip over internal (i.e. 127.0.0.1) and non-ipv4 addresses
      return;
    }

    if (alias >= 1) {
      // this single interface has multiple ipv4 addresses
      console.log(ifname + ':' + alias, iface.address);
    } else {
      // this interface has only one ipv4 adress
      console.log(ifname, iface.address);
      config.server = `http://${iface.address}:${port}`;
    }
    ++alias;
  });
});

server.use(router);
server.listen(port, function () {
    console.log(`JSON Server is running at ${config.server}.`);
});