package main

import (
	"fmt"
	"strings"
)

func LoginMenu() {
	fmt.Println("=== Login Menu ===")
	fmt.Print("Enter username: ")
	usernameInput := GetUserInput()

	fmt.Print("Enter password: ")
	passwordInput := GetUserInput()

	// Check login credentials

	isValid, user := IsValidLogin(usernameInput, passwordInput)
	if isValid {
		fmt.Println("Login successful. Welcome, ")
		CheckRole(user)
	} else {
		fmt.Println("Invalid credentials. Login failed.")
		LoginMenu()
	}

}

func CheckRole(u User) {
	if u.UserType == "editor" {
		EditorMenu(u)
	} else if u.UserType == "reader" {
		ReaderMenu(u)
	} else if u.UserType == "admin" {
		AdminMenu(u)
	}
}

// GetUserInput reads user input from the console
func GetUserInput() string {
	var input string
	fmt.Scanln(&input)
	return strings.TrimSpace(input)
}

func IsValidLogin(username, password string) (bool, User) {
	var user User
	err := RetrieveByField(&user, "Username", username)
	if err != nil {
		return false, user
	}
	return username == user.Username && password == user.Password, user
}
