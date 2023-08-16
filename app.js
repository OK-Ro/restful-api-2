const express = require('express');
const app = express();
const cors = require('cors');
app.use(cors());
app.use(express.json());

const moviesRoutes = require('./moviesRoutes');

app.use('/movies', moviesRoutes);

module.exports = app;
