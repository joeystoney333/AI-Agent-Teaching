# Hermes Academy

A practical crash course for **Hermes Agent**, Nous Research’s open-source agent
that grows with you. The course teaches users how to install and configure their
own agent, complete a real first task, build persistent context, develop reusable
skills, and set up messaging and scheduled workflows.

Six modules contain 18 lessons with commands, hands-on checkpoints, quizzes, and
official documentation links. A prompt workshop generates editable briefs for
email, expense review, and skill creation. A searchable command reference covers
setup and troubleshooting. Progress and bookmarks are stored in the browser.

The course is an independent guide. It does not install or host Hermes or connect
to the learner’s accounts. Run the provided instructions in your own environment.

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

## Content sources

Course commands and concepts were checked against the official
[NousResearch/hermes-agent](https://github.com/NousResearch/hermes-agent) source
at revision `9b38eb1432d8363fe0f01056d03b0fc123014946`. Each lesson links to the
relevant official documentation. Installers and model offerings can change;
consult the linked documentation for current options.

The learning app requires no API key. Running Hermes on your own machine requires
the model access and integrations you choose to configure. Credentials belong in
your local Hermes setup, never in this website or repository. Learning progress
is local to the current browser and does not sync across devices.
