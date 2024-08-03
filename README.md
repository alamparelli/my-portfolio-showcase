# Project Portfolio - L1

## 1. **Idea**

- **Project Objectives**: The first project will be to set up a website with 2 pages
  - My Info & Skills
  - My Various Projects
- **User functionalities**:

  1. List
     1. My info
     2. My skills
     3. List of social media links
     4. Stay updated (Nice to have)
  2. List of completed projects
  3. Contact form
  4. Manage displayed projects
     1. Manually | Phase 1
     2. Via admin page | Phase 2

- **Specifications**:
  - Available 24/7
  - Hosted behind a custom URL & HTTPS

## 2. **Preparation**

- **Stack Used**:
  - FrontEnd development
    - React
    - TailWind CSS
    - Node (Backend)
      - Manage Projects
        - MongoDB
      - Mailing routing
        - Email sending management

## 3. **Development**

- **Define User Stories**
  - END USER
    - US1: As a user, I click on the page/project list: by Alessandro
    - US2: As a user, I browse the info related to Alessandro's account
    - US3: As a user, I contact Alessandro via the contact form
    - US4: As a user, I leave my email address to follow Alessandro's upcoming projects or announcements
  - OWNER
    - US5: As the owner, I can add new projects from the admin interface
    - US6: As the owner, I can modify already visible projects from the admin interface
    - US7: As the owner, I can delete already visible projects from the admin interface
- **CI/CD**:
  - Deployment PIPELINE: From GITHUB Actions
  - Test PIPELINE: From GITHUB Actions

## 4. **Tasks**

### Planning & Design

- [ ] Create Wireframes and Mockups
  - Design the layout for the “My Info & Skills” and “My Various Projects” pages.
- [ ] Set up the DataModel of Project
  - Identify all the required data to be filled in the db

### Development

- [ ] Set Up Frontend Environment
  - Initialize the React project.
  - Install TailWind CSS.
- [ ] Create “My Info & Skills” Page
  - Develop the layout and components for displaying personal information and skills.
- [ ] Create “My Various Projects” Page
  - Develop the layout and components for displaying a list of projects.
- [ ] Implement Social Media Links
  - Add components to list and link to social media profiles.
- [ ] Implement “Stay Updated” Feature (Nice to have)
  - Create a subscription form for users to enter their email addresses.
- [ ] Set Up Backend Environment
  - Initialize the Node.js project.
  - Set up MongoDB for managing projects and email subscriptions.
- [ ] Develop Contact Form
  - Create the contact form component and connect it to the backend for email sending.
- [ ] Implement Project Management (Phase 1)
  - Add functionality to manually manage (add, edit, delete) projects through a backend script (JSON file that populate the DB)
- [ ] Implement Admin Page (Phase 2)
  - Develop the admin interface for managing projects via a dedicated page.

### Backend Development

- [ ] Set Up MongoDB Database
  - Configure the MongoDB database and set up collections for projects and subscriptions.
- [ ] Implement Project Management API
  - Create API endpoints for adding, editing, and deleting projects.
- [ ] Implement Email Sending Functionality
  - Set up mailing routing for contact form submissions.

### Testing

- [ ] Write Unit Tests for Frontend
  - Develop unit tests for React components.
- [ ] Write Unit Tests for Backend
  - Develop unit tests for Node.js API endpoints.
- [ ] Perform Integration Testing
  - Ensure frontend and backend integration works smoothly.
- [ ] User Acceptance Testing
  - Validate the User Stories
- [ ] Gather Dev Feedback for Improvments
  - analyze with ChatGpt feedback
- [ ] Gather Dev Human Feedback
  - publish on dev.to and hashnode

### Deployment

- [ ] Set Up CI/CD Pipeline
  - Configure GitHub Actions for automated testing and deployment.
- [ ] Set Up Hosting Environment
  - Choose a hosting provider and configure the environment.
- [ ] Deploy Application
  - Deploy the application to the hosting provider using the CI/CD pipeline.
- [ ] Configure Custom Domain & HTTPS
  - Set up a custom URL and configure HTTPS.

### Maintenance

- [ ] Monitor Application
  - Set up monitoring tools to ensure the application is running smoothly.
- [ ] Set Up Regular Backups
  - Implement regular database backup procedures.
- [ ] Plan for Regular Updates
  - Schedule regular updates and maintenance tasks.
