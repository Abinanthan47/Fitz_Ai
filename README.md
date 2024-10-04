# Fitz AI 🥗

Fitz AI is a sophisticated  application designed to provide personalized meal planning and nutrition assistance. This project leverages the power of Next.js, integrating AI capabilities to offer a seamless user experience.

## Link 🌍
https://fitz-ai.vercel.app

## Sneak Peek
![image](https://github.com/user-attachments/assets/51b66c50-da2a-416c-bf02-276c51a6c3fd)
![image](https://github.com/user-attachments/assets/8a8d18d1-08e3-47d0-8a34-9c89623fc575)
![image](https://github.com/user-attachments/assets/1d013cc5-acb2-4006-8658-8f051866bf6f)
![image](https://github.com/user-attachments/assets/c2a6f2ce-7cbb-455b-89e3-2eaea159d12b)




## Table of Contents

1. [Project Overview](#project-overview)
2. [Getting Started](#getting-started)
3. [Project Structure](#project-structure)
4. [Key Features](#key-features)
5. [Technology Stack](#technology-stack)
6. [Development](#development)
7. [Deployment](#deployment)
8. [Learn More](#learn-more)

## Project Overview

Fitz AI is built on Next.js, a powerful React framework that enables server-side rendering and generates static websites. The project aims to provide users with AI-driven meal planning and nutrition guidance, featuring a user-friendly interface and responsive design.

## Getting Started

To run the development server:

```bash
npm install

npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Once the server is running, open [http://localhost:3000](http://localhost:3000) in your browser to see the application.

## Project Structure

The project follows a structured layout:

```
fitz_ai
├─ app/                 # Next.js 13+ app directory
│  ├─ api/              # API routes
│  ├─ components/       # Reusable UI components
│  ├─ dashboard/        # Dashboard page
│  ├─ profile/          # User profile pages
│  └─ ...
├─ components/          # Global components
│  └─ ui/               # UI component library
├─ constants/           # Constant values and options
├─ hooks/               # Custom React hooks
├─ lib/                 # Utility functions
├─ public/              # Static assets
├─ services/            # External service integrations
└─ ...
```

## Key Features

- User Authentication Google OAuth
- Dashboard for meal planning
- User profile management
- AI-powered meal suggestions
- Responsive design with custom UI components

## Technology Stack

- **Frontend**: Next.js, React
- **Styling**: Tailwind CSS
- **Authentication**: OAuth
- **AI Integration**: Gemini Ai
- **Form Handling**: Zod
- **UI Components**: Shadcn UI

## Development

The main page of the application can be edited by modifying `app/page.js`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

## Deployment

The recommended way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

For more details, check out the [Next.js deployment documentation](https://nextjs.org/docs/deployment).

## Learn More

To deepen your understanding of Next.js, explore these resources:

- [Next.js Documentation](https://nextjs.org/docs) - comprehensive guide to Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

