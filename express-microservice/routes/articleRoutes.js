const express = require('express');
const router = express.Router();
const ArticleController = require('../controllers/ArticleController');

// Define routes for articles
router.get('/', ArticleController.getAllArticles);
router.post('/', ArticleController.createArticle);
router.get('/:id', ArticleController.getArticleById);
router.put('/:id', ArticleController.updateArticle);
router.delete('/:id', ArticleController.deleteArticle);

module.exports = router;
