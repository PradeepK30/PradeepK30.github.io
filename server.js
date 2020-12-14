const express = require('express');
const http = require('http');
const path = require('path');
var httpProxy = require('http-proxy');

const app = express();

const port = process.env.PORT || 4200;

app.use(express.static(__dirname + '/dist/my-first-app'));

app.get('/*', (req, res) => res.sendFile(path.join(__dirname)));

// need to set the path of other application public/dist folder to get the static contents 
app.use(express.static(path.join(__dirname, '../../project2/starter-node-angular-master/public')));
var apiProxy = httpProxy.createProxyServer();

// exit point from angular 9 application.
app.use("/users", function(req, res) {
    apiProxy.web(req, res, { target: 'http://localhost:8080',  changeOrigin: true })
});
app.use("/employee", function(req, res) {
  apiProxy.web(req, res, { target: 'http://localhost:8080',  changeOrigin: true })
});

// entry point from AngularJS to Angular 9 application. 
app.use("/about", function(req, res) {
  apiProxy.web(req, res, { target: 'http://localhost:4200',  changeOrigin: true })
});
app.use("/transaction", function(req, res) {
  apiProxy.web(req, res, { target: 'http://localhost:4200',  changeOrigin: true })
});


// below are the static file calls route
app.use("/js/controllers/*.js", function(req, res) {
  apiProxy.web(req, res, { target: 'http://localhost:8080',  changeOrigin: true })
});
app.use("/libs/bootstrap/dist/css/bootstrap.min.css", function(req, res) {
  apiProxy.web(req, res, { target: 'http://localhost:8080',  changeOrigin: true })
});
app.use("css/style.css", function(req, res) {
  apiProxy.web(req, res, { target: 'http://localhost:8080',  changeOrigin: true })
});
app.use("/libs/angular/angular.min.js", function(req, res) {
  apiProxy.web(req, res, { target: 'http://localhost:8080',  changeOrigin: true })
});
app.use("/libs/angular-route/angular-route.min.js", function(req, res) {
  apiProxy.web(req, res, { target: 'http://localhost:8080',  changeOrigin: true })
});

app.use("/js/services/*.js", function(req, res) {
  apiProxy.web(req, res, { target: 'http://localhost:8080',  changeOrigin: true })
});

app.use("/js/appRoutes.js", function(req, res) {
  apiProxy.web(req, res, { target: 'http://localhost:8080',  changeOrigin: true })
});
app.use("/js/app.js", function(req, res) {
  apiProxy.web(req, res, { target: 'http://localhost:8080',  changeOrigin: true })
});

  
// restream parsed body before proxying
apiProxy.on('proxyReq', function(proxyReq, req, res, options) {
  if (req.body) {
      let bodyData = JSON.stringify(req.body);
      // incase if content-type is application/x-www-form-urlencoded -> we need to change to application/json
      proxyReq.setHeader('Content-Type','application/json');
      proxyReq.setHeader('Content-Length', Buffer.byteLength(bodyData));
      // stream the content
      proxyReq.write(bodyData);
  }
});

// configuration ===========================================
//const { createProxyMiddleware } = require('http-proxy-middleware');
// config files
//var db = require('./config/db');
// const options = {
//     target: 'http://localhost:8080', // target host
//     changeOrigin: true, // needed for virtual hosted sites
//     ws: true, // proxy websockets
//     pathRewrite: {
//       '^/api/old-path': '/api/new-path', // rewrite path
//       '^/api/remove/path': '/path', // remove base path
//     },
//     router: {
//         // when request.headers.host == 'dev.localhost:3000',
//         // override target 'http://www.example.org' to 'http://localhost:8000'
//         //'dev.localhost:3000': 'http://localhost:8000',

//         'http://localhost:4200/users' : 'http://localhost:8080/users'
//       },
//     };




const server = http.createServer(app);

server.listen(port, () => console.log(`App running on: http://localhost:${port}`));