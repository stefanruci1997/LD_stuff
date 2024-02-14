package main

import (
	"fmt"
	"gorm.io/gorm"
	"time"
	_ "time"
)

// Define the database connection globally
var db *gorm.DB

func GetDbInstance() *gorm.DB {
	return db
}

// MigrateTables drops existing tables (if they exist) and auto-migrates the database based on models.
func MigrateTables() {
	err := db.Migrator().DropTable(&Rating{}, &Article{}, &Category{}, &User{})
	if err != nil {
		return
	}
	err = db.AutoMigrate(&User{}, &Category{}, &Article{}, &Rating{})
	if err != nil {
		return
	}
}
func AddUser(user User) error {
	return db.Create(&user).Error
}

func AddCategory(category Category) error {
	return db.Create(&category).Error
}

func AddArticle(article Article) error {
	return db.Create(&article).Error
}

func AddRating(rating Rating) error {
	return db.Create(&rating).Error
}

func DeleteUser(userID int) { db.Delete(&User{}, userID) }
func DeleteCategory(ID int) { db.Delete(&Category{}, ID) }
func DeleteArticle(ID int)  { db.Delete(&Article{}, ID) }
func DeleteRating(ID int)   { db.Delete(&Rating{}, ID) }

func UpdateUser(userID int, newUser User) error {
	// Find the user by ID
	var user User
	if err := db.First(&user, userID).Error; err != nil {
		return err
	}

	// Update the user fields
	if err := db.Save(&newUser).Error; err != nil {
		return err
	}

	return nil
}

func UpdateCategory(categoryID uint, updatedCategoryFields map[string]interface{}) error {
	// Find the category by ID
	var category Category
	if err := db.First(&category, categoryID).Error; err != nil {
		return err
	}

	// Update the category fields
	if err := db.Model(&category).Updates(updatedCategoryFields).Error; err != nil {
		return err
	}

	return nil
}

func UpdateArticle(articleID uint, updatedArticleFields map[string]interface{}) error {
	// Find the article by ID
	var article Article
	if err := db.First(&article, articleID).Error; err != nil {
		return err
	}

	// Update the article fields
	if err := db.Model(&article).Updates(updatedArticleFields).Error; err != nil {
		return err
	}

	return nil
}

func updateRating(ratingID uint, updatedRatingFields map[string]interface{}) error {
	// Find the rating by ID
	var rating Rating
	if err := db.First(&rating, ratingID).Error; err != nil {
		return err
	}

	// Update the rating fields
	if err := db.Model(&rating).Updates(updatedRatingFields).Error; err != nil {
		return err
	}

	return nil
}

func RetrieveAll(model interface{}) error { return db.Find(model).Error }

func RetrieveByID(model interface{}, id uint) error { return db.First(model, id).Error }

func RetrieveByField(model interface{}, fieldName string, value interface{}) error {
	return db.Where(fmt.Sprintf("%s = ?", fieldName), value).First(model).Error
}

func addDummyData() {
	var user1 = User{
		Name:      "John1",
		Surname:   "Doe1",
		Username:  "john_doe1",
		Password:  "123",
		Email:     "john.doe@example.com",
		UserType:  "editor",
		CreatedAt: time.Now(),
	}
	var user2 = User{
		Name:      "John2",
		Surname:   "Doe2",
		Username:  "john_doe2",
		Password:  "123",
		Email:     "john.doe@example.com",
		UserType:  "reader",
		CreatedAt: time.Now(),
	}
	var user3 = User{
		Name:      "John3",
		Surname:   "Doe3",
		Username:  "john_doe3",
		Password:  "123",
		Email:     "john.doe3@example.com",
		UserType:  "admin",
		CreatedAt: time.Now(),
	}
	var user4 = User{
		Name:      "John4",
		Surname:   "Doe4",
		Username:  "john_doe4",
		Password:  "123",
		Email:     "john.doe4@example.com",
		UserType:  "editor",
		CreatedAt: time.Now(),
	}

	AddUser(user1)
	AddUser(user2)
	AddUser(user3)
	AddUser(user4)

	var category = Category{
		CategoryName: "Tech",
		CreatedAt:    time.Now(),
	}
	var category1 = Category{
		CategoryName: "Gossip",
		CreatedAt:    time.Now(),
	}
	AddCategory(category)
	AddCategory(category1)
	var article = Article{
		Title:      "Dummy Article0",
		SubTitle:   "This is a dummy article",
		Content:    "This is a dummy article created for testing purposes",
		CategoryID: 1,
		UserID:     1,
		CreatedAt:  time.Now(),
	}
	var article1 = Article{
		Title:      "Dummy Article1",
		SubTitle:   "This is a dummy article",
		Content:    "This is a dummy article created for testing purposes",
		CategoryID: 2,
		UserID:     3,
		CreatedAt:  time.Now(),
	}
	var article2 = Article{
		Title:      "Dummy Article2",
		SubTitle:   "This is a dummy article",
		Content:    "This is a dummy article created for testing purposes",
		CategoryID: 2,
		UserID:     3,
		CreatedAt:  time.Now(),
	}
	var article3 = Article{
		Title:      "Dummy Article3",
		SubTitle:   "This is a dummy article",
		Content:    "This is a dummy article created for testing purposes",
		CategoryID: 2,
		UserID:     1,
		CreatedAt:  time.Now(),
	}
	var article4 = Article{
		Title:      "Dummy Article4",
		SubTitle:   "This is a dummy article",
		Content:    "This is a dummy article created for testing purposes",
		CategoryID: 1,
		UserID:     3,
		CreatedAt:  time.Now(),
	}

	AddArticle(article)
	AddArticle(article1)
	AddArticle(article2)
	AddArticle(article3)
	AddArticle(article4)

	var rating = Rating{
		ArticleID: 1,
		UserID:    3,
		Rating:    4,
		CreatedAt: time.Now(),
	}

	AddRating(rating)

}
