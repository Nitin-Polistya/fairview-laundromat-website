# Fairview Laundromat demonstration website

This repository contains an unofficial owner-demonstration website for Fairview Laundromat, a self-service laundry business listed at 22229 Lorain Road, Fairview Park, OH 44126.

> Demo Website — Created by Nitin Sharma. This is an unofficial demonstration and is not affiliated with, authorized by, or endorsed by Fairview Laundromat. Business information is based on publicly available sources and may change.

## Technology

- React 19 and TypeScript
- Vite
- Tailwind CSS v4
- Lucide React icons
- npm for package management

## Local development

Install dependencies and start the Vite development server:

```bash
npm install
npm run dev
```

Create a production build with:

```bash
npm run build
```

Run the repository lint checks with:

```bash
npm run lint
```

## Project structure

- `src/App.tsx` — page composition and landmark structure
- `src/components/` — presentational sections and accessible interactions
- `src/components/Reveal.tsx` — native IntersectionObserver scroll-reveal wrapper
- `src/data/business.ts` — business identity, address, phone, hours, directions, and disclaimer
- `src/data/images.ts` — centralized image paths, labels, alt text, and dimensions
- `src/data/faq.ts` — approved FAQ topics and stable accordion IDs
- `src/data/services.ts`, `src/data/amenities.ts`, `src/data/payments.ts`, `src/data/trust.ts` — content data rendered by sections
- `src/index.css` — Tailwind theme tokens, focus styles, motion preferences, and mobile safe-area handling
- `public/` — static assets such as the favicon and the optional image directory

## Image setup

The site currently uses these five existing image assets under `public/images/`:

- `storefront.jpg` — storefront
- `interior.jpg` — interior
- `interior1.jpg` — washer row
- `interior2.jpg` — laundry equipment
- `interior3.jpg` — additional interior facility view

The existing photographs were preserved as supplied; no photographs were downloaded or fabricated. The reusable image component still renders a labeled fallback if a future asset is unavailable, without showing a broken-image icon.

## Deployment notes

This is a static Vite application. Build the site with `npm run build`, then serve the generated `dist/` directory with the chosen static host. Do not deploy or represent this demonstration as an official business website without owner approval.

The page intentionally keeps `noindex, nofollow` in `index.html` and does not include a canonical domain, business schema, review schema, ratings, or ownership verification.

## Converting to an owner-approved official site

Before launch, obtain written owner approval, confirm every business fact and policy, replace or approve the image assets, verify the phone/address/hours/directions links, review the disclaimer and metadata, and decide whether indexing should be enabled. Only then should the site be connected to an official domain or deployed publicly as the business website.

## Known manual verification items

- Confirm current facility amenities, payment options, restroom policy, cart policy, and attendant availability with the owner.
- Test the Google Maps embed and directions link in the intended production environment.
- Add only owner-approved photographs and mark each matching image configuration as available.
- Check the final UI with keyboard navigation, a screen reader, and mobile Safari safe-area behavior.

Creator attribution: Nitin Sharma.
