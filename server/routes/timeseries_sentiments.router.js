const express = require('express');
const axios = require('axios');
const router = express.Router();
require('dotenv').config();

router.get('/', (req, res) => {
    console.log( 'in GET /api/timeseries_sentiments', req.query);
        axios.get(`https://api.babbl.dev/v1/timeseries_sentiment?key=${process.env.BABBL_TOKEN}&tickers=${req.query.tickers}&days=${req.query.days}`)
            .then( response => {
                res.send(response.data)
            }).catch( err => {
                console.log( 'error connecting with babbl api /timeseries_sentiments GET');
                res.sendStatus(500);
            })
});

module.exports = router;