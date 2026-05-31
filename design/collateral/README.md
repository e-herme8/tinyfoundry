# TinyFoundry collateral asset pack

Created locally for Delilah → Juliet handoff.

Inspiration references reviewed:
- Juna / Gyld Agency: sparse editorial case-study layout, overlapping collectible cards, monochrome + metallic accent, pill tags, dark footer.
- Antaeus Travel: oversized uppercase typography, warm-gray editorial canvas, thin rules, circular CTAs, service-row structure, strong whitespace.

Primary app-ready assets live in:
`/root/work/tinyfoundry/assets/collateral/`

Static social preview source:
`public/tinyfoundry/tf-og-card.svg`

Integration guidance:
- Import SVGs as URL assets in Vite unless converting selected pieces to React components.
- Decorative images: `alt="" aria-hidden="true"`.
- Product-explaining diagrams need descriptive alt text or nearby HTML equivalent.
- Animate wrappers with transform/opacity; do not animate large path geometry unless Juliet converts to inline SVG.
- Use the SVG icons to gradually replace Lucide in the TinyFoundry landing page.
- Keep the foundry metaphor precise: anvil, cards, workbench, ember glow, thin rules — not steampunk clutter.

Suggested page mapping:
- Nav/logo: `brand/tf-mark-anvil.svg`
- Hero: `hero/tf-hero-forge-workbench.svg` or `hero/tf-hero-overlap-cards.svg`
- How it works: `sections/tf-section-foundry-flow-line.svg` + icons
- Demo link/preview: `sections/tf-section-demo-triptych.svg`
- Privacy/trust: `sections/tf-section-trust-boundary.svg`
- Background accents: `sections/tf-section-circles-warm-gray.svg`, `textures/tf-texture-grid-faint.svg`, `textures/tf-texture-metal-grain.svg`


Note from Helena: These were moved out of `/root/work/suffuse` into the standalone TinyFoundry workspace after E corrected the storage location. Juliet should copy/import selected finalized assets into the eventual TinyFoundry application repo when that repo exists.
