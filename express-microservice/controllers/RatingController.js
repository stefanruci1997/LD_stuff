// controllers/RatingController.js
const {Pool} = require('pg');
const sequelize = require("../config/database");
const db_pool = require("../config/database");

// Create a new Pool instance to connect to your PostgreSQL database
const pool = db_pool;


const RatingController = {
    async getAllRatings(req, res) {
        try {
            const client = await pool.connect();
            const result = await client.query('SELECT * FROM ratings');
            const ratings = result.rows;
            client.release();
            res.json(ratings);
        } catch (error) {
            console.error('Error fetching ratings:', error);
            res.status(500).json({error: 'Internal Server Error'});
        }
    },

    async createRating(req, res) {
        try {
            const {articleId, userId, rating} = req.body;
            const client = await pool.connect();
            const result = await client.query('INSERT INTO ratings (articleId, userId, rating) VALUES ($1, $2, $3) RETURNING *', [articleId, userId, rating]);
            const newRating = result.rows[0];
            client.release();
            res.status(201).json(newRating);
        } catch (error) {
            console.error('Error creating rating:', error);
            res.status(500).json({error: 'Internal Server Error'});
        }
    },

    async getRatingById(req, res) {
        try {
            const {id} = req.params;
            const client = await pool.connect();
            const result = await client.query('SELECT * FROM ratings WHERE id = $1', [id]);
            const rating = result.rows[0];
            client.release();
            res.json(rating);
        } catch (error) {
            console.error('Error fetching rating:', error);
            res.status(500).json({error: 'Internal Server Error'});
        }
    },

    async updateRating(req, res) {
        try {
            const {id} = req.params;
            const {articleId, userId, rating} = req.body;
            const client = await pool.connect();
            const result = await client.query('UPDATE ratings SET articleId = $1, userId = $2, rating = $3 WHERE id = $4 RETURNING *', [articleId, userId, rating, id]);
            const updatedRating = result.rows[0];
            client.release();
            res.json(updatedRating);
        } catch (error) {
            console.error('Error updating rating:', error);
            res.status(500).json({error: 'Internal Server Error'});
        }
    },

    async deleteRating(req, res) {
        try {
            const {id} = req.params;
            const client = await pool.connect();
            await client.query('DELETE FROM ratings WHERE id = $1', [id]);
            client.release();
            res.json({message: 'Rating deleted successfully'});
        } catch (error) {
            console.error('Error deleting rating:', error);
            res.status(500).json({error: 'Internal Server Error'});
        }
    }
};

module.exports = RatingController;
