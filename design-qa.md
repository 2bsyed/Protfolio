# Design and functional QA

## Visual review

- Compared the live homepage in the in-app browser at a 1536 × 1024 viewport with `assets/source/a_retro_paper_textured_portfolio_homepage_like_the.png`.
- The live page reproduces the cream grain, pixel headings, thin ink dividers, electric-blue terminal artwork, overlapping supplied portrait, three framed work cards, and blue footer treatment.
- Confirmed the supplied portrait is rendered as a transparent cutout. Selected-work illustrations use crops from the supplied design reference as requested.
- Verified the responsive page at 320, 390, 768, 1024, 1440, and 1920 px. `document.documentElement.scrollWidth` matched the viewport width at each size. The desktop nav gives way to compact navigation below its breakpoint.
- A browser screenshot was visually inspected during this session, but the browser integration did not expose a persistent local screenshot export path.

## Functional review

- All implemented public routes returned HTTP 200, including the three case studies, contact, CV, privacy, robots, and sitemap routes.
- Homepage accessible tree exposes semantic navigation, headings, project case study links, CV links, email, GitHub, LinkedIn, and the assistant launcher.
- Lint, TypeScript, optimized production build, and production dependency audit passed. Production audit reported zero vulnerabilities.
- Python compilation passed. FastAPI `/health` returned 200. API responses include `nosniff`, strict-origin referrer policy, `DENY` frame policy, and `no-store` cache policy.

## External configuration still required

- Contact email delivery requires SMTP settings and a verified sender.
- Gemini assistant responses require a backend-only `GEMINI_API_KEY`.
- Booking requires `NEXT_PUBLIC_CALCOM_LINK` plus a configured Cal.com event and connected calendar.
- A public domain, repository write, and hosting credentials have not been configured; the current result is local and production remains untouched.
- Chatbot, contact email, and booking could not be end-to-end tested without those provider credentials. The UI communicates their unconfigured state instead of claiming success.

## Accessibility/performance limits

- Navigation, forms, chat, and responsive layouts were reviewed in the browser. A formal WCAG/axe or Lighthouse audit was not available during this implementation; do not treat this as certification or a measured Core Web Vitals result.
- The production dependency audit (`npm audit --omit=dev`) is clean. The development dependency tree has remaining moderate findings in the ESLint toolchain; applying a breaking major-version update was not warranted for the production site.
