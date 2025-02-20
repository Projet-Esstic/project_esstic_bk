const express = require('express')
const mongoose = require('mongoose')
const bodyParser = require('body-parser')
const cors = require('cors')
const process = require('process');
require('dotenv').config();
const candidateRouter = require('./src/routes/candidateRouter'); // Adjust the path as necessary

const cwd = process.cwd();

var app = express();

const allowedOrigins = [
    'http://localhost:3000', 'http://172.20.10.4:3000',
];

// CORS options
const corsOptions = {
    origin: function (origin, callback) {
        if (!origin || allowedOrigins.indexOf(origin) !== -1) {
            callback(null, true);
        } else {
            callback(new Error('Not allowed by CORS'));
        }
    },
    methods: ["GET", "POST", "DELETE", "PATCH", "PUT"]
};
app.use(cors(corsOptions));
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

let url = process.env.MONGODB_URL

mongoose.connect(url)
    .then((con) => {
        console.log("Connected to the db")
    }
    )
    .catch(err => { console.log(err) })


app.get("/", (req, res) => {
    return res.send("Welcome to Esstic Project Backend")
})

app.use('/api/candidats', candidateRouter);

app.get("*", (req, res) => {
    return res.send("Not found")
})


let server = app.listen(5000, async () => {
    console.log("Server running on port 5000");
})
