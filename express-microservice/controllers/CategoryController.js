// controllers/CategoryController.js
const {Pool} = require('pg');
const sequelize = require("../config/database");
const db_pool = require("../config/database");

// Create a new Pool instance to connect to your PostgreSQL database
const pool = db_pool;

const CategoryController = {
    async getAllCategories(req, res) {
        try {
            const client = await pool.connect();
            const result = await client.query('SELECT * FROM categories');
            const categories = result.rows;
            client.release();
            res.json(categories);
        } catch (error) {
            console.error('Error fetching categories:', error);
            res.status(500).json({error: 'Internal Server Error'});
        }
    },

    async createCategory(req, res) {
        try {
            const {categoryName} = req.body;
            const client = await pool.connect();
            const result = await client.query('INSERT INTO categories (categoryName) VALUES ($1) RETURNING *', [categoryName]);
            const newCategory = result.rows[0];
            client.release();
            res.status(201).json(newCategory);
        } catch (error) {
            console.error('Error creating category:', error);
            res.status(500).json({error: 'Internal Server Error'});
        }
    },

    async getCategoryById(req, res) {
        try {
            const {id} = req.params;
            const client = await pool.connect();
            const result = await client.query('SELECT * FROM categories WHERE id = $1', [id]);
            const category = result.rows[0];
            client.release();
            res.json(category);
        } catch (error) {
            console.error('Error fetching category:', error);
            res.status(500).json({error: 'Internal Server Error'});
        }
    },

    async updateCategory(req, res) {
        try {
            const {id} = req.params;
            const {categoryName} = req.body;
            const client = await pool.connect();
            const result = await client.query('UPDATE categories SET categoryName = $1 WHERE id = $2 RETURNING *', [categoryName, id]);
            const updatedCategory = result.rows[0];
            client.release();
            res.json(updatedCategory);
        } catch (error) {
            console.error('Error updating category:', error);
            res.status(500).json({error: 'Internal Server Error'});
        }
    },

    async deleteCategory(req, res) {
        try {
            const {id} = req.params;
            const client = await pool.connect();
            await client.query('DELETE FROM categories WHERE id = $1', [id]);
            client.release();
            res.json({message: 'Category deleted successfully'});
        } catch (error) {
            console.error('Error deleting category:', error);
            res.status(500).json({error: 'Internal Server Error'});
        }
    }
};

module.exports = CategoryController;
