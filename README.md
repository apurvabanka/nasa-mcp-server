**Nasa MCP Server**

A small TypeScript project containing a helper to fetch NASA's Astronomy Picture of the Day (APOD).

**Files & Purpose**

- `package.json`: project metadata and scripts (`build`, `start`, `dev`).
- `tsconfig.json`: TypeScript configuration.
- `src/index.ts`: project entrypoint (compiled to `dist/index.js`).
- `src/tools/nasaPicOdDay.ts`: utility that calls the NASA APOD API and formats the returned metadata.

**Quickstart**

1. Install dependencies

```bash
npm install
```

2. Build and run

```bash
npm run build
npm start
```

3. Dev mode (TypeScript watch)

```bash
npm run dev
```

**Environment**

- `NASA_API_KEY`: optional. If not provided the code falls back to NASA's `DEMO_KEY` (low rate limits).

**Using the APOD utility**

- The helper in `src/tools/nasaPicOdDay.ts` exports `nasaPicOfDayTool` and `fetchNasaPicOfDay(date?, apiKey)`.
- The helper requests `https://api.nasa.gov/planetary/apod` and returns `title`, `url`, `explanation`, `date`, and `copyright`.

You can also query the API directly. Example (today's APOD using demo key):

```bash
curl -s "https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY" | python -m json.tool
```

That returns JSON with fields such as `title`, `date`, `explanation`, `url` and `hdurl`.

**Example output**

- Title: `Alnitak, Alnilam, Mintaka`
- Date: `2025-11-20`
- URL: `https://apod.nasa.gov/apod/image/2511/NebularSymphonyOrionsBelt1024.jpg`

**Next steps / suggestions**

- Add a small script to download the APOD image into `images/` using the `hdurl` when available.
- Add a README badge with build status or license if needed.

If you want, I can add an image download script and wire it into an npm script (e.g. `npm run download-apod`).
