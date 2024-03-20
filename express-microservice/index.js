const express = require('express');
const sequelize = require('./config/database');
const bodyParser = require('body-parser');
const app = express();
const categoryRoutes = require('./routes/categoryRoutes');
const articleRoutes = require('./routes/articleRoutes');
const ratingRoutes = require('./routes/ratingRoutes');
const userRoutes = require('./routes/userRoutes');



app.use(bodyParser.json());
app.use((error, req, res, next) => {
    console.log(error);
    const status = error.statusCode || 500;
    const message = error.message;
    res.status(status).json({ message: message });
  });

const dbInit = async () => {
    try {
      sequelize.sync();
        console.log("Database connected");
    } catch (error) {
      console.error("Error syncing database:", error);
    }
  };
  
  dbInit();

app.use('/categories', categoryRoutes);
app.use('/articles', articleRoutes);
app.use('/ratings', ratingRoutes);
app.use('/users', userRoutes);

// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});

module.exports = app;
