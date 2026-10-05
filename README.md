# Front-End Portfolio (React + Vite)

## Run it
```bash
npm install
npm run dev      # development at http://localhost:5173
npm run build    # production build in /dist
```
Requires Node.js 18+.

## Where to edit
- `src/data.js`  → your name, links, skills, projects (text, tags, videos)
- `src/styles.css` → colors (top of file) and each project's "room" theme (`.t-bakery`, `.t-deyara`, `.t-shop`)
- `src/components/` → page sections
- `public/media/` → your photo and project videos

## Add a project
1. Drop the video into `public/media/`.
2. Add an object to `PROJECTS` in `src/data.js`.
3. Add a `.t-yourid` theme in `src/styles.css` (copy an existing one).
