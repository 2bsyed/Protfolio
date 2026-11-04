# Syed Abrar Fiaz — Portfolio

A Next.js App Router portfolio with a separate FastAPI service for the Gemini assistant and email-backed contact inquiries. The design uses the supplied SAF mark, portrait, and retro paper/pixel visual direction. The original CV PDF remains available and unchanged.

## Local development

1. Install frontend dependencies with `npm install`.
2. Copy `.env.example` to `.env.local`. Set `NEXT_PUBLIC_FASTAPI_URL=http://localhost:8000` for local use.
3. Start the frontend with `npm run dev` and open `http://localhost:3000`.
4. In another terminal, create a Python virtual environment, install `requirements.txt`, copy `backend/.env.example` to `backend/.env`, and start the API from the project root with `uvicorn backend.main:app --reload --port 8000`.

The Next.js fonts are self-hosted at build time by `next/font`.

## Public routes

- `/` — portfolio homepage
- `/work` — verified projects
- `/work/ai-mentor`, `/work/network-anomaly-detection`, `/work/eduflow` — case studies
- `/services` — service categories and scoping information
- `/experience`, `/research`, `/about`, `/stack` — professional profile pages
- `/cv` — print-friendly CV summary and original PDF viewer/download
- `/contact` — separate hiring and project inquiry forms, plus optional Cal.com scheduler
- `/articles` — honest empty state until an article is approved
- `/privacy` — privacy notice

Service detail pages remain sections on `/services` so they do not create thin doorway pages. The dynamic article route returns 404 until approved article content exists.

## Backend and integrations

- `GEMINI_API_KEY` is read only by FastAPI. It is never added to browser code. The assistant uses Google's Interactions API with `gemini-3.8-flash`, `store: false`, verified profile facts, timeouts, request-size validation, and per-process rate limiting.
- `FRONTEND_ORIGINS` must list the exact frontend origin or origins allowed to call FastAPI.
- Contact messages are sent to `CONTACT_TO_EMAIL` using SMTP. Set the SMTP fields to a verified sender permitted by your email provider. Until configured, the form reports that email delivery is unavailable and gives the direct email address. No database stores submissions.
- `NEXT_PUBLIC_CALCOM_LINK` accepts a Cal.com event path such as `username/event-name`. When configured, the contact page renders the Cal.com scheduler and offers a new-tab fallback. Configure the event, availability, calendar, notifications, and timezone in Cal.com first. Until then, the page clearly says scheduling is not live.
- `NEXT_PUBLIC_SITE_URL` should be the chosen public HTTPS origin before deployment; it supplies canonical metadata and sitemap URLs. Local development defaults to localhost.

No production domain, deployment, Search Console property, or repository write has been changed. The GitHub source code did not contain a tracked literal Gemini key; set the key in `backend/.env` locally or in the backend host's secret settings. Never place it in a `NEXT_PUBLIC_*` variable or commit it.

## Deployment

Deploy the Next.js frontend and FastAPI backend as separate services. Set the frontend's `NEXT_PUBLIC_FASTAPI_URL` to the public HTTPS FastAPI origin at build time. Set Gemini and SMTP credentials only in the backend host's secret settings, and set `FRONTEND_ORIGINS` to the deployed site origin. Set `NEXT_PUBLIC_SITE_URL` and `NEXT_PUBLIC_CALCOM_LINK` only after selecting the public domain and a configured event. Use a preview deployment first and keep production unchanged until it is reviewed and explicitly approved.

## QA commands

- `npm run lint`
- `npx tsc --noEmit`
- `npm run build`

Email, Gemini, and Cal.com remain **not yet live** until configured and tested with real credentials and an end-to-end transaction. See `IMPLEMENTATION.md` for the checklist and remaining setup.
