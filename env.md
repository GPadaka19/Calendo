# Environment Variables

## PostgreSQL
```env
DB_HOST=postgresql
DB_PORT=5432
DB_USER=admin
DB_PASSWORD=changeme
DB_NAME=calendo
```

## n8n
```env
N8N_HOST=n8n.gpadaka.com
N8N_PROTOCOL=https
N8N_API_URL=https://n8n.gpadaka.com
N8N_API_KEY=your_api_key
N8N_ENCRYPTION_KEY=your_encryption_key
```

## Notes
1. Set all values in GitHub Secrets
2. Do not commit .env file
3. Ensure values match VPS configuration
4. Get n8n API key from dashboard Settings > API