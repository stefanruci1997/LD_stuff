package main

import (
	"fmt"
	_ "time"
)

func main() {
	// Initialize the database connection
	db = InitializePostgresDD()
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

	//MigrateTables()
	//addDummyData()
	MainMenu()

}
