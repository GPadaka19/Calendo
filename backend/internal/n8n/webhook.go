package n8n

import (
	"encoding/json"
	"fmt"
	"net/http"
)

type WebhookHandler struct {
	client *Client
}

type WebhookPayload struct {
	EventType string          `json:"eventType"`
	Data      json.RawMessage `json:"data"`
}

func NewWebhookHandler(client *Client) *WebhookHandler {
	return &WebhookHandler{
		client: client,
	}
}

func (h *WebhookHandler) HandleWebhook(w http.ResponseWriter, r *http.Request) {
	if r.Method != http.MethodPost {
		http.Error(w, "Method not allowed", http.StatusMethodNotAllowed)
		return
	}

	var payload WebhookPayload
	if err := json.NewDecoder(r.Body).Decode(&payload); err != nil {
		http.Error(w, "Invalid request body", http.StatusBadRequest)
		return
	}

	// Process the webhook payload
	switch payload.EventType {
	case "workflow.activated":
		// Handle workflow activation
		fmt.Printf("Workflow activated: %s\n", string(payload.Data))
	case "workflow.deactivated":
		// Handle workflow deactivation
		fmt.Printf("Workflow deactivated: %s\n", string(payload.Data))
	default:
		fmt.Printf("Unknown event type: %s\n", payload.EventType)
	}

	w.WriteHeader(http.StatusOK)
	json.NewEncoder(w).Encode(map[string]string{
		"status": "success",
	})
}
