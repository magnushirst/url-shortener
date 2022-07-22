const express = require('express');

const userRouter = express.Router();

userRouter.route('/v1/codes')
    .get(function (req, res) {
        res.status(200)
            .send([
                {shortCode: 'asdS23', longCode: 'https://google.com'},
                {shortCode: 'hfrdf3', longCode: 'https://bing.com'},
                {shortCode: '3hbtcr', longCode: 'https://gousto.com'},
                {shortCode: '9gjhnf', longCode: 'https://giffgaff.com'},
                {shortCode: 'pbnbd2', longCode: 'https://tesco.com'}
            ]);
    });

userRouter.route('/v1/codes/short/:shortCode')
    .get(function (req, res) {
        res.status(200)
            .send({shortCode: req.params.shortCode, longCode: 'https://tesco.com'});
    });
module.exports = userRouter;