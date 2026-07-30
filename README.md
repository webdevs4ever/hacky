# hatch. — landing page

React + Vite port of the Hatch domain-search landing page. Plain JavaScript,
plain CSS, no UI framework.

## Running it

```bash
npm install
npm run dev      # http://localhost:4000
npm run build    # production bundle into dist/
npm run preview  # serve the built bundle locally
```

Node 18 or newer.

## Layout

```
index.html              Google Fonts links live here, not in the components
src/
  main.jsx              React root
  App.jsx               all page state lives here
  styles.css            single stylesheet, CSS custom properties at the top
  data/domains.js       every string and price shown on the page
  lib/format.js         money(), normalizeLabel(), filledBars()
  lib/squiggle.js       the pixel-curve coordinates
  components/           one file per section
```

## How state works

`App.jsx` owns three pieces of state and passes them down as props. Nothing
fetches, and no component holds its own copy of the domain list.

- `label` — the search term, default `hacky`. `handleSearch` replaces it.
- `selected` — which "more endings" rows are checked.
- `cart` — names added to cart; only its length is displayed, in the nav.

`rows` is derived from `label` with `useMemo`, then handed to both the compare
table and the availability card. That's deliberate: the two panels showed the
same prices in the design, so they read from one source rather than two lists
that could drift apart.

## Editing content

Copy and pricing are in `src/data/domains.js` — no need to touch JSX to change
what the page says. Colors and type are custom properties in the `:root` block
of `styles.css`; changing `--acid` re-themes the whole page.

The pixel squiggle comes from a coordinate array in `src/lib/squiggle.js`,
sampled from a cubic bezier and snapped to a 14px grid. To reshape it,
regenerate the array from new control points rather than nudging numbers by
hand — the curve reads as intentional because the spacing is uniform.

## Wiring up real data

`ENDINGS` is hardcoded. To make this real you'd replace the `rows` memo in
`App.jsx` with a fetch against a registrar availability API, keyed on `label`.
Things worth handling when you do:

- Debounce, and cancel in-flight requests with an `AbortController` — users
  type faster than availability lookups return.
- Availability is three states, not two: available, taken, and premium/aftermarket
  pricing. The current UI only renders "available."
- Loading and error states. `AvailabilityCard` assumes `lead` always exists.

## Two content caveats carried over from the design

**Brand score** is presented as an objective number but nothing computes it. If
it stays, it needs a tooltip explaining the methodology, or it reads as invented
authority.

**"Free privacy"** in the hero trust row doesn't hold for every TLD — ccTLD
registries vary on whether WHOIS privacy is offered at all. Worth verifying per
extension before making it a blanket promise.
