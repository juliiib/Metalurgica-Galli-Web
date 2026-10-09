# Metalúrgica Galli S.R.L. — Corporate Website

A custom-built one-page website for an industrial metalworking company. The project modernizes the company's digital presence by highlighting its technical capabilities, machinery, and client portfolio through a fast, scalable, B2B-focused interface.

**Live site:** [metalurgicagalli.com.ar](https://metalurgicagalli.com.ar/)

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
- **Deployment:** Static hosting on Vercel, deployed automatically via GitHub Actions.

## Project Structure

The codebase is organized for clarity and scalability, leaving room for future modules:

```text
src/
├── assets/      # Static assets, optimized images, and logos
├── components/  # Reusable UI components (cards, buttons, and navigation)
├── data/        # JavaScript data catalogs
├── sections/    # Main page sections (about, services, and history)
└── App.jsx      # Root component that orchestrates the one-page layout
```

## Getting Started

```bash
git clone https://github.com/<your-org>/MetalurgicaGalli.git
cd MetalurgicaGalli
npm install
cp .env.example .env   # then fill in the EmailJS values, see below
npm run dev
```

Other available scripts:

| Script                 | Description                                  |
| ---------------------- | -------------------------------------------- |
| `npm run dev`          | Start the Vite dev server with HMR.          |
| `npm run build`        | Type-check-free production build to `dist/`. |
| `npm run preview`      | Serve the production build locally.          |
| `npm run lint`         | Run ESLint.                                  |
| `npm run format`       | Format the codebase with Prettier.           |
| `npm run format:check` | Check formatting without writing changes.    |
| `npm run test`         | Run the Vitest test suite once.              |
| `npm run test:watch`   | Run Vitest in watch mode.                    |

## Environment Variables

The contact form (`src/sections/Contacts/Contacts.jsx`) sends messages via [EmailJS](https://www.emailjs.com/), which needs these variables at build/dev time. Copy `.env.example` to `.env` and fill them in from your EmailJS dashboard:

| Variable                   | Description                |
| -------------------------- | -------------------------- |
| `VITE_EMAILJS_SERVICE_ID`  | EmailJS service ID.        |
| `VITE_EMAILJS_TEMPLATE_ID` | EmailJS email template ID. |
| `VITE_EMAILJS_PUBLIC_KEY`  | EmailJS public key.        |

Without these, the form still renders but submissions show a "not configured" message instead of sending (see the `configuration-error` state in `Contacts.jsx`).

## CI/CD

GitHub Actions handles both checks and deployment:

- **`.github/workflows/ci.yml`** — on every pull request against `main`, runs `npm ci`, `npm run lint`, and `npm run build`.
- **`.github/workflows/deploy.yml`** — on every push to `main`, builds and deploys to Vercel production using the Vercel CLI.

The deploy workflow needs these repo secrets (_Settings → Secrets and variables → Actions_), taken from a [Vercel personal token](https://vercel.com/account/tokens) and `vercel link` in the project:

- `VERCEL_TOKEN`
- `VERCEL_ORG_ID`
- `VERCEL_PROJECT_ID`
