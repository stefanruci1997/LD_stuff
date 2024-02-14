package main

import "fmt"

func MainMenu() {
	fmt.Println("=== News Portal ===")
	fmt.Println(" Press :\n 1 to login \n 2 to register \n 0 to exit ")
	userInput := GetUserInput()

	switch userInput {
	case "1":
		LoginMenu()
	case "2":
		RegisterMenu()
	default:
		fmt.Println("invalid input try again ;)")
		MainMenu()

	}

}
func EditorMenu(u User) {
	fmt.Println("===", u.Name, " Welcome ti editor Dashboard ===")

}
func ReaderMenu(u User) {
	fmt.Println("===  ", u.Name, " Welcome to reader Dashboard ===")

}

func AdminMenu(u User) {
	fmt.Println("===  ", u.Name, " Welcome to admin Dashboard ===")
}
