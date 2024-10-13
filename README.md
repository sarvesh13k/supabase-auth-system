# Next.js Supabase Authentication

This project is a Next.js web application that implements user authentication using Supabase. Users can sign up with email and password or use Google OAuth for authentication. The app features a dashboard for navigation.

## Table of Contents

- [Features](#features)
- [Technologies Used](#technologies-used)
- [Prerequisites](#prerequisites)
- [Getting Started](#getting-started)
- [File Structure](#file-structure)
- [Usage](#usage)
- [Contributing](#contributing)
- [License](#license)

## Features

- User sign-up and login functionality
- Sign up with Google OAuth
- User-friendly interface with navigation to different pages
- Built with TypeScript and Tailwind CSS for styling

## Technologies Used

- [Next.js](https://nextjs.org/) - React framework for server-side rendering
- [Supabase](https://supabase.com/) - Backend as a service (BaaS) for authentication
- [MongoDB](https://www.mongodb.com/) - Database for storing user data (if implemented)
- [Tailwind CSS](https://tailwindcss.com/) - Utility-first CSS framework

## Prerequisites

Before you begin, ensure you have the following installed on your machine:

- [Node.js](https://nodejs.org/en/) (version 14 or later)
- [npm](https://www.npmjs.com/) (comes with Node.js)
- A Supabase account (sign up at [supabase.com](https://supabase.com/))
- A Google Developer account to set up OAuth (sign up at [Google Developers](https://developers.google.com/))

## Getting Started

1. **Clone the repository**:

   ```bash
   git clone https://github.com/yourusername/nextjs-supabase-auth.git

2. Navigate to the project directory:
cd nextjs-supabase-auth
Install dependencies:
npm install

3. Set up environment variables:
Create a .env.local file in the root directory of your project and add your Supabase URL and anon key:
NEXT_PUBLIC_SUPABASE_URL=your_supabase_url
NEXT_PUBLIC_SUPABASE_ANON_KEY=your_supabase_anon_key

4. Start the development server:
npm run dev

5. Open your browser:
Go to http://localhost:3000 to view your app.

6. File Structure
nextjs-supabase-auth
├── public
│   └── (static files)
├── src
│   ├── app
│   │   ├── dashboard
│   │   │   └── page.tsx         # Dashboard page
│   │   ├── login
│   │   │   └── page.tsx         # Login page
│   │   ├── signup
│   │   │   └── page.tsx         # Sign up page
│   │   └── page.tsx             # Main entry page
│   ├── styles
│   │   └── globals.css           # Global styles
│   ├── supabaseClient.ts         # Supabase client setup
│   └── (other components)
├── .env.local                    # Environment variables
├── .gitignore                    # Git ignore file
├── package.json                  # Project metadata and dependencies
└── README.md                     # Project documentation

7. Usage
Sign Up
Users can sign up using their email and password.
Users can also sign up using Google OAuth.
Login
Users can log in with their registered email and password.
Users can log in using Google OAuth.
Dashboard
The dashboard contains links to the login and signup pages.

8. Contributing
Contributions are welcome! If you'd like to contribute to this project, please follow these steps:

9. Fork the repository.
Create a new branch (git checkout -b feature-branch).
Make your changes and commit them (git commit -m "Add new feature").
Push to the branch (git push origin feature-branch).
Open a pull request.
