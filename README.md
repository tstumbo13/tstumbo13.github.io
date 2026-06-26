# Horsepower Kettlebell Workouts — Installable PWA

This folder is a complete, self-contained Progressive Web App. Deploy it to any static host, open the URL on your phone, and install it. It'll behave like a native app — full-screen, own icon, works offline.

**Tagline (used everywhere):** *Kettlebell workouts built for the long run.*

Tied to the Thoroughbred Wellness and Recovery brand: dark sage on ink black, kettlebell silhouette, built for the long run.

---

## Fastest deploy: Cloudflare Pages (recommended)

Cloudflare Pages has **unlimited bandwidth on the free plan**, no credit-cap surprises, and the same drag-and-drop experience as Netlify. One account, lifetime free hosting.

1. **Create a free Cloudflare account** at [dash.cloudflare.com](https://dash.cloudflare.com) (one-time, save the password to your phone's keychain so you tap-and-Face-ID after).
2. In the dashboard, go to **Workers & Pages** → **Create** → **Pages** → **Upload assets**.
3. **Name your project** (e.g., `horsepower-kb`). This becomes your URL: `horsepower-kb.pages.dev`.
4. **Drag this folder** (or the `.zip`) into the upload area. It'll process in 20-30 seconds.
5. Click **Deploy site**. Done.
6. Open the URL on your phone:
   - **iPhone:** Open in Safari → tap **Share** → **Add to Home Screen**.
   - **Android:** Open in Chrome → tap **⋮** → **Install app**.

The URL is permanent and free. Add a custom domain later (Settings → Custom domains) — Cloudflare auto-issues the HTTPS cert.

### Alternative: Netlify Drop
If you'd rather use Netlify, drag this folder onto [netlify.com/drop](https://app.netlify.com/drop). Same drag-and-drop flow. The free tier is more limited though (300 credits/month, hard-capped — site pauses if you exceed it). Cloudflare Pages is the smoother long-term choice.

---

## What's in this folder

| File | What it does |
|---|---|
| `index.html` | The app shell (loads everything else) |
| `app.bundle.js` | The compiled React app — all features, 27 exercises, 6 preset workouts |
| `manifest.json` | PWA manifest (name, icons, theme color) |
| `service-worker.js` | Caches the app for offline use |
| `icon-*.png` | App icons in all sizes iOS/Android need |

That's it. No backend, no database. All workouts, history, and notes save to `localStorage` on the device.

## The presets

1. **The Foundation** (Beginner, ~18 min) — Three rounds of the six fundamental movements
2. **The Engine** (Intermediate, ~25 min) — Three rounds of clean, press, squat, row + power finisher
3. **The Anvil** (Advanced, ~32 min) — Five rounds heavy strength + three rounds power
4. **EMOM Iron** (Conditioning, ~14 min) — Every minute on the minute, four rounds
5. **Inferno** (Conditioning, ~15 min) — Three rounds, 40s on / 20s off
6. **Iron Core** (Core, ~16 min) — Three rounds of midline work

---

## Going to production

When you're ready to make this a real product (custom domain, payments, accounts):

1. **Buy a domain** — Namecheap, Cloudflare Registrar (cheapest, no markup), or Google Domains. Suggested: `horsepowerkb.com`, `horsepower.fit`, or `hpkettlebell.app`.
2. **Attach to Cloudflare Pages** — Settings → Custom domains → Add. If you bought through Cloudflare Registrar, it's one click.
3. To add login, payments, and cross-device sync, hand the developer brief (`forge-developer-brief.md` — update the name to Horsepower throughout before sending) to a contract React developer. They'll extend this PWA with auth + Stripe.

## What works offline

After the first load, everything works without internet:
- All workouts, library, builder, history
- Sound and vibration cues
- Custom workouts, notes, settings

What needs internet:
- YouTube form demo videos (they're embeds, not stored locally)
- First-time font load (Google Fonts — cached after first visit)

## Updating the app later

When you make changes:

1. Edit `horsepower-kettlebell.jsx` (the source file)
2. Re-run the build (see "Build process" below)
3. Bump `CACHE_NAME` in `service-worker.js` (e.g., `forge-v1` → `forge-v2`) so existing installs pull the update
4. Re-deploy by dragging the folder again on Cloudflare Pages, or use Git-based deploys for one-click updates

## Build process (for the next round)

The included `app.bundle.js` was built from `horsepower-kettlebell.jsx` using esbuild. To rebuild:

```bash
npm install react@18 react-dom@18 esbuild
./node_modules/.bin/esbuild horsepower-kettlebell.jsx \
  --bundle --minify --format=iife --target=es2020 \
  --loader:.jsx=jsx --jsx=automatic \
  --define:process.env.NODE_ENV='"production"' \
  --outfile=app.bundle.js
```

## Troubleshooting

**"Add to Home Screen" doesn't appear on iPhone.** You must use Safari, not Chrome or Firefox on iOS. Apple restricts PWA install to Safari.

**App doesn't appear installable on Android.** Make sure you're visiting an HTTPS URL (Cloudflare provides this automatically). Service workers and PWA installs require HTTPS.

**Changes don't show up after redeploy.** The service worker is caching the old version. Bump `CACHE_NAME` in `service-worker.js` and redeploy. Or in DevTools → Application → Service Workers → **Unregister**, then refresh.

**Storage limit.** `localStorage` caps at ~5–10MB per origin. Plenty for hundreds of workouts and history entries. If you ever hit the limit, the next version (with cloud sync via Supabase) solves this.
