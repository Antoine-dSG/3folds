# Fano classification — the visual account

## The stage

One persistent view. Four discs — **1 Fano curves**, **2 del Pezzo surfaces**,
**3 Fano threefolds**, and a greyed **4 Fano fourfolds** — stand in a row.
Choosing a dimension glides that disc to the centre of the stage while the other
three shrink into the top-right corner, where they remain as the dimension
switcher; the three parts of the statement and the recognition problem fade in
around the centre. Nothing else appears: there is no back button and no separate
menu, because the corner discs are always available.

Clicking the centred disc opens the classification statement for that dimension.
Green dots mark the two components where this project adds something; their
statements carry a **Classical / New** switch, opening on **Classical**.

## Interactions

- **Click a node** → its precise statement.
- **Click an underlined term** → a definition, centred over a dark backdrop,
  written in TeX and rendered by MathJax. Terms inside definitions are
  themselves clickable, with a back chip; `Esc` closes.
- **Read more →** opens the in-depth page: prose, figures, the collision table,
  and on the *Recognition* pages the lookup table.
- **Lookup**: a table of all families (105, or 10 in dimension 2). Choosing a
  value filters it; values that cannot accompany the current choice are greyed
  out; clicking a row fixes the selectors to that family. The triple
  $(\iota,(-K)^3,d)$ leaves the pair $(2\text{-}33)$ / $(2\text{-}34)$, which
  the panel reports along with $c$.
- **Figures**: the census (105 families by $\rho$ and $(-K)^3$) on the
  dimension-3 Existence page; the contraction ladder on the Exhaustion page.
- `#/families` — the full table of the 105 families.
- `#/roadmap` — the derivation graph: 29 seeds, 76 families one blow-up away,
  155 edges. Each edge is encoded by the centre of the blow-up: **line style** gives what is blown up (solid = a curve, dotted = points,
  dash-dot = a curve together with a point) and **colour** the kind of curve
  (blue = rational, violet = elliptic, teal = genus 2). Picard number grows
  upwards, only the seeds are labelled, and a numeral on a selected edge counts
  the components. Selecting a family highlights its ancestors and
  descendants and prints the chain from a seed.

## Files

| file | content |
|---|---|
| `index.html` | shell, MathJax configuration |
| `style.css` | design |
| `data.js` | definitions (TeX), statements, in-depth prose, collision table |
| `families.js` | the 105 families with audited invariants (generated) |
| `app.js` | routing, diagram, popups, panels |
| `vendor/tex-svg.js` | MathJax 3 bundle (vendored for offline use) |
| `img/` | the two figures |

## Conventions and verification

- **Divisor**: Weil divisor; on a smooth variety Weil $=$ Cartier, so divisors,
  divisor classes and line bundles are identified via
  $D\mapsto\mathcal{O}_X(D)$. Stated in the glossary.
- **Ample divisor**: $D$ ample iff $mD$ is very ample for some $m\ge1$,
  equivalently (Nakai–Moishezon) $D^{\dim V}\cdot V>0$ for all subvarieties $V$.
- Every underlined term resolves to a definition (checked programmatically);
  every definition is reachable by clicks; no console errors on any of the
  twenty routes, tested headless with the network disabled.
- The interactive recognition is checked against the data: the only ambiguous
  triple $(\iota,(-K)^3,d)$ among the 105 families is $(1,54,-9)$.

Companion notes: `../notes/fano-classification-components.tex` (the
four-component account), `../notes/fano-invariant-key.tex` (the cheapest numerical invariant), `../notes/fano-groundwork.md` (background).

### A note on the edges

The dataset records a family's divisorial contractions to other Fano threefolds in
`blowdown`, and its Mori fibre space in `MMP` (a ℙ¹-bundle over a surface). The
graph uses `blowdown`. Two consequences: 3-31 is a genuine seed, since what it
blows up is the *vertex of a cone*, not a smooth Fano; and 2-35 (Bl_p ℙ³) is a
seed only because the table records its ℙ¹-bundle over ℙ² and not its divisorial
contraction to ℙ³, which is supplied here by hand (see the note in the panel).
