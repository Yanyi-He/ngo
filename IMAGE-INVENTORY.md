# COAN Image Inventory

This inventory documents current frontend image assets and how they should be
treated before public deployment.

| Asset | Current use | Classification | Status | Notes |
| --- | --- | --- | --- | --- |
| `/public/coan-logo.png` | Logo V0|
| `/logo.png` | Not rendered | Defective temporary logo export | Replace | Duplicate-style source image kept outside `public/`. Do not use for production. |
| `/public/coan-hero-banner.png` | Available asset | Illustrative / placeholder | Needs review | Use only if the image accurately represents COAN-approved community/public-service imagery. |
| `/public/coan-volunteers.png` | Homepage hero | Illustrative / placeholder | Needs review | Current alt text describes a COAN community outreach scene. Replace with consent-cleared COAN photography or approved illustration before public launch. |
| `/public/coan-workshop.png` | Homepage mission section | Illustrative / placeholder | Needs review | Used to communicate workshop-style public-service learning. Do not imply these are actual COAN participants unless approved. |
| `/public/coan-planning.png` | Homepage and About page | Illustrative / placeholder | Needs review | Used for resource planning and volunteer coordination. Replace with approved organizational imagery when available. |
| `/public/coan-community-event.png` | Homepage and Volunteer page | Illustrative / placeholder | Needs review | Used for community/event storytelling. Avoid claims that visible people are actual COAN members unless confirmed. |
| `/public/file.svg`, `/public/globe.svg`, `/public/next.svg`, `/public/vercel.svg`, `/public/window.svg` | Unused starter assets | Framework placeholder | Remove later | These are default Next.js assets and should be removed if not needed. |

## Integration Rules

- Use `next/image` for raster assets.
- Reserve `priority` for the true LCP hero image only.
- Keep meaningful alt text for informative imagery.
- Use empty alt text only for decorative assets.
- Do not place photos in every card.
- Do not imply stock, placeholder, or AI-generated people are actual COAN
  members or participants.
- Replace temporary imagery with organization-owned, licensed, or
  final-approved assets before public deployment.
