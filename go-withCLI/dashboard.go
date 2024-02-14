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
	DisplayAllArticlesWithUsers()

}

func AdminMenu(u User) {
	fmt.Println("===  ", u.Name, " Welcome to admin Dashboard ===")
}

func DisplayAllArticlesWithUsers() {
	fmt.Println("===  Articles  ===")
	// Now, articleMap contains the combined results
	for _, data := range GetArticlesWithUsers() {
		fmt.Printf("ArticleID: %d, Title: %s, UserID: %d, UserName: %s,UserType: %s\n",
			data.Article.ID, data.Title, data.UserID, data.User.Username, data.UserType)
	}

	DisplayAllJoinsArticlesWithUsers()
}

func DisplayAllJoinsArticlesWithUsers() {

	fmt.Println("===Right JOIN Articles with Users  ===")
	for _, data := range rightJoinArticlesWithUsers() {
		fmt.Printf("ArticleID: %d, Title: %s, UserID: %d, UserName: %s,UserType: %s\n",
			data.Article.ID, data.Title, data.UserID, data.User.Username, data.UserType)
	}

	fmt.Println("===Left JOIN Articles with Users  ===")
	for _, data := range leftJoinArticlesWithUsers() {
		fmt.Printf("ArticleID: %d, Title: %s, UserID: %d, UserName: %s,UserType: %s\n",
			data.Article.ID, data.Title, data.UserID, data.User.Username, data.UserType)
	}

	fmt.Println("===Inner JOIN Articles with Users  ===")
	for _, data := range innerJoinArticlesWithUsers() {
		fmt.Printf("ArticleID: %d, Title: %s, UserID: %d, UserName: %s,UserType: %s\n",
			data.Article.ID, data.Title, data.UserID, data.User.Username, data.UserType)
	}

	fmt.Println("=== Full JOIN Articles with Users  ===")
	for _, data := range GetFullJoinArticlesWithUsers() {
		fmt.Printf("ArticleID: %d, Title: %s, UserID: %d, UserName: %s,UserType: %s\n",
			data.Article.ID, data.Title, data.UserID, data.User.Username, data.UserType)
	}

}
