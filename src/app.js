const express = require('express');
const path = require('path');
const indexRoutes = require('./routes/indexRoutes');

const app = express();

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Serve static files from public directory
app.use(express.static(path.join(__dirname, '../public')));

// Routes
app.use('/', indexRoutes);

module.exports = app;