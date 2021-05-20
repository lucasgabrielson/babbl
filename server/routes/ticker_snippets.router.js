const express = require('express');
const axios = require('axios');
const router = express.Router();
require('dotenv').config();

/**
 * Returns an object with ticker properties containing snippet arrays
 * {
 *  "AAPL": {
 *      "snippet_count": 2,
 *      "snippets": [
 *      {
 *          "optimistic": 1.0,
 *          "pessimistic": 0.0,
 *          "reactive": 1.0,
 *          "speculative": 0.0,
 *          "text": "The iPhone app for BitMart, a cryptocurrency exchange associated with quick listing of meme coins such as Shiba Inu (SHIB) and SafeMoon (SAFEMOON), gained ground on Apple Inc\u2019s (NASDAQ:AAPL) App Store",
 *          "tick": "AAPL",
 *          "timestamp": "2021-05-12",
 *          "title": "Rich people ditched NYC for these random cities | New York Post"
 *      },
 *      {
 *          "optimistic": 0.0,
 *          "pessimistic": 1.0,
 *          "reactive": 1.0,
 *          "speculative": 0.0,
 *          "text": "Price Action: Apple shares closed nearly 0.7% lower at $125.91 in Tuesday\u2019s regular trading and fell 0.15% in the after-hours session.",
 *          "tick": "AAPL",
 *          "timestamp": "2021-05-12",
 *          "title": "Is Apple Working On A Nintendo Switch Clone? | Benzinga"
 *      }
 *      ]
 *  },
 *  "PTON": {
 *      "snippet_count": 0,
 *      "snippets": []
 *  }
 *  }
 */

router.get('/', (req, res) => {
    console.log( 'in GET /api/ticker_snippets');
        axios.get(`https://api.babbl.dev/v1/${process.env.BABBL_TOKEN}&tickers=${req.query.tickers}&max=${req.query.max}&days=${req.query.days}`)
            .then( response => {
                res.send(response.data)
            }).catch( err => {
                console.log( 'erroing connecting with babbl api /ticker_snippets GET');
                res.sendStatus(500);
            })
});

module.exports = router;