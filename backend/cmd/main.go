package main

import (
	"fmt"
	"log"
	"net/http"
	"os"
	"os/signal"
	"syscall"

	"github.com/calendo/backend/internal/database"
	"github.com/calendo/backend/internal/n8n"
)

func healthCheck(w http.ResponseWriter, r *http.Request) {
	if r.Method != http.MethodGet {
		http.Error(w, "Method not allowed", http.StatusMethodNotAllowed)
		return
	}
	fmt.Fprintf(w, "OK")
}

func main() {
	// Initialize database connection
	dbConfig, err := database.NewConfig()
	if err != nil {
		log.Fatalf("Failed to create database config: %v", err)
	}

	if err := database.Connect(dbConfig); err != nil {
		log.Fatalf("Failed to connect to database: %v", err)
	}
	defer database.Close()

	// Initialize n8n client
	n8nClient, err := n8n.NewClient()
	if err != nil {
		log.Fatalf("Failed to create n8n client: %v", err)
	}
	webhookHandler := n8n.NewWebhookHandler(n8nClient)

	// Register routes
	http.HandleFunc("/health", healthCheck)
	http.HandleFunc("/webhook", webhookHandler.HandleWebhook)

	// Start server
	port := ":8080"
	log.Printf("Server starting on port %s", port)

	// Create a channel to listen for errors coming from the server
	serverErrors := make(chan error, 1)

	// Start the server in a goroutine
	go func() {
		serverErrors <- http.ListenAndServe(port, nil)
	}()

	// Create a channel to listen for an interrupt or terminate signal from the OS
	shutdown := make(chan os.Signal, 1)
	signal.Notify(shutdown, os.Interrupt, syscall.SIGTERM)

	// Blocking main and waiting for shutdown
	select {
	case err := <-serverErrors:
		log.Fatalf("Server error: %v", err)
	case sig := <-shutdown:
		log.Printf("Server is shutting down due to %v signal", sig)
	}
}
