const ArticleRating = require('../models/Rating');

const createRating = async (articleId, userId, rating) => {
    try {
        const newRating = await ArticleRating.create({
            articleId,
            userId,
            rating
        });
        return newRating;
    } catch (error) {
        console.error('Error creating rating:', error);
        throw new Error('Internal Server Error');
    }
};

const getAllRatings = async () => {
    try {
        const ratings = await ArticleRating.findAll();
        return ratings;
    } catch (error) {
        console.error('Error fetching ratings:', error);
        throw new Error('Internal Server Error');
    }
};

const getRatingById = async (id) => {
    try {
        const rating = await ArticleRating.findByPk(id);
        if (rating) {
            return rating;
        } else {
            throw new Error('Rating not found');
        }
    } catch (error) {
        console.error('Error fetching rating:', error);
        throw new Error('Internal Server Error');
    }
};

const updateRating = async (id, articleId, userId, rating) => {
    try {
        const ratingInstance = await ArticleRating.findByPk(id);
        if (ratingInstance) {
            await ratingInstance.update({
                articleId,
                userId,
                rating
            });
            return ratingInstance;
        } else {
            throw new Error('Rating not found');
        }
    } catch (error) {
        console.error('Error updating rating:', error);
        throw new Error('Internal Server Error');
    }
};

const deleteRating = async (id) => {
    try {
        const rating = await ArticleRating.findByPk(id);
        if (rating) {
            await rating.destroy();
            return { message: 'Rating deleted successfully' };
        } else {
            throw new Error('Rating not found');
        }
    } catch (error) {
        console.error('Error deleting rating:', error);
        throw new Error('Internal Server Error');
    }
};

module.exports = {
    createRating,
    getAllRatings,
    getRatingById,
    updateRating,
    deleteRating,
};
