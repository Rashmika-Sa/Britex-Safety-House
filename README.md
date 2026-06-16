# Britex Safety House

Britex Safety House is a responsive fire-safety marketing and services website for Britex Group of Companies. It presents the company’s products, services, story, and contact details through a modern single-page experience with routed sections for Products, Services, About, and Contact.

## What This Project Does

- Shows Britex’s fire safety product range, including extinguishers, alarm systems, detection systems, hydrant systems, hose reel systems, and PPE.
- Highlights core services such as fire safety training, installation, maintenance, and equipment supply.
- Shares company background, timeline, and trust signals for prospective customers.
- Provides contact methods for phone, email, WhatsApp, and office locations.

## Tech Stack

- React 18
- React Router DOM
- Vite
- Tailwind CSS
- Framer Motion
- Lucide React
- PostCSS and Autoprefixer

## Video Demo

<iframe src="https://drive.google.com/file/d/1Rl6HoRrvyR_ynUmU_6uRkb2b2fM3-8fI/preview" width="100%" height="480" allow="autoplay"></iframe>

## Run Locally

1. Install dependencies:

```bash
npm install
```

2. Start the development server:

```bash
npm run dev
```

3. Open the app in your browser at the local URL shown in the terminal, usually `http://127.0.0.1:5173/`.

4. To build and preview the production bundle:

```bash
npm run build
npm run preview
```

## Project Structure

```
src/
├── components/   # Reusable UI components
├── pages/        # Routed page sections
├── App.jsx       # Route setup
├── main.jsx      # App entry point
└── index.css     # Global styles
```

## Notes

- The contact form is UI-only and does not require a backend.
- The WhatsApp buttons link directly to Britex support.
- Screenshot assets are stored in `public/screenshots/`.

## Roadmap & Upcoming Features (In Progress)
This project is being rolled out in phases to meet the client's business goals:
- **Phase 1 (Current):** Responsive, high-performance marketing landing page with smooth UX.
- **Phase 2 (Next):** Integration of a Node.js/Express backend to make the contact and quotation forms fully functional.
- **Phase 3:** A secure client portal and admin dashboard to track fire safety service schedules, equipment maintenance timelines, and operational workflows.
