const express = require(`express`);
const sqlite3 = require(`sqlite3`);

const searchRouter = express.Router();

const db = new sqlite3.Database( '../database.sqlite');

/*db.get('SELECT * FROM Items WHERE Items.name = "a"', (err, row) => {
    if (row) {
        console.log (row.name)
    }
})*/

searchRouter.get ('/:term', (req, res, next) => {
    const term = req.params.term;
    //console.log(req.params.term);
    db.all('SELECT * FROM Items WHERE Items.name LIKE $term', 
    {$term: `%${term}%`},
    (err, results) => {
        if (err) {
            console.log(err);
            next(err);
        } else if (results) {
            console.log('success');
            res.status(200).json({results: results});
        } else {
            console.log('not found');
            res.sendStatus(404);
        }

    })
});




module.exports = searchRouter;