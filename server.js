const express = require("express")
const cors = require("cors")
require('dotenv').config();
const connectDB = require('./config/db');

const app = express()
const routes = require('./routes')
const db = process.env.DATABASE_URI;
const PORT = process.env.PORT || 3000;



connectDB(db);

app.use(cors())

app.options("*", (req, res, next) => {
    res.header('Access-Control-Allow-Origin', "*");
    res.header('Access-Control-Allow-Methods', "GET,PUT,POST,OPTIONS");
    res.header('Access-Control-Allow-Headers', "Authorization, Content-Length, X-Requested-With");
    res.send(200);
});

app.use(express.json());

app.use(express.urlencoded({ extended: false }));

app.use((req, res, next) => {
    console.log(`${req.method} ${req.path} - ${req.ip}`);
    next();
});

app.use(express.static('public'));
app.use(express.static('css'));

app.get('/', (req, res) => {
    res.sendFile(__dirname + "/public/index.html");
})

app.use(routes)

app.listen(PORT, () => console.log(`Ring-Ring-Ring Click: Listening on ${PORT}`));

module.exports = app
console.log('\n*** DEBUGGING ***\n')