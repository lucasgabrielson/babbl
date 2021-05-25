const express = require('express');
const axios = require('axios');
const router = express.Router();
require('dotenv').config();

/**
[
    {
        "AAPL": [
            {
                "date": "2021-05-20",
                "value": -0.01722869419075184
            },
            {
                "date": "2021-05-19",
                "value": 0.01358054763052177
            },
            {
                "date": "2021-05-24",
                "value": 0.03051937944907694
            },
            {
                "date": "2021-05-23",
                "value": 0.0
            },
            {
                "date": "2021-05-22",
                "value": -0.3695085041063638
            },
            {
                "date": "2021-05-21",
                "value": 0.05606575144129551
            }
        ]
    }
]
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