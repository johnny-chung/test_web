const express = require ('express');
const apiRouter = express.Router();

const searchRouter = require ('./searchRouter');
const subCatRouter = require ('./subCatRouter');
const subCat2Router = require ('./subCat2Router');

apiRouter.use('/search', searchRouter);
apiRouter.use('/sc', subCatRouter);
apiRouter.use('/sc2', subCat2Router);


module.exports = apiRouter;