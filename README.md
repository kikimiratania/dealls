Dealls - Mentoring Feature
The Mentoring feature in the Dealls app allows users to find professional mentors, book sessions, manage schedules, and leave reviews.

Main Features
- User registration & login
- Search mentors by category
- Book mentoring sessions

Technologi Used : Cypress
How to Run
1. Clone the Repository : git clone https://github.com/kikimiratania/Test-Dealls.git
2. Install Dependency : npm install cypress --save -dev , cd client  --> npm install
3. Testing : npx cypress open


project-root/
├── cypress/
│   ├── e2e/                # Test cases
│   ├── fixtures/           # Test data
│   ├── support/            # Commands & config
│   ├── screenshots/        # Auto screenshots
│   ├── videos/             # Auto video recordings
├── cypress.config.js       # Cypress config
├── package.json
└── README.md


example test:
/// <reference types="cypress" />
import 'cypress-file-upload';

describe('Register ', () => {
  beforeEach(() => {
    // Cypress starts out with a blank slate for each test
    // so we must tell it to visit our website with the `cy.visit()` command.
    // Since we want to visit the same URL at the start of all our tests,
    // we include it in our beforeEach function so that it runs before each test
    cy.visit('https://job-portal-user-dev-skx7zw44dq-et.a.run.app/mentoring')
  })
