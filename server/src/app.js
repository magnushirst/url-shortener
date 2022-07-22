const express = require("express");
const apiRouter = require("./api/router");
const app = express();

app.all('*', function(req, res, next)
{
    res.contentType('application/json');
    next();
});

app.get('/', (req, res) => {
    res.status(200).send({status: 'OK'});
});

app.use('/api', apiRouter);

module.exports = app;