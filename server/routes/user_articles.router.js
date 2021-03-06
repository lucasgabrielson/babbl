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
 * Accepts req.query from axios:
 * {
 *  "id" : 1
 *	"slug" : insert api slug / endpoint here
 *	"ticker" : 'AMZN'
 * }
 * Posts an article object:
 * {
 *  "id" : 1
 *  "user_id" : 2
 *	"slug" : insert api slug / endpoint here
 *	"ticker" : 'AMZN'
 * }
 */
router.post('/', (req, res) => {
    console.log( 'in api/user_articles POST' );
    let sqlText = `INSERT INTO articles (user_id, date, title, ticker, mentions, score, link) VALUES ($1, $2, $3, $4, $5, $6, $7)`;
        pool.query(sqlText, [req.query.id, req.query.date, req.query.title, req.query.ticker, req.query.mentions, req.query.score, req.query.link])
            .then( results => {
                res.sendStatus(201);
            }).catch( err => {
                console.log( err );
                res.sendStatus(500);
            })    
});

/**
 * DELETE http://localhost:300/api/user_articles/?user_id=1&slug=
 * Accepts req.query from axios:
 * {
 *  "id" : 1
 *	"slug" : insert api slug / endpoint here
 * }
 * Deletes an article object:
 * {
 *  "id" : 1
 *  "user_id" : 2
 *	"slug" : insert api slug / endpoint here
 *	"ticker" : 'AMZN'
 * }
 */

router.delete('/', (req,res) => {
    console.log( 'in api/user_articles DELETE');
    let sqlText =  `DELETE FROM articles WHERE user_id = $1 and slug = $2`
        pool.query(sqlText, [req.query.id, req.query.slug])
            .then( results => {
                res.sendStatus(200)
            }).catch( err => {
                console.log( err );
                res.sendStatus(500);
            })
})

module.exports = router;