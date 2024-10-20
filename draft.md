**# Project Overview**
You are building a website for a company that sells the following services:
- 3d Modelling of real world industrial installations
- 3d Models of proposed upgrades to existing installations
- Virtual Reality tours of proposed installations
- Helps implement these upgrades

**# Core Functionality**
The color palette is:
- dark background
- light purple text
- bright green "book a demo" buttons

- Navigation
    - A navigation bar that scrolls to relevant section on page
    - A logo
    - Hamburger menu on mobile
    - Book a demo button in the navigation bar

- A homepage which clearly shows what the company does
    - A hero section with a clear message and video in the background
    - A section that explains the benefits of using the company's services with pictures
    - A section with a 3d model of an installation that can be interacted with
    - Testimonials from previous clients
    - A clear Call to Action (book a demo)

- Populate background with 3d abstract animated shapes

**# Docs**


**# Current File Structure**
my-industrial-3d-website/
│
├── public/                  # Static files (images, 3D model files, favicon, etc.)
│   ├── models/              # 3D models in formats like .glb or .gltf for use with three.js
│   ├── videos/              # Background video files for the hero section
│   ├── images/              # Static images used across the website
│   └── assets/              # Logos, icons, etc.
│
├── src/
│   ├── app/                 # App directory for Next.js 14 (App Router)
│   │   ├── layout.tsx       # Main layout component (wrapping app structure)
│   │   ├── page.tsx         # Homepage component
│   │   ├── api/             # API routes for backend logic (if needed)
│   │   │   └── contact/     # Example API route for 'book a demo' form
│   │   ├── components/      # Shared components used across the website
│   │   │   ├── Navbar.tsx   # Navigation bar component
│   │   │   ├── Hero.tsx     # Hero section with background video
│   │   │   ├── Benefits.tsx # Benefits section with images/text
│   │   │   ├── ModelViewer.tsx # 3D model viewer using three.js
│   │   │   ├── Testimonials.tsx # Client testimonials
│   │   │   ├── CTA.tsx      # Call-to-action (Book a demo button)
│   │   │   ├── Footer.tsx   # Footer with company info and links
│   │   │   └── AnimatedBackground.tsx # 3D abstract shapes background
│   │   └── styles/          # Component-specific styles using Tailwind CSS
│   │       └── globals.css  # Global styles and Tailwind CSS imports
│   │
│   ├── hooks/               # Custom hooks for reusable logic
│   │   └── useWindowSize.ts # Example custom hook for responsive design
│   │
│   ├── types/               # TypeScript interfaces and types
│   │   ├── index.d.ts       # Global type declarations (if needed)
│   │   └── api.ts           # Types for API responses and data structures
│   │
│   ├── utils/               # Utility functions (e.g., formatters, helpers)
│   │   └── apiHelpers.ts    # Helpers for making API requests
│   │
│   └── config/              # Configuration files and constants
│       └── theme.ts         # Define color palette for Tailwind CSS here
│
├── .env.local               # Environment variables for local development (DO NOT COMMIT)
├── .gitignore               # Ensure environment files and unnecessary files are ignored
├── next.config.js           # Next.js configuration
├── tailwind.config.js       # Tailwind CSS configuration (extend colors, etc.)
├── tsconfig.json            # TypeScript configuration
└── README.md                # Project documentation


**# Additional requirements**
1. Project setup
- Use next.js
- Use the Next.js 14 app router
- Use tailwind css
- Use typescript
- Use three.js for 3d models
- Client components (useState, hooks, etc) require that 'use client' is set at the top of the file

2. Type Safety:
 - Use TypeScript interfaces for all data structures, especially API responses.
 - Avoid using 'any' type; instead, define proper types for all variables and function parameters.
 
3. Environment Variables:
- Store all sensitive information (API keys, credentials) in environment variables.
- Use a .env.local file for local development and ensure it's listed in .gitignore.
- For production, set environment variables in the deployment platform (e.g., Vercel).
- Access environment variables only in server-side code or API routes.

