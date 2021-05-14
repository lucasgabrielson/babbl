const express = require('express');
const axios = require('axios');
const router = express.Router();
require('dotenv').config();

/**
 * GET route template
 * Returns an object with ticker arrays containing article objects
 * {
 *   "AAPL": [
 *      {
 *      "entities": "AMZN, BBY, CALL, BUY, FB, AAPL",
 *      "optimism": 20.59,
 *      "pessimism": 14.71,
 *      "reactive": 23.53,
 *      "speculative": 52.94,
 *      "timestamp": "2021-05-11",
 *      "title": "Entering Final 'Run into Earnings' Wave... | Benzinga",
 *      "url": "https://cloud.iexapis.com/v1/news/article/a90a65e0-a083-4bae-8d30-57a792af3b0e"
 *      }
 *  ],
 *  "SHOP": [
 *      {
 *      "entities": "JMP, CAP, J&J, O, IRR, SE",
 *      "optimism": 17.5,
 *      "pessimism": 11.5,
 *      "reactive": 55.0,
 *      "speculative": 42.5,
 *      "timestamp": "2021-05-12",
 *      "title": "Facebook's Crypto Project Reboots With Smaller Ambitions | Yahoo Finance",
 *      "url": "https://cloud.iexapis.com/v1/news/article/1d03e363-ffcb-46ec-9710-5c5de3d01714"
 *      }
 *  ]
 *  }
 */

router.get('/', (req, res) => {
    console.log( 'in GET /api/babbl_api_articles');
        axios.get(`https://api.babbl.dev/v1/get_articles?key=${process.env.BABBL_TOKEN}&tickers=${req.query.tickers}`)
            .then( response => {
                res.send(response.data)
            }).catch( err => {
                console.log( 'erroing connecting with babbl api /populated_tickers GET');
                res.sendStatus(500);
            })
});

module.exports = router;