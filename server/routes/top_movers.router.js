const express = require('express');
const axios = require('axios');
const router = express.Router();
require('dotenv').config();

router.get('/', (req, res) => {
    console.log( 'in GET /api/top_movers);
        axios.get(`https://api.babbl.dev/v1/top_movers?key=${process.env.BABBL_TOKEN}`)
            .then( response => {
                res.send(response.data)
            }).catch( err => {
                console.log( 'error connecting with babbl api /top_movers GET');
                res.sendStatus(500);
            })
});

module.exports = router;