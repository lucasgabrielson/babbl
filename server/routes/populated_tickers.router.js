const express = require('express');
const axios = require('axios');
const router = express.Router();
require('dotenv').config();

/**
 * GET route template
 * Returns an object with a data array of tickers w/ corresponding mentions
 * and an meta object with an all_tickers array with all available tickers
 * {
 *  "data": [
 *      {
 *       "mentions": 124,
 *      "ticker": "PLTR"
 *      },
 *     {
 *      "mentions": 1557,
 *      "ticker": "AAPL"
 *      },
 *      {
 *      "mentions": 40,
 *      "ticker": "SNDL"
 *      },
 *      ...
 *  ],
 *  "meta": {
 *      "all_tickers": [
 *      "PLTR",
 *      "AAPL",
 *      "SNDL",
 *      ...
 *      ]
 *  }
 *  }
 */

router.get('/', (req, res) => {
    console.log( 'in GET /api/populated_tickers');
        axios.get(`https://api.babbl.dev/v1/populated_tickers?key=${process.env.BABBL_TOKEN}`)
            .then( response => {
                res.send(response.data)
            }).catch( err => {
                console.log( 'erroing connecting with babbl api /populated_tickers GET');
                res.sendStatus(500);
            })
});

module.exports = router;