var express = require('express');
var cookieParser = require('cookie-parser');
var jwt = require('jsonwebtoken');
var routes = require('./API/Config/Routes');
var statusCodeMap = require('./API/Config/StatusCodeMap');
var tokenization = require('./custom_modules/tokenization');
var app = express();
var cors = require('cors')
var logger = require('./custom_modules/logger');

app.use(express.json({ limit: '1024mb' }));
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(cors());
var apiRoutes = Object.keys(routes);

port = 4000

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})
app.use((req, res, next) => {
    next()
})

app.get('/', (req, res) => {
    res.send('Hi I am a hello world Server program')
})


for (i = 0; i < apiRoutes.length; i++) {

    if (routes[apiRoutes[i]].allowedMethod.includes('GET')) {
        app.get(apiRoutes[i], async function (req, res, next) {

            try {
                needAuth = routes[req.route.path].auth
                logger.logInfo(req.route.path);
                var token = req.get('Authorization')
                var userId = tokenization.verifyLoginToken(token);
                if (needAuth == true ? userId : true) {
                    let message = {}
                    message.API_USER_ID = userId != 'client' ? userId : undefined;
                    var api = require('./API/Functions/' + routes[req.route.path].controller);
                    api.input(req, message);
                    await api.process(message);
                    let response = {
                        responseBody: {},
                    };
                    api.output(response, message);
                    res.status(statusCodeMap[response.status] ? statusCodeMap[response.status] : 500)
                    res.send(response.responseBody);
                }
                else {
                    res.status(401);

                    res.send({
                        errorMessage: "Invalid token provided."
                    });
                }
            }
            catch (ex) {
                console.log(ex)
                logger.logInfo(ex);
                res.status(500);
                res.send({
                    errorMessage: "Internal Server Error Occured."
                });
            }

        });
    }
    if (routes[apiRoutes[i]].allowedMethod.includes('POST')) {
        app.post(apiRoutes[i], async function (req, res, next) {


            try {
                needAuth = routes[req.route.path].auth

                logger.logInfo(req.route.path);
                var token = req.get('Authorization')

                var userId = tokenization.verifyLoginToken(token);

                if (needAuth == true ? userId : true) {
                    let message = {}
                    message.API_USER_ID = userId != 'client' ? userId : undefined;

                    var api = require('./API/Functions/' + routes[req.route.path].controller);

                    api.input(req, message);

                    await api.process(message);

                    let response = {
                        responseBody: {},
                    };
                    api.output(response, message);
                    res.status(statusCodeMap[response.status] ? statusCodeMap[response.status] : 500)
                    res.send(response.responseBody);
                }
                else {
                    res.status(401);
                    res.send({
                        errorMessage: "Invalid token provided."
                    });
                }
            }
            catch (ex) {
                console.log(ex)
                logger.logInfo(ex);
                res.status(500);
                res.send({
                    errorMessage: "Internal Server Error Occured."
                });
            }
        });
    }
    if (routes[apiRoutes[i]].allowedMethod.includes('DELETE')) {
        app.delete(apiRoutes[i], async function (req, res, next) {
            try {
                needAuth = routes[req.route.path].auth

                logger.logInfo(req.route.path);
                var token = req.get('Authorization')

                var userId = tokenization.verifyLoginToken(token);

                if (needAuth == true ? userId : true) {
                    let message = {}
                    message.API_USER_ID = userId != 'client' ? userId : undefined;

                    var api = require('./API/Functions/' + routes[req.route.path].controller);

                    api.input(req, message);

                    await api.process(message);

                    let response = {
                        responseBody: {},
                    };
                    api.output(response, message);
                    res.status(statusCodeMap[response.status] ? statusCodeMap[response.status] : 500)

                    res.send(response.responseBody);
                }
                else {
                    res.status(401);
                    res.send({
                        errorMessage: "Invalid token provided."
                    });
                }
            }
            catch (ex) {
                console.log(ex);
                logger.logInfo(ex);
                res.status(500);
                res.send({
                    errorMessage: "Internal Server Error Occured."
                });
            }


        });
    }
    if (routes[apiRoutes[i]].allowedMethod.includes('PUT')) {

        app.put(apiRoutes[i], function (req, res, next) {
            try {
                needAuth = routes[req.route.path].auth

                logger.logInfo(req.route.path);
                var token = req.get('Authorization')
                var userId = tokenization.verifyLoginToken(token);
                if (needAuth == true ? userId : true) {
                    let message = {}
                    message.API_USER_ID = userId != 'client' ? userId : undefined;
                    var api = require('./API/Functions/' + routes[req.route.path].controller);
                    api.input(req, message);
                    api.process(message);
                    let response = {
                        responseBody: {},
                    };
                    api.output(response, message);
                    res.status(statusCodeMap[response.status] ? statusCodeMap[response.status] : 500)
                    res.send(response.responseBody);
                }
                else {
                    res.status(401);
                    res.send({
                        errorMessage: "Invalid token provided."
                    });
                }
            }
            catch (ex) {
                logger.logInfo(ex);
                res.status(500);
                res.send({
                    errorMessage: "Internal Server Error Occured."
                });
            }
        });
    }
}

module.exports = app;
