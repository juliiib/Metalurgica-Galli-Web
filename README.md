# Metalúrgica Galli S.R.L. — Corporate Website

A custom-built one-page website for an industrial metalworking company. The project modernizes the company's digital presence by highlighting its technical capabilities, machinery, and client portfolio through a fast, scalable, B2B-focused interface.

## Key Features

- **Modular architecture:** Clear separation between data (`/data`) and presentation (UI). Service and machinery catalogs are rendered dynamically, allowing quick updates without changing the component structure.
- **Responsive design:** Mobile-first layouts designed for phones through wide desktop displays.
- **Interactive UI:** Image galleries with optimized horizontal scrolling and smooth section navigation.
- **Lead generation:** Direct contact forms and communication links without requiring a custom backend.

## Technologies

- **Core:** React (Hooks and functional components), JavaScript (ES6+), HTML5, and CSS3.
- **UI framework:** Bootstrap 5 grid and utility classes.
- **Build tool:** Vite for fast builds and hot module replacement.
- **Linting:** ESLint for code quality and consistency.
- **Deployment:** Static hosting and CI/CD compatible with Cloudflare Pages and Vercel.

## Project Structure

The codebase is organized for clarity and scalability, leaving room for future modules:

```text
src/
├── assets/      # Static assets, optimized images, and logos
├── components/  # Reusable UI components (cards, buttons, and navigation)
├── data/        # JavaScript data catalogs
├── sections/    # Main page sections (about, services, and history)
└── App.jsx      # Root component that orchestrates the one-page layout