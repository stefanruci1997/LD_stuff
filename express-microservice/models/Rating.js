// models/Rating.js
class Rating {
    constructor(articleId, userId, rating) {
        this.articleId = articleId;
        this.userId = userId;
        this.rating = rating;
        this.createdAt = new Date();
        this.deletedAt = null;
    }
}

module.exports = Rating;
