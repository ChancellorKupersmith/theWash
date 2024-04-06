package main
import (
  "fmt"
  "github.com/gin-gonic/gin"
)

func main() {
	router := gin.Default()
	router.Static("/", "../client/dist")

	fmt.Println("Listening on http://localhost:8080")
	router.Run(":8080")
}

