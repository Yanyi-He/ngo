COAN Website Platform
=====================

This project implements the Canadian Observers and Activists Network website:
public-service pages, volunteer matching forms, community posts, event
registration surfaces, resource discovery, an admin dashboard, a Supabase schema,
and a FastAPI/LangGraph chatbot backend foundation.

Frontend
--------

```bash
npm run dev
```

Open http://localhost:3000.

Visual System
-------------

Current visual upgrades include:

- Semantic two-column homepage hero with real HTML copy, CTA links, trust
  indicators, and local community image assets.
- COAN horizontal logo asset rendered with `next/image`; the temporary logo
  export should be replaced by a transparent SVG or PNG from the design team.
- Sticky responsive header with active navigation states and a clear
  `中文即将上线` language placeholder.
- `next/font` typography using Inter with Noto Sans SC fallback.
- Impact-style platform indicators.
- Icon-led service cards using `lucide-react`.
- Step-by-step "How COAN helps" section.
- Richer resource and event cards with metadata and clear CTAs.
- Route-ready resource, event, and community cards for future detail pages.
- Public-service chatbot preview with disclaimer language.
- Volunteer recruitment banner.
- Trust and safety section for nonprofit credibility.
- Restrained motion system with scroll reveal, animated platform indicators,
  page fade transitions, mobile menu animation, and reduced-motion support.

Component Strategy
------------------

Reusable UI primitives live in `components/ui.tsx`, including containers,
sections, buttons, notices, status badges, and image panels. The logo lives in
`components/brand-logo.tsx`. Content and demo data are centralized under
`lib/content.ts` and `lib/mock-data/` so pages do not hardcode records.

Motion components live in `components/motion/` and are intentionally small:
CSS transitions cover simple hover/focus feedback, while IntersectionObserver
drives restrained scroll reveal, counters, chatbot preview sequencing, and
light parallax. No animation dependency is required for the MVP.

Accessibility Approach
----------------------

The interface uses semantic page sections, visible labels, keyboard focus
states, high-contrast text, restrained motion, and minimum 44px action targets
where practical. The design avoids color-only meaning and keeps chatbot,
volunteer, and community experiences clear about consent and information
boundaries.

Animations respect `prefers-reduced-motion: reduce`. Reveal content is visible
by default before JavaScript enhancement, so information remains accessible if
client-side motion fails to run.

Image and Content Replacement Plan
----------------------------------

The MVP uses local demo images in `public/`:

- `coan-hero-banner.png`
- `coan-workshop.png`
- `coan-planning.png`
- `coan-community-event.png`
- `coan-volunteers.png`

In production, replace these with consent-cleared COAN photography, partner
event images, or commissioned illustrations. Keep filenames stable or update the
image references in the relevant page/components.

The current logo file includes extra whitespace and is treated as a temporary
demo asset. Replace it with a transparent SVG or optimized PNG while preserving
the accessible alt text and `object-contain` rendering behavior.

Backend
-------

```bash
cd backend
python -m venv .venv
source .venv/bin/activate
pip install -r requirements.txt
uvicorn main:app --reload
```

Environment variables are documented in `.env.example`.

Database
--------

Use `supabase/schema.sql` as the starting migration for profiles, volunteer
applications, mentor and mentee profiles, manual matches, posts, comments,
events, registrations, resources, and consent-based chatbot logs.

Notes
-----

The frontend is dependency-light and content-driven so the public website can be
demoed immediately while Supabase Auth, shadcn/ui, and live chatbot calls are
integrated in later development.
