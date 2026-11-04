# Portfolio implementation checklist

## Completed in this workspace
- [x] Next.js App Router frontend and separate FastAPI service
- [x] Supplied SAF logo, portrait cutout, reference artwork, and unchanged original CV
- [x] Retro paper grain, pixel typography, responsive home layout, and selected-work image crops
- [x] Homepage, work index and three verified case studies
- [x] Services, experience, research, profile, stack, CV, contact, articles, and privacy pages
- [x] Click/hover/keyboard-aware mega menus, mobile navigation, inquiry type selection, chatbot loading/error/retry states
- [x] Server-side Gemini integration code; key is only read by FastAPI
- [x] FastAPI contact delivery plumbing, validation, spam honeypot, rate limits, size limits, and security headers
- [x] Optional official Cal.com embed; booking UI reports not live until configured
- [x] Page metadata, canonical links, Open Graph metadata, JSON-LD, sitemap, and robots
- [x] Privacy notice, responsive overflow review, deployment and local-development documentation
- [x] Validation: lint, TypeScript, production build, production dependency audit, Python compile, FastAPI health, and all public routes
- [x] Responsive widths checked: 320, 390, 768, 1024, 1440, and 1920 px; no horizontal overflow observed

## Awaiting owner/provider setup
- [ ] Public site domain for final canonical URL and social preview
- [ ] Gemini key set in backend runtime (repository source did not contain a literal key)
- [ ] Verified SMTP sender and credentials for delivered contact messages
- [ ] Cal.com event URL and connected calendar for confirmed bookings
- [ ] Optional Search Console verification
- [ ] Git repository write/deployment approval and preview hosting configuration

## Decision and blocker log
- Followed the supplied build plan and CV as content authority; excluded Azan/BetterHuman from verified projects.
- Kept personal phone number private on the public site.
- Kept service descriptions together on `/services` to avoid thin duplicate SEO pages.
- Kept the project local; no production domain, deployment, or repository write was changed.
- Do not report email, booking, or Gemini integrations as live until credentials are configured and real end-to-end transactions are tested.
- Browser verification used the in-app preview; no persistent screenshot export path was available in this session.
