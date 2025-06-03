package n8n

import (
	"bytes"
	"encoding/json"
	"fmt"
	"net/http"
	"os"
)

type Client struct {
	baseURL    string
	apiKey     string
	httpClient *http.Client
}

type Workflow struct {
	ID          string                 `json:"id"`
	Name        string                 `json:"name"`
	Active      bool                   `json:"active"`
	Nodes       []Node                 `json:"nodes"`
	Connections map[string]interface{} `json:"connections"`
}

type Node struct {
	ID   string `json:"id"`
	Name string `json:"name"`
	Type string `json:"type"`
}

func NewClient() (*Client, error) {
	baseURL := os.Getenv("N8N_API_URL")
	apiKey := os.Getenv("N8N_API_KEY")

	if baseURL == "" || apiKey == "" {
		return nil, fmt.Errorf("missing required n8n environment variables")
	}

	return &Client{
		baseURL:    baseURL,
		apiKey:     apiKey,
		httpClient: &http.Client{},
	}, nil
}

func (c *Client) CreateWorkflow(workflow *Workflow) error {
	jsonData, err := json.Marshal(workflow)
	if err != nil {
		return fmt.Errorf("error marshaling workflow: %v", err)
	}

	req, err := http.NewRequest("POST", fmt.Sprintf("%s/api/v1/workflows", c.baseURL), bytes.NewBuffer(jsonData))
	if err != nil {
		return fmt.Errorf("error creating request: %v", err)
	}

	req.Header.Set("Content-Type", "application/json")
	req.Header.Set("X-N8N-API-KEY", c.apiKey)

	resp, err := c.httpClient.Do(req)
	if err != nil {
		return fmt.Errorf("error making request: %v", err)
	}
	defer resp.Body.Close()

	if resp.StatusCode != http.StatusOK {
		return fmt.Errorf("unexpected status code: %d", resp.StatusCode)
	}

	return nil
}

func (c *Client) GetWorkflow(id string) (*Workflow, error) {
	req, err := http.NewRequest("GET", fmt.Sprintf("%s/api/v1/workflows/%s", c.baseURL, id), nil)
	if err != nil {
		return nil, fmt.Errorf("error creating request: %v", err)
	}

	req.Header.Set("X-N8N-API-KEY", c.apiKey)

	resp, err := c.httpClient.Do(req)
	if err != nil {
		return nil, fmt.Errorf("error making request: %v", err)
	}
	defer resp.Body.Close()

	if resp.StatusCode != http.StatusOK {
		return nil, fmt.Errorf("unexpected status code: %d", resp.StatusCode)
	}

	var workflow Workflow
	if err := json.NewDecoder(resp.Body).Decode(&workflow); err != nil {
		return nil, fmt.Errorf("error decoding response: %v", err)
	}

	return &workflow, nil
}
