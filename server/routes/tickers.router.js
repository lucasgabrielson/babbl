const express = require('express');
const axios = require('axios');
const router = express.Router();
require('dotenv').config();

router.get('/:ticker', (req, res) => {
    console.log( 'in GET /api/tickers');
        axios.get(`https://cloud.iexapis.com/stable/stock/${req.params.ticker}/intraday-prices/?token=${process.env.IEX_CLOUD_API_TOKEN}`)
            .then( response => {
                res.send(response.data)
            }).catch( err => {
                console.log( 'erroing connecting with babbl api /tickers GET');
                res.sendStatus(500);
            })
});

module.exports = router;