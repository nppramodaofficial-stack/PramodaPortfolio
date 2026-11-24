# Pramoda N. P. — Trustworthy AI Portfolio

A focused, dark research portfolio built with React, Vite, Tailwind CSS and Framer Motion.

## Positioning
The website presents one coherent research identity: **Trustworthy AI**. Rather than separating probabilistic modelling, uncertainty, interpretability and causal reasoning into unrelated project categories, it brings them together as four connected research pillars.

## Website features
- Premium dark navy visual system with subtle motion and responsive layouts.
- Minimal navigation: About, Trustworthy AI, Research Experience, Contact.
- Interactive Trustworthy AI research map. Select a node to explore a research pillar, its central question, connected project, methods and research notes.
- Four connected pillars:
  1. Prediction reliability — judicial judgment prediction under data corruption.
  2. Interpretability and explanation stability — TrustworthyAI framework.
  3. Probabilistic modelling and uncertainty — remaining useful life prediction.
  4. Causal reasoning — probabilistic and causal analysis of employee burnout.
- Compact academic background and research identity.
- Research experience timeline covering C-FAIR, VIT (current) and St. Joseph’s University (previous).
- Research methods and technical toolkit grouped under the Trustworthy AI approach.
- Contact links and CV access.

The site intentionally excludes a separate publications section and unrelated technical-project listings.

## Run locally

```bash
npm install
npm run dev
```

Open the local URL printed by Vite.

## Build for production

```bash
npm run build
npm run preview
```

## Personalise before deployment
- Confirm the email address and GitHub profile URL in `src/main.jsx`.
- Add or update the CV at `public/pramoda-cv.pdf`.
- Add the repository URL for the TrustworthyAI framework if it differs from the GitHub profile.
- Deploy the project to Vercel by importing the GitHub repository. Vercel detects Vite automatically; use `npm run build` and `dist` as the output directory.


## Deploy to GitHub Pages

This project is configured for a **user site** at `https://nppramodaofficial-stack.github.io/`.

1. Create a public GitHub repository named exactly `nppramodaofficial-stack.github.io`.
2. Upload the contents of this `pramoda-portfolio` folder to the repository root (including the hidden `.github` folder).
3. In GitHub, open **Settings → Pages** and set **Source** to **GitHub Actions**.
4. Open the **Actions** tab and wait for the `Deploy portfolio to GitHub Pages` workflow to complete successfully.
5. Visit `https://nppramodaofficial-stack.github.io/`.

The workflow builds the Vite app and publishes the `dist` folder automatically whenever you push to `main`. The Vite base path remains `/`, which is correct for a GitHub user site.
