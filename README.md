# Critter Care

Website for **Critter Care**, a professional pet sitting and dog walking business serving the South Bay area of Los Angeles since 1999.

Live site: [www.critter-care.com](https://www.critter-care.com)

## Tech Stack

- [Astro](https://astro.build/) v5 -- static site generator
- [Tailwind CSS](https://tailwindcss.com/) v4 -- utility-first styling (via `@tailwindcss/vite`)
- [Decap CMS](https://decapcms.org/) v3 -- Git-based content management
- [Netlify](https://www.netlify.com/) -- hosting, forms, Identity + Git Gateway for CMS auth
- Fonts: Nunito (headings) and Inter (body) via Google Fonts

## Getting Started

```sh
npm install
npm start        # dev server at localhost:4321
```

## Scripts

| Command           | Description                                      |
| :---------------- | :----------------------------------------------- |
| `npm start`       | Start the Astro dev server (`astro dev`)          |
| `npm run build`   | Build the production site to `./dist/`            |
| `npm run preview` | Preview the production build locally              |

## Project Structure

```
/
├── public/
│   ├── admin/
│   │   ├── config.yml          # Decap CMS collection definitions
│   │   └── index.html          # Decap CMS admin panel entry point
│   ├── docs/                   # Downloadable PDFs (service contract, pet questionnaire)
│   └── images/
│       ├── gallery/            # Photo gallery images
│       └── testimonials/       # Testimonial pet photos
├── src/
│   ├── assets/images/          # Astro-optimized images (hero banner, etc.)
│   ├── components/
│   │   ├── ContactForm.astro   # Netlify Forms contact form
│   │   ├── Footer.astro
│   │   ├── Hero.astro
│   │   ├── Navbar.astro
│   │   ├── PhotoGallery.astro  # Lightbox gallery component
│   │   ├── ServiceCard.astro
│   │   └── TestimonialCard.astro
│   ├── content/
│   │   ├── settings.json       # Business name, location, contact info, social links
│   │   ├── services.json       # Pet care services and pricing
│   │   ├── testimonials.json   # Customer testimonials with pet photos
│   │   ├── about.md            # About page content (markdown)
│   │   └── hire-us.md          # Hire Us page content (markdown)
│   ├── layouts/
│   │   └── BaseLayout.astro    # Shared HTML shell (head, nav, footer, Netlify Identity script)
│   ├── pages/
│   │   ├── index.astro         # Home — hero, services overview, featured testimonials, CTA
│   │   ├── services.astro      # Full services listing with pricing
│   │   ├── about.astro         # About page (renders about.md)
│   │   ├── hire-us.astro       # Contact form + downloadable documents
│   │   ├── testimonials.astro  # All customer testimonials
│   │   ├── gallery.astro       # Photo gallery with lightbox
│   │   └── 404.astro           # Custom 404 page
│   ├── styles/
│   │   └── global.css          # Tailwind v4 import, custom theme colors, lightbox/modal styles
│   └── images/                 # Additional images (caricature illustration)
├── astro.config.mjs
├── netlify.toml
├── package.json
└── tsconfig.json
```

## Content Management (Decap CMS)

The site uses [Decap CMS](https://decapcms.org/) for content editing at `/admin/`. Authentication is handled via Netlify Identity with Git Gateway -- edits commit directly to the `main` branch.

### CMS Collections

| Collection      | File                            | What it manages                            |
| :-------------- | :------------------------------ | :----------------------------------------- |
| Site Settings   | `src/content/settings.json`     | Business name, tagline, location, socials  |
| Services        | `src/content/services.json`     | Service names, durations, pricing, descriptions |
| Testimonials    | `src/content/testimonials.json` | Customer quotes and pet photos             |
| About Page      | `src/content/about.md`          | About Us page body (markdown)              |
| Hire Us Page    | `src/content/hire-us.md`        | Hire Us page body (markdown)               |
| Documents       | `public/docs/`                  | Uploadable PDFs (service contract, pet questionnaire) |

### Using the CMS

1. Go to `https://www.critter-care.com/admin/`
2. Log in with Netlify Identity
3. Edit content and publish -- changes are committed to Git and trigger a Netlify rebuild

## Deployment

The site is deployed on **Netlify** with the following configuration (see `netlify.toml`):

- **Build command:** `npm run build`
- **Publish directory:** `dist`
- **Netlify Forms:** The contact form on `/hire-us` uses Netlify's built-in form handling (`data-netlify="true"`)
- **Netlify Identity + Git Gateway:** Powers CMS authentication
- **Redirect rule:** `/admin/*` is rewritten to `/admin/index.html` (SPA fallback for Decap CMS)
