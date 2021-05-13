const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();

/**
 * GET route template
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
 * POST route template
 */
router.post('/', (req, res) => {
  // POST route code here
});

module.exports = router;