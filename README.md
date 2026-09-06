# Farhan — Portfolio

Professional, responsive portfolio for Muhammed Farhan Sadique Mahi. React and Vinext render the entire site as static HTML; no backend, database, API key or paid runtime is needed.

## Run and build

```sh
npm ci
npm run dev
npm run lint
npx tsc --noEmit
npm run build
npm run check
```

Production files are in `dist/client`. Preview the built site with any static HTTP server. Opening `index.html` directly via `file://` does not resolve root-relative assets.

## Free hosting

Upload the **contents of `dist/client`**, or unzip `outputs/portfolio-static.zip` and upload the extracted folder, to a static host. The generated `index.html` must sit at the web root.

- [Cloudflare Pages Direct Upload](https://developers.cloudflare.com/pages/get-started/direct-upload/): upload the built folder or ZIP.
- [Netlify Drop](https://app.netlify.com/drop): upload the built folder while signed into your account. [Official instructions](https://docs.netlify.com/deploy/create-deploys/#drag-and-drop).

Choose a free plan and review its current limits. The same output also works on GitHub Pages at a domain root, such as `farhans-codes.github.io`. A GitHub project subpath requires a base-path configuration before building.

`netlify.toml` contains the build and publish settings for a future Git-connected deployment. No Git commit, push or public deployment is performed by this project itself. The Sites registration in `.openai/hosting.json` is private and unpublished until an approved version is deployed.

## Update content

- `app/page.tsx`: biography, selected projects, experience, research and contact links.
- `app/globals.css`: shared colour, typography and line-height tokens, layout and responsive styles.
- `app/layout.tsx`: page title and share metadata. Add the final canonical URL once the public domain is selected.
- `public/images/farhan-portrait.webp`: optimised portrait for the website.
- `public/images/farhan-portrait.png`: full-size professional portrait.
- `public/farhan-mahi-cv.pdf`: two-page, selectable-text CV.
- `scripts/create_cv.py`: optional PDF rebuild using ReportLab and pypdf.

The generated Shadcn library and its helper hook remain unchanged and are excluded from project lint; lint covers authored portfolio code. The site uses semantic links and requires no custom client-side interaction state.

## Content sources

Facts were checked on 6 September 2026 against the supplied two-page CV, connected GitHub profile, repository source and publication records.

- [GitHub profile](https://github.com/farhans-codes)
- [AI Limit Status](https://github.com/farhans-codes/ai_limit_status): featured **personal** open-source project. Real screenshot from `docs/screenshots/macos-usage-popover.png` in that repository. Independent project, not endorsed by OpenAI or Anthropic.
- [Task Manager](https://github.com/farhans-codes/task_manager): Flutter source verifies REST integration, authentication and task status views.
- [Brain tumour classification prototype](https://github.com/farhans-codes/brain_tumor_webapp): Python/Flask/TensorFlow academic project; no patient images or reports are copied into this site.
- [One Ummah](https://ummah.one/): appears **only in employment experience**, as an IRD Foundation project.
- [DeepMedScan](https://doi.org/10.1504/IJAIH.2026.154457): co-authored journal article, 2026.
- [DragonFruitQualityNet](https://arxiv.org/abs/2508.07306): co-authored preprint. The supplied CV says 2026; the authoritative arXiv record says 10 August 2025, so the portfolio and downloadable CV use 2025.

The downloadable CV is newly typeset from the supplied CV and verified public projects; it is not a byte-for-byte copy of the attached images.

## Portrait edit

Built-in ImageGen, `identity-preserve` edit, one generation. Prompt: preserve the exact facial structure, proportions, eyes, skin tone, curly black hair, full beard and calm expression; replace the light blue shirt with a plain black crewneck, use a deep charcoal studio background, soft key light and delicate edge light, frame a vertical 4:5 head-and-shoulders portrait, retain natural skin texture, and avoid text, logos, heavy retouching or changes to identity. The WebP is an optimised copy of the generated PNG.
