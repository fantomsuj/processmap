# Landing page draft

*Automatically synced with your [v0.app](https://v0.app) deployments*

[![Deployed on Vercel](https://img.shields.io/badge/Deployed%20on-Vercel-black?style=for-the-badge&logo=vercel)](https://vercel.com/sujay-kolpurus-projects/v0-landing-page-draft)
[![Built with v0](https://img.shields.io/badge/Built%20with-v0.app-black?style=for-the-badge)](https://v0.app/chat/jup7c0CpfuR)

## Overview

This repository will stay in sync with your deployed chats on [v0.app](https://v0.app).
Any changes you make to your deployed app will be automatically pushed to this repository from [v0.app](https://v0.app).

## GitHub Pages deployment

This project exports as a static site so it can run on GitHub Pages.

- Install deps and build: `pnpm install && pnpm run build` (outputs to `out/` with `.nojekyll` and `index.html`).
- For project pages (e.g. `https://username.github.io/processmap`), set `NEXT_PUBLIC_BASE_PATH=/processmap` in your build environment so assets load from the right path. Leave it empty for custom domains or user/org pages.
- `public/CNAME` is included so `wevyn.com` is preserved when publishing the `out/` folder.
- Deploy the `out/` directory to your `gh-pages` branch (e.g. with `actions/upload-pages-artifact` + `actions/deploy-pages` or `peaceiris/gh-pages`). Make sure the entry file (`index.html`) sits at the root of the published artifact.
