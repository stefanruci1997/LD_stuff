// models/Category.js
class Category {
    constructor(categoryName) {
        this.categoryName = categoryName;
        this.createdAt = new Date();
        this.deletedAt = null;
    }
}

module.exports = Category;
