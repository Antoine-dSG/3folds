/* ------------------------------------------------------------------ *
 *  Fano classification — application
 * ------------------------------------------------------------------ */
(function () {
  "use strict";

  const $  = (s, r) => (r || document).querySelector(s);
  const $$ = (s, r) => Array.from((r || document).querySelectorAll(s));

  const view    = $("#view");
  const titleEl = $("#dim-title");
  const sheetBd = $("#sheet-bd");
  const defBd   = $("#def-bd");

  let currentDim = "3";
  const toggles = {};      /* "dim:node" -> "old" | "new" */
  let defStack = [];       /* nested definitions */

  /* ---------------------------------------------------------------- math */
  function typeset(el) {
    if (!el || !window.MathJax || !MathJax.typesetPromise) return Promise.resolve();
    return MathJax.typesetPromise([el]).catch(() => {});
  }

  /* ---------------------------------------------------------------- data helpers */
  const DP = {
    "9-3": ["ℙ²", "the projective plane; \\(K^{2}=9\\), index \\(3\\)"],
    "8-2": ["ℙ¹×ℙ¹", "the smooth quadric; \\(K^{2}=8\\), \\(K\\) even, so \\(w_{2}=0\\)"],
    "8-1": ["Bl₁ℙ²", "\\(\\mathbb{P}^{2}\\) blown up at one point; \\(K^{2}=8\\), \\(K\\) odd"],
    "7-1": ["Bl₂ℙ²", "\\(K^{2}=7\\)"],
    "6-1": ["Bl₃ℙ²", "the cubic surface in \\(\\mathbb{P}^{3}\\); \\(K^{2}=6\\)"],
    "5-1": ["Bl₄ℙ²", "\\(K^{2}=5\\)"],
    "4-1": ["Bl₅ℙ²", "\\(K^{2}=4\\); two-dimensional moduli"],
    "3-1": ["Bl₆ℙ²", "\\(K^{2}=3\\); four-dimensional moduli"],
    "2-1": ["Bl₇ℙ²", "\\(K^{2}=2\\); 56 lines"],
    "1-1": ["Bl₈ℙ²", "\\(K^{2}=1\\); 240 lines"]
  };

  const IOTA = [...new Set(FAMILIES.map(f => f.iota))].sort((a, b) => a - b);
  const VOLS = [...new Set(FAMILIES.map(f => f.vol))].sort((a, b) => a - b);
  const DS   = [...new Set(FAMILIES.map(f => f.d))].sort((a, b) => a - b);
  const famMatch = (i, v, d) => FAMILIES.filter(f => f.iota === i && f.vol === v && f.d === d);

  /* family keys are internal ("2-33"); display uses the pair notation */
  const fmt = l => (l && /^\d+-\d+$/.test(l)) ? "(" + l.replace("-", ",") + ")" : l;

  /* ---------------------------------------------------------------- terms */
  function wireTerms(root) {
    $$("t[d]", root).forEach(t => {
      if (t.dataset.wired) return;
      t.dataset.wired = "1";
      t.setAttribute("tabindex", "0");
      t.setAttribute("role", "button");
      const open = e => { e.stopPropagation(); openDef(t.getAttribute("d")); };
      t.addEventListener("click", open);
      t.addEventListener("keydown", e => {
        if (e.key === "Enter" || e.key === " ") { e.preventDefault(); open(e); }
      });
    });
  }

  /* ---------------------------------------------------------------- definitions */
  function renderDef(key) {
    const def = DEFS[key];
    if (!def) return;
    const card = $(".defcard", defBd);
    const prev = defStack.length > 1 ? DEFS[defStack[defStack.length - 2]] : null;
    card.innerHTML = `
      <div class="hd">
        <h2>${def.label}</h2>
        <button class="x" aria-label="close definition">×</button>
      </div>
      <div class="dbody">${def.tex}</div>
      ${prev ? `<div class="foot"><button class="chip" id="def-back">← ${prev.label}</button></div>` : ""}`;
    card.scrollTop = 0;
    wireTerms(card);
    typeset($(".dbody", card)).then(() => wireTerms(card));
    $(".x", card).addEventListener("click", closeDef);
    const back = $("#def-back", card);
    if (back) back.addEventListener("click", () => {
      defStack.pop();
      renderDef(defStack[defStack.length - 1]);
    });
  }

  function openDef(key) {
    if (!DEFS[key]) return;
    defStack.push(key);
    renderDef(key);
    defBd.classList.add("open");
  }
  function closeDef() {
    if (defStack.length > 1) {
      defStack.pop();
      renderDef(defStack[defStack.length - 1]);
      return;
    }
    defStack = [];
    defBd.classList.remove("open");
    $(".defcard", defBd).innerHTML = "";
  }
  defBd.addEventListener("click", e => { if (e.target === defBd) closeDef(); });

  /* ---------------------------------------------------------------- sheet */
  function toggleState(n, k) {
    const id = n + ":" + k;
    if (!toggles[id]) toggles[id] = "old";   /* the popup opens on the classical statement */
    return toggles[id];
  }

  function openSheet(n, k) {
    const D = DIMS[n], nd = D.nodes[k];
    if (!nd) return;
    const hasNew = !!nd.new;
    const state = hasNew ? toggleState(n, k) : "old";
    const text = hasNew && state === "new" ? nd.new : nd.statement;
    const swap = hasNew ? `
      <div class="swap" role="group" aria-label="statement">
        <button data-t="old" aria-pressed="${state === "old"}">Classical</button>
        <button data-t="new" aria-pressed="${state === "new"}">New</button>
      </div>` : `<span></span>`;

    $(".sheet", sheetBd).innerHTML = `
      <div class="hd">
        <h2>${nd.label}${nd.credit ? ` <span class="hcredit">(${nd.credit})</span>` : ""}</h2>
        <button class="x" aria-label="close">×</button>
      </div>
      <div class="body"><div class="stmt">${text}</div></div>
      <div class="foot">
        ${swap}
        <a class="more" href="#/d/${n}/${k}" id="more">Read more</a>
      </div>`;

    sheetBd.classList.add("open");
    const sheetEl = $(".sheet", sheetBd);
    wireTerms(sheetEl);
    typeset($(".body", sheetBd)).then(() => wireTerms(sheetEl));
    $(".x", sheetBd).addEventListener("click", closeSheet);
    $("#more", sheetBd).addEventListener("click", () => setTimeout(closeSheet, 0));
    $$(".swap button", sheetBd).forEach(b => b.addEventListener("click", () => {
      toggles[n + ":" + k] = b.getAttribute("data-t");
      openSheet(n, k);
    }));
  }
  function closeSheet() {
    sheetBd.classList.remove("open");
    $(".sheet", sheetBd).innerHTML = "";
  }
  sheetBd.addEventListener("click", e => { if (e.target === sheetBd) closeSheet(); });

  document.addEventListener("keydown", e => {
    if (e.key !== "Escape") return;
    if (defBd.classList.contains("open")) closeDef();
    else if (sheetBd.classList.contains("open")) closeSheet();
  });


  /* ---------------------------------------------------------------- views */
  /* ---------------------------------------------------------------- the stage */
  /* One persistent stage: the four dimension discs live here always. Choosing a
     dimension glides its disc to the centre and the others into the corner. */
  const PARTS = ["existence", "disjointness", "completeness"];   /* the three components */
  const COMPS = PARTS.map(n => ({ node: n })).concat([{ node: "recognition", separate: true }]);

  function buildStage() {
    const dims = [
      { d: "1", t: "Fano curves" },
      { d: "2", t: "del Pezzo surfaces" },
      { d: "3", t: "Fano threefolds" },
      { d: "4", t: "Fano fourfolds", ghost: true }
    ];
    view.innerHTML = `
      <div class="stage" id="stage">
        <svg class="edges" id="edges" aria-hidden="true"></svg>
        ${dims.map(x => `
          <button class="disc${x.ghost ? " ghost" : ""}" data-dim="${x.d}" ${x.ghost ? "disabled" : ""}>
            <span class="dnum">${x.d}</span>
            <span class="dtitle">${x.t}</span>
          </button>`).join("")}
        ${COMPS.map(c => `
          <button class="comp" data-node="${c.node}">
            <span class="clabel"></span>
          </button>`).join("")}
      </div>`;
  }

  function setChrome(n, level) {
    if (level === "home") { titleEl.textContent = "Fano varieties"; return; }
    const D = DIMS[n];
    titleEl.innerHTML = level === "doc"
      ? `<a class="back" href="#/d/${n}" aria-label="back">←</a>${D.title}`
      : D.title;
  }

  function stageView(n) {
    const stage = $("#stage") || (buildStage(), $("#stage"));
    const home = n === null;

    stage.classList.toggle("focus", !home);
    if (!home) currentDim = n;

    $$(".disc", stage).forEach(d => {
      d.classList.toggle("active", !home && d.dataset.dim === String(n));
    });

    if (!home) {
      $$(".comp", stage).forEach(c => {
        const nd = DIMS[n].nodes[c.dataset.node];
        $(".clabel", c).textContent = nd.label;
        c.classList.toggle("isnew", !!nd.new);
        c.classList.toggle("apart", c.dataset.node === "recognition");
        c.setAttribute("aria-label", nd.label + (c.dataset.node === "recognition" ? ", a separate problem" : ""));
      });
    }

    layout();
    wireStage();
    setChrome(home ? null : n, home ? "home" : "dim");
    document.title = home ? "Fano varieties · classification" : DIMS[n].title + " · Fano classification";
  }

  let ACTIVE = { w: 300, h: 170 };

  function layout() {
    const stage = $("#stage");
    if (!stage) return;
    const W = stage.clientWidth, H = stage.clientHeight;
    const focusing = stage.classList.contains("focus");
    const cx = W / 2, cy = H / 2;
    const discs = $$(".disc", stage);

    if (!focusing) {
      const w = Math.min(224, W * 0.17), h = w * 0.46;
      discs.forEach((d, i) => place(d, cx + (i - 1.5) * (w * 1.16), cy, w, h));
    } else {
      const active = discs.find(d => d.classList.contains("active"));
      const others = discs.filter(d => d !== active)
                          .sort((p, q) => p.dataset.dim.localeCompare(q.dataset.dim));
      const w = Math.min(300, W * 0.24), h = Math.min(104, w * 0.40);
      ACTIVE = { w, h };
      if (active) place(active, cx, cy, w, h);
      const s = 42;
      others.forEach((d, k) => place(d, W - 40 - (others.length - 1 - k) * (s + 12), 36, s, s));
    }

    clearEdges();
    if (focusing) drawEdges();
  }

  function place(el, x, y, w, h) {
    el.style.left = (x - w / 2) + "px";
    el.style.top = (y - h / 2) + "px";
    el.style.width = w + "px";
    el.style.height = h + "px";
  }

  function compTarget(node) {
    const stage = $("#stage"), W = stage.clientWidth, H = stage.clientHeight;
    const cx = W / 2, cy = H / 2;
    const w = Math.min(206, W * 0.24), h = 56;
    const gap = 92;                                  /* clearance from the centre card */
    const v = ACTIVE.h / 2 + gap + h / 2;
    const dx = Math.min(238, W * 0.26);
    const where = {
      "existence":    [cx - dx, cy - v],
      "disjointness": [cx,      cy - v],
      "completeness": [cx + dx, cy - v],
      "recognition":  [cx,      cy + v]
    }[node];
    return { x: where[0], y: where[1], w, h };
  }

  function drawEdges() {
    const stage = $("#stage"), svg = $("#edges");
    const W = stage.clientWidth, H = stage.clientHeight;
    svg.setAttribute("viewBox", `0 0 ${W} ${H}`);
    const cx = W / 2, cy = H / 2;
    $$(".comp", stage).forEach(c => {
      const t = compTarget(c.dataset.node);
      c.style.left = (t.x - t.w / 2) + "px";
      c.style.top = (t.y - t.h / 2) + "px";
      c.style.width = t.w + "px";
      c.style.height = t.h + "px";
      const ey = t.y + (t.y > cy ? -t.h / 2 - 6 : t.h / 2 + 6);
      if (c.dataset.node === "recognition") return;   /* not a component: no edge */
      const line = document.createElementNS("http://www.w3.org/2000/svg", "line");
      line.setAttribute("x1", cx); line.setAttribute("y1", cy);
      line.setAttribute("x2", t.x); line.setAttribute("y2", ey);
      line.setAttribute("class", "edge");
      svg.appendChild(line);
    });
  }

  function clearEdges() {
    const svg = $("#edges");
    if (svg) while (svg.firstChild) svg.removeChild(svg.firstChild);
  }

  function wireStage() {
    const stage = $("#stage");
    $$(".disc:not(.ghost)", stage).forEach(d => {
      d.onclick = () => {
        d.blur();
        if (d.classList.contains("active")) openSheet(currentDim, "classification");
        else location.hash = "#/d/" + d.dataset.dim;
      };
    });
    $$(".comp", stage).forEach(c => {
      c.onclick = () => openSheet(currentDim, c.dataset.node);
    });
  }

  window.addEventListener("resize", () => layout());

  function docView(n, k) {
    const D = DIMS[n], nd = D.nodes[k];
    if (!nd) { diagramView(n); return; }
    setChrome(n, "doc");
    document.title = nd.label + " · " + D.title;
    const hasNew = !!nd.new;
    const state = hasNew ? toggleState(n, k) : "old";
    const text = hasNew && state === "new" ? nd.new : nd.statement;

    const swap = hasNew ? `
      <div class="swap" role="group" aria-label="statement">
        <button data-t="old" aria-pressed="${state === "old"}">Classical</button>
        <button data-t="new" aria-pressed="${state === "new"}">New</button>
      </div>` : "";

    let prose = "";
    ((nd.page && nd.page.sections) || []).forEach(s => {
      if (s.h) prose += `<h3>${s.h}</h3>`;
      (s.p || []).forEach(t => { prose += `<p>${t}</p>`; });
      if (s.ul) prose += `<ul>${s.ul.map(t => `<li>${t}</li>`).join("")}</ul>`;
      if (s.html) prose += s.html;
      if (s.img) prose += `<figure class="fig"><img src="${s.img}" alt="">
        <figcaption>${s.caption || ""}</figcaption></figure>`;
      if (s.table) prose += COLLISION_HTML;
    });

    const others = Object.keys(D.nodes).filter(o => o !== k)
      .map(o => `<a class="chip" href="#/d/${n}/${o}">${D.nodes[o].label}</a>`).join("");

    view.innerHTML = `
      <div class="doc">
        <div class="kicker">${D.kicker} · ${D.title}</div>
        <h1>${nd.label}${nd.credit ? ` <span class="hcredit">(${nd.credit})</span>` : ""}</h1>
        ${swap ? `<div class="swap-row">${swap}</div>` : ""}
        <div class="block"><div class="stmt" id="doc-stmt">${text}</div></div>
        <div id="doc-panel"></div>
        ${prose}
        <div class="row">${others}<a class="chip" href="#/d/${n}">← the diagram</a></div>
        <p class="fine">${{
          "1": "Sources: Riemann–Roch and Castelnuovo's criterion; see Hartshorne, <i>Algebraic Geometry</i>, IV.1 and V.3.",
          "2": "Sources: del Pezzo (1887); Dolgachev, <i>Classical Algebraic Geometry</i>, Ch. 8; Manin, <i>Cubic Forms</i>, Ch. IV; Castelnuovo's criterion.",
          "3": "Sources: Iskovskikh (1977–78); Mori–Mukai (1981; erratum 2003); Iskovskikh–Prokhorov, <i>Fano varieties</i> (1999)."
        }[n]} Companion notes:
        <a href="../notes/fano-classification-components.tex">four components</a>,
        <a href="../notes/fano-invariant-key.tex">cheapest numerical invariant</a>.</p>
      </div>`;

    wireTerms(view);
    typeset(view).then(() => wireTerms(view));

    if (hasNew) {
      $$(".swap button", view).forEach(b => b.addEventListener("click", () => {
        toggles[n + ":" + k] = b.getAttribute("data-t");
        docView(n, k);
      }));
    }
    if (k === "recognition") {
      const slot = $("#doc-panel", view);
      slot.appendChild(n === "1" ? panelDim1() : n === "2" ? panelDim2() : panelDim3());
      typeset(slot);
    }
  }

  /* ---------------------------------------------------------------- roadmap */
  /* The roadmap is the construction graph: each family that is described as a blow-up
     of another family of the list is joined to that family; the others are the seeds. */
  const ROAD = (function () {
    const by = new Map(FAMILIES.map(f => [f.label, f]));
    const parents = new Map(), children = new Map();
    FAMILIES.forEach(f => {
      const ps = f.par && by.has(f.par) ? [f.par] : [];
      parents.set(f.label, ps);
      ps.forEach(p => {
        if (!children.has(p)) children.set(p, []);
        children.get(p).push(f.label);
      });
    });
    return { by, parents, children };
  })();

  function closure(start, edge) {
    const seen = new Set(), queue = [start];
    while (queue.length) {
      const x = queue.shift();
      for (const y of (edge.get(x) || [])) if (!seen.has(y)) { seen.add(y); queue.push(y); }
    }
    return seen;
  }

  function chainToSeed(x) {
    const steps = [x];
    let cur = x, guard = 0;
    while ((ROAD.parents.get(cur) || []).length && guard++ < 24) {
      cur = ROAD.parents.get(cur)[0];
      steps.push(cur);
    }
    return steps.reverse();
  }

  const centreOf = f => {
    const d = f.desc || "";
    if (!/^(blowup|blow-up|Bl)/i.test(d)) return null;   /* not a blow-up description */
    const i = d.lastIndexOf(" in ");
    return i < 0 ? null : d.slice(i + 4);
  };

  function roadmapView() {
    setChrome("3", "doc");
    document.title = "Roadmap · Fano threefolds";
    const nodes = FAMILIES.slice();
    const W = 1160, TOP = 54, STEP = 60;
    const layers = {};
    nodes.forEach(f => { (layers[f.rho] = layers[f.rho] || []).push(f); });
    Object.values(layers).forEach(l => l.sort((p, q) => p.vol - q.vol || p.label.localeCompare(q.label)));

    /* order each layer by the mean position of its neighbours, a few sweeps */
    const frac = new Map();
    const seedFractions = () => Object.keys(layers).forEach(r =>
      layers[r].forEach((f, i) => frac.set(f.label,
        layers[r].length === 1 ? 0.5 : i / (layers[r].length - 1))));
    seedFractions();
    for (let sweep = 0; sweep < 4; sweep++) {
      const down = sweep % 2 === 0;
      const rs = Object.keys(layers).map(Number).sort((x, y) => down ? x - y : y - x);
      rs.forEach(r => {
        const key = f => {
          const nb = down ? (ROAD.parents.get(f.label) || []) : (ROAD.children.get(f.label) || []);
          const vs = nb.map(x => frac.get(x)).filter(v => v !== undefined);
          return vs.length ? vs.reduce((s, v) => s + v, 0) / vs.length : frac.get(f.label) ?? 0.5;
        };
        layers[r].sort((p, q) => key(p) - key(q) || p.vol - q.vol || p.label.localeCompare(q.label));
        layers[r].forEach((f, i) => frac.set(f.label,
          layers[r].length === 1 ? 0.5 : i / (layers[r].length - 1)));
      });
    }
    const pos = new Map();
    Object.keys(layers).forEach(r => {
      const l = layers[r], n = l.length;
      l.forEach((f, i) => {
        pos.set(f.label, {
          x: 44 + (n === 1 ? (W - 88) / 2 : i * (W - 88) / (n - 1)),
          y: TOP + (10 - Number(r)) * STEP
        });
      });
    });

    const seeds = nodes.filter(f => !f.par).map(f => f.label);
    const sel = roadmapView.selected && ROAD.by.has(roadmapView.selected)
      ? roadmapView.selected : "4-6";

    /* one path from a seed down to the chosen family */
    const path = chainToSeed(sel);
    const onPath = new Set();
    for (let i = 0; i + 1 < path.length; i++) onPath.add(path[i + 1] + "|" + path[i]);

    /* blowing up raises rho: rho = 10 sits at the top */
    const yOf = r => TOP + (10 - Number(r)) * STEP;

    const STYLE = { rat: "e-cur", ell: "e-cur", gen2: "e-cur", pts: "e-pts", mix: "e-mix", unk: "e-cur" };
    const HUE   = { rat: "c-rat", ell: "c-ell", gen2: "c-g2", pts: "c-pt", mix: "c-pt", unk: "c-unk" };
    const edges = [];
    ROAD.by.forEach((f, lab) => {
      (ROAD.parents.get(lab) || []).forEach(p => {
        const a = pos.get(lab), b = pos.get(p);
        const ct = f.ct || { k: "unk", n: 1 };
        const hot = onPath.has(lab + "|" + p) ? " hot" : "";
        /* draw upwards, with a small head at the built-on end */
        edges.push(`<line class="re ${STYLE[ct.k]} ${HUE[ct.k]}${hot}" x1="${a.x}" y1="${a.y}" x2="${b.x}" y2="${b.y}"/>`);
        if (ct.n > 1 && hot) {   /* numerals only along the traced path */
          edges.push(`<text class="cnt" x="${(a.x + b.x) / 2 + 4}" y="${(a.y + b.y) / 2 - 3}">${ct.n}</text>`);
        }
      });
    });

    const dots = nodes.map(f => {
      const p = pos.get(f.label);
      const isSeed = seeds.includes(f.label);
      let cls = "rn" + (isSeed ? " seed" : "") + (f.label === sel ? " sel" : "")
        + (path.includes(f.label) ? " path" : "");
      const shown = isSeed || f.label === sel;
      const idx = layers[f.rho].findIndex(x => x.label === f.label);
      const below = Number(f.rho) === 1 || (Number(f.rho) === 2 && idx % 2 === 1);
      const lab = shown
        ? `<text x="${p.x}" y="${p.y + (below ? 16 : -9)}" text-anchor="middle">${fmt(f.label)}</text>` : "";
      return `<g class="rnode" data-l="${f.label}" tabindex="0" role="button" aria-label="${f.label}">
        <circle class="${cls}" cx="${p.x}" cy="${p.y}" r="${f.label === sel ? 6.5 : 5}"/>
        ${lab}</g>`;
    }).join("");

    const axes = Object.keys(layers).map(r =>
      `<text class="rl" x="8" y="${yOf(r) + 4}">ρ=${r}</text>`).join("");

    view.innerHTML = `
      <div class="doc" style="width:min(1200px,96vw)">
        <div class="kicker">dimension 3 · Fano threefolds</div>
        <h1>Roadmap</h1>
        <p class="lead">${seeds.length} seeds; the other ${105 - seeds.length} families are blow-ups of one of
        them. The graph reads upwards, from a seed to the families constructed from it.</p>
        <div class="roadwrap">
          <div class="road">
            <svg id="roadmap" viewBox="0 0 ${W} ${TOP + 9 * STEP + 34}" role="img"
                 aria-label="The derivation graph of the 105 families">
              ${axes}${edges.join("")}${dots}
            </svg>
          </div>
          <div class="card" id="roadinfo"></div>
        </div>
        <div class="rkey">
          <div class="krow">
            <span class="ktitle">the centre</span>
            <span class="kk"><i class="line cur"></i>one smooth curve <em>(its colour, below, gives the type)</em></span>
            <span class="kk"><i class="line pts pt"></i>finitely many points</span>
            <span class="kk"><i class="line mix pt"></i>a curve together with a point</span>
          </div>
          <div class="krow">
            <span class="ktitle">the curve</span>
            <span class="kk"><i class="line cur rat"></i>rational</span>
            <span class="kk"><i class="line cur ell"></i>elliptic</span>
            <span class="kk"><i class="line cur g2"></i>genus 2</span>
            <span class="kk"><i class="line cur unk"></i>not stated in the tables</span>
          </div>
          <div class="krow">
            <span class="ktitle">other</span>
            <span class="kk"><span class="kkdot seed"></span>a seed</span>
            <span class="kk"><span class="knum">3</span>components, on a selected edge</span>
          </div>
          <div class="knote">Every path runs from a seed upwards to the chosen family: an edge joins a family to
          the one it is a blow-up of, so the style of the edge says what is blown up and, for a curve, the colour
          says which kind of curve it is. Blow-ups at points are orange. A seed is a family that is not obtained
          by blowing up any family of the list.</div>
        </div>
        <div class="row"><a class="chip" href="#/d/3/existence">← Construction</a></div>
      </div>`;

    renderCard(sel);
    $$("#roadmap .rnode").forEach(g => {
      g.onclick = () => { roadmapView.selected = g.dataset.l; roadmapView(); };
    });
    typeset(view);
  }

  function renderCard(sel) {
    const f = ROAD.by.get(sel);
    const card = $("#roadinfo");
    if (!f) return;
    const key = `(<t d="rho">ρ</t>, <t d="index">ι</t>, <t d="volume">(−K)³</t>, <t d="discriminant">d</t>, <t d="content">c</t>)`;
    const c = f.c == null ? "—" : f.c;
    card.innerHTML = `
      <div class="chead"><span class="cfam">${fmt(f.label)}</span>${f.sup ? `<span class="cflag">edge supplied</span>` : ""}</div>
      <div class="cmodel">${f.desc || ""}</div>
      <div class="cinv">${key} = (${f.rho}, ${f.iota}, ${f.vol}, ${String(f.d).replace("-", "−")}, ${c})</div>`;
    wireTerms(card);
    typeset(card);
  }

  /* ---------------------------------------------------------------- panels */
  function el(html) {
    const d = document.createElement("div");
    d.innerHTML = html.trim();
    return d.firstElementChild;
  }

  function panelDim1() {
    const rows = [{ label: "ℙ¹", g: 0, minK: 2 }];
    return facetPanel({
      title: "Lookup",
      idKey: "label",
      specs: [{ key: "g", label: "genus g", values: [0, 1, 2, 3, 4] }],
      columns: [
        { label: "curve", get: r => r.label },
        { label: "g", num: true, get: r => r.g },
        { label: "deg(−K)", num: true, get: r => r.minK }
      ],
      rows,
      note: rows => rows.length === 0
        ? "" : ""
    });
  }

  /* Faceted lookup: a table of the families that filters as values are chosen.
     Options that cannot occur together with the current selection are greyed out. */
  function facetPanel(cfg) {
    const state = {};
    cfg.specs.forEach(s => { state[s.key] = ""; });

    const box = el(`
      <div class="panel">
        <div class="phead">
          <h4>${cfg.title}</h4>
          <button class="linkbtn" id="reset">reset</button>
        </div>
        <div class="controls" id="ctrls"></div>
        <div class="count" id="count"></div>
        <div class="tablewrap">
          <table class="inv lookup"><thead><tr>
            ${cfg.columns.map(c => `<th>${c.label}</th>`).join("")}
          </tr></thead><tbody id="tb"></tbody></table>
        </div>
        <div class="note" id="note"></div>
      </div>`);

    const ctrls = $("#ctrls", box), tb = $("#tb", box), count = $("#count", box), note = $("#note", box);

    /* selects */
    cfg.specs.forEach(s => {
      const wrap = el(`<div class="ctrl"><label for="f-${s.key}">${s.label}</label>
        <select id="f-${s.key}"></select></div>`);
      const sel = $("select", wrap);
      sel.appendChild(el(`<option value="">any</option>`));
      s.values.forEach(v => sel.appendChild(el(`<option value="${v}">${v}</option>`)));
      sel.addEventListener("change", () => { state[s.key] = sel.value; paint(); });
      ctrls.appendChild(wrap);
      s.el = sel;
    });

    const num = v => (v === null || v === undefined) ? "—" : String(v).replace("-", "−");

    const matches = (r, skip) => cfg.specs.every(s =>
      s.key === skip || !state[s.key] || String(r[s.key]) === state[s.key]);

    function feasible(spec, v) {
      return cfg.rows.some(r => String(r[spec.key]) === String(v) && matches(r, spec.key));
    }

    function paint() {
      cfg.specs.forEach(s => {
        $$("option", s.el).forEach(o => {
          if (o.value === "") return;
          const ok = feasible(s, o.value);
          o.disabled = !ok;
          o.style.color = ok ? "" : "#b9bcc7";
        });
      });

      const rows = cfg.rows.filter(r => matches(r));
      count.textContent = rows.length === cfg.rows.length
        ? `${rows.length} families`
        : `${rows.length} of ${cfg.rows.length} families`;

      tb.innerHTML = rows.map(r => `
        <tr class="pick" data-id="${r[cfg.idKey]}">
          ${cfg.columns.map(c => {
            const v = c.get(r);
            return `<td class="${c.num ? "num" : ""}">${c.num ? num(v) : v}</td>`;
          }).join("")}
        </tr>`).join("");

      $$("#tb tr.pick", box).forEach(tr => tr.addEventListener("click", () => {
        const r = cfg.rows.find(x => String(x[cfg.idKey]) === tr.dataset.id);
        cfg.specs.forEach(s => { state[s.key] = String(r[s.key]); s.el.value = String(r[s.key]); });
        paint();
      }));

      note.innerHTML = rows.length === 0
        ? `<span class="warn">No family has this combination.</span>`
        : (cfg.note ? cfg.note(rows) : "");
      typeset(note);
    }

    $("#reset", box).addEventListener("click", () => {
      cfg.specs.forEach(s => { state[s.key] = ""; s.el.value = ""; });
      paint();
    });

    paint();
    return box;
  }

  function panelDim2() {
    const rows = [
      ["ℙ²", 9, 3], ["ℙ¹×ℙ¹", 8, 2], ["Bl₁ℙ²", 8, 1], ["Bl₂ℙ²", 7, 1], ["Bl₃ℙ²", 6, 1],
      ["Bl₄ℙ²", 5, 1], ["Bl₅ℙ²", 4, 1], ["Bl₆ℙ²", 3, 1], ["Bl₇ℙ²", 2, 1], ["Bl₈ℙ²", 1, 1]
    ].map(([label, k2, iota]) => ({ label, k2, iota }));

    return facetPanel({
      title: "Lookup",
      idKey: "label",
      specs: [
        { key: "k2",   label: "K²",          values: [9, 8, 7, 6, 5, 4, 3, 2, 1] },
        { key: "iota", label: "index ι",     values: [1, 2, 3] }
      ],
      columns: [
        { label: "surface", get: r => r.label },
        { label: "K²", num: true, get: r => r.k2 },
        { label: "ι", num: true, get: r => r.iota }
      ],
      rows
    });
  }

  function panelDim3() {
    return facetPanel({
      title: "Lookup",
      idKey: "label",
      specs: [
        { key: "iota", label: "index ι",       values: IOTA },
        { key: "vol",  label: "volume (−K)³",  values: VOLS },
        { key: "d",    label: "discriminant d", values: DS }
      ],
      columns: [
        { label: "family", get: r => fmt(r.label) },
        { label: "ρ", num: true, get: r => r.rho },
        { label: "ι", num: true, get: r => r.iota },
        { label: "(−K)³", num: true, get: r => r.vol },
        { label: "h¹,²", num: true, get: r => r.h12 },
        { label: "d", num: true, get: r => r.d },
        { label: "c", num: true, get: r => (r.c == null ? "—" : r.c) }
      ],
      rows: FAMILIES,
      note: rows => rows.length > 1 && rows.every(r => r.iota === rows[0].iota &&
                        r.vol === rows[0].vol && r.d === rows[0].d)
        ? `These ${rows.length} families share (ι, (−K)³, d); they are separated by
           <t d="content">c</t> = ${rows.map(r => r.c).join(" and ")}.`
        : ""
    });
  }

  /* ---------------------------------------------------------------- families */
  function familiesView() {
    setChrome(currentDim, true);
    document.title = "The 105 families";
    const rows = FAMILIES.map(f => `
      <tr class="pick" data-l="${f.label}">
        <td class="num">${fmt(f.label)}</td><td class="num">${f.rho}</td><td class="num">${f.iota}</td>
        <td class="num">${f.vol}</td><td class="num">${f.h12}</td><td class="num">${f.d}</td>
        <td class="num">${f.c == null ? "—" : f.c}</td>
        <td class="num">${f.moduli == null ? "—" : f.moduli}</td>
        <td>${f.desc || ""}</td>
      </tr>`).join("");
    view.innerHTML = `
      <div class="doc" style="width:min(1080px,94vw)">
        <div class="kicker">data</div>
        <h1>The 105 families</h1>
        <p class="lead">Audited invariants and models. Click a row for its values.</p>
        <table class="inv"><thead><tr>
          <th>family</th><th>ρ</th><th>ι</th><th>(−K)³</th><th>h¹,²</th><th>d</th><th>c</th>
          <th>moduli</th><th>model</th>
        </tr></thead><tbody>${rows}</tbody></table>
        <div class="row"><a class="chip" href="#/d/3">← the diagram</a></div>
      </div>`;
    $$("#view tr.pick").forEach(tr => tr.addEventListener("click", () => {
      const f = FAMILIES.find(x => x.label === tr.dataset.l);
      $(".sheet", sheetBd).innerHTML = `
        <div class="hd"><div><div class="crumb">family</div><h2>${fmt(f.label)}</h2></div>
        <button class="x" aria-label="close">×</button></div>
        <div class="body"><div class="stmt">${f.desc || ""}${
          f.alt ? `<br><span class="meta">also: ${f.alt}</span>` : ""}</div>
          <p class="meta" style="margin-top:14px">ρ = ${f.rho} · ι = ${f.iota} · (−K)³ = ${f.vol} ·
          h¹,² = ${f.h12} · d = ${f.d}${f.c == null ? "" : " · c = " + f.c}</p></div>`;
      sheetBd.classList.add("open");
      $(".x", sheetBd).addEventListener("click", closeSheet);
    }));
  }

  /* ---------------------------------------------------------------- router */
  const NODE_ALIAS = { construction: "existence", distinctness: "disjointness", exhaustion: "completeness" };

  function route() {
    const parts = location.hash.replace(/^#\/?/, "").split("/").filter(Boolean);
    if (parts[2] && NODE_ALIAS[parts[2]]) parts[2] = NODE_ALIAS[parts[2]];
    if (parts[0] === "d" && DIMS[parts[1]]) {
      currentDim = parts[1];
      if (parts[2] && DIMS[parts[1]].nodes[parts[2]]) docView(parts[1], parts[2]);
      else stageView(parts[1]);
    } else if (parts[0] === "roadmap") {
      roadmapView();
    } else if (parts[0] === "families") {
      familiesView();
    } else {
      stageView(null);
    }
    window.scrollTo(0, 0);
  }

  window.addEventListener("hashchange", route);
  route();
})();
