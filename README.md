# ruiizy.github.io

Personal site of Rafael Galvez Ruiz — AI Engineer, Sevilla. Astro 7 + Tailwind 4,
static, deployed to GitHub Pages by `.github/workflows/deploy.yml`.

## Design system

The visual language is Andalusí tilework, drawn entirely in CSS — no images.
Every motif in `src/styles/global.css` is an SVG **mask**, so one shape can be
tinted with `background-color` and rescaled through the `--tile` custom property:

| Class | Motif |
| :--- | :--- |
| `.tile-star` | Estrella de ocho puntas — two overlapping squares, tiled centre + corners |
| `.tile-lace` | The same star as lacería line-work; used as the page's wall texture |
| `.tile-zellij` | Alicatado de rombos — a course of lozenges set point-to-point |
| `.cenefa` | Tile border, almagra on añil; the rule between sections |

Palette: `cal` (lime wash), `tinta`, `anil`, `almagra`, `albero`, `verde`.
Type: Archivo for display and body, JetBrains Mono for labels and metadata.

Two constraints worth keeping:

- **`albero` never carries body text** — it is 3.06:1 on `cal`, decoration only.
- **`anil` never sits on `tinta`** — 1.73:1. On dark grounds the accent is `albero`.

Content is English; the site's own voice (nav, CTAs, headings like *Hablamos*)
is Spanish.

## Commands

| Command | Action |
| :--- | :--- |
| `bun install` | Install dependencies |
| `bun dev` | Dev server at `localhost:4321` |
| `bun run build` | Build to `./dist/` |
| `bun preview` | Preview the build |
