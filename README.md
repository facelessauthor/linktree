# Faceless Linktree

Dark, cinematic, scroll-stopping link hub with animated black fog.

## Files you should provide
Place these in `assets` according to the paths:
- `assets/images/hero-bg.jpg` — your moody hero background
- `assets/images/faceless-logo.png` — transparent logo
- `assets/images/og-preview.jpg` — social preview (1200x630 suggested)
- `assets/images/fog-poster.jpg` — static poster frame for the fog video
- `assets/video/smoke-overlay.mp4` — looping black fog (muted, short, seamless)
- Icons (32–64px PNGs):
  - `assets/icons/icon-instagram.png`
  - `assets/icons/icon-tiktok.png`
  - `assets/icons/icon-facebook.png`
  - `assets/icons/icon-email.png`
  - `assets/icons/icon-goodreads.png`
  - `assets/icons/icon-amazon.png`
  - `assets/icons/favicon.ico`
  - `assets/icons/apple-touch-icon.png`

## Customize
- Update links in `index.html` (buttons + socials).
- Replace the headline and tagline with exact copy from your site.
- Adjust colors in `css/styles.css` (main accent is `--gold`).

## Deploy to GitHub Pages
1. Create a repo, e.g. `faceless-linktree`.
2. Drag/drop these files into the repo root, commit to `main`.
3. In **Settings → Pages**, set Source to **Deploy from a branch**, Branch **main** / root.
4. Visit your Pages URL. (Optional) Add a custom domain and update `og:url` in `index.html`.

## Notes
- Motion respects `prefers-reduced-motion` and pauses on hidden tabs.
- Fog uses a lightweight MP4. Keep it small (≤3–5MB) if possible.