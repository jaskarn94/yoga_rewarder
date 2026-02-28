# Daily Yoga — Project Notes

## Stack
- **Framework**: Next.js 16 (App Router)
- **Styling**: Tailwind CSS v4 (config via `globals.css` `@theme` block — no `tailwind.config.ts`)
- **Language**: TypeScript
- **Data**: Static TypeScript array — no database, no backend

## Dev Commands
```bash
npm run dev      # Start dev server at http://localhost:3000
npm run build    # Production build
npm run start    # Start production server
```

## Architecture

### Pose Rotation
- `src/lib/getDailyPose.ts` — computes `dayOfYear % poses.length` to select today's pose
- Deterministic by date — no state, no cookies, no auth
- To test different poses: temporarily change `dayOfYear` to 0, 1, 14, etc.

### Key Files
| File | Role |
|------|------|
| `src/types/pose.ts` | `YogaPose` TypeScript interface |
| `src/data/poses.ts` | Curated pose library (currently 15 poses) |
| `src/lib/getDailyPose.ts` | Date-based pose selection |
| `src/app/page.tsx` | Main dashboard page |
| `src/app/layout.tsx` | Fonts (Playfair Display + Inter), metadata |
| `src/app/globals.css` | Tailwind v4 theme tokens (colors + fonts) |
| `src/components/` | All UI components |

### Custom Theme Tokens (Tailwind v4)
Defined in `globals.css` `@theme inline {}`:
- `bg-cream` / `#FAF9F6` — page background
- `text-sage` / `bg-sage` — `#8BAF8B` — primary accent
- `text-terracotta` — `#C17A5B` — warning/avoid accent

### Expanding the Pose Library
Add new `YogaPose` objects to the `poses` array in `src/data/poses.ts`.
All fields in `YogaPose` are required — see `src/types/pose.ts` for the interface.
