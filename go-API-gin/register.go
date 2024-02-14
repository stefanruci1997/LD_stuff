package main

import (
	"fmt"
	"regexp"
)

func RegisterMenu() {
	var user User
	fmt.Println("=== Register Menu ===")
	fmt.Println("username : ")
	user.Username = GetUserInput()
	fmt.Println("name : ")
	user.Name = GetUserInput()
	fmt.Println("surname : ")
	user.Surname = GetUserInput()
	fmt.Println("email : ")
	user.Email = GetUserInput()
	fmt.Println("password : ")
	user.Password = GetUserInput()
	user.UserType = "reader"

	// Validate email format
	if !IsValidEmail(user.Email) {
		fmt.Println("Invalid email format. Please enter a valid email. Try again")
		RegisterMenu()
	}
	// Create the user in the database
	err := AddUser(user)
	if err != nil {
		fmt.Println("Error creating user:", err)
		LoginMenu()
	}
	fmt.Println("User registered successfully!")
	ReaderMenu(user)

}

func IsValidEmail(email string) bool {
	// Use a simple regular expression to check the email format
	emailPattern := `^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$`
	match, _ := regexp.MatchString(emailPattern, email)
	return match
}
