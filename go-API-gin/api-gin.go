package main

import (
	"github.com/gin-gonic/gin"
	"net/http"
	"strconv"
)

// getUsers retrieves all users
func getUsers(c *gin.Context) {
	var users []User
	err := RetrieveAll(&users)
	if err != nil {
		c.JSON(http.StatusNotFound, err.Error())
		return
	}
	//db.Find(&users)
	c.JSON(200, users)
}
func getUser(c *gin.Context) {
	id, _ := strconv.Atoi(c.Param("id"))
	var user User
	err := RetrieveByID(&user, uint(id))
	if err != nil {
		c.JSON(http.StatusNotFound, err.Error())
		return
	}
	c.JSON(http.StatusOK, user)
}

// createUser creates a new user
func createUser(c *gin.Context) {
	var user User
	err := c.BindJSON(&user)
	if err != nil {
		c.JSON(http.StatusBadRequest, gin.H{"message": "Missing fields  REQ Body cant be bind"})
		return
	}

	err = AddUser(user)
	if err != nil {
		c.JSON(http.StatusInternalServerError, err.Error())
	}
	c.JSON(http.StatusCreated, gin.H{"message": "User created successfully", "user": user})
}

// updateUser updates an existing user
func updateUser(c *gin.Context) {

	id := c.Param("id")

	// Check if user exists
	var user User
	if err := db.First(&user, id).Error; err != nil {
		c.JSON(http.StatusNotFound, gin.H{"error": "User not found"})
		return
	}

	// Bind JSON data to user
	if err := c.BindJSON(&user); err != nil {
		c.JSON(http.StatusBadRequest, gin.H{"error": err.Error()})
		return
	}

	// Save user changes
	if err := db.Save(&user).Error; err != nil {
		c.JSON(http.StatusInternalServerError, gin.H{"error": "Failed to update user"})
		return
	}

	c.JSON(http.StatusOK, gin.H{"message": "User updated successfully", "user": user})
}

func updateUserWithPatch(c *gin.Context) {

	var user User
	if err := c.ShouldBindJSON(&user); err != nil {
		c.JSON(http.StatusBadRequest, gin.H{"error": err.Error()})
		return
	}

	GetDbInstance().First(&user, user.ID)

	if GetDbInstance().Save(&user).Error != nil {
		c.JSON(http.StatusInternalServerError, gin.H{"error": "User can't be updated"})
		return
	}
	c.JSON(200, gin.H{"message": "User updated successfully"})
}

// deleteUser deletes a user
func deleteUser(c *gin.Context) {
	id := c.Param("id")
	var user User
	db.First(&user, id)
	db.Delete(&user)
	c.JSON(200, gin.H{"message": "User deleted successfully"})
}
