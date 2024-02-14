const express = require('express');
const bodyParser = require('body-parser');
const { Pool } = require('pg');

const app = express();
const categoryRoutes = require('./routes/categoryRoutes');
const articleRoutes = require('./routes/articleRoutes');
const ratingRoutes = require('./routes/ratingRoutes');
const userRoutes = require('./routes/userRoutes');
const db_pool = require("./config/database");

app.use(bodyParser.json());

// Database connection configuration
const pool = db_pool;

// Middleware to add database pool to request object
app.use((req, res, next) => {
    req.pool = pool;
    next();
});

app.use('/categories', categoryRoutes);
app.use('/articles', articleRoutes);
app.use('/ratings', ratingRoutes);
app.use('/users', userRoutes);

// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
