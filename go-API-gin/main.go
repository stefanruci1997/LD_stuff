package main

import (
	"fmt"
	"github.com/gin-gonic/gin"
	_ "time"
)

func init() {
	// Initialize the database connection
	db = InitializePostgresDD()

}

func main() {
	defer func() {
		sqlDB, err := db.DB()
		if err != nil {
			fmt.Println("Failed to get the database connection pool:", err)
			return
		}
		if err := sqlDB.Close(); err != nil {
			fmt.Println("Failed to close the database connection:", err)
		}
	}()

	// Initialize Gin
	r := gin.Default()

	// Define API endpoints
	r.GET("/users", getUsers)
	r.GET("/users/:id", getUser)
	r.POST("/users/create", createUser)
	r.PUT("/users/update/:id", updateUser)
	r.PATCH("/users/update/:id", updateUserWithPatch)
	r.DELETE("/users/delete/:id", deleteUser)

	// Start the server
	fmt.Println("Server is running on port 8080")
	err := r.Run(":8080")
	if err != nil {
		fmt.Println(err.Error())
		return
	}
}
