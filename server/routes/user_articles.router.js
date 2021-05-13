const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();

/**
 * GET http://localhost:300/api/user_articles/1
 * Returns an array of article objects:
 * {
 *  "id" : 1
 *  "user_id" : 2
 *	"slug" : insert api slug / endpoint here
 *	"ticker" : 'amzn'
 * }
 */
router.get('/:id', (req, res) => {
    console.log( 'in api/user_articles GET' );
    let sqlText = `SELECT * FROM articles WHERE user_id = $1`;
        pool.query(sqlText, [req.params.id])
            .then( results => {
                res.send(results.rows);
            }).catch( err => {
                console.log( err );
                res.sendStatus(500);
            })    
});

/**
 * POST http://localhost:300/api/user_articles/1
 * Posts an article object:
 * {
 *  "id" : 1
 *  "user_id" : 2
 *	"slug" : insert api slug / endpoint here
 *	"ticker" : 'amzn'
 * }
 */
router.post('/:id', (req, res) => {
    console.log( 'in api/user_articles POST' );
    let sqlText = `INSERT INTO articles (user_id, slug, ticker) VALUES ($1, $2, $3)`;
        pool.query(sqlText, [req.query.id, req.query.slug, req.query.ticker])
            .then( results => {
                res.sendStatus(201);
            }).catch( err => {
                console.log( err );
                res.sendStatus(500);
            })    
});

module.exports = router;