FROM golang:1.23.4-alpine

WORKDIR /app

# Copy go mod and sum files
COPY go.mod go.sum ./

# Download dependencies
RUN go mod download

# Copy source code
COPY . .

# Build the application
RUN go build -o main ./cmd/main.go

# Expose port
EXPOSE 8080

# Run the application
CMD ["./main"] 