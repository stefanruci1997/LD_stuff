// controllers/ArticleController.js
const {Pool} = require('pg');
const sequelize = require("../config/database");
const db_pool = require("../config/database");

// Create a new Pool instance to connect to your PostgreSQL database
const pool = db_pool;

const ArticleController = {
    async getAllArticles(req, res) {
        try {
            const client = await pool.connect();
            const result = await client.query('SELECT * FROM articles');
            const articles = result.rows;
            client.release();
            res.json(articles);
        } catch (error) {
            console.error('Error fetching articles:', error);
            res.status(500).json({error: 'Internal Server Error'});
        }
    },

    async createArticle(req, res) {
        try {
            const {title, subTitle, content, categoryId, userId} = req.body;
            const client = await pool.connect();
            const result = await client.query('INSERT INTO articles (title, subTitle, content, categoryId, userId) VALUES ($1, $2, $3, $4, $5) RETURNING *', [title, subTitle, content, categoryId, userId]);
            const newArticle = result.rows[0];
            client.release();
            res.status(201).json(newArticle);
        } catch (error) {
            console.error('Error creating article:', error);
            res.status(500).json({error: 'Internal Server Error'});
        }
    },

    async getArticleById(req, res) {
        try {
            const {id} = req.params;
            const client = await pool.connect();
            const result = await client.query('SELECT * FROM articles WHERE id = $1', [id]);
            const article = result.rows[0];
            client.release();
            res.json(article);
        } catch (error) {
            console.error('Error fetching article:', error);
            res.status(500).json({error: 'Internal Server Error'});
        }
    },

    async updateArticle(req, res) {
        try {
            const {id} = req.params;
            const {title, subTitle, content, categoryId, userId} = req.body;
            const client = await pool.connect();
            const result = await client.query('UPDATE articles SET title = $1, subTitle = $2, content = $3, categoryId = $4, userId = $5 WHERE id = $6 RETURNING *', [title, subTitle, content, categoryId, userId, id]);
            const updatedArticle = result.rows[0];
            client.release();
            res.json(updatedArticle);
        } catch (error) {
            console.error('Error updating article:', error);
            res.status(500).json({error: 'Internal Server Error'});
        }
    },

    async deleteArticle(req, res) {
        try {
            const {id} = req.params;
            const client = await pool.connect();
            await client.query('DELETE FROM articles WHERE id = $1', [id]);
            client.release();
            res.json({message: 'Article deleted successfully'});
        } catch (error) {
            console.error('Error deleting article:', error);
            res.status(500).json({error: 'Internal Server Error'});
        }
    }
};

module.exports = ArticleController;
