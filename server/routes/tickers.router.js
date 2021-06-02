const express = require('express');
const axios = require('axios');
const router = express.Router();
require('dotenv').config();

/**
 * GET REQUEST 
 * https://cloud.iexapis.com/stable/stock/AAPL/intraday-prices/?token=<your_token>
    [
        {
            "date": "2021-06-02",
            "minute": "09:30",
            "label": "09:30 AM",
            "high": 124.58,
            "low": 124.11,
            "open": 124.29,
            "close": 124.51,
            "average": 124.273,
            "volume": 23695,
            "notional": 2944653.425,
            "numberOfTrades": 264
        },
        {
            "date": "2021-06-02",
            "minute": "09:31",
            "label": "09:31 AM",
            "high": 124.48,
            "low": 124.22,
            "open": 124.48,
            "close": 124.4,
            "average": 124.314,
            "volume": 11215,
            "notional": 1394180.58,
            "numberOfTrades": 75
        },
        ...
    ]
 */
router.get('/:ticker', (req, res) => {
    console.log( 'in GET /api/tickers');
        axios.get(`https://cloud.iexapis.com/stable/stock/${req.params.ticker}/intraday-prices/?token=${process.env.IEX_CLOUD_API_TOKEN}`)
            .then( response => {
                const objectToSend = {
                    ticker_name: req.params.ticker,
                    current_price: response.data[response.data.length - 1].close.toFixed(2),
                    percent_change: ((response.data[response.data.length - 1].close - response.data[0].open ) / response.data[0].open * 100).toFixed(2),
                    points_change: ( response.data[response.data.length - 1].close - response.data[0].open).toFixed(2)
                }
                res.send(objectToSend)
            }).catch( err => {
                console.log( 'erroing connecting with babbl api /tickers GET');
                res.sendStatus(500);
            })
});

module.exports = router;