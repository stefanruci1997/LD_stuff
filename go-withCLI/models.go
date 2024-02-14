package main

import (
	"gorm.io/gorm"
	"time"
	_ "time"
)

type User struct {
	gorm.Model
	//UserID    uint      `gorm:"primaryKey"`
	Name      string    `gorm:"not null"`
	Surname   string    `gorm:"not null"`
	Username  string    `gorm:"not null"`
	Password  string    `gorm:"not null"`
	Email     string    `gorm:"not null"`
	UserType  string    `gorm:"not null;check:user_type IN ('admin', 'editor', 'reader')"`
	CreatedAt time.Time `gorm:"default:CURRENT_TIMESTAMP"`
	DeletedAt time.Time `gorm:"default:null"`
}

// Category model
type Category struct {
	gorm.Model
	//CategoryID   uint      `gorm:"primaryKey"`
	CategoryName string    `gorm:"not null"`
	CreatedAt    time.Time `gorm:"default:CURRENT_TIMESTAMP"`
	DeletedAt    time.Time `gorm:"default:null"`
}

// Article model
type Article struct {
	gorm.Model
	//ArticleID  uint      `gorm:"primaryKey"`
	Title      string    `gorm:"not null"`
	SubTitle   string    `gorm:"not null"`
	Content    string    `gorm:"not null"`
	CategoryID uint      `gorm:"index"`
	Category   Category  `gorm:"foreignKey:CategoryID"`
	UserID     uint      `gorm:"index"`
	User       User      `gorm:"foreignKey:UserID"`
	CreatedAt  time.Time `gorm:"default:CURRENT_TIMESTAMP"`
	DeletedAt  time.Time `gorm:"default:null"`
}

// Rating model
type Rating struct {
	gorm.Model
	//RatingID  uint      `gorm:"primaryKey"`
	ArticleID uint      `gorm:"not null"`
	Article   Article   `gorm:"foreignKey:ArticleID"`
	UserID    uint      `gorm:"not null"`
	User      User      `gorm:"foreignKey:UserID"`
	Rating    int       `gorm:"not null"`
	CreatedAt time.Time `gorm:"default:CURRENT_TIMESTAMP"`
	DeletedAt time.Time `gorm:"default:null"`
}
