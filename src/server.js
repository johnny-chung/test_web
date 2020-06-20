const express = require ('express');
const bodyParser = require ('body-parser');
const cors = require ('cors');
const morgan = require ('morgan');
const errorhandler = require ('errorhandler');

const PORT = process.env.PORT || 3000;

const app = express();
const apiRouter = require('./api/api');

app.use(bodyParser.json());
app.use(cors());
app.use(morgan('dev'));

app.use('/api', apiRouter);

app.use(errorhandler);

app.listen(PORT, () => {
    console.log(`listening to port ${PORT}`);
})