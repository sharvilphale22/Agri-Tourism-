# VillageRoots — Indian Agri-Tourism Website

A premium, modern agri-tourism landing page built with React, Vite, Framer Motion, and React Icons. Showcases village experiences, stays, dining, gallery, and booking — designed for agri-tourism destinations across India.

## Tech Stack

- React 18
- Vite 6
- Framer Motion
- React Icons
- CSS (custom design system)

## Getting Started

```bash
npm install
npm run dev
```

Open the URL shown in the terminal (typically `http://localhost:5173`).

## Build for Production

```bash
npm run build
npm run preview
```

## Project Structure

```
src/
├── assets/       # Listings, nav, destinations data
├── components/   # Reusable UI (SearchBar, PropertyCard, etc.)
├── pages/        # Home, Explore, PropertyDetails, Dining, Farmers
├── styles/       # Global & page styles
└── utils/        # Booking helpers
```

## Routes

| Path | Page |
|------|------|
| `/` | Home — hero, search, featured stays, destinations |
| `/explore` | Airbnb-style farm search & filters |
| `/property/:id` | Property details & sticky booking panel |
| `/dining` | Dining reservations |
| `/farmers` | Farmer registration & dashboard |

## Features

- React Router multi-page booking flow
- Premium glassmorphism search bar
- Property cards with availability badges
- Sticky Airbnb-style booking panel
- Dining reservation with time slots
- Farmer profile management (frontend only)
