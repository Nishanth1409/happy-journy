<div align="center">

<img src="public/logoDark.png#gh-dark-mode-only" alt="Happy Journey" height="88" />
<img src="public/logowhite.png#gh-light-mode-only" alt="Happy Journey" height="88" />

# Happy Journey — AI Travel Advisor

**Plan your next adventure with AI. Itineraries, budgets, maps, and trip history — all in one place.**

Live: **[happy-journy.vercel.app](https://happy-journy.vercel.app/)**

[![Next.js](https://img.shields.io/badge/Next.js-15-000000?logo=nextdotjs&logoColor=white)](https://nextjs.org)
[![React](https://img.shields.io/badge/React-19-149ECA?logo=react&logoColor=white)](https://react.dev)
[![TypeScript](https://img.shields.io/badge/TypeScript-5-3178C6?logo=typescript&logoColor=white)](https://www.typescriptlang.org)
[![Clerk](https://img.shields.io/badge/Auth-Clerk-6C47FF?logo=clerk&logoColor=white)](https://clerk.com)
[![Firebase](https://img.shields.io/badge/Firebase-Firestore-FFCA28?logo=firebase&logoColor=black)](https://firebase.google.com)
[![AI](https://img.shields.io/badge/AI-Gemini%20%2B%20Groq-4285F4?logo=google&logoColor=white)](https://ai.google.dev)

</div>

<div align="center">
  <img src="docs/screenshots/devices-all.png" alt="Happy Journey on television, laptop, and phone" width="100%" />
  <p><em>One app · three displays — television, laptop, and phone. Layout adapts to each screen.</em></p>
</div>

---

## Why this exists

Trip planning in India usually means juggling WhatsApp groups, half-finished Google Docs, and random blog lists.
**Happy Journey** turns that chaos into one clear flow: tell the AI where you want to go, what you can spend,
and it builds a real itinerary — with places near you, budgets, maps, and a trip history you can reopen later.

> Built by **Nishanth K R** — *son of a farmer, always a farmer* — for travelers who want clarity, not another tab.

---

## What you can do

- **AI trip planning** — generate complete itineraries tailored to your style and budget (`Gemini` + `Groq` fallback).
- **Discover places near you** — GPS / city search with local attractions, wildlife spots, temples, and more.
- **Budget-aware suggestions** — compare destinations by what you can actually spend.
- **Interactive maps** — open routes and attractions in Google Maps with one click.
- **Trip history** — save plans to Firebase Firestore and reopen them anytime (signed-in).
- **Events & hotels** — browse recent events; admins manage events and partner hotels.
- **Works on every screen** — phone, laptop, and television layouts.

---

## See it on every display

| Laptop · 1440 × 900 | Phone · 390 × 844 |
| :---: | :---: |
| <img src="docs/screenshots/device-laptop.png" alt="Happy Journey on a laptop" /> | <img src="docs/screenshots/device-phone.png" alt="Happy Journey on a phone" /> |

<div align="center">

### Television · 1920 × 1080

<img src="docs/screenshots/device-tv.png" alt="Happy Journey on a television" width="92%" />

</div>

---

## Every feature, one by one

### 1 · Hero & AI trip planning entry

Land on a clear pitch, sign in or start free, and jump straight into AI trip planning.

<img src="docs/screenshots/feature-hero.png" alt="Happy Journey hero and CTA" width="100%" />

### 2 · Place discovery near you

Detect your city (or type one), then browse real attractions with map and site links —
wildlife sanctuaries, waterfalls, forts, temple towns, and more.

<img src="docs/screenshots/feature-places.png" alt="Place discovery near Shivamogga" width="100%" />

### 3 · Recent events

See recently added events with titles, descriptions, and quick links — managed from the admin panel.

<img src="docs/screenshots/feature-events.png" alt="Recent events on Happy Journey" width="100%" />

### 4 · Capabilities at a glance

AI planning · budget planner · maps · routes · partner hotels · food · share & export · Next.js speed.

<img src="docs/screenshots/feature-capabilities.png" alt="Happy Journey feature grid" width="100%" />

---

## Tech stack

| Layer | Technology |
| --- | --- |
| Frontend | Next.js 15 · React 19 · TypeScript · Tailwind CSS 4 · Framer Motion |
| Auth | Clerk |
| Data | Firebase Firestore · Firebase Storage · Firebase Admin |
| AI | Google Gemini · Groq LLaMA (fallback) |
| Maps / geo | Google Maps links · reverse geocoding · IP / GPS place detection |
| Deploy | Vercel |

---

## Getting started (run it locally)

**Prerequisites:** [Node.js 18+](https://nodejs.org).

```bash
# 1. Clone
git clone https://github.com/Nishanth1409/happy-journy.git
cd happy-journy

# 2. Install
npm install

# 3. Create env file (copy from your secrets — never commit)
#    Required keys are listed below
#    Save as .env.local

# 4. Start
npm run dev
```

Open **http://localhost:3000**.

### Required environment variables

| Key | Purpose |
| --- | --- |
| `NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY` / `CLERK_SECRET_KEY` | Authentication |
| `NEXT_PUBLIC_FIREBASE_*` | Client Firebase config |
| `FIREBASE_PROJECT_ID` / `FIREBASE_CLIENT_EMAIL` / `FIREBASE_PRIVATE_KEY` | Server Firebase Admin |
| `GEMINI_API_KEY` | Primary AI itinerary generation |
| `GROQ_API_KEY` | AI fallback |
| `ADMIN_EMAIL` / `ADMIN_USER_IDS` | Admin panel access |

### Handy scripts

| Command | What it does |
| --- | --- |
| `npm run dev` | Next.js dev server (Turbopack) |
| `npm run build` | Production build |
| `npm run start` | Serve the production build |
| `npm run lint` | Format check with Biome |
| `npm run format` | Auto-format with Biome |

---

## Project structure

```
HappyJourney/
├─ app/                 # Next.js App Router
│  ├─ page.tsx          # Home — hero, places, events, features
│  ├─ trips/            # Saved trip history (auth)
│  ├─ events/           # Events page (auth)
│  ├─ admin/            # Events & hotels admin
│  └─ api/              # AI, trips, geo, hotels, events APIs
├─ components/          # UI + feature components
├─ lib/                 # Firebase, AI, helpers
├─ public/              # Logos, icons, PWA bits
└─ docs/screenshots/    # README device + feature shots
```

---

## API highlights

| Route | Purpose |
| --- | --- |
| `POST /api/ai/plan` | Generate a full AI itinerary |
| `POST /api/ai/suggest` | Budget-aware destination suggestions |
| `POST /api/ai/chat-places` | Place-discovery chat |
| `GET /api/ai/local-places` | Local Indian places near a city |
| `GET/POST /api/trips` | Persist and list trip history |
| `GET /api/geo/reverse` · `/api/geo/ip` | Location helpers |
| `GET /api/hotels/near` | Partner hotels near a place |

---

## Live & credits

| | |
| :--- | :--- |
| **Live** | [happy-journy.vercel.app](https://happy-journy.vercel.app/) |
| **Author** | [Nishanth K R](https://github.com/Nishanth1409) |
| **Collaborators** | [Kartik Gopal](https://github.com/kartikgopal01) |
| **Portfolio** | [nkrportfolio.vercel.app](https://nkrportfolio.vercel.app) |

---

<div align="center">

*Son of a farmer · always a farmer.*

[GitHub](https://github.com/Nishanth1409) · [Portfolio](https://nkrportfolio.vercel.app)

</div>

