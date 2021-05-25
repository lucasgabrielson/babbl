const express = require('express');
const axios = require('axios');
const router = express.Router();
require('dotenv').config();

/**
[
    {
        "close": 124.69,
        "high": 124.915,
        "low": 122.86,
        "open": 123.16,
        "symbol": "AAPL",
        "volume": 92611989,
        "id": "HISTORICAL_PRICES",
        "key": "AAPL",
        "subkey": "",
        "date": "2021-05-19",
        "updated": 1621471681000,
        "changeOverTime": 0,
        "marketChangeOverTime": 0,
        "uOpen": 123.16,
        "uClose": 124.69,
        "uHigh": 124.915,
        "uLow": 122.86,
        "uVolume": 92611989,
        "fOpen": 123.16,
        "fClose": 124.69,
        "fHigh": 124.915,
        "fLow": 122.86,
        "fVolume": 92611989,
        "label": "May 19, 21",
        "change": 0,
        "changePercent": 0
    },
    {
        "close": 127.31,
        "high": 127.72,
        "low": 125.1,
        "open": 125.23,
        "symbol": "AAPL",
        "volume": 76857123,
        "id": "HISTORICAL_PRICES",
        "key": "AAPL",
        "subkey": "",
        "date": "2021-05-20",
        "updated": 1621558085000,
        "changeOverTime": 0.021012110032881583,
        "marketChangeOverTime": 0.021012110032881583,
        "uOpen": 125.23,
        "uClose": 127.31,
        "uHigh": 127.72,
        "uLow": 125.1,
        "uVolume": 76857123,
        "fOpen": 125.23,
        "fClose": 127.31,
        "fHigh": 127.72,
        "fLow": 125.1,
        "fVolume": 76857123,
        "label": "May 20, 21",
        "change": 2.6200000000000045,
        "changePercent": 0.021
    },
    ...
]
 */

router.get('/', (req, res) => {
    console.log( 'in GET /api/timeseries_sentiments', req.query);
        axios.get(`https://cloud.iexapis.com/stable/stock/${req.query.ticker}/chart/${req.query.days}/?token=${process.env.IEX_CLOUD_API_TOKEN}`)
            .then( response => {
                res.send(response.data)
            }).catch( err => {
                console.log( 'error connecting with iexcloud api historical prices GET');
                res.sendStatus(500);
            })
});



module.exports = router;