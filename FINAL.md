# Happy Journey

Canonical notes for contributors.

- **GitHub:** https://github.com/Nishanth1409/happy-journy  
- **Live:** https://happy-journy-two.vercel.app/  

## Run locally

```bash
git clone https://github.com/Nishanth1409/happy-journy.git
cd happy-journy
npm install
cp .env.example .env.local   # if present; otherwise create .env.local with Clerk/Firebase/AI keys
npm run dev
```

Never commit `.env*`, Firebase admin JSON, or other secrets.

See root `README.md` and `VERCEL_DEPLOYMENT.md` for full setup.
