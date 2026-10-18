# DSA Wiki

A wiki for learning and quick reference on data structures and algorithms.

Live site: https://huyluongme.github.io/dsa-wiki/

Built with [Docusaurus](https://docusaurus.io/) and hosted on GitHub Pages. The site supports English and Vietnamese (language dropdown in the navbar), light and dark themes, offline search, math (KaTeX), diagrams (Mermaid) and multi-language code tabs.

## Requirements

- Node.js 20 or newer (`.nvmrc` pins the version used in CI)

## Develop

```bash
npm install
npm start                    # dev server, English, http://localhost:3000/dsa-wiki/
npm start -- --locale vi     # dev server, Vietnamese
```

The dev server serves one language at a time, and search is only available in a production build:

```bash
npm run build                # builds every language into ./build
npm run serve                # serves the production build locally
```

## Project layout

```
docs/                                          English pages (default language)
i18n/vi/docusaurus-plugin-content-docs/current/  Vietnamese pages (same file names as docs/)
i18n/vi/code.json, docusaurus-theme-classic/    Vietnamese UI strings (navbar, footer, theme)
src/css/custom.css                             Theme colors and global styles
static/                                        Images and other static files
docusaurus.config.ts                           Site configuration
sidebars.ts                                    Sidebar (generated from the docs/ folders)
```

To translate a page, create a file with the same relative path under `i18n/vi/docusaurus-plugin-content-docs/current/`. A page without a translation is still available under `/vi/`, showing the English content, so you can translate pages gradually.

See the **Writing Guide** page on the site for the formatting features and the page template.

## Deploy

Pushing to `master` runs `.github/workflows/deploy.yml`, which builds the site and publishes it to GitHub Pages.

One-time setup: in the repository go to **Settings → Pages → Build and deployment → Source** and choose **GitHub Actions**.

## License

[MIT](LICENSE)
