const express = require('express');
const app = express();
require('dotenv').config();
const cors = require('cors');
const mongoose = require('mongoose');
app.use(cors());
require('./config/db')();

const authRoutes = require('./routes/auth');
app.use(cors());
app.use(express.json());

const serverPort = process.env.PORT || 5000;

app.get('/', (req, res) => {
    res.send('Welcome to the API');
});

app.use('/api/auth', authRoutes);
app.listen(serverPort, () => {
    console.log(`Server running on port ${serverPort}`);
});