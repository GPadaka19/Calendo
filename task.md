# Calendo MVP Build Plan (Landing Page Only)

This document provides a detailed, testable, and sequential task breakdown for building the MVP landing page for **Calendo** using **Next.js**, **Go**, and **PostgreSQL**.

---

## ✅ Environment Setup

### 1. Initialize the monorepo folder

* Create a root directory `calendo/`
* Add `.gitignore` and initialize Git repo
* Outcome: Repo is ready to track changes

### 2. Create `frontend/` with Next.js + Tailwind

* Run `npx create-next-app@latest frontend`
* Install Tailwind CSS with `postcss` setup
* Add `tailwind.config.js` and `globals.css`
* Outcome: Running homepage at `localhost:3000`

### 3. Create `backend/` Go project

* Init Go module with `go mod init`
* Create `cmd/main.go` with basic HTTP server using `net/http`
* Outcome: Go server responds to `localhost:8080`

### 4. Add PostgreSQL via Docker Compose

* Create `docker-compose.yml` with Postgres service
* Add `POSTGRES_DB`, `USER`, and `PASSWORD` env vars
* Outcome: PostgreSQL runs at `localhost:5432`

### 5. Connect Go backend to PostgreSQL

* Install `github.com/jmoiron/sqlx` or `pgx`
* Write simple connection test on server boot
* Outcome: Backend logs successful DB connection

---

## 🌐 Landing Page (Frontend)

### 6. Create layout wrapper with header/footer

* Build `Layout.tsx` component
* Add links to `Privacy`, `Terms`, and placeholder pages
* Outcome: All sections share consistent layout

### 7. Implement Hero section

* Create `sections/Hero.tsx`
* Add headline, subheadline, CTA button
* Outcome: First-view experience ready

### 8. Implement Features section

* Create `sections/Features.tsx`
* Describe CSV Upload, Manual Entry, and Google Calendar sync
* Outcome: Informative feature block rendered

### 9. Implement Pricing section

* Create `sections/Pricing.tsx`
* Display Free, Student+, and Pro tier cards
* Outcome: Plans with feature matrix shown

### 10. Implement FAQs section

* Create `sections/FAQs.tsx`
* Use collapsible UI for each Q\&A item
* Outcome: User can toggle answers

### 11. Implement Testimonials section

* Create `sections/Testimonials.tsx`
* Add 2-3 dummy testimonials in cards
* Outcome: Social proof displayed

### 12. Implement Contact button

* Add sticky/fixed contact button component
* Opens a `mailto:` or links to `/contact` page
* Outcome: Support access enabled

### 13. Implement Newsletter form

* Add email input with submit button in footer
* Include fake handler (no API call yet)
* Outcome: UI-only newsletter signup

### 14. Implement Footer component

* Add links: Privacy Policy, Terms, Contact, Newsletter
* Use `Link` for internal routing
* Outcome: Standard legal/footer nav complete

---

## 🧪 Integration Tests (Frontend)

### 15. Visual check each section individually

* Temporarily render each section alone
* Outcome: Section loads without error and styles are applied

### 16. Build full landing page view

* Compose all sections in `pages/index.tsx`
* Outcome: Full page loads with proper order and spacing

---

## 🛡️ Backend Utilities (Prep for Forms)

### 17. Create POST endpoint `/newsletter` in Go

* Accepts JSON `{ email: string }`
* Validates format and saves to `newsletter_subscribers` table
* Outcome: API accepts and stores emails

### 18. Create contact email forwarding (or stub)

* Add `/contact` POST endpoint with `{ name, email, message }`
* (Optional) Log or forward via SMTP/mailgun
* Outcome: Backend contact route functional

### 19. Connect frontend newsletter form

* On submit, POST to `/newsletter`
* Handle loading/success/error state
* Outcome: Subscribed emails stored in DB

---

## 🧪 Backend Tests

### 20. Test newsletter POST endpoint

* Use `curl` or Postman with valid and invalid emails
* Outcome: Valid emails are accepted and stored

### 21. Test contact POST endpoint

* Send dummy contact form JSON
* Outcome: Message logged or forwarded successfully

---

## 🧼 Final QA

### 22. Responsive checks (mobile/tablet/desktop)

* Verify layout integrity across breakpoints
* Outcome: Mobile-friendly design confirmed

### 23. Lighthouse performance & SEO test

* Run Lighthouse on landing page
* Outcome: Passes core web vitals for MVP

### 24. Commit & tag MVP

* Push changes, tag `v0.1.0`
* Outcome: MVP version recorded in Git

---

This plan delivers a well-structured, fully testable MVP landing page for Calendo. Ready to deploy, iterate, and integrate future scheduling features.
