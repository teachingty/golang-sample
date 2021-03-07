package main

import (
	"fmt"
	"net/http"

	"github.com/gin-gonic/gin"
)

var currentPostThing *Postthing

func main() {
	//初期化
	currentPostThing = NewPostThing()

	r := gin.Default()
	// getルーティング
	r.GET("/ping", func(c *gin.Context) {
		c.JSON(200, gin.H{
			"message": "pong",
		})
	})
	// postルーティング
	r.POST("/post", posting)

	// 起動
	r.Run(":8088") // 本当はport環境変数で指定した方が良い
}

// Postthing is
type Postthing struct {
	post1 string
	post2 int
}

// NewPostThing is
func NewPostThing() *Postthing {
	postthing := &Postthing{
		post1: "test",
		post2: 1,
	}
	return postthing
}

// post methodを実装(公式参考)
func posting(c *gin.Context) {
	p1 := c.PostForm("post1")
	p2 := c.PostForm("post2")
	message := fmt.Sprintf("%v, %v", p1, p2)
	c.String(http.StatusOK, message)
}
