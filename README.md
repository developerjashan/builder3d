# BUILDERS 3D — Website

React + Vite + Tailwind CSS website with three pages: **Products**, **Industrial**,
and **Projects**, sharing one Navbar and Footer.

## 1. Where to put your images

Every image on the site is currently a clearly labeled placeholder (dashed box with
a filename underneath it, e.g. `/images/product-01.jpg`). To add a real photo:

1. Drop your image file into `public/images/` using the exact filename shown on the
   placeholder (e.g. `public/images/product-01.jpg`).
2. Open the component that renders it and replace the `<ImagePlaceholder ... />` tag
   with a normal image tag:
   ```jsx
   <img src="/images/product-01.jpg" alt="Modular Desk Organizer" className="h-full w-full rounded-md object-cover" />
   ```

Where placeholders live:
| Section | File |
|---|---|
| Products hero | `src/pages/Products.jsx` |
| Featured products (6) | `src/pages/Products.jsx` → `products` array |
| Industrial hero | `src/pages/Industrial.jsx` |
| Projects hero, gallery (6) | `src/pages/Projects.jsx` |

Your actual logo artwork is saved for reference in
`public/images/brand-reference/`. The navbar/footer currently use a lightweight
text-based mark (`src/components/Logo.jsx`) built from the logo's colors — crop a
clean version of just the "B" mark (transparent background) from your reference
files and swap it in following the instructions inside that component.

## 2. Where to change products, prices and project listings

- **Products page** — edit the `products` array near the top of `src/pages/Products.jsx`.
  Each entry has `name`, `description`, `price` and `imagePath`.
- **Project gallery** — edit the `gallery` array near the top of `src/pages/Projects.jsx`.
- **Industrial services / industries** — edit the `solutions` and `industries` arrays
  in `src/pages/Industrial.jsx`.

All copy on the site lives directly in the page files under `src/pages/` — it's
plain JSX text, safe to edit directly.

## 3. Where to change WhatsApp / email

Two places:

1. **Footer** (`src/components/Footer.jsx`) — update the `mailto:`, `wa.me/`, and
   Instagram links near the top of the "Contact" column.
2. **Industrial enquiry form** (`src/components/EnquiryForm.jsx`) — this form
   currently validates input and shows a success message, but isn't wired to send
   anywhere yet. Set the `FORM_ENDPOINT` constant near the top of the file to a form
   backend URL (e.g. [Formspree](https://formspree.io)), or replace the submit
   handler with a `mailto:` / WhatsApp deep link.

CTA buttons that use `mailto:hello@builders3d.in` throughout the site should also be
updated to your real address (find/replace is easiest).

## 4. Run it locally

Requires [Node.js](https://nodejs.org) 18+.

```bash
npm install
npm run dev
```

Then open the URL shown in the terminal (usually `http://localhost:5173`).

## 5. Deploy it for free

**Vercel** (recommended, zero-config for Vite):
```bash
npm i -g vercel
vercel
```
Or connect your GitHub repo at [vercel.com](https://vercel.com) — it auto-detects
Vite and deploys on every push.

**Netlify:**
```bash
npm run build
```
Then drag the generated `dist/` folder onto [app.netlify.com/drop](https://app.netlify.com/drop),
or connect the repo with build command `npm run build` and publish directory `dist`.

**GitHub Pages:** build with `npm run build`, then deploy the `dist/` folder using
the `gh-pages` package or GitHub's "Pages" repo setting.

---

## Project structure

```
src/
  components/   Navbar, Footer, Button, ImagePlaceholder, cards, form, icons
  pages/        Products.jsx, Industrial.jsx, Projects.jsx
  App.jsx       Routes
  index.css     Design tokens, base styles, signature "viewport corner" + build-line effects
tailwind.config.js   Color palette, fonts, animations
```

## Design notes

- **Colors** are taken from the logo: near-black (`#0B0B0D`), orange accent
  (`#FF6A00`), off-white background (`#F7F6F3`), plus a steel/silver tone for
  metallic accents.
- **Type**: Space Grotesk (display headings), Inter (body text), IBM Plex Mono
  (labels, prices, eyebrows — the "engineering spec sheet" detail).
- **Signature detail**: image placeholders and cards use CAD-viewport-style corner
  brackets that widen slightly on hover, and section headers draw a short orange
  line on load — a nod to a print head tracing a path.
