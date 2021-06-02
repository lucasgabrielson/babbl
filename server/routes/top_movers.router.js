const express = require('express');
const axios = require('axios');
const router = express.Router();
require('dotenv').config();

/**
 * GET REQUEST 
 * 
    {
        "bottom": [
            {
                "movement": -5.348555969030369,
                "ticker": "OS"
            },
            {
                "movement": -1.935431763588159,
                "ticker": "TSLA"
            },
            {
                "movement": -0.8679037390491624,
                "ticker": "AAPL"
            }
        ],
        "top": [
            {
                "movement": 0.9473887134640504,
                "ticker": "PLTR"
            },
            {
                "movement": 1.3570231839682978,
                "ticker": "SHOP"
            },
            {
                "movement": 3.1799234719896337,
                "ticker": "AMC"
            }
        ]
    }
 */

router.get('/', (req, res) => {
    console.log( 'in GET /api/top_movers');
        axios.get(`https://api.babbl.dev/v1/top_movers?key=${process.env.BABBL_TOKEN}`)
            .then( response => {
                res.send(response.data)
            }).catch( err => {
                console.log( 'error connecting with babbl api /top_movers GET');
                res.sendStatus(500);
            })
});

module.exports = router;