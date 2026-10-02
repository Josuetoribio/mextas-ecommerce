# MEXTAS Design System

MEXTAS is a Mexican direct-to-consumer brand selling physical products for the daily
commute: backpacks, audio, wearables, bottles, tech accessories, gadgets and travel gear.
Positioning: **premium · technological · minimal · urban**. Everything is priced in MXN
and written in Mexican Spanish.

This design system powers the MEXTAS ecommerce storefront demo — a commercial showcase of
what a full online store designed and built by MEXTAS looks like.

## Sources given to me

- `uploads/ecommercemextas.png` — a full-page storefront comp. **The single visual source
  of truth** for layout, hierarchy, type scale, card anatomy and footer structure. Copied
  to `assets/reference-home.png`.
- Eight studio product photographs (hero, Urban Pro backpack, packs banner, and category
  shots for backpacks, audio, wearables, bottles, accessories). Copied to `assets/`.
- A written brief describing the desired ecommerce experience (pages, interactions, mock
  data, tone).

No codebase, Figma file, font binaries or logo artwork were provided. Anything not visible
in those sources is flagged below as a substitution.

### Naming
The comp's wordmark reads **MEXTA**. The brief is explicit that the correct brand name is
**MEXTAS** and that "Mexta" must never appear. The system uses MEXTAS everywhere.

---

## Index

| Path | What |
|---|---|
| `styles.css` | Global entry — `@import`s every token file. Link this one file. |
| `tokens/` | `fonts` · `colors` · `typography` · `spacing` · `radius` · `elevation` · `motion` · `base` |
| `components/core/` | Icon, Button, IconButton, Badge, Rating, Price, SectionHeading, Accordion, Skeleton |
| `components/forms/` | Input, Select, Checkbox, RadioCard, QuantityStepper, SwatchGroup |
| `components/commerce/` | ProductCard, CategoryTile, PromoBanner, BenefitItem, PackCard, CartLine, CountdownTimer, OrderTimeline |
| `components/navigation/` | Logo, AnnouncementBar, SiteHeader, Breadcrumbs, SiteFooter |
| `components/feedback/` | Drawer, Modal, Toast, EmptyState |
| `ui_kits/storefront/` | Interactive storefront recreation (home → checkout). See its README. |
| `templates/storefront-page/` | Starting template for a new MEXTAS page (header, hero, grid, footer). |
| `guidelines/` | 16 foundation specimen cards (colour, type, spacing, brand, motion). |
| `assets/` | Reference comp + product photography. |
| `SKILL.md` | Agent-skill wrapper for use outside this tool. |

### Components (full list)
Accordion, AnnouncementBar, Badge, Breadcrumbs, Button, CartLine, CategoryTile, Checkbox,
CountdownTimer, Drawer, EmptyState, Icon, IconButton, Input, Logo, Modal, OrderTimeline,
PackCard, Price, ProductCard, PromoBanner, QuantityStepper, RadioCard, Rating, Select,
SectionHeading, SiteFooter, SiteHeader, Skeleton, SwatchGroup, Toast — plus `BenefitItem`.

Each component directory carries `<Name>.jsx`, `<Name>.d.ts` (props contract) and
`<Name>.prompt.md` (when to use it), and one `@dsCard` HTML showing its states.

#### Intentional additions
No source defined a component inventory, so the set was authored from the storefront comp
plus the brief's required behaviours. Three components exist only because the brief asks
for behaviour the comp doesn't picture: `CountdownTimer` (offers page), `OrderTimeline`
(order tracking) and `Skeleton` (loading states).

---

## CONTENT FUNDAMENTALS

**Language.** Mexican Spanish, always. Accents are mandatory (`Tecnología`, `Envío`,
`Diseño`). Currency is written `$1,899 MXN` — comma grouping, space, explicit MXN. Never
`$1899.00`, never "pesos".

**Voice.** Second person singular, informal *tú*: "Tienes 30 días para devolver tu
producto", "Recibe lanzamientos… en tu correo". The brand speaks *to* the customer, never
about itself in the first person plural except in reassurance copy ("Estamos para ayudarte
en lo que necesites").

**Casing is the loudest typographic signal.**
- UPPERCASE + 0.09em tracking: nav, section titles, buttons, badges, labels, eyebrows.
  `PRODUCTOS DESTACADOS`, `AGREGAR AL CARRITO`, `NUEVA COLECCIÓN`, `VER TODOS →`.
- Sentence case: headlines and all body copy. `Diseño que te acompaña.`
- Product names keep their own capitalisation: `Mochila Urban Pro`, `Termo Insulado 750ml`.

**Headlines** are short declaratives, 3–6 words, usually ending in a full stop:
"Diseño que te acompaña." · "Diseñada para moverse contigo." Subtitles are one line,
functional, no adjective stacking: "Tecnología, estilo y funcionalidad en cada detalle."

**Microcopy** is factual and quantified, never hype: "Envío gratis en compras mayores a
$1,499 MXN", "Entrega estimada: 2–4 días hábiles", "Últimas 3 unidades", "8 personas están
viendo este producto". Scarcity lines are allowed once per screen, maximum.

**CTAs** are imperative verbs, uppercase, 2–3 words: COMPRAR AHORA · AGREGAR AL CARRITO ·
VER TODOS · VISTA RÁPIDA · PROCEDER AL PAGO · SEGUIR COMPRANDO.

**No emoji. Ever.** Not in UI, not in marketing copy. No exclamation marks except in the
single order-confirmation moment ("¡Pedido confirmado!").

---

## VISUAL FOUNDATIONS

**Colour.** The brand is black on white. A full ink ramp (`--ink-1000` → `--ink-025`) plus
paper does ~97% of the work: black type, black buttons, `#F2F2F2` media beds, `#F7F7F7`
card and footer fills, `#E9E9E9` hairlines. One accent only — **commercial red**
(`--sale-500 #E01B1B`) reserved for discount badges, struck-price deltas, the "Ofertas"
nav item and error states. Red is never a surface, never a brand colour, never more than
~3% of a screen. Status greens/ambers exist for stock messaging only.

**Type.** Two families. **Archivo** (display/UI): hero headlines at −0.035em tracking and
0.98 leading; uppercase section titles and labels at +0.09em; the wordmark at +0.18em.
**Manrope** (text): body, product copy, meta, at 1.6 leading. Weight, case and tracking
create hierarchy — not colour, and never italics.

**Layout.** 1360px max container, 24px gutters (40px ≥1024px). Sections breathe at 64–96px
vertical rhythm; the hero runs full-bleed. Product grid: 5 columns ≥1440 → 4 ≥1200 → 3 ≥900
→ 2 on mobile, 20px gap. Filters are a 250px left rail on desktop and a left drawer below
1000px. Everything is aligned to the same container — no offset or staggered compositions.

**Corners.** Square by default: media, cards, buttons, inputs, banners all `0px`. 2px on
badges. Circles (50%) for category tiles and icon buttons. Pills only for numeric counters
and carousel indicators. Rounded "friendly" cards are off-brand.

**Cards.** Flat at rest: `#F7F7F7` fill, no border, no shadow, square. On hover they turn
white and lift with `--shadow-card` (`0 1px 2px / 0 8px 28px` at 4–6% black). Media sits in
a 1:1 `#F2F2F2` bed. No card ever has a coloured left border.

**Elevation.** Nothing floats at rest. Shadow appears only for hover lift, popovers/toasts
(`--shadow-pop`) and the cart drawer (`--shadow-drawer`). Depth comes from hairlines and
value contrast, not from shadows.

**Borders.** 1px, `#E9E9E9` for structure (section rules, cart lines, accordions),
`#D9D9D9` for inputs, full black for selected/active states. Selection is expressed as a
black 1px border plus an inset 1px ring — never a coloured glow.

**Backgrounds & imagery.** White page, `#F7F7F7` for footers and cards, full black for the
newsletter band and dark promos. Photography is the only decoration: studio shots of matte
black objects on concrete plinths or pale seamless backdrops, soft directional daylight,
long soft shadows, cool neutral grade, no colour props, no models, no grain. Objects are
centred or right-weighted with generous negative space so type can sit on the left. Never
gradients as decoration — the only gradients allowed are legibility scrims over photos
(horizontal white→transparent on the hero, vertical black→transparent on collection tiles).

**Transparency & blur.** Used sparingly and only over photography: 90–94% white with a 6px
backdrop blur for the wishlist button and the "Vista rápida" bar; 55% black scrim behind
modals and drawers. Never frosted panels as a style.

**Motion.** One easing: `cubic-bezier(.2,.7,.3,1)`. 120ms for hover tints and focus, 200ms
for buttons and borders, 320ms for drawers, accordions and modals, 520ms for image zoom,
700ms for hero cross-fades. Page changes fade up 8px. Nothing bounces, nothing springs,
nothing animates on scroll beyond a subtle entrance. Hero autoplays every 6s and pauses on
hover.

**Hover states.** Buttons darken (`#000 → #232323`); secondary inverts to solid black;
ghost picks up a `#F2F2F2` tint; links drop to 62% opacity; product images scale 1.045;
category circles gain a 1px black ring and scale their photo 1.07. **Press states** scale
the button to 0.985 — no colour change. **Focus** is a 2px white + 2px black double ring
(`--ring-focus`), visible on every interactive element.

**Micro-detail budget.** Badges, stock lines, review counts, savings and delivery estimates
are allowed — but at most two per card and three per screen region. They exist to make the
store feel real, not to decorate.

---

## ICONOGRAPHY

No icon assets were supplied. The comp shows a **thin, geometric, single-weight outline
set** (search, user, bag, truck, return arrow, shield, headset, chevrons, arrows). The
closest CDN match is **Lucide**, which this system uses via
`https://unpkg.com/lucide@0.460.0/dist/umd/lucide.min.js`. **⚠️ Substitution — flagged for
review:** if MEXTAS has its own icon set, drop the SVGs into `assets/icons/` and repoint
the `Icon` component.

- Stroke **1.6** for UI icons (16–24px), **1.2** for large decorative glyphs (28–40px).
- Sizes: 14–16 inline/meta · 20–22 header & buttons · 24 nav actions · 30 benefits strip.
- Icons are always `currentColor`; they never carry their own colour, fill or badge except
  the wishlist heart, which fills red when active.
- **No emoji, no unicode symbols as icons.** The only non-Lucide glyphs are the star `★`
  (rating, clipped-overlay technique) and the slash separator in breadcrumbs.
- Payment marks (Visa / Mastercard / Amex / PayPal) are rendered as bordered uppercase type
  because no brand artwork was supplied — **replace with official marks before production.**

## Fonts — substitution notice

**⚠️ No font binaries were provided.** Archivo and Manrope are Google Fonts chosen to match
the comp's tight grotesque display face and its neutral UI face; they are loaded via a
Google Fonts `@import` in `tokens/fonts.css` rather than self-hosted `@font-face` rules
(so the compiler reports 0 fonts). **Please send the real MEXTAS typefaces** and I'll
self-host them and rewrite that file.

## Logo — absent

No logo file exists in the sources, so the wordmark is **set type**, not artwork: Archivo
Regular, uppercase, 0.18em tracking (`components/navigation/Logo.jsx`). Nothing was drawn
or reconstructed. Send the real mark and it drops straight into that component.
