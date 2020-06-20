const express = require ('express');
const sqlite3 = require ('sqlite3');


const subCatRouter = express.Router();

const db = new sqlite3.Database( '../database.sqlite');

subCatRouter.get('/:subCategory', (req, res, next) => {
    const subcat20 = req.params.subCategory;
    //console.log(subcat20);
    const subcat = subcat20.replace("%20", " ");
    //console.log(subcat);
    db.all(`SELECT * FROM Items WHERE Items.subcat = $subcat`, 
    {$subcat: subcat}, (err, results) => {
        if (err) {
            next (err)
        } else {
            res.status(200).json({results: results})
        }

    } )
});

module.exports = subCatRouter;