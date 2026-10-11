# An-Nur Jibril Awwalul Muharram Al-Prasad Portfolio Website

Portfolio website for An-Nur Jibril Awwalul Muharram Al-Prasad, built with Next.js and Tailwind CSS.

## Pages

- Homepage: Hero, About, Experience, Skills, Selected Project, Contact
- Project Detail: Kenangan Smart Pickup Time case study

## Tech Stack

- Next.js
- React
- Tailwind CSS
- TypeScript
- Lucide React icons

## Local Setup

Open this project folder in a terminal, then run:

```bash
corepack pnpm install
corepack pnpm dev
```

Open:

```txt
http://localhost:3000
```

Alternative with npm:

```bash
npm install
npm run dev
```

If `npm` is not available on your computer, reinstall Node.js from the official Node.js website and make sure the installer includes npm. This project has already been verified with pnpm.

## Content To Replace Before Publishing

Update these placeholders:

- `public/assets/profile-placeholder.svg`: replace with a real profile photo if available.
- `public/assets/kenangan-smart-pickup-placeholder.svg`: replace with project screenshots or prototype screens if available.
- Contact links in `lib/data.ts`: email, LinkedIn, and GitHub.
- Add a downloadable CV file to `public/` if you want a CV button.

## Push To GitHub

From the project folder:

```bash
git init
git add .
git commit -m "Initial portfolio website"
git branch -M main
git remote add origin https://github.com/YOUR_USERNAME/YOUR_REPOSITORY_NAME.git
git push -u origin main
```

## Deploy To Vercel

1. Log in to Vercel.
2. Choose "Add New Project".
3. Import the GitHub repository.
4. Keep the default framework preset as Next.js.
5. Click "Deploy".

After deployment, every push to the connected GitHub repository can trigger a new Vercel deployment.

## Suggested Next Improvements

- Add real profile image and project screenshots.
- Add a downloadable CV file.
- Add real social links and contact email.
- Add more project pages as the portfolio grows.
