# Happy Journey — AI-Powered Travel Advisor

**Live:** [https://happy-journy.vercel.app/](https://happy-journy.vercel.app/)  
**Author:** [Nishanth K R](https://github.com/Nishanth1409) · Portfolio [nkrportfolio.vercel.app](https://nkrportfolio.vercel.app)

Happy Journey replaces manual trip coordination with **AI-generated itineraries**, **budget-aware destination suggestions**, and **persistent trip history** — built for Indian destinations with maps, geolocation, and an admin panel for events and hotels.

## Features

- AI trip planning (`/api/ai/plan`) with Gemini + Groq fallback
- Budget-based destination suggestions
- Place discovery chat and local Indian places API
- Trip history in Firebase Firestore (`/trips`)
- Google Maps route links and reverse geocoding
- Clerk authentication
- Admin panel for events and hotels

## Stack

| Layer | Tech |
| :--- | :--- |
| Frontend | Next.js · TypeScript · Tailwind CSS · Framer Motion |
| Auth | Clerk |
| Data | Firebase Firestore · Firebase Storage |
| AI | Google Gemini · Groq LLaMA 3.1 |
| Deploy | Vercel |

## Setup

```bash
npm install
cp .env.example .env.local   # if present; otherwise create .env.local
npm run dev
```

Required secrets (never commit): Clerk keys, Firebase client + admin credentials, Gemini/Groq API keys.

## Scripts

```bash
npm run dev      # local development
npm run build    # production build
npm run start    # start production server
```

## License

Private project source published for portfolio visibility. Contact the author before commercial reuse.
