/**
 * GET http://localhost:300/api/user_articles/1
 * Returns an array of watchlist objects:
 * {
 *  "id" : 1
 *  "user_id" : 2
 *	"ticker" : 'AMZN'
 * }
 */
 router.get('/:id', (req, res) => {
    console.log( 'in api/user_watchlist GET' );
    let sqlText = `SELECT * FROM watchlist WHERE user_id = $1`;
        pool.query(sqlText, [req.params.id])
            .then( results => {
                res.send(results.rows);
            }).catch( err => {
                console.log( err );
                res.sendStatus(500);
            })    
});

/**
 * POST http://localhost:300/api/user_watchlist/1
 * Accepts req.query from axios:
 * {
 *  "id" : 1
 *	"ticker" : 'AMZN'
 * }
 * Posts an watchlist object:
 * {
 *  "id" : 1
 *  "user_id" : 2
 *	"ticker" : 'AMZN'
 * }
 */
router.post('/:id', (req, res) => {
    console.log( 'in api/user_articles POST' );
    let sqlText = `INSERT INTO watchlist (user_id, ticker) VALUES ($1, $2,)`;
        pool.query(sqlText, [req.query.id, req.query.ticker])
            .then( results => {
                res.sendStatus(201);
            }).catch( err => {
                console.log( err );
                res.sendStatus(500);
            })    
});

/**
 * DELETE http://localhost:300/api/user_watchlist/?user_id=1&ticker=AMZN
 * Accepts req.query from axios:
 * {
 *  "id" : 1
 *	"ticker" : AMZN
 * }
 * Deletes an watchlist object:
 * {
 *  "id" : 1
 *  "user_id" : 2
 *	"ticker" : 'AMZN'
 * }
 */

router.delete('/', (req,res) => {
    console.log( 'in api/user_articles DELETE');
    let sqlText =  `DELETE FROM watchlist WHERE user_id = $1 and ticker = $2`
        pool.query(sqlText, [req.query.id, req.query.ticker])
            .then( results => {
                res.sendStatus(200)
            }).catch( err => {
                console.log( err );
                res.sendStatus(500);
            })
})

module.exports = router;