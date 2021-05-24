const express = require('express');
const axios = require('axios');
const router = express.Router();
require('dotenv').config();

/**
{
    "AAPL": {
        "2021-05-14": 0,
        "2021-05-15": -0.749903099149689,
        "2021-05-16": -0.22834220904939018,
        "2021-05-17": 0.044330445542238646,
        "2021-05-18": 0.02631237527203589,
        "2021-05-19": 0.01358054763052177,
        "2021-05-20": -0.0301378646226155
    }
}
 */

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