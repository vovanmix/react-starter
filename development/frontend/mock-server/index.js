var apiPath = '../../swagger.yaml';
var Swagmock = require('swagmock');
var mockgen = Swagmock(apiPath);

// mockgen.responses({
//     path: '/pet/findByStatus',
//     operation: 'get',
//     response: 200
// }, function (error, mock) {
//     console.log(mock);
// });
var express = require('express');
var app = express();

app.all('/*', function (req, res, next) {
    console.log(req.url);
    console.log(req.method);
    mockgen.responses({
        path: req.url,
        operation: req.method.toLowerCase(),
        response: 200
    }, function (error, mock) {
        console.log(mock);
        res.send(mock.responses);
    });
});

app.listen(3001);
