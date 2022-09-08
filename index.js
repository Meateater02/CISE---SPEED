const express = require('express');
const connectDB = require('./config/db');
var cors = require('cors');

const app = express();

// Connect Database
connectDB();

// cors
app.use(cors({ origin: true, credentials: true }));

app.get('/', (req, res) => res.send('Welcome to SPEED!'));

const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`Server running on port ${port}`));