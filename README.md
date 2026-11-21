# Perfect Forms Studio Winterthur (Astro)

Static **Astro** website for Perfect Forms Studio Winterthur with shared layout/navigation components, zero framework runtime bloat, and static build output ready for GitHub Pages or any static host.

## Project Structure
- `astro.config.mjs`: Astro configuration (`site`, `base`, static output).
- `src/layouts/Layout.astro`: Shared HTML shell, Google Fonts (`Urbanist`), skip link, navbar, footer, and interactive client behaviors (diashow, goals carousel, parallax, form validation).
- `src/components/Navbar.astro` & `Footer.astro`: Single source of truth for navigation and footer across all pages.
- `src/pages/`: Clean file-based routes:
  - `index.astro` (`/`)
  - `preise.astro` (`/preise`)
  - `sun400xl.astro` (`/sun400xl`)
  - `das-studio.astro` (`/das-studio`)
  - `kontakt.astro` (`/kontakt`)
  - `impressum.astro` (`/impressum`)
  - `datenschutz.astro` (`/datenschutz`)
- `src/styles/global.css`: Central design system & layout styles.
- `src/utils/url.ts`: `withBase()` helper so all internal routes, images, and PDFs work cleanly under `/perfectforms` or `/`.
- `public/Images/` & `public/docs/`: Static photographs and downloadable PDF brochures.

## Local Development
```bash
npm run dev      # Start Astro dev server at http://localhost:4321/perfectforms/
npm run build    # Build static site into dist/
npm run preview  # Preview production dist/ build locally
npm run deploy   # Build and publish dist/ to the gh-pages branch
```
