# Happy Journey — FINAL (canonical) project

**Use only this folder:** `D:\STUDIS\project\apps\HappyJourney`

| Item | Value |
| :--- | :--- |
| **Local path** | `apps/HappyJourney` |
| **GitHub (canonical / push here)** | https://github.com/Nishanth1409/happy-journy |
| **Live site (Vercel)** | https://happy-journy.vercel.app/ |
| **Optional upstream** | remote `kartik` → https://github.com/kartikgopal01/happy-journy |

## What changed

Previously there were **two** local folders for the same app:

1. `HappyJourney` — live copy with `.env.local` / runtime  
2. `happy-journy` — thin clone of your GitHub (README + CI only)

They are now **merged into one**. The duplicate thin clone was removed. CI + portfolio README live in this folder. `origin` points at **Nishanth1409/happy-journy** (Vercel).

## Commands

```bash
cd D:\STUDIS\project\apps\HappyJourney
npm run dev          # local
git push origin master   # updates GitHub → Vercel
```

## Do not

- Create a second `apps/happy-journy` clone
- Commit `.env*` or `*firebase-adminsdk*.json`

## Related (not this runtime app)

- `academic/happy-journey-reports` — college documents  

Updated: 2026-07-27
