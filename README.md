# SentryX — Autonomous AI Command Center

Five-page Next.js marketing site and tactical video-analytics workbench for SentryX: an AI-driven platform that turns existing IP CCTV into a proactive border-surveillance command center.

## Run locally

```bash
npm install
npm run dev
```

Open `http://localhost:3000` (or the port printed by Next.js if 3000 is occupied).

## Pages

- `/` — overview and interactive camera dashboard lightbox
- `/platform` — edge-AI architecture
- `/solutions` — deployment scenarios
- `/pricing` — pricing, FAQ, and briefing form
- `/resources` — editorial cards and newsletter form

## Tactical workbench

The overview page includes the IBVAP-compatible workflow:

- Upload MP4/AVI/MOV footage or provide a public YouTube URL.
- Add draggable restricted-zone and tripwire geometry on the calibration frame.
- Coordinates are scaled from the 800×450 display to native 1920×1080 video coordinates.
- Submit `multipart/form-data` to `NEXT_PUBLIC_IBVAP_API_BASE_URL` (defaults to the documented gateway).
- Read breach counts, detected plates, decoded alert telemetry, and download `incident_report.json`.

Set `NEXT_PUBLIC_IBVAP_API_BASE_URL` in `.env.local` when using a different backend.

The Resources page also includes a carousel of verified, linked reports from the European Commission, EU Publications Office, GOV.UK, NIST, and CORDIS.

The interface is intentionally dependency-light: all interactivity uses React state and native browser APIs, while the responsive visual system is contained in `app/globals.css`.
