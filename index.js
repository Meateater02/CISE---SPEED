const express = require('express');
const bodyParser = require('body-parser');
const connectDB = require('./config/db');
var cors = require('cors');

// routes
const articles = require('./routes/api/articles');
const path = require('path');

const app = express();

// Connect Database
connectDB();

// cors
app.use(cors({ origin: true, credentials: true }));

app.use(express.json({ extended: false }));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

//app.get('/', (req, res) => res.send('Welcome to SPEED!'));

//use Routes
app.use('/api/articles', articles);

if(process.env.NODE_ENV === "production") {
    app.use(express.static('frontend/build'));

    app.get('*', (req, res) => {
        res.sendFile(path.join(__dirname, 'frontend', 'build', 'index.html'))
    })
} else {
        app.get('/', (req, res) => {
            res.send('Api running');
        })
    }

const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`Server running on port ${port}`));