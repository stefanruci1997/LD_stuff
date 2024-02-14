class Article {
    constructor(title, subTitle, content, categoryId, userId) {
        this.title = title;
        this.subTitle = subTitle;
        this.content = content;
        this.categoryId = catdoegoryId;
        this.userId = userId;
        this.createdAt = new Date();
        this.deletedAt = null;
    }
}

module.exports = Article;
