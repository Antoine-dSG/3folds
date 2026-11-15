/* ------------------------------------------------------------------ *
 *  Content.  Definitions are written as TeX (MathJax, \( \) and \[ \]).
 * ------------------------------------------------------------------ */

const DEFS = {

  divisor: {
    label: "divisor",
    tex: String.raw`
<p>Let \(X\) be a <t d="smooth">smooth</t> <t d="projective">projective</t> variety over \(\mathbb{C}\), of dimension \(n\).</p>
<p>A <strong>prime divisor</strong> on \(X\) is an irreducible closed subvariety \(D\subset X\) of codimension \(1\).</p>
<p>A <strong>divisor</strong> on \(X\) is a finite formal sum
\[ D=\sum_{i=1}^{s} n_i D_i, \qquad n_i\in\mathbb{Z}, \]
where the \(D_i\) are prime divisors. Divisors form the free abelian group \(\operatorname{Div}(X)\) on the set of prime divisors. A divisor is <strong>effective</strong>, written \(D\ge 0\), if every \(n_i\ge 0\).</p>
<p>Two divisors \(D,D'\) are <strong>linearly equivalent</strong> if \(D-D'=\operatorname{div}(f)\) for some \(f\in\mathbb{C}(X)^{\times}\), where \(\operatorname{div}(f)\) is the divisor of zeros and poles of \(f\).</p>
<p>Because \(X\) is smooth, every divisor is a <strong>Cartier</strong> divisor (locally defined by a single equation), and \(D\mapsto\mathcal{O}_X(D)\) induces an isomorphism
\[ \operatorname{Div}(X)\big/\!\{\text{principal divisors}\} \;\xrightarrow{\ \sim\ }\; \operatorname{Pic}(X). \]
We identify divisors, linear equivalence classes and line bundles under it, and write \(H^0(X,D)=H^0(X,\mathcal{O}_X(D))\) and \(D\cdot C=\deg\big(\mathcal{O}_X(D)|_C\big)\) for a curve \(C\subset X\).</p>
<p class="fine2">Conventions: divisors are Weil divisors; on a smooth variety these agree with Cartier divisors, so no distinction is needed below. A divisor class in \(\operatorname{Pic}(X)\) is denoted by the same symbol as any divisor representing it.</p>`
  },

  ample: {
    label: "ample divisor",
    tex: String.raw`
<p>Let \(X\) be a projective variety over \(\mathbb{C}\) and \(D\) a <t d="divisor">divisor</t> on \(X\).</p>
<p>\(D\) is <strong>ample</strong> if the line bundle \(\mathcal{O}_X(D)\) is ample, that is, if there exists an integer \(m\ge 1\) such that \(mD\) is <strong>very ample</strong>: the evaluation map on global sections is a closed immersion
\[ \varphi_{mD}\colon X\;\hookrightarrow\;\mathbb{P}\Big(H^0\big(X,\mathcal{O}_X(mD)\big)^{\vee}\Big), \qquad x\longmapsto\big[s\mapsto s(x)\big]. \]</p>
<p>Equivalently (Nakai–Moishezon criterion), \(D\) is a \(\mathbb{Q}\)-Cartier divisor and
\[ D^{\,\dim V}\cdot V \;>\; 0 \]
for every irreducible closed subvariety \(V\subseteq X\) of positive dimension, the product being the degree of the restriction of \(D\) to \(V\).</p>
<p>Equivalently (Kleiman's criterion), the class of \(D\) in \(N^1(X)\) lies in the interior of the dual of the cone of curves \(\overline{\mathrm{NE}}(X)\).</p>
<p class="fine2">An <strong>ample divisor class</strong> is the class in \(\operatorname{Pic}(X)\) of an ample divisor; ampleness depends only on that class. In this site, "\(-K_X\) is ample" means that the anticanonical class is ample in this sense.</p>`
  },

  smooth: {
    label: "smooth",
    tex: String.raw`
<p>\(X\) is <strong>smooth</strong> (nonsingular) if every local ring \(\mathcal{O}_{X,x}\) is a regular local ring. Equivalently, every point of \(X\) has a Zariski-open neighbourhood isomorphic to an open subset of \(\mathbb{A}^{n}\) with \(n=\dim X\); equivalently, the sheaf of Kähler differentials \(\Omega^{1}_{X}\) is a locally free \(\mathcal{O}_{X}\)-module of rank \(n\).</p>`
  },

  projective: {
    label: "projective",
    tex: String.raw`
<p>\(X\) is <strong>projective</strong> if there exists a closed immersion \(X\hookrightarrow\mathbb{P}^{N}_{\mathbb{C}}\) for some \(N\ge 0\); equivalently, if \(X\) carries an ample line bundle.</p>`
  },

  canonical: {
    label: "canonical divisor",
    tex: String.raw`
<p>The <strong>canonical line bundle</strong> of a smooth variety \(X\) of dimension \(n\) is
\[ \omega_X \;=\; \textstyle\bigwedge^{n}\Omega^{1}_{X} \;=\; \det\Omega^{1}_{X}. \]
A <strong>canonical divisor</strong> \(K_X\) is any divisor with \(\mathcal{O}_X(K_X)\cong\omega_X\). For \(X\) smooth and projective, \(K_X\) is the divisor of zeros and poles of any non-zero meromorphic \(n\)-form on \(X\); any two such divisors are linearly equivalent, so \(K_X\) is well defined as a class in \(\operatorname{Pic}(X)\).</p>
<p>Since \(\omega_X\) is a line bundle, \(K_X\) is a <t d="divisor">divisor</t> in the sense above. Its inverse \(-K_X\) is the <strong>anticanonical class</strong>, and \(\mathcal{O}_X(-K_X)\cong\omega_X^{\vee}\).</p>
<p>Example (adjunction): a smooth hypersurface \(X\subset\mathbb{P}^{N}\) of degree \(d\) has \(K_X=\mathcal{O}_X(d-N-1)\); hence \(X\) is <t d="fano">Fano</t> if and only if \(d\le N-1\).</p>`
  },

  fano: {
    label: "Fano variety",
    tex: String.raw`
<p>A <strong>Fano variety</strong> is a <t d="smooth">smooth</t> <t d="projective">projective</t> complex variety \(X\) of dimension \(n\) whose anticanonical divisor \(-K_X\) is <t d="ample">ample</t>.</p>
<svg class="trichotomy" viewBox="0 0 540 112" role="img" aria-label="The three regimes according to the sign of the canonical class">
  <rect x="2" y="4" width="172" height="66" rx="12" fill="#eaf0fd" stroke="#c3d2f4"/>
  <text class="tri-a" x="88" y="30" text-anchor="middle">−K ample</text>
  <text class="tri-b" x="88" y="52" text-anchor="middle">Fano</text>
  <text class="tri-c" x="88" y="92" text-anchor="middle">ℙ², cubic threefold</text>
  <rect x="184" y="4" width="172" height="66" rx="12" fill="#f0efe9" stroke="#d8d4c6"/>
  <text class="tri-a" x="270" y="30" text-anchor="middle">K ≡ 0</text>
  <text class="tri-b" x="270" y="52" text-anchor="middle">Calabi–Yau</text>
  <text class="tri-c" x="270" y="92" text-anchor="middle">quartic K3</text>
  <rect x="366" y="4" width="172" height="66" rx="12" fill="#f7efe9" stroke="#e0cfc3"/>
  <text class="tri-a" x="452" y="30" text-anchor="middle">K ample</text>
  <text class="tri-b" x="452" y="52" text-anchor="middle">general type</text>
  <text class="tri-c" x="452" y="92" text-anchor="middle">sextic surface</text>
</svg>
<p><strong>Examples.</strong></p>
<ul>
<li>the projective spaces ℙⁿ;</li>
<li>a smooth quadric, e.g. \(Q^{3}\subset\mathbb{P}^{4}\);</li>
<li>a hypersurface of degree \(d\le n+1\) in \(\mathbb{P}^{n+1}\) — in dimension \(3\): a quadric, a cubic, a quartic;</li>
<li>the ten <t d="delpezzo">del Pezzo surfaces</t>;</li>
<li>\(\mathbb{P}^{1}\times\mathbb{P}^{2}\);</li>
<li>the <t d="blowup">blow-up</t> of \(\mathbb{P}^{3}\) along a line.</li>
</ul>
<p><strong>Properties.</strong></p>
<ul>
<li>\(H^{i}(X,\mathcal{O}_X)=0\) for \(i>0\), so \(\operatorname{Pic}(X)\cong H^{2}(X;\mathbb{Z})\) and \(\rho=b_{2}\);</li>
<li>the <t d="index">index</t> is at most \(n+1\), with equality only for ℙⁿ (Kobayashi–Ochiai);</li>
<li><t d="deformation">deformations</t> are unobstructed, and there are finitely many families.</li>
</ul>
<p><strong>References.</strong></p>
<ul class="refs">
<li>V. A. Iskovskikh, <i>Fano threefolds I</i> (1977), <i>II</i> (1978)</li>
<li>S. Mori, S. Mukai, <i>Classification of Fano 3-folds with \(B_{2}\ge2\)</i> (1981; erratum 2003)</li>
<li>V. A. Iskovskikh, Yu. G. Prokhorov, <i>Fano varieties</i>, Algebraic Geometry V (1999)</li>
<li>Yu. G. Prokhorov, <i>Fano threefolds</i> (2025)</li>
<li>J. Kollár, <i>Rational curves on algebraic varieties</i> (1996)</li>
</ul>`
  },

  deformation: {
    label: "deformation equivalence",
    tex: String.raw`
<p>Two smooth projective varieties \(X_0,X_1\) over \(\mathbb{C}\) are <strong>deformation equivalent</strong> if there is a finite sequence
\[ X_0=Y_0,\; Y_1,\; \dots,\; Y_s=X_1 \]
such that for every \(i\) there exists a <strong>smooth proper family</strong>, i.e. a smooth proper morphism of schemes
\[ \pi\colon \mathcal{Y}\longrightarrow B, \]
with \(B\) a connected scheme of finite type over \(\mathbb{C}\), and points \(b_i,b_{i+1}\in B\) with
\[ Y_i=\pi^{-1}(b_i),\qquad Y_{i+1}=\pi^{-1}(b_{i+1}). \]
A <strong>deformation family</strong> (deformation class, deformation type) is an equivalence class for this relation.</p>
<p class="fine2">Smoothness of \(\pi\) makes every fibre a smooth variety of the same dimension; properness makes the fibres projective (given a relatively ample bundle). By Ehresmann's theorem the fibres of one such family are all diffeomorphic, so every topological invariant is constant on a deformation class.</p>`
  },

  delpezzo: {
    label: "del Pezzo surface",
    tex: String.raw`
<p>A <strong>del Pezzo surface</strong> is a <t d="fano">Fano variety</t> of dimension \(2\): a smooth projective surface \(S\) with \(-K_S\) <t d="ample">ample</t>.</p>
<p>Its <strong>degree</strong> is the integer \(K_S^{2}\in\{1,2,\dots,9\}\) (see <t d="k2">K²</t>). Every del Pezzo surface over \(\mathbb{C}\) is isomorphic to \(\mathbb{P}^{2}\), to \(\mathbb{P}^{1}\times\mathbb{P}^{1}\), or to the blow-up of \(\mathbb{P}^{2}\) at \(r\le 8\) points in <t d="generalposition">general position</t>, and then \(K_S^{2}=9-r\).</p>`
  },

  generalposition: {
    label: "general position",
    tex: String.raw`
<p>Let \(p_1,\dots,p_r\in\mathbb{P}^{2}\) be distinct points, \(1\le r\le 8\). They are in <strong>general position</strong> if</p>
<ul>
<li>no three of the \(p_i\) are collinear,</li>
<li>no six of them lie on a conic,</li>
<li>no eight of them lie on a plane cubic that is singular at one of the \(p_i\).</li>
</ul>
<p>These are exactly the conditions under which \(-K_S\) is <t d="ample">ample</t> for \(S=\operatorname{Bl}_{p_1,\dots,p_r}\mathbb{P}^{2}\): an effective curve \(C\subset S\) of anticanonical degree \(\le 0\) is precisely the strict transform of a line through three of the points, of a conic through six, or of a cubic through eight singular at one of them.</p>`
  },

  index: {
    label: "Fano index",
    tex: String.raw`
<p>The <strong>Fano index</strong> of a Fano variety \(X\) is the largest positive integer \(r\) such that
\[ -K_X \;=\; r\,D \qquad\text{for some } D\in\operatorname{Pic}(X). \]
Equivalently, \(r\) is the divisibility of the class \(-K_X\) in the lattice \(\operatorname{Pic}(X)\): since \(\operatorname{Pic}(X)\cong H^{2}(X,\mathbb{Z})\) is torsion-free, \(-K_X=rD\) with \(D\) integral is equivalent to \(r\mid -K_X\) in \(\operatorname{Pic}(X)\).</p>
<p>Kobayashi–Ochiai: \(\iota(X)\le \dim X+1\), with equality if and only if \(X\cong\mathbb{P}^{\dim X}\), and \(r=\dim X\) only for the smooth quadric. Hence for a Fano threefold \(\iota\in\{1,2,3,4\}\).</p>`
  },

  volume: {
    label: "volume",
    tex: String.raw`
<p>For a Fano variety \(X\) of dimension \(n\), the <strong>anticanonical volume</strong> (or degree) is the Chern number
\[ (-K_X)^{n} \;=\; \int_{X} c_1\big(\mathcal{O}_X(-K_X)\big)^{n} \;=\; \underbrace{(-K_X)\cdot\ldots\cdot(-K_X)}_{n\ \text{times}}. \]
For \(n=1\) this is \(2-2g\); for \(n=2\) it is \(K_X^{2}\) (the degree of a del Pezzo surface); for \(n=3\) it is the triple self-intersection \((-K_X)^{3}\).</p>
<p>Being a Chern number, it is constant in smooth proper families, hence a deformation invariant. For a Fano threefold with \(\rho=1\) and index \(1\), it determines the genus by \(g=1+\tfrac12(-K_X)^{3}\).</p>`
  },

  rho: {
    label: "Picard number",
    tex: String.raw`
<p>\(\rho(X)=\operatorname{rank}_{\mathbb{Z}}\operatorname{Pic}(X)=\dim_{\mathbb{Q}}N^{1}(X)\), where \(N^{1}(X)\) is the \(\mathbb{Q}\)-vector space of divisor classes modulo numerical equivalence.</p>
<p>For a Fano variety \(\operatorname{Pic}(X)\cong H^{2}(X,\mathbb{Z})\) and \(H^{2}(X,\mathcal{O}_X)=0\), so \(\rho(X)=b_2(X)\).</p>`
  },

  h12: {
    label: "h^{1,2}",
    tex: String.raw`
<p>\(h^{1,2}(X)=\dim_{\mathbb{C}}H^{1}\big(X,\Omega^{2}_{X}\big)\). For a Fano threefold, \(h^{3,0}=\dim H^{0}(X,\omega_X)=0\) since \(-K_X\) is ample, hence \(b_3=2h^{1,2}\) and \(h^{1,2}=\tfrac12 b_3\).</p>`
  },

  lattice: {
    label: "lattice",
    tex: String.raw`
<p>In this site a <strong>lattice</strong> is a finitely generated free abelian group \(L\) together with a \(\mathbb{Z}\)-valued form on it — bilinear, or trilinear as in \(T\).</p>
<p>That \(\operatorname{Pic}(X)\) is a finitely generated abelian group is a theorem, not a definition: for \(X\) smooth and projective over \(\mathbb{C}\), the connected component \(\operatorname{Pic}^{0}(X)\) is an abelian variety and the Néron–Severi group \(\operatorname{NS}(X)=\operatorname{Pic}(X)/\operatorname{Pic}^{0}(X)\) is finitely generated. If \(H^{1}(X,\mathcal{O}_X)=H^{2}(X,\mathcal{O}_X)=0\) — in particular if \(X\) is <t d="fano">Fano</t> — then \(\operatorname{Pic}^{0}(X)=0\) and
\[ \operatorname{Pic}(X)\;\cong\;H^{2}(X;\mathbb{Z}), \]
a free abelian group of rank \(\rho=b_{2}(X)\), so it is a lattice in the sense above.</p>
<p>The form is the <t d="cubicform">triple intersection form</t> \(T(x,y,z)=\int_X x\cup y\cup z\), and the marking is \(c_1=-K_X\).</p>`
  },

  cubicform: {
    label: "triple intersection form",
    tex: String.raw`
<p>The <strong>triple intersection form</strong> of a smooth projective threefold \(X\) is the symmetric trilinear map
\[ T\colon \operatorname{Pic}(X)^{3}\longrightarrow\mathbb{Z},\qquad T(x,y,z)=\int_{X} x\cup y\cup z, \]
where the classes are identified with elements of \(H^{2}(X,\mathbb{Z})\) and \(T(x,x,x)=x^{3}\) is the triple self-intersection. For a divisor \(D\), \(T(x,x,D)=x^{2}\cdot D\).</p>
<p>\(T\) is computed from the cup product, hence is a topological invariant and in particular constant in smooth proper families.</p>`
  },

  discriminant: {
    label: "discriminant d",
    tex: String.raw`
<p>Let \(T\) be the <t d="cubicform">triple intersection form</t> and \(c_1=-K_X\). The <strong>first polar form</strong> of \(T\) at \(c_1\) is the symmetric bilinear form
\[ q(x,y)=T(x,y,c_1)=x\cdot y\cdot(-K_X),\qquad q(x)=q(x,x)=x^{2}\cdot(-K_X). \]
The <strong>anticanonical discriminant</strong> is
\[ d(X)=\det\big(q(e_i,e_j)\big)_{1\le i,j\le\rho}\in\mathbb{Z}, \]
for any \(\mathbb{Z}\)-basis \((e_1,\dots,e_\rho)\) of \(\operatorname{Pic}(X)\).</p>
<p>It is independent of the basis: a change of basis \(g\in\operatorname{GL}_{\rho}(\mathbb{Z})\) replaces the Gram matrix \(A\) by \(g^{t}Ag\), and \(\det(g)=\pm 1\). For \(\rho=1\), writing \(-K_X=\iota H\) gives \(d=(-K_X)^{3}/\iota^{2}\).</p>
<p class="fine2">This is the invariant tabulated as "Mori–Mukai \(d\)" for the families with \(\rho\ge 2\).</p>`
  },

  content: {
    label: "content c",
    tex: String.raw`
<p>The <strong>content</strong> of the cubic form \(x\mapsto x^{3}\) on \(\operatorname{Pic}(X)\) is the gcd of its <em>values</em>,
\[ c(X)=\gcd\big\{\,T(x,x,x)\;:\;x\in\operatorname{Pic}(X)\,\big\}\in\mathbb{Z}_{>0}. \]
It is unchanged by a change of lattice basis, since such a change permutes the set of values; hence \(c(X)\) is an invariant of the lattice \((\operatorname{Pic}(X),T)\).</p>
<p class="fine2">The gcd of the <em>coefficients</em> of \(x^{3}\) in a basis is not an invariant (for \(x^{2}-x\) the coefficients have gcd \(1\) but the values are even). Examples: \(c=1\) for \(\mathrm{Bl}_{\text{line}}\mathbb{P}^{3}\), \(c=3\) for \(\mathbb{P}^{1}\times\mathbb{P}^{2}\), \(c=6\) for \((\mathbb{P}^{1})^{3}\).</p>`
  },

  genus3: {
    label: "genus (of a Fano threefold)",
    tex: String.raw`
<p>Let \(X\) be a Fano threefold with \(\rho(X)=1\) and \(\iota(X)=1\). Then \((-K_X)^{3}\) is even and the <strong>genus</strong> of \(X\) is
\[g \;=\; 1 + \tfrac12 (-K_X)^{3}.\]
Equivalently \(h^{0}(-K_X)=g+2\); for \(g\ge3\) the anticanonical system embeds \(X\subset\mathbb{P}^{g+1}\) as a threefold of degree \(2g-2\) whose hyperplane sections are K3 surfaces of genus \(g\). The possible values are \(g\in\{2,3,\dots,10,12\}\).</p>
<p class="fine2">Not to be confused with the <t d="genus">genus of a curve</t>, which is the genus of the hyperplane sections only.</p>`
  },

  genus: {
    label: "genus",
    tex: String.raw`
<p>For a smooth projective curve \(C\), the <strong>genus</strong> is
\[ g=\dim_{\mathbb{C}}H^{0}(C,\omega_{C})=\dim_{\mathbb{C}}H^{1}(C,\mathcal{O}_{C}). \]
Riemann–Roch gives \(\deg K_{C}=2g-2\), so \(\deg(-K_C)=2-2g\). A curve of genus \(0\) over \(\mathbb{C}\) is isomorphic to \(\mathbb{P}^{1}\).</p>`
  },

  castelnuovo: {
    label: "Castelnuovo's criterion",
    tex: String.raw`
<p><strong>Castelnuovo's rationality criterion.</strong> A smooth projective surface \(S\) with
\[ q(S)=h^{1}(S,\mathcal{O}_S)=0,\qquad p_g(S)=h^{2}(S,\mathcal{O}_S)=0,\qquad P_2(S)=h^{0}(S,\mathcal{O}_S(2K_S))=0 \]
is rational, i.e. birational to \(\mathbb{P}^{2}\).</p>`
  },

  contraction: {
    label: "elementary contraction",
    tex: String.raw`
<p>An <strong>elementary contraction</strong> of a smooth projective variety \(X\) is a morphism with connected fibres
\[ f\colon X\longrightarrow Y,\qquad Y\ \text{projective}, \]
such that every curve contracted by \(f\) has class in one fixed <t d="extremalray">extremal ray</t> \(R\subset\overline{\mathrm{NE}}(X)\), and every curve whose class lies in \(R\) is contracted. Equivalently \(\rho(X)=\rho(Y)+1\) and \(f\) is the contraction of \(R\).</p>
<p>It is <strong>divisorial</strong> if \(f\) contracts a divisor (then \(\dim Y=\dim X\)), and of <strong>fibre type</strong> otherwise; in dimension \(3\) the fibre-type cases are conic bundles, del Pezzo fibrations and \(\mathbb{P}^{1}\)-bundles.</p>`
  },

  conecurves: {
    label: "cone of curves",
    tex: String.raw`
<p>\(\overline{\mathrm{NE}}(X)\subseteq N_{1}(X)_{\mathbb{R}}=Z_{1}(X)_{\mathbb{R}}/\equiv_{\mathrm{num}}\) is the closure of the convex cone generated by the classes of effective curves on \(X\), where \(Z_1\) is the group of \(1\)-cycles modulo rational equivalence and \(\equiv_{\mathrm{num}}\) numerical equivalence.</p>
<p>Mori's cone theorem: if \(X\) is Fano, \(\overline{\mathrm{NE}}(X)\) is a rational polyhedral cone, spanned by the classes of rational curves.</p>`
  },

  extremalray: {
    label: "extremal ray",
    tex: String.raw`
<p>An <strong>extremal ray</strong> is a one-dimensional face \(R\) of the cone \(\overline{\mathrm{NE}}(X)\). For a Fano variety every extremal ray is generated by the class of a rational curve \(C\) with
\[ 0<-K_X\cdot C\le \dim X+1 \]
(Mori's bend-and-break); in dimension \(3\) this bounds \(-K_X\cdot C\le 4\).</p>`
  },

  blowup: {
    label: "blow-up",
    tex: String.raw`
<p>Let \(Y\) be smooth projective and \(Z\subset Y\) a smooth closed subvariety of codimension \(c\ge 2\). The <strong>blow-up</strong> of \(Y\) along \(Z\) is the projective birational morphism
\[ \sigma\colon \widetilde{Y}=\operatorname{Bl}_{Z}Y\longrightarrow Y \]
that is an isomorphism over \(Y\smallsetminus Z\) and such that \(E=\sigma^{-1}(Z)\) is a divisor and \(E\to Z\) is a \(\mathbb{P}^{c-1}\)-bundle with \(\mathcal{O}_{E}(E)\cong\mathcal{O}_{\mathbb{P}^{c-1}}(-1)\). \(E\) is the <strong>exceptional divisor</strong>.</p>
<p>Then
\[ \operatorname{Pic}(\widetilde{Y})\cong\sigma^{*}\operatorname{Pic}(Y)\oplus\mathbb{Z}E, \qquad K_{\widetilde{Y}}=\sigma^{*}K_{Y}+(c-1)E. \]
In particular \(K_{\operatorname{Bl}_{p}Y}=\sigma^{*}K_{Y}+2E\) for a point, and \(K_{\operatorname{Bl}_{C}Y}=\sigma^{*}K_{Y}+E\) for a smooth curve.</p>`
  },

  principal: {
    label: "principal invariants",
    tex: String.raw`
<p>Galkin's <strong>principal invariants</strong> of a smooth Fano threefold are the five integers
\[ (\rho,\; r,\; \deg,\; b,\; d)=\big(\rho(X),\ \iota(X),\ (-K_X)^{3},\ h^{1,2}(X),\ d(X)\big), \]
i.e. Picard number, index, degree (volume), half the third Betti number (<t d="h12">h¹,²</t>), and the anticanonical <t d="discriminant">discriminant</t>.</p>`
  },

  w2: {
    label: "w\u2082",
    tex: String.raw`
<p>\(w_{2}(X)\in H^{2}(X;\mathbb{Z}/2)\) is the second Stiefel–Whitney class of the tangent bundle. For a smooth projective complex variety
\[ w_{2}(X)\equiv c_{1}(X)\equiv -K_X \pmod{2}. \]
A compact oriented \(4\)-manifold is <strong>spin</strong> if and only if \(w_{2}=0\). For a del Pezzo surface this says: \(S\) is spin if and only if \(K_S\) is even, which happens if and only if \(S\cong\mathbb{P}^{1}\times\mathbb{P}^{1}\) (the only del Pezzo surface with even intersection form).</p>`
  },

  k2: {
    label: "K\u00b2",
    tex: String.raw`
<p>\(K_{S}^{2}=\int_{S}K_{S}\cup K_{S}\) is the self-intersection number of the canonical class, computed in \(H^{4}(S,\mathbb{Z})\cong\mathbb{Z}\). For a del Pezzo surface \(S=\operatorname{Bl}_{r}\mathbb{P}^{2}\) (with \(r=0\) meaning \(\mathbb{P}^{2}\)) one has \(K_{S}^{2}=9-r\); this integer is the <strong>degree</strong> of \(S\).</p>`
  },

  moduli: {
    label: "moduli",
    tex: String.raw`
<p>The <strong>moduli functor</strong> of a deformation class assigns to a scheme \(B\) the set of isomorphism classes of smooth proper families over \(B\) whose fibres lie in that class (an isomorphism of families being an isomorphism over \(B\)). A <strong>moduli space</strong> is a scheme coarsely representing it: its points are the isomorphism classes.</p>
<p>For a Fano threefold \(H^{2}(X,T_X)=0\) (Nakano vanishing), so deformations are unobstructed and the moduli space is smooth of dimension \(h^{1}(X,T_X)\) at \([X]\). That dimension is the <strong>number of moduli</strong>; it is \(0\) for a <t d="rigid">rigid</t> variety.</p>`
  },

  minimal: {
    label: "minimal surface",
    tex: String.raw`
<p>A smooth projective surface \(S\) is <strong>minimal</strong> if it contains no \((-1)\)-curve, i.e. no smooth rational curve \(C\subset S\) with \(K_S\cdot C=-1\); equivalently, every birational morphism \(S\to S'\) with \(S'\) smooth is an isomorphism. Every smooth projective surface is obtained from a unique minimal surface by a finite sequence of blow-ups at points.</p>`
  },

  rigid: {
    label: "rigid",
    tex: String.raw`
<p>\(X\) is <strong>rigid</strong> if \(H^{1}(X,T_X)=0\), where \(T_X\) is the tangent bundle: every first-order deformation of \(X\) is trivial, so \([X]\) is an isolated point of the moduli space.</p>`
  },

  model: {
    label: "model",
    tex: String.raw`
<p>A <strong>model</strong> of a deformation family is an explicit presentation of its members as subvarieties or quotients of a fixed ambient space — a hypersurface or complete intersection, a linear section of a homogeneous variety, a blow-up, a double cover, a product or a projective bundle — together with a connected parameter space of such data, each datum giving a member of the family.</p>`
  }
};

/* ------------------------------------------------------------------ */

const CURVES_TABLE = `
<table class="inv"><thead><tr><th>genus g</th><th>deg(−K) = 2 − 2g</th><th>−K ample?</th><th>curve</th></tr></thead><tbody>
<tr><td class="num">0</td><td class="num">2</td><td>yes</td><td>ℙ¹</td></tr>
<tr><td class="num">1</td><td class="num">0</td><td>no</td><td>elliptic curves</td></tr>
<tr><td class="num">2</td><td class="num">−2</td><td>no</td><td>curves of genus 2</td></tr>
</tbody></table>`;

const DELPEZZO_CONSTRUCTION_TABLE = `
<table class="inv"><thead><tr><th>kind of model</th><th>count</th></tr></thead><tbody>
<tr><td>ℙ² itself</td><td class="num">1</td></tr>
<tr><td>ℙ¹ × ℙ¹</td><td class="num">1</td></tr>
<tr><td>blow-up of ℙ² at r points in general position, 1 ≤ r ≤ 8</td><td class="num">8</td></tr>
<tr><td><b>total</b></td><td class="num"><b>10</b></td></tr>
</tbody></table>`;

const DELPEZZO_TABLE = `
<table class="inv"><thead><tr><th>surface</th><th>K²</th><th>ι</th><th>moduli</th><th>(−1)-curves</th></tr></thead><tbody>
<tr><td>ℙ²</td><td class="num">9</td><td class="num">3</td><td class="num">0</td><td class="num">0</td></tr>
<tr><td>ℙ¹ × ℙ¹</td><td class="num">8</td><td class="num">2</td><td class="num">0</td><td class="num">0</td></tr>
<tr><td>Bl₁ℙ²</td><td class="num">8</td><td class="num">1</td><td class="num">0</td><td class="num">1</td></tr>
<tr><td>Bl₂ℙ²</td><td class="num">7</td><td class="num">1</td><td class="num">0</td><td class="num">3</td></tr>
<tr><td>Bl₃ℙ²</td><td class="num">6</td><td class="num">1</td><td class="num">0</td><td class="num">6</td></tr>
<tr><td>Bl₄ℙ²</td><td class="num">5</td><td class="num">1</td><td class="num">0</td><td class="num">10</td></tr>
<tr><td>Bl₅ℙ²</td><td class="num">4</td><td class="num">1</td><td class="num">2</td><td class="num">16</td></tr>
<tr><td>Bl₆ℙ² (cubic surface)</td><td class="num">3</td><td class="num">1</td><td class="num">4</td><td class="num">27</td></tr>
<tr><td>Bl₇ℙ²</td><td class="num">2</td><td class="num">1</td><td class="num">6</td><td class="num">56</td></tr>
<tr><td>Bl₈ℙ²</td><td class="num">1</td><td class="num">1</td><td class="num">8</td><td class="num">240</td></tr>
</tbody></table>`;

const EXISTENCE_TABLE = `
<table class="inv"><thead><tr><th>kind of model</th><th>count</th></tr></thead><tbody>
<tr><td>blow-up of a Fano threefold — along a smooth curve, or at points</td><td class="num">59</td></tr>
<tr><td>product ℙ¹ × S with S a del Pezzo surface</td><td class="num">10</td></tr>
<tr><td>divisor or complete intersection in a product of projective spaces</td><td class="num">8</td></tr>
<tr><td>double cover of a Fano threefold</td><td class="num">6</td></tr>
<tr><td>linear section of a homogeneous variety</td><td class="num">6</td></tr>
<tr><td>hypersurface in (weighted) projective space</td><td class="num">4</td></tr>
<tr><td>complete intersection in projective space</td><td class="num">3</td></tr>
<tr><td>blow-up of a cone over a surface</td><td class="num">3</td></tr>
<tr><td>divisor in a ℙ²-bundle over a surface</td><td class="num">2</td></tr>
<tr><td>one family each: ℙ³ itself; a zero locus over Gr(3,7); a ℙ¹-bundle over ℙ²; a fibre product</td><td class="num">4</td></tr>
<tr><td><b>total</b></td><td class="num"><b>105</b></td></tr>
</tbody></table>`;

const DIMS = {
  "1": {
    title: "Fano curves",
    kicker: "dimension 1",
    nodes: {
      classification: {
        label: "Classification",
        statement: "Every <t d=\"fano\">Fano</t> curve is isomorphic to \\(\\mathbb{P}^{1}\\): the set of Fano curves, up to isomorphism, has one element.",
        page: { sections: [
          {h: "Count", p: ["One family, one isomorphism class. A Fano curve is a smooth projective curve \\(C\\) with \\(-K_C\\) <t d=\"ample\">ample</t>; by Riemann–Roch \\(\\deg K_C=2g-2\\), so the condition is \\(g=0\\)."]},
          {h: "Three components", p: ["The statement asserts three things: <b>construction</b> of the family, <b>distinctness</b> (vacuous, there being one family), and <b>exhaustion</b> (every Fano curve is in it). <b>Recognition</b> is a different problem — given a curve, decide whether it is Fano — and is treated separately."]},
          {h: "How the list divides", p: ["There is nothing to divide: one family, one isomorphism class. The only invariant is the <t d=\"genus\">genus</t>, and the Fano locus is the single value \\(g=0\\)."]}
        ]}
      },
      existence: {
        label: "Construction",
        statement: "Explicit construction of one Fano curve: \\(\\mathbb{P}^{1}\\), with \\(-K=\\mathcal{O}(2)\\) of <t d=\"volume\">degree</t> \\(2\\).",
        page: { sections: [
          {h: "Who constructed it", p: ["This is the first variety in the subject: \\(\\mathbb{P}^{1}\\) is classical. The relevant fact is Riemann's computation \\(K_{\\mathbb{P}^{1}}=\\mathcal{O}(-2)\\), from which \\(-K=\\mathcal{O}(2)\\) and ampleness are immediate."]},
          {h: "What is constructed", p: ["One smooth projective curve with \\(-K\\) ample. The rest of the family is then determined: it is the <t d=\"deformation\">deformation class</t> of \\(\\mathbb{P}^{1}\\), which is all of \\(\\mathcal{M}_{0}\\) — a single point."]},
          {html: CURVES_TABLE},
          {h: "Notes", p: ["\\(\\mathbb{P}^{1}\\) is <t d=\"rigid\">rigid</t>: \\(H^{1}(\\mathbb{P}^{1},T_{\\mathbb{P}^{1}})=0\\), so the family is one isomorphism class and carries no <t d=\"moduli\">moduli</t>. Over a field that is not algebraically closed this fails — a genus-zero curve need not have a rational point — which is why the statement is made over \\(\\mathbb{C}\\)."]}
        ]}
      },
      disjointness: {
        label: "Distinctness",
        statement: "There is one family, so there is nothing to separate. The <t d=\"genus\">genus</t> is constant in smooth proper families of curves, and it is \\(0\\) here.",
        page: { sections: [
          {h: "The invariant", p: ["For curves the deformation class is the genus: \\(\\mathcal{M}_{g}\\) is connected, so two smooth projective curves are <t d=\"deformation\">deformation equivalent</t> if and only if they have the same genus. Write \\(\\gamma(C)=g(C)\\)."]},
          {h: "Invariance", p: ["If \\(\\pi\\colon\\mathcal{C}\\to S\\) is a smooth proper family of curves over a connected base \\(S\\), then \\(s\\mapsto\\gamma(\\mathcal{C}_s)\\) is constant on \\(S\\): the fibres are diffeomorphic, so \\(\\chi_{\\mathrm{top}}\\), hence \\(g=\\tfrac12(2-\\chi_{\\mathrm{top}})\\), is constant."]},
          {h: "Distinctness", p: ["A Fano curve has \\(\\gamma=0\\). Since \\(\\gamma\\) is constant on families, all Fano curves lie in one family; there is no second family to distinguish from it. The argument is complete but empty."]}
        ]}
      },
      completeness: {
        label: "Exhaustion",
        statement: "If \\(-K_C\\) is <t d=\"ample\">ample</t> then \\(2-2g=\\deg(-K_C)>0\\), so \\(g=0\\); conversely \\(g=0\\) gives \\(C\\cong\\mathbb{P}^{1}\\).",
        page: { sections: [
          {h: "Attribution", p: ["Classical; the argument is Riemann–Roch together with the fact that a genus-zero curve over \\(\\mathbb{C}\\) is \\(\\mathbb{P}^{1}\\)."]},
          {h: "Proof", p: ["\\(\\deg(-K_C)=2-2g\\). Ampleness forces a positive degree, hence \\(g=0\\). A smooth projective genus-zero curve has \\(h^{0}(K)=0\\) and \\(h^{0}(\\mathcal{O})=1\\), so its anticanonical class \\(\\mathcal{O}(2)\\) is very ample of degree \\(2\\); the resulting morphism \\(C\\to\\mathbb{P}^{1}\\) has degree \\(1\\), hence is an isomorphism."]},
          {h: "Remark", p: ["This is the only dimension in which exhaustion is a counting argument rather than a structure theory."]}
        ]}
      },
      recognition: {
        label: "Recognition",
        statement: "Compute the <t d=\"genus\">genus</t> \\(g(C)\\). The curve is Fano if and only if \\(g=0\\), and then it is \\(\\mathbb{P}^{1}\\).",
        page: { sections: [
          {h: "Procedure", p: ["Compute \\(g\\), for instance as \\(\\tfrac12(2-\\chi_{\\mathrm{top}}(C))\\) or from \\(\\deg K_C=2g-2\\). The deformation class of a curve is its genus, and the Fano locus is the single value \\(g=0\\)."]}
        ]}
      }
    }
  },

  "2": {
    title: "del Pezzo surfaces",
    kicker: "dimension 2",
    nodes: {
      classification: {
        label: "Classification",
        statement: "Every <t d=\"delpezzo\">del Pezzo surface</t> is isomorphic to \\(\\mathbb{P}^{2}\\), to \\(\\mathbb{P}^{1}\\times\\mathbb{P}^{1}\\), or to the <t d=\"blowup\">blow-up</t> of \\(\\mathbb{P}^{2}\\) at \\(r\\le8\\) points in <t d=\"generalposition\">general position</t>. These are ten <t d=\"deformation\">deformation families</t>.",
        page: { sections: [
          {h: "Count", p: ["Ten families. Nine are the blow-ups \\(\\operatorname{Bl}_{r}\\mathbb{P}^{2}\\) for \\(0\\le r\\le8\\) (with \\(r=0\\) meaning \\(\\mathbb{P}^{2}\\)); the tenth is \\(\\mathbb{P}^{1}\\times\\mathbb{P}^{1}\\), which is not a blow-up of \\(\\mathbb{P}^{2}\\). Their degrees \\(K^{2}\\) are \\(9,8,7,\\dots,1\\) and \\(8\\)."]},
          {h: "Three components", p: ["The statement asserts three things: <b>construction</b> of the ten families, <b>distinctness</b> (they are pairwise distinct), and <b>exhaustion</b> (every del Pezzo surface is in one). <b>Recognition</b> is a different problem — given a surface, name its family — and is treated separately."]},
          {h: "How the list divides", p: ["There are two natural cuts, and both are partitions: <b>by degree</b> \\(K^{2}\\), which gives the nine values \\(1,\\dots,9\\) with \\(8\\) counted twice; and <b>by index</b>, which separates exactly that pair — \\(\\iota=3\\) for \\(\\mathbb{P}^{2}\\), \\(\\iota=2\\) for \\(\\mathbb{P}^{1}\\times\\mathbb{P}^{1}\\), \\(\\iota=1\\) for the eight blow-ups. Cutting by the kind of model gives \\(1+1+8\\)."]}
        ]}
      },
      existence: {
        label: "Construction",
        statement: "Explicit construction of one del Pezzo surface in each of the ten families: \\(\\mathbb{P}^{2}\\), \\(\\mathbb{P}^{1}\\times\\mathbb{P}^{1}\\), and \\(\\operatorname{Bl}_{r}\\mathbb{P}^{2}\\) for \\(1\\le r\\le8\\).",
        page: { sections: [
          {h: "Who constructed them", p: ["del Pezzo classified these surfaces in 1887; a complete modern treatment is in Dolgachev, <i>Classical Algebraic Geometry</i>, Chapter 8, and in Manin, <i>Cubic Forms</i>, Chapter IV."]},
          {h: "What is constructed", p: ["One smooth projective surface with \\(-K\\) ample for each family. The rest of the family is then determined — it is the <t d=\"deformation\">deformation class</t> of that surface."]},
          {h: "Blow-ups", p: ["\\(8\\) of the \\(10\\) are the blow-up of \\(\\mathbb{P}^{2}\\) at \\(r\\) points, \\(1\\le r\\le8\\), in <t d=\"generalposition\">general position</t>. The construction is ordered: a point blow-up raises \\(\\rho\\) by one and lowers \\(K^{2}\\) by one, so blowing up repeatedly walks down the table below. \\(\\mathbb{P}^{1}\\times\\mathbb{P}^{1}\\) is the exception: it is not a blow-up of \\(\\mathbb{P}^{2}\\), though blowing it up at one point gives \\(\\operatorname{Bl}_{2}\\mathbb{P}^{2}\\)."]},
          {html: DELPEZZO_CONSTRUCTION_TABLE},
          {h: "Labelling", p: ["Families are separated by the degree: \\(\\mathbb{P}^{2}\\) has \\(K^{2}=9\\), \\(\\operatorname{Bl}_{r}\\mathbb{P}^{2}\\) has \\(K^{2}=9-r\\), and \\(\\mathbb{P}^{1}\\times\\mathbb{P}^{1}\\) has \\(K^{2}=8\\). Only degree \\(8\\) is shared, by \\(\\operatorname{Bl}_{1}\\mathbb{P}^{2}\\) and \\(\\mathbb{P}^{1}\\times\\mathbb{P}^{1}\\)."]},
          {html: DELPEZZO_TABLE},
          {img: "img/delp_chain.png", caption: "The ten families, ordered by degree. Arrows are single blow-ups at a point: nine successive blow-ups of ℙ², and one from ℙ¹×ℙ¹, which meets the chain at Bl₂ℙ²."},
          {h: "Notes", p: ["For \\(r\\le4\\) the group \\(\\mathrm{PGL}_{3}\\) acts transitively on general-position \\(r\\)-tuples, so the family is a single isomorphism class; for \\(5\\le r\\le8\\) the configurations carry <t d=\"moduli\">moduli</t>, of dimension \\(2r-8\\). The count of \\((-1)\\)-curves in the table is the number of ways to blow down, and grows from \\(0\\) to \\(240\\)."]}
        ]}
      },
      disjointness: {
        label: "Distinctness",
        statement: "<p><b>The invariants.</b> For a del Pezzo surface \\(S\\) let \\(\\mu(S)=\\bigl(K_S^{2},\\,\\iota(S)\\bigr)\\in\\mathbb{Z}^{2}\\), where <t d=\"k2\">K²</t> is the degree and <t d=\"index\">ι</t> the index.</p><p><b>Invariance.</b> If \\(\\pi\\colon\\mathcal{S}\\to S\\) is a smooth proper family of del Pezzo surfaces over a connected base \\(S\\), then \\(s\\mapsto\\mu(\\mathcal{S}_s)\\) is constant on \\(S\\).</p><p><b>Distinctness.</b> \\(\\mu\\) takes ten distinct values on the ten families, so two del Pezzo surfaces are <t d=\"deformation\">deformation equivalent</t> if and only if \\(\\mu\\) agrees on them.</p>",
        page: { sections: [
          {h: "The values", p: ["\\(\\mu(\\mathbb{P}^{2})=(9,3)\\); \\(\\mu(\\mathbb{P}^{1}\\times\\mathbb{P}^{1})=(8,2)\\); \\(\\mu(\\operatorname{Bl}_{1}\\mathbb{P}^{2})=(8,1)\\); and \\(\\mu(\\operatorname{Bl}_{r}\\mathbb{P}^{2})=(9-r,1)\\) for \\(2\\le r\\le8\\). Ten distinct pairs."]},
          {h: "Invariance", p: ["Let \\(\\pi\\colon\\mathcal{S}\\to S\\) be a smooth proper family of surfaces over a connected base. By Ehresmann the fibres are diffeomorphic, so \\(K^{2}=c_{1}^{2}\\) is constant, and the divisibility of \\(-K\\) in \\(\\operatorname{Pic}\\) is constant on the local system \\(R^{2}\\pi_{*}\\mathbb{Z}\\). Hence \\(s\\mapsto\\mu(\\mathcal{S}_s)\\) is constant."]},
          {h: "Why the index is needed", p: ["Degree alone is ambiguous exactly once, at \\(K^{2}=8\\). There \\(\\mathbb{P}^{1}\\times\\mathbb{P}^{1}\\) has \\(K\\) divisible by \\(2\\) and \\(\\operatorname{Bl}_{1}\\mathbb{P}^{2}\\) does not. Topologically this is the parity of the intersection form: it is even for \\(\\mathbb{P}^{1}\\times\\mathbb{P}^{1}\\) and odd for \\(\\operatorname{Bl}_{1}\\mathbb{P}^{2}\\), i.e. <t d=\"w2\">w₂</t> = 0 for the quadric and \\(\\neq0\\) for the blow-up."]},
          {h: "Distinctness", p: ["A del Pezzo surface lies in exactly one of the ten families; \\(\\mu\\) is constant on each and takes distinct values on distinct families. Hence equal invariants mean the same family. This direction uses exhaustion, which is classical here."]},
          {html: DELPEZZO_TABLE}
        ]}
      },
      completeness: {
        label: "Exhaustion",
        statement: "\\(p_{g}=q=0\\) by Kodaira vanishing and \\(P_{m}=0\\) since \\(-K\\) is ample, so <t d=\"castelnuovo\">Castelnuovo's criterion</t> gives rationality; a <t d=\"minimal\">minimal</t> rational surface with \\(-K\\) ample is \\(\\mathbb{P}^{2}\\) or \\(\\mathbb{P}^{1}\\times\\mathbb{P}^{1}\\), and the rest are blow-ups of these in general position.",
        page: { sections: [
          {h: "Attribution", p: ["Castelnuovo's rationality criterion and the Enriques–Kodaira classification of surfaces; see Dolgachev, <i>Classical Algebraic Geometry</i>, Chapter 8, for a self-contained treatment."]},
          {h: "Rationality", p: ["\\(-K\\) ample gives \\(H^{i}(\\mathcal{O})=0\\) for \\(i>0\\) by Serre duality and Kodaira vanishing, hence \\(p_{g}=q=0\\); and \\(h^{0}(mK)=0\\) for \\(m\\ge1\\), since a section of \\(mK\\) would have negative degree on a curve. <t d=\"castelnuovo\">Castelnuovo's criterion</t> then gives rationality."]},
          {h: "Minimal models", p: ["A <t d=\"minimal\">minimal</t> rational surface is \\(\\mathbb{P}^{2}\\) or a Hirzebruch surface \\(F_{n}\\). On \\(F_{n}\\) with \\(n\\ge2\\) the negative section \\(C_{0}\\) has \\(-K\\cdot C_{0}=2-n\\le0\\), so \\(-K\\) is not ample. Only \\(\\mathbb{P}^{2}\\) and \\(F_{0}=\\mathbb{P}^{1}\\times\\mathbb{P}^{1}\\) remain."]},
          {h: "Blow-ups", p: ["Every other rational surface is a <t d=\"blowup\">blow-up</t> of one of these, and \\(-K\\) stays ample exactly when the centres are in <t d=\"generalposition\">general position</t>. Also \\(K^{2}=9-r>0\\) forces \\(r\\le8\\)."]},
          {h: "Remark", p: ["As in dimension 1, this is an argument rather than a case analysis: nothing here enumerates models. The enumeration happens in Construction."]}
        ]}
      },
      recognition: {
        label: "Recognition",
        statement: "Compute the degree \\(K_S^{2}\\) and the <t d=\"index\">index</t> \\(\\iota(S)\\). The pair \\(\\mu(S)\\) determines the family, and the lookup below does it from either entry.",
        page: { sections: [
          {h: "Procedure", p: ["Given a <t d=\"delpezzo\">del Pezzo surface</t> \\(S\\), compute \\(K_{S}^{2}\\) and the divisibility \\(\\iota\\) of \\(-K_{S}\\) in \\(\\operatorname{Pic}(S)\\). Each is a single computation, and the pair determines the family."]},
          {h: "What is needed", p: ["Only two integers: the degree separates nine of the ten families, and the divisibility of \\(-K\\) resolves the tenth."]}
        ]}
      }
    }
  },

  "3": {
    title: "Fano threefolds",
    kicker: "dimension 3",
    nodes: {
      classification: {
        label: "Classification",
        credit: "Iskovskikh, Mori–Mukai",
        statement: "Every <t d=\"fano\">Fano threefold</t> belongs to precisely one of \\(105\\) <t d=\"deformation\">deformation families</t>.",
        page: { sections: [
          {h: "The number", p: ["\\(105\\) families: \\(17\\) constructed by Iskovskikh, and \\(88\\) constructed by Mori–Mukai (the family (4,13) was added by their 2003 erratum)."]},
          {h: "Three components", p: [
            "The statement asserts three things: <b>construction</b> of the \\(105\\) families, <b>distinctness</b> (they are pairwise distinct), and <b>exhaustion</b> (every Fano threefold lies in one of them). Construction and exhaustion are due to Iskovskikh and to Mori–Mukai; distinctness is what this project certifies uniformly, by four integers.",
            "<b>Recognition</b> is a different problem: it is not part of the assertion, but asks, given a Fano threefold, to name its family. It is treated separately here."]},
          {h: "How the list divides", p: [
            "The \\(105\\) families can be cut up in several ways, each useful for a different purpose, and each is a partition:",
            "<b>by Picard number</b> \\(\\rho\\): \\(17,36,31,13,3,1,1,1,1,1\\) for \\(\\rho=1,\\dots,10\\);",
            "<b>by index</b> \\(\\iota\\): \\(95\\) of index \\(1\\), \\(8\\) of index \\(2\\), one of index \\(3\\) (the quadric) and one of index \\(4\\) (\\(\\mathbb{P}^{3}\\));",
            "<b>by volume</b> \\((-K)^{3}\\): \\(30\\) distinct values, from \\(2\\) to \\(64\\);",
            "<b>by kind of model</b>: \\(59\\) blow-ups, \\(10\\) products \\(\\mathbb{P}^{1}\\times S\\), \\(8\\) divisors or complete intersections in products, \\(6\\) double covers, \\(6\\) linear sections, and the rest as tabulated.",
            "These cuts are not independent: for \\(\\rho\\ge6\\) every family is a product \\(\\mathbb{P}^{1}\\times S\\), and the volume then determines \\(S\\). The tables and pictures on the Construction page give the joint picture, and the Roadmap orders the list by the blow-ups that build it."]}
        ]}
      },
      existence: {
        label: "Construction",
        statement: "Explicit construction of one Fano threefold in each of the \\(105\\) families. Each threefold represents its own <t d=\"deformation\">deformation family</t>.",
        page: { sections: [
          {h: "Who constructed them", p: [
            "Iskovskikh constructed representatives of all \\(17\\) families with <t d=\"rho\">Picard number</t> \\(1\\) (1977, 1978).",
            "Mori–Mukai constructed representatives of all \\(88\\) families with Picard number \\(2\\le\\rho\\le10\\) (1981; the family (4,13) was added by their 2003 erratum)."]},
          {h: "What is constructed", p: ["One smooth threefold with \\(-K\\) ample for each family. The rest of the family is then determined — it is the deformation class of that threefold."]},
          {h: "Blow-ups", p: ["\\(59\\) of the \\(105\\) are the <t d=\"blowup\">blow-up</t> of another family in the list, always of smaller <t d=\"rho\">Picard number</t>, so the construction is ordered. Of these:"],
            ul: [
              "\\(55\\) are blown up along a single smooth curve, whose degree and genus are part of the data;",
              "\\(2\\) are blown up at points: \\(\\mathbb{P}^{3}\\) at one point, family (2,35), and the quadric \\(Q^{3}\\) at two non-collinear points, family (3,19);",
              "\\(2\\) are blown up along a curve together with a point: families (3,14) and (3,26)."
            ]},
          {h: "Hypersurfaces and complete intersections", p: ["\\(4\\) are hypersurfaces: a quadric, a cubic and a quartic in \\(\\mathbb{P}^{4}\\), and a sextic in \\(\\mathbb{P}(1,1,1,2,3)\\). \\(3\\) are complete intersections in projective space: (1,3), (1,4), (1,14). \\(8\\) more are divisors or complete intersections in products of projective spaces."]},
          {html: EXISTENCE_TABLE},
          {h: "Roadmap", p: ["The derivation graph of all \\(105\\), with the blow-ups as edges, is charted separately: <a href=\"#/roadmap\">the roadmap</a>."]},
          {h: "Labelling", p: ["Families are labelled \\(\\bigl(\\rho,m\\bigr)\\): \\(\\rho\\) is the <t d=\"rho\">Picard number</t>, \\(1\\le\\rho\\le10\\), and \\(m\\) is the position of the family among those with that \\(\\rho\\) — Iskovskikh's \\(17\\) for \\(\\rho=1\\), Mori–Mukai's \\(36,31,13,3,1,1,1,1,1\\) for \\(\\rho=2,\\dots,10\\). So \\(m\\) runs from \\(1\\) to \\(17\\) when \\(\\rho=1\\), and to the count for that \\(\\rho\\) otherwise."]},
          {h: "How the \\(105\\) divide", p: [
            "By <t d=\"index\">index</t>: \\(95\\) have \\(\\iota=1\\), \\(8\\) have \\(\\iota=2\\), and one each have \\(\\iota=3\\) and \\(\\iota=4\\). The <t d=\"volume\">volume</t> takes \\(30\\) values and never exceeds \\(64\\).",
            "The cuts are not independent: for \\(\\rho\\ge6\\) every family is a product \\(\\mathbb{P}^{1}\\times S\\), which is why the upper right of the picture below is empty."]},
          {img: "img/census.png", caption: "The 105 families by Picard number and anticanonical volume; the number in a cell is how many families have those values."},
          {h: "Notes", p: ["Several families carry a second model — (1,2) is both a quartic hypersurface and a double cover of the quadric, (1,1) is both a double cover of \\(\\mathbb{P}^{3}\\) and a sextic in \\(\\mathbb{P}(1,1,1,1,3)\\) — and the counts use the first. The three blow-ups of cones are (3,9), (3,31) and (4,2)."]}
        ]}
      },
      disjointness: {
        label: "Distinctness",
        statement: "<p><b>The invariants.</b> For a Fano threefold \\(X\\) let \\(\\lambda(X)=\\bigl(\\rho(X),\\,\\iota(X),\\,(-K_X)^3,\\,h^{1,2}(X)\\bigr)\\in\\mathbb{Z}^4\\), where <t d=\"rho\">ρ</t> is the Picard number, <t d=\"index\">ι</t> the index, <t d=\"volume\">(−K)³</t> the volume and <t d=\"h12\">h¹,²</t> half the third Betti number.</p><p><b>Invariance.</b> If \\(\\pi\\colon\\mathcal{X}\\to S\\) is a smooth proper family of Fano threefolds over a connected base \\(S\\), then \\(s\\mapsto\\lambda(\\mathcal{X}_s)\\) is constant on \\(S\\).</p><p><b>Weak distinctness.</b></p><ul><li>\\(\\lambda\\) distinguishes \\(86\\) of the \\(105\\) families;</li><li>the remaining \\(19\\) families are mapped to the same tuple by \\(\\lambda\\); they fall into nine groups;</li><li>Mori–Mukai, <i>Classification of Fano 3-folds with \\(B_{2}\\ge2\\)</i>, proved that these \\(19\\) families are pairwise distinct, by a case-by-case analysis of their tables.</li></ul>",
        new: "<p><b>The invariant.</b> For a Fano threefold \\(X\\) put \\[v(X)=\\bigl(\\iota(X),\\,(-K_X)^3,\\,d(X),\\,c(X)\\bigr)\\in\\mathbb{Z}^4,\\] where <t d=\"index\">ι</t> is the index, <t d=\"volume\">(−K)³</t> the volume, <t d=\"discriminant\">d</t> the discriminant and <t d=\"content\">c</t> the content.</p><p><b>Invariance.</b> If \\(\\pi\\colon\\mathcal{X}\\to S\\) is a smooth proper family of Fano threefolds over a connected base \\(S\\), then \\(s\\mapsto v(\\mathcal{X}_s)\\) is constant on \\(S\\).</p><p><b>Distinctness.</b> Two smooth Fano threefolds \\(X,Y\\) are <t d=\"deformation\">deformation equivalent</t> if and only if \\(v(X)=v(Y)\\).</p>",
        page: { sections: [
          {h: "Classical position", p: ["The classical invariant \\(\\lambda(X)=(\\rho,\\iota,(-K)^{3},h^{1,2})\\) separates \\(86\\) families; the remaining \\(19\\), in nine groups, were separated case by case. The statement that the five <t d=\"principal\">principal invariants</t> determine the class is false — see Correction."]},
          {h: "The certificate", p: [
            "<b>Invariance.</b> Let \\(\\pi\\colon\\mathcal{X}\\to S\\) be a smooth proper family of Fano threefolds over a connected base. By Ehresmann the fibres are diffeomorphic, so the cup-product form and the class \\(c_1=-K\\) are carried along by the local system \\(R^2\\pi_*\\mathbb{Z}\\); the four entries of \\(v\\) are functions of that data, so \\(s\\mapsto v(\\mathcal{X}_s)\\) is constant.",
            "<b>Distinctness.</b> The implication \\(\\Rightarrow\\) is invariance. For \\(\\Leftarrow\\), a Fano threefold lies in exactly one of the \\(105\\) families; \\(v\\) is constant on each and, by the table below, takes distinct values on distinct families. Hence equal invariants mean the same family. This direction uses the exhaustion step, which this project does not reprove."]},
          {table: true},
          {h: "Correction", p: ["Galkin states, attributing it to Mori–Mukai, that two smooth Fano threefolds with coincident <t d=\"principal\">principal invariants</t> \\((\\rho,r,\\deg,b,d)\\) lie in one deformation class. The pair \\(\\operatorname{Bl}_{\\text{line}}\\mathbb{P}^{3}\\) and \\(\\mathbb{P}^{1}\\times\\mathbb{P}^{2}\\) has \\((\\rho,r,\\deg,b,d)=(2,1,54,0,-9)\\) for both members and refutes the statement: the two are not deformation equivalent, and \\(c=1\\) versus \\(c=3\\)."]},
          {h: "Scope", p: ["Verified on the \\(105\\) tabulated families. Values come from the models for the \\(21\\) families of the collision groups, with \\(d\\) checked against the tabulated Mori–Mukai values, and from the published tables for the rest. No algorithm from arbitrary presentations is claimed."]}
        ]}
      },
      completeness: {
        label: "Exhaustion",
        statement: "<p>Every <t d=\"fano\">Fano threefold</t> \\(X\\) belongs to one of the \\(105\\) constructed <t d=\"deformation\">deformation families</t>.</p><p>More precisely, if \\(\\rho(X)=1\\) then \\(X\\) belongs to one of the \\(17\\) families constructed by Iskovskikh.</p><p>If \\(\\rho(X)\\ge2\\) then \\(X\\) belongs to one of the \\(88\\) families constructed by Mori–Mukai, and in particular \\(2\\le\\rho(X)\\le10\\).</p>",
        page: { sections: [
          {h: "The induction", p: [
            "<b>The contraction.</b> Let \\(X\\) be a Fano threefold with \\(\\rho(X)\\ge2\\). By the <t d=\"conecurves\">cone theorem</t> the cone \\(\\overline{\\mathrm{NE}}(X)\\) is rational polyhedral, spanned by <t d=\"extremalray\">extremal rays</t> carried by rational curves \\(C\\) with \\(-K_X\\cdot C\\le4\\). Choose a ray and take its <t d=\"contraction\">elementary contraction</t>. It is of one of two kinds.",
            "<b>Divisorial.</b> Then \\(X\\) is the <t d=\"blowup\">blow-up</t> of a Fano threefold \\(Y\\) along a smooth curve \\(C\\subset Y\\) or at finitely many points, and \\(\\rho(Y)=\\rho(X)-1\\). The volumes satisfy \\[(-K_Y)^3 - (-K_X)^3 = 2(-K_Y\\cdot C) + (2-2g_C),\\] a positive even integer, hence at least \\(2\\); for \\(k\\) points the difference is \\(8k\\). So passing from \\(X\\) down to \\(Y\\) raises the volume by at least \\(2\\).",
            "<b>Of fibre type.</b> Then \\(X\\) is a conic bundle over a surface, a del Pezzo fibration over a curve, or a \\(\\mathbb{P}^1\\)-bundle over a surface: a Mori fibre space. The induction stops here.",
          ]},
          {h: "Termination", p: [
            "<b>Volumes are bounded above.</b> Fano varieties of fixed dimension form a bounded family (Kollár–Miyaoka–Mori; Birkar in general), so the volume of a Fano threefold is bounded by a constant depending only on the dimension.",
            "<b>Hence the induction ends.</b> Each divisorial step raises the volume by at least \\(2\\) and the volume is bounded, so only finitely many divisorial steps can occur. The process stops at a fibre-type contraction, or at a Fano threefold with \\(\\rho=1\\). This is the qualitative finiteness statement: it makes exhaustion a finite verification, without any enumeration.",
          ]},
          {h: "The base case: \\(\\rho=1\\)", p: [
            "<b>Who.</b> Iskovskikh, <i>Fano threefolds I</i> (1977) and <i>II</i> (1978); Mukai gave an independent proof for genus \\(g\\ge6\\) by the vector-bundle method. The account below is the shape of Iskovskikh's argument, not its details.",
            "<b>Lines.</b> Let \\(X\\) be a Fano threefold with \\(\\rho(X)=1\\) and \\(\\iota(X)=1\\), of <t d=\"genus3\">genus</t> \\(g=1+\\tfrac12(-K_X)^3\\). For \\(g\\ge3\\) the variety of lines of \\(X\\) is non-empty, so \\(X\\) contains a line: a curve \\(\\ell\\) with \\(-K_X\\cdot\\ell=1\\), of normal bundle \\(\\mathcal{O}\\oplus\\mathcal{O}(-1)\\).",
            "<b>Double projection.</b> Blow up the line: the exceptional divisor \\(E\\subset\\widetilde{X}=\\operatorname{Bl}_\\ell X\\) is \\(\\mathbb{P}^1\\times\\mathbb{P}^1\\), and it carries two rulings — the one inherited from \\(\\ell\\), and the one given by the lines through a point of \\(\\ell\\). The second spans a new <t d=\"extremalray\">extremal ray</t> of \\(\\widetilde{X}\\); contracting it is the <em>double projection</em> from \\(\\ell\\).",
            "<b>The two outcomes.</b> The contraction is either birational, onto a Fano threefold \\(X'\\) of index \\(1\\), to which the same construction is applied; or of fibre type, in which case \\(X\\) is birational to a del Pezzo fibration or to a conic bundle, and its geometry is thereby described. Iterating, one descends the genus until one of these structures appears.",
            "<b>The genera.</b> Enumerating the structures that can occur — del Pezzo fibrations and conic bundles over the possible bases — leaves exactly the genera \\(2,3,\\dots,10,12\\). The value \\(g=11\\) is the case in which neither a smaller model nor a fibre-type structure appears, which is why it is absent. The case \\(\\iota=2\\) is treated separately: it is the theory of del Pezzo threefolds, \\(-K_X=2H\\) with \\(d=H^3\\), and \\(d\\in\\{1,\\dots,5\\}\\) when \\(\\rho=1\\) (Fujita; Iskovskikh).",
            "<b>Reference.</b> Iskovskikh, <i>Fano threefolds I</i>, §5–6, and <i>II</i>; Iskovskikh–Prokhorov, <i>Fano varieties</i>, Ch. 4; Prokhorov, <i>Fano threefolds</i> (2025), for a modern treatment.",
          ]},
          {h: "The resulting list", p: [
            "Carrying the induction out means listing, for each \\(Y\\) and each extremal ray, the possible centres: a smooth curve \\(C\\) with \\(-K_Y\\cdot C\\) and \\(g_C\\) bounded so that the volume stays positive, or finitely many points. For \\(\\rho\\ge2\\) this produces the \\(88\\) families of Mori–Mukai (1981; the erratum of 2003 added the family \\((\\rho,m)=(4,13)\\)), distributed by Picard number as \\(36+31+13+3+1+1+1+1+1\\) for \\(\\rho=2,\\dots,10\\); for \\(\\rho\\ge6\\) they are exactly \\(\\mathbb{P}^1\\times S\\) with \\(S=\\operatorname{Bl}_{\\rho-2}\\mathbb{P}^2\\).",
            "The largest Picard number in the list is \\(10\\), attained by \\(\\mathbb{P}^1\\times\\operatorname{Bl}_8\\mathbb{P}^2\\) of volume \\(6\\); the largest volume is \\(64\\), attained by \\(\\mathbb{P}^3\\). Both bounds are read off the list.",
          ]},
          {img: "img/ladder.png", caption: "The 105 families, ordered by Picard number and volume, with the elementary (−K)-negative contractions recorded in the tables: an edge joins a threefold to a contraction of it."}
        ]}
      },
      recognition: {
        label: "Recognition",
        statement: "<p><b>Given a Fano threefold \\(X\\):</b></p><ol><li>compute \\(b_{2}\\) and \\(b_{3}\\);</li><li>compute \\((-K_X)^{3}\\);</li><li><b>determine</b> the <t d=\"conecurves\">cone of curves</t> \\(\\overline{\\mathrm{NE}}(X)\\) and its <t d=\"extremalray\">extremal rays</t>;</li><li><b>determine</b> the <t d=\"contraction\">elementary contraction</t> of each ray, and whether it is divisorial or of fibre type;</li><li>if divisorial: <b>determine</b> its centre — a curve, with its degree and genus, or finitely many points — and repeat from step 1 with the target, whose Picard number is one less;</li><li>if of fibre type: <b>determine</b> the base and the type — conic bundle, del Pezzo fibration, or \\(\\mathbb{P}^{1}\\)-bundle. This ends the walk;</li><li>compare the collected data with the tables.</li></ol>",
        new: "<p><b>Given a Fano threefold \\(X\\):</b></p><ol><li>compute \\(\\rho=b_{2}\\);</li><li>compute \\((-K_X)^{3}\\);</li><li><b>determine</b> the group \\(\\operatorname{Pic}(X)\\), free of rank \\(\\rho\\), with a \\(\\mathbb{Z}\\)-basis \\(e_{1},\\dots,e_{\\rho}\\), and the triple intersection numbers \\(T(e_{i},e_{j},e_{k})=e_{i}\\cdot e_{j}\\cdot e_{k}\\), where \\(T\\) is the <t d=\"cubicform\">triple intersection form</t>;</li><li>compute \\(\\iota\\), the divisibility of \\(-K_X\\) in that basis;</li><li>compute \\(d=\\det\\bigl(T(e_{i},e_{j},-K_X)\\bigr)\\);</li><li>compute \\(c=\\gcd\\{T(x,x,x)\\}\\);</li><li>look up \\(\\bigl(\\iota,(-K_X)^{3},d,c\\bigr)\\) in the table.</li></ol>",
        page: { sections: [
          {h: "The two procedures", p: ["Classical: walk the contraction tree, whose input is the <t d=\"conecurves\">cone of curves</t>. New: the four-integer lookup, whose input is \\(\\operatorname{Pic}(X)\\) with its triple products. Both are procedures relative to geometric input; neither is an algorithm from defining equations."]},
          {h: "The one step that needs thought", p: [
            "Mechanical in both: the Betti numbers and \\((-K_X)^{3}\\); then, once a basis is in hand, the divisibility \\(\\iota\\), the determinant \\(d\\) and the content \\(c\\).",
            "Not mechanical: determining the cone of curves and its contractions (classical); determining \\(\\operatorname{Pic}(X)\\) with its triple intersection numbers (new). Two honest bottlenecks, in different places."]},
          {h: "Input required", p: ["Within the \\(105\\) families the four integers determine the class. But the procedure needs those intersection numbers as input, and computing them for a Fano threefold given only by equations is a problem of the same order as computing its cone of curves."]}
        ]}
      }
    }
  }
};



const COLLISION_HTML = `
<table class="inv"><thead><tr>
<th>group (ρ, (−K)³, h¹,²)</th><th>family</th><th>ι</th><th>c</th><th>d</th><th>separating</th>
</tr></thead><tbody>
<tr class="grp"><td colspan="6">(2, 30, 0) · separated by d</td></tr>
<tr><td></td><td>(2,22)</td><td class="num">1</td><td class="num">1</td><td class="num">−24</td><td></td></tr>
<tr><td></td><td>(2,24)</td><td class="num">1</td><td class="num">3</td><td class="num">−21</td><td></td></tr>
<tr class="grp"><td colspan="6">(2, 46, 0) · separated by d</td></tr>
<tr><td></td><td>(2,30)</td><td class="num">1</td><td class="num">1</td><td class="num">−12</td><td></td></tr>
<tr><td></td><td>(2,31)</td><td class="num">1</td><td class="num">1</td><td class="num">−13</td><td></td></tr>
<tr class="grp"><td colspan="6">(2, 54, 0) · separated by c</td></tr>
<tr><td></td><td>(2,33)</td><td class="num">1</td><td class="num">1</td><td class="num">−9</td><td></td></tr>
<tr><td></td><td>(2,34)</td><td class="num">1</td><td class="num">3</td><td class="num">−9</td><td></td></tr>
<tr class="grp"><td colspan="6">(3, 36, 0) · separated by c and d</td></tr>
<tr><td></td><td>(3,17)</td><td class="num">1</td><td class="num">3</td><td class="num">28</td><td></td></tr>
<tr><td></td><td>(3,18)</td><td class="num">1</td><td class="num">1</td><td class="num">26</td><td></td></tr>
<tr class="grp"><td colspan="6">(3, 38, 0) · separated by d</td></tr>
<tr><td></td><td>(3,19)</td><td class="num">1</td><td class="num">1</td><td class="num">24</td><td></td></tr>
<tr><td></td><td>(3,20)</td><td class="num">1</td><td class="num">1</td><td class="num">28</td><td></td></tr>
<tr><td></td><td>(3,21)</td><td class="num">1</td><td class="num">1</td><td class="num">22</td><td></td></tr>
<tr class="grp"><td colspan="6">(3, 42, 0) · separated by c and d</td></tr>
<tr><td></td><td>(3,23)</td><td class="num">1</td><td class="num">1</td><td class="num">20</td><td></td></tr>
<tr><td></td><td>(3,24)</td><td class="num">1</td><td class="num">3</td><td class="num">22</td><td></td></tr>
<tr class="grp"><td colspan="6">(3, 48, 0) · separated by c (and ι)</td></tr>
<tr><td></td><td>(3,27)</td><td class="num">2</td><td class="num">6</td><td class="num">16</td><td></td></tr>
<tr><td></td><td>(3,28)</td><td class="num">1</td><td class="num">3</td><td class="num">16</td><td></td></tr>
<tr class="grp"><td colspan="6">(3, 50, 0) · separated by d</td></tr>
<tr><td></td><td>(3,29)</td><td class="num">1</td><td class="num">1</td><td class="num">12</td><td></td></tr>
<tr><td></td><td>(3,30)</td><td class="num">1</td><td class="num">1</td><td class="num">14</td><td></td></tr>
<tr class="grp"><td colspan="6">(4, 32, 0) · separated by d</td></tr>
<tr><td></td><td>(4,4)</td><td class="num">1</td><td class="num">1</td><td class="num">−40</td><td></td></tr>
<tr><td></td><td>(4,5)</td><td class="num">1</td><td class="num">1</td><td class="num">−39</td><td></td></tr>
<tr class="grp"><td colspan="6">(5, 36, 0) · separated by c and d</td></tr>
<tr><td></td><td>(5,2)</td><td class="num">1</td><td class="num">1</td><td class="num">44</td><td></td></tr>
<tr><td></td><td>(5,3)</td><td class="num">1</td><td class="num">3</td><td class="num">48</td><td></td></tr>
</tbody></table>`;
