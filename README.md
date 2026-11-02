# Vimal Kanzariya — Personal Portfolio

A production-quality developer portfolio website built with React 19, TypeScript, Vite, Tailwind CSS v4, Lucide Icons, and Express.js backend.

## 🚀 Features

- **Personal Brand**: Minimalist, high-end "VK" brand identity.
- **Color System**: Modern dark theme with gray and white typographic hierarchy (`text-white`, `text-zinc-300`, `text-zinc-400`) and matching zinc surfaces (`#090A0F`, `#0D0F18`, `border-zinc-800`).
- **Interactive Hero Workspace**: Interactive IDE editor with code switching (`authMiddleware.js`, `volatilityEngine.py`, `DeveloperProfile.ts`), line numbers, copy-to-clipboard, and runnable sandbox terminal.
- **Projects Showcase**: 
  - **PGFinder**: Full-stack paying guest accommodation platform (Node.js, Express, MongoDB, JWT, Bcrypt, Multer) with live Vercel link (`https://pg-finder-gamma.vercel.app/`).
  - **Stock Volatility Website**: Financial data analytics platform tracking market volatility and risk indicators (Python, Pandas, NumPy, JavaScript).
  - **Project Deep-Dive Modal**: Interactive modal showing complete architectural breakdowns and technical implementation details.
- **Technical Skills**: Filterable categorization and search without misleading percentages.
- **Education & Certifications Timeline**: B.Sc. IT (FinTech) at Marwadi University (7.95/10 CGPA, Grad 2027), Crystal Public School HSC (87.14%) & SSC (81.67%), AWS Cloud Practitioner Essentials, and Simplilearn Blockchain Developer Training.
- **Contact & Real Backend**: Fully functional Express backend route at `/api/contact` with honeypot anti-spam protection, input validation, and direct email mailto client fallback.
- **Resume Viewer & Downloader**: In-app PDF modal viewer and direct download of `/resume.pdf`.

---

## 🛠️ Getting Started Locally

### 1. Prerequisites
- Node.js 18+ or 20+
- npm, pnpm, or bun

### 2. Install Dependencies
```bash
npm install
```

### 3. Run Development Server
```bash
npm run dev
```
Open `http://localhost:3000` in your browser.

### 4. Build for Production
```bash
npm run build
npm start
```

---

## 📁 Project Structure

```
├── public/
│   ├── resume.pdf
│   ├── vimal-kanzariya-portfolio.zip
│   └── assets/aistudio/
├── src/
│   ├── assets/images/
│   ├── components/
│   │   ├── Navbar.tsx
│   │   ├── Footer.tsx
│   │   ├── CodeEditorHero.tsx
│   │   ├── SectionHeading.tsx
│   │   ├── ProjectCard.tsx
│   │   ├── ProjectModal.tsx
│   │   ├── ContactForm.tsx
│   │   └── ResumeModal.tsx
│   ├── sections/
│   │   ├── Hero.tsx
│   │   ├── About.tsx
│   │   ├── Skills.tsx
│   │   ├── Projects.tsx
│   │   ├── Education.tsx
│   │   ├── Philosophy.tsx
│   │   └── Contact.tsx
│   ├── data/
│   │   ├── projects.ts
│   │   ├── skills.ts
│   │   ├── education.ts
│   │   └── socials.ts
│   ├── types/
│   ├── App.tsx
│   ├── main.tsx
│   └── index.css
├── index.html
├── metadata.json
├── package.json
├── server.ts
├── tsconfig.json
└── vite.config.ts
```

© 2026 Vimal Kanzariya. All rights reserved.
