# Hermes Academy

A browser app teaching practical AI agent workflows with Hermes. Includes four
course modules, lesson navigation, saved bookmarks, browser-local progress, and
practice simulations for email, expenses, and task planning.

## Run locally

Requires Node.js 24 and npm.

```sh
npm ci
npm run dev
```

## Publish a website

The repository includes a GitHub Pages workflow that builds and publishes `dist`.
In repository **Settings → Pages**, set **Source** to **GitHub Actions**.
Then open **Actions → Deploy Hermes Academy → Run workflow** and select `main`.
Subsequent pushes to `main` publish automatically.

The default website address, once the deployment succeeds, is:

https://joeystoney333.github.io/AI-Agent-Teaching/

The Actions deployment summary confirms the actual published URL.

## Production build

```sh
npm run build
npm run preview
```

The `dist` directory can also be hosted on any static web host. Relative asset
paths support hosting in a subdirectory or on a custom domain.

The course runs without an API key. Practice exercises use sample data and do not
connect to email or financial accounts. Learning progress is stored in the
current browser and does not sync across devices.
