const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const api = require('./routes');

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: false
}));
app.use(cors());

app.use("/api", api);

const server = app.listen(8080, () => {
    console.log('Connected to port  8080')
});