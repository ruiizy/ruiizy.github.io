# ruiizy.github.io

Personal site of Rafael Galvez Ruiz — AI Engineer, Sevilla. Astro 7 + Tailwind 4,
static, deployed to GitHub Pages by `.github/workflows/deploy.yml`.

## Design system

The visual language is Andalusí tilework, drawn entirely in CSS — no images.
Every motif in `src/styles/global.css` is an SVG **mask**, so one shape can be
tinted with `background-color` and rescaled through the `--tile` custom property:

| Class | Motif |
| :--- | :--- |
| `.tile-star` | Estrella de ocho puntas, every position |
| `.tile-star-alt` | The corner stars alone, for a second glaze |
| `.tile-cruz` | The cruz that closes the gap between four stars |
| `.tile-cruz-alt` | One of the two cruz courses, for a chequer |
| `.tile-set` | Bevel — each piece lit on its top-left lip, shadowed into its junta |
| `.tile-fired` | Kiln mottle — tone drifts from piece to piece across the field |
| `.tile-lace` | The star as lacería line-work; the page's wall texture |
| `.tile-zellij` | Alicatado de rombos — a course of lozenges set point-to-point |
| `.cenefa` | Tile border, almagra ringed in cal on añil; the rule between sections |

Star and cruz tile the plane exactly, 1:1, and each is drawn a hair inside its
true edge — the gap is the junta, and the layer beneath it is the grout bed.
`TilePanel.astro` stacks them; `starAlt` and `crossAlt` take a second glaze.

Palette: `cal` (lime wash), `tinta`, `anil`, `anil-2`, `almagra`, `albero`,
`verde`, `junta` (grout, never text or borders).
Type: Archivo for display and body, JetBrains Mono for labels and metadata.

Two constraints worth keeping:

- **`albero` never carries body text** — it is 3.06:1 on `cal`, decoration only.
- **`anil` never sits on `tinta`** — 1.73:1. On dark grounds the accent is `albero`.

## Languages

English at `/`, Spanish at `/es/` — two static pages, one component tree
(`src/layouts/Portfolio.astro`). Every string lives in `src/i18n/ui.ts`, where
`es` is typed against `en`, so a missing translation is a build error.
Components read the locale with `toLang(Astro.currentLocale)`.

Which one a visitor lands on is decided in the browser, since the build is
static. The blocking script in `Layout.astro` runs **only on the prefix-less
root** — a request for `/es/` asked for Spanish and is left alone. There, a
choice stored by `LangSwitch.astro` wins; failing that, the system language
decides.

## Commands

| Command | Action |
| :--- | :--- |
| `bun install` | Install dependencies |
| `bun dev` | Dev server at `localhost:4321` |
| `bun run build` | Build to `./dist/` |
| `bun preview` | Preview the build |
