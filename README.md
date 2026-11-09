# Richmond & Wendy — Traditional Wedding Invitation

A mobile-first Next.js invitation for Richmond Kweku Sam and Wendy Enyonam Tay’s traditional wedding ceremony.

## Local setup

Install dependencies and start the development server:

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in a browser.

## Editable wedding details

All ceremony details, wedding colours, the hashtag, and the Google Maps URL are kept in one typed file:

[`src/content/wedding.ts`](src/content/wedding.ts)

The optimized transparent monogram artwork is stored at:

[`public/images/richmond-wendy-monogram.webp`](public/images/richmond-wendy-monogram.webp)

## Verification commands

```bash
npm run lint
npm run typecheck
npm run build
```

The page is implemented as a static App Router route at `/`.

## Google Maps status

The Google Maps button points directly to the supplied coordinates: `5.563787,-0.264753`. The coordinates and URL can be edited in `src/content/wedding.ts`.
