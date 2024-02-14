// controllers/UserController.js
const axios = require('axios');

const UserController = {
    async getAllUsers(req, res) {
        try {
            const response = await axios.get('http://localhost:8080/users');
            res.json(response.data);
        } catch (error) {
            console.error('Error fetching users:', error);
            res.status(500).json({ error: 'Internal Server Error' });
        }
    },

    async createUser(req, res) {
        try {
            const response = await axios.post('http://localhost:8080/users', req.body);
            res.status(201).json(response.data);
        } catch (error) {
            console.error('Error creating user:', error);
            res.status(500).json({ error: 'Internal Server Error' });
        }
    },

    async getUserById(req, res) {
        try {
            const { id } = req.params;
            const response = await axios.get(`http://localhost:8080/users/${id}`);
            res.json(response.data);
        } catch (error) {
            console.error('Error fetching user:', error);
            res.status(500).json({ error: 'Internal Server Error' });
        }
    },

    async updateUser(req, res) {
        try {
            const { id } = req.params;
            const response = await axios.put(`http://localhost:8080/users/${id}`, req.body);
            res.json(response.data);
        } catch (error) {
            console.error('Error updating user:', error);
            res.status(500).json({ error: 'Internal Server Error' });
        }
    },

    async deleteUser(req, res) {
        try {
            const { id } = req.params;
            const response = await axios.delete(`http://localhost:8080/users/${id}`);
            res.json(response.data);
        } catch (error) {
            console.error('Error deleting user:', error);
            res.status(500).json({ error: 'Internal Server Error' });
        }
    }
};

module.exports = UserController;
