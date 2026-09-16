# PROMPT DE HANDOFF → Claude Code
## Refinamiento, implementación y despliegue de la página "Modelo ARIA" (Digital Change Advisors)

> Pega este documento como contexto inicial en Claude Code. Acompaña al **paquete delta** de la
> página Modelo ARIA. Tu misión: integrar estos archivos en el proyecto ya refinado, resolver las
> deudas técnicas, incorporar las imágenes, validar cada texto bajo Behavioral Economics y dejar
> la página lista para producción.

---

## 0 · Cómo integrar este paquete (es un DELTA, no el sitio completo)

Este paquete contiene **solo los archivos nuevos** de la página Modelo ARIA. Está pensado para
**copiarse dentro de tu proyecto ya refinado en Claude Code, SIN sobrescribir nada compartido.**

**Archivos incluidos** — cópialos a la raíz de tu proyecto, respetando la subcarpeta `assets/`:
- `modelo-aria-v6.html` (canónica) + `modelo-aria-v2…v5.html` y `modelo-aria.html` (histórico)
- `styles-modelo-aria.css`
- `enhance-aria.js`, `enhance-v6.js`
- `assets/brief-assets-modelo-aria.md`
- `HANDOFF-Claude-Code-modelo-aria.md` (este documento)

**NO sobrescribas** (ya los tienes optimizados; la página los reutiliza tal cual):
`styles.css`, `styles4.css`, `styles5.css`, `styles6.css`, `app.js`, `enhance4.js`, `enhance6.js`,
`image-slot.js`, `Homepage v6.html`, `blog-v6.html`.

**Antes de editar, verifica que tus versiones refinadas de los compartidos siguen exponiendo los
hooks que la página usa** (si solo hiciste ajustes cosméticos, seguirán ahí):
- reveal: clase `.in` sobre `[data-reveal]` y atributo `data-count` (de `app.js`)
- puente: `.bridge__svg` + `#bridgePath` / `#bridgeDot` / `#bridgeKpi` / `#bridgeFlow`
- sticky rail: `.aria2`, `.aria2__rail`, `.aria2__stepper`, `.aria2__step`
- base: `.method-strip`, `.versus`, `.special`, `.btn`, `.nav`, `.footer`, `.label`, `.chapeau`
Si renombraste alguno, ajusta `modelo-aria-v6.html` / `styles-modelo-aria.css` en consecuencia.

**Primer prompt sugerido a Claude Code:**
> "Acabo de integrar los archivos de la página Modelo ARIA en el proyecto. Lee
> `HANDOFF-Claude-Code-modelo-aria.md` y `assets/brief-assets-modelo-aria.md`. La canónica es
> `modelo-aria-v6.html`. Primero confirma que los hooks compartidos del §0 existen en mis versiones
> refinadas y que la página renderiza sin romperse; luego dame un plan para el §3 (deudas técnicas)
> y el §5 (validación BE), en orden de prioridad."

Verifica el render en local (abre `modelo-aria-v6.html` o usa `python3 -m http.server`) antes de editar.

---

## 1 · Contexto

**Digital Change Advisors (DCA)** es una consultora enterprise para audiencia **C-Level**
(CEO/CFO/COO/CTO/CHRO) en LatAm. Especialidad: **arquitectura de adopción humana de la IA** —
"del uso al impacto en los KPIs que importan". Estética de referencia: **McKinsey / BCG / Bain**
(blanco dominante, tipografía protagonista, autoridad sin ornamento). Tono sobrio, español (es-LA).

Esta página presenta el **Modelo ARIA** (Aceleración del Retorno de la IA): 14 componentes
propietarios en 3 grupos, 3 fases, garantía reencuadrada como "responsabilidad por el resultado".
Pasó por **6 versiones auditadas**: v2 autoridad/behavioral economics · v3 paridad de contenido ·
v4 experiencia/fluidez · v5 craft/accesibilidad/robustez · v6 motion refinado.

---

## 2 · Versión canónica y archivos

**Canónica = `modelo-aria-v6.html`.** Las v1–v5 son histórico comparativo: **no las modifiques ni
las despliegues.** Ruta final deseada en el sitio: **`/modelo-aria`**.

**Dependencias (orden de carga importa):**
- CSS: `styles.css` → `styles4.css` → `styles5.css` → `styles6.css` → `styles-modelo-aria.css`
- JS: `app.js` → `enhance4.js` → `enhance6.js` → `enhance-aria.js` → `enhance-v6.js`
- Componente: `image-slot.js` (solo para autoría; ver deuda técnica #1)
- `<body class="v4 v5 v6 mra-v5 mra-v6">` — esas clases activan capas de estilo/motion;
  `mra-v5` (craft/a11y/print) y `mra-v6` (motion) están **aisladas** para no tocar v1–v4.

**Reglas de oficio:** HTML canónico (cierra todos los tags, comillas dobles); no rompas la
cascada; todo cambio de estilo nuevo va en `styles-modelo-aria.css` (no dupliques tokens ya
definidos en `styles.css`).

---

## 3 · Deudas técnicas a resolver (priorizadas)

**① `<image-slot>` → `<img>` reales (CRÍTICO para producción).**
Los 7 slots de imagen (`mra-hero-photo`, `mra-leader-1/2/3`, `mra-persp-1/2/3`) son un componente
de autoría que persiste el drop en `localStorage` — **no sirve para producción.** Reemplaza cada
uno por `<img src="assets/…" alt="…" width="…" height="…">` con `object-fit:cover`, conservando el
tamaño que ya fija el CSS. Hero: `fetchpriority="high"` + `loading="eager"` (es el LCP); resto:
`loading="lazy"`. Escribe `alt` descriptivo (a11y AA).
**⚠️ Al cambiar el elemento, actualiza los selectores de motion en `styles-modelo-aria.css`:**
`.hero-figure image-slot`, `.persp-card image-slot`, `.leader image-slot` deben pasar a apuntar a
`… img` para que sigan funcionando el revelado en cortina del hero y el *scale* de retratos/miniaturas.
Puedes retirar `image-slot.js` del HTML de producción.

**② Textos placeholder.** Reemplaza con contenido real validado (ver §5 Behavioral Economics):
- Liderazgo ×3: nombres, cargos, **credenciales** (hoy "Nombre Apellido" / "Credencial pendiente").
- Perspectivas ×3: **títulos reales** + destino real del enlace (hoy `blog-v6.html`).
- Problema: **fuente exacta** del "70%" (hoy síntesis genérica).
- Hero caption "Comités ejecutivos · LatAm": confirmar.
- Quita las notas `.leaders-note` y la `.source-note` de muestra en Perspectivas.

**③ Assets de marca faltantes:** `assets/og-returnai.png` (1200×630) y `assets/favicon.png` (512×512).

**④ Enlaces / routing.** Hoy apuntan a `Homepage v6.html` (ReturnAI/Nosotros) y `blog-v6.html`
(Perspectivas). Reescríbelos a las rutas finales del sitio. El nav y footer marcan "Modelo ARIA"
con `aria-current="page"`. El CTA **"AI Return Test"** (`#test`) debe apuntar al formulario/flujo real.

**⑤ Nombre de archivo → ruta.** `modelo-aria-v6.html` debe servirse como `/modelo-aria`
(actualiza también el `<a aria-current>` interno y los enlaces del footer que apuntan al archivo).

---

## 4 · Imágenes pendientes — prompts ya redactados

Todas las imágenes se generan con IA. **Los prompts finales, ratios y tamaños de exportación
están en `assets/brief-assets-modelo-aria.md`** (incluye la "biblia" de estilo común y el bloque
de negativos). Resumen: 1 hero (~1:1, 1200×1180) · 3 retratos de socios (~1.1:1, 1100×1010) ·
3 miniaturas de Perspectivas (~5:3, 1200×720). Grade documental teal-carbón con acento oro, sin
clichés de IA. Generar los 3 retratos en una tanda y las 3 miniaturas en otra para homogeneidad.
El favicon se exporta del SVG del logo (no requiere IA).

---

## 5 · Validación de cada texto bajo Behavioral Economics (lente obligatoria)

Audita cada bloque de copy contra estos mecanismos. **Regla rectora: autoridad antes que oferta;
ninguna frase aspiracional sin un número o una garantía detrás.**

- **Persuasion knowledge / reactancia:** elimina lenguaje de embudo (ej. "sin compromiso") y toda
  semiótica de *money-back*. La garantía ya está reencuadrada como **"Responsabilidad por el
  resultado"** — mantener ese registro (estándar profesional, no devolución).
- **Señalización costosa / estatus:** sin precios públicos de producto, sin descuentos, sin
  rebajar la clase de referencia (no compararse con "vendors" como pares — ya está como categoría).
- **Autoridad / halo:** la tesis (el cuello de botella del ROI de IA es la adopción humana), las
  tres disciplinas raíz y la **autoría nombrada** deben sostenerse; al poner socios reales, sube la
  confianza. Mantén el fundamento intelectual arriba.
- **Aversión a la ambigüedad:** cada cifra con **fuente/procedencia** (el "70%", el caso ancla con
  "Cómo se midió"). Valida que las nuevas credenciales y cifras sean verificables.
- **Loss aversion (mantener):** "¿Cuánto retorno estás dejando sobre la mesa?" funciona — conservar.
- **Prueba social:** el caso conserva anonimato por NDA pero con procedencia (sector, región, rol).
  Si se consiguen logos/sectores reales, añádelos junto al caso.

Entregable de esta validación: marca cada texto como ✅ (pasa), ✏️ (ajustar, con propuesta) o
⚠️ (riesgo BE, reescribir).

---

## 6 · Elementos que deben migrar a OTRAS páginas

- **Los 6 Sprints estructurados (secuencia de 120 días)** pertenecen a la página **ReturnAI** (la
  solución). En Modelo ARIA solo viven los **"Sprints de Aprendizaje Acelerado del MATCH"** (diseño
  70·20·10). Ya se removieron de aquí las métricas "6 Sprints" del hero y la tira — no reintroducir.
- **Liderazgo (socios):** su origen canónico debería ser **/nosotros**; aquí es un teaser.
- **Perspectivas (artículos):** viven en **/blog (Perspectivas)**; aquí es un strip de 3 enlaces.

---

## 7 · Guardarraíles de marca (NO romper)

- Cero gradientes de color. Blanco dominante (~70%). Mucho espacio negativo. Teal 20% / oro 10%.
- Tipografía: **Marcellus** (display) + **Montserrat** (cuerpo/UI). No cambiar.
- Oro **nunca con opacidad**. Terracota solo para alertas (no usar en esta página).
- Iconografía SVG line-style (stroke 1.5), nunca emojis. Fotografía documental desaturada
  teal-carbón + acento oro; sin stock sonriente.
- Un solo bloque de color oscuro (el carbón del caso) — no añadir más fondos saturados.

---

## 8 · Lo que YA está resuelto (mantener, no degradar)

- **Accesibilidad AA (v5):** `:focus-visible` en componentes nuevos, contraste de textos finos al
  piso de marca, exhibit con `role="img"`+aria-label, dots decorativos `aria-hidden`, skip-link,
  orden de headings, `aria-current`. Al editar, preserva esto.
- **Robustez (v5):** cifras tabulares (anti-CLS), control de viudas, **hoja de impresión** para
  compartir como PDF, robustez responsive del exhibit/puente.
- **Motion (v6):** entrada orquestada del hero, revelado de imágenes, reveals direccionales, flujo
  ambiental del puente, dot-nav contextual. **Todo respeta `prefers-reduced-motion` y degrada sin
  JS.** No introduzcas motion que ignore estas reglas.
- **Progressive enhancement:** `<html class="no-js">`→`js`; sin JS la página es legible (reveals
  visibles, FAQ expandido, count-up muestra el valor final).

---

## 9 · Checklist de despliegue / QA final

- [ ] `<image-slot>` reemplazados por `<img>` con `alt`, dimensiones y selectores de motion actualizados.
- [ ] Textos reales cargados y validados con la lente BE (§5).
- [ ] `og-returnai.png` y `favicon.png` en `assets/`; meta `og:`/`twitter:` con URL canónica final.
- [ ] Enlaces internos a rutas finales; CTA "AI Return Test" al flujo real.
- [ ] Servida como `/modelo-aria`; `<title>`, `<link rel=canonical>` y JSON-LD coherentes.
- [ ] Lighthouse: Performance (LCP del hero), Accesibilidad (≥95), Best Practices, SEO.
- [ ] Probar 6 breakpoints (xs<480 · sm · md · lg · xl · 2xl≥1440): hero stack, dot-nav oculto
      <1320px, sticky rail→acordeón <1024, exhibit y puente en móvil.
- [ ] Verificar `prefers-reduced-motion` (sin animaciones) y la salida a PDF (print).
- [ ] Validar HTML/CSS, sin errores de consola.
