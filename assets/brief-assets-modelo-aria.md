# Brief de assets — Página "Modelo ARIA" (modelo-aria-v6.html)
### Digital Change Advisors · Inventario de placeholders + prompts listos para IA

Documento de trabajo para generar los 8 assets visuales (+ favicon) que completan la
página. Cada prompt está en inglés (óptimo para Midjourney / Adobe Firefly / DALL·E) y
hereda la **misma dirección de arte** para que todo el sitio se vea como una sola pieza.

---

## 0 · Dirección de arte común (la "biblia" de estilo)

Pegar este bloque de estilo al inicio/fin de CADA prompt fotográfico:

> **STYLE:** documentary editorial photography, candid and observed, not stock. Desaturated
> cool color grade in teal-charcoal tonality (saturation reduced ~40%), one single warm gold
> accent per frame (window light, a lamp, a reflection). Filmic soft contrast, slightly lifted
> blacks. Natural directional light (window / overcast / architectural). Generous negative
> space, calm composition, off-center subject. Muted wardrobe (navy, charcoal, grey).
> Serious, human, composed expressions — never smiling stock. LatAm enterprise context.

> **NEGATIVE (evitar siempre):** no gradients, no neon, no glowing AI clichés (brains, robots,
> blue circuit boards, holograms), no smiling stock handshakes, no oversaturation, no text,
> no logos, no watermarks, no busy backgrounds, no fisheye, no HDR look.

**Paleta de referencia:** teal `#2e8b76` · oro `#a48111` · carbón `#1e2a38` · platino `#f3f3f3` · blanco.

---

## A · Imágenes fotográficas (6)

### 1 · `mra-hero-photo` — Hero (prioridad máxima)
- **Tipo / ratio / export:** foto documental · ~1:1 · **1200×1180 px**
- **Debe reflejar:** comité ejecutivo en deliberación real; decisión de Junta, alto nivel.
- **Prompt:**
> Documentary editorial photograph of a senior executive committee mid-deliberation around a
> conference table in a modern, understated boardroom — three to four diverse Latin American
> executives in their 50s, muted navy and charcoal suits, one gesturing toward a printed
> document while another listens intently. Captured slightly from the side, candid, not posed.
> Soft directional window light from the left, cool desaturated teal-charcoal grade with a
> faint warm gold glow. Generous negative space on the right side of the frame. Calm, serious,
> human mood. 35mm, shallow depth of field. [STYLE + NEGATIVE]
- **Aspect:** `--ar 1:1` (Midjourney) · **Firefly:** Square.

### 2 · `mra-leader-1` — Socio · Fundador
- **Tipo / ratio / export:** retrato editorial · ~1.1:1 (casi cuadrado) · **1100×1010 px**
- **Prompt:**
> Editorial head-and-shoulders portrait of a distinguished male founding partner, late 50s,
> Latin American, charcoal suit, composed and confident expression (not smiling), looking
> directly at the camera with quiet authority. Blurred neutral concrete-grey background. Soft
> directional key light, cool desaturated teal-charcoal grade. Centered subject with breathing
> room. [STYLE + NEGATIVE]
- **Aspect:** `--ar 11:10`.

### 3 · `mra-leader-2` — Socia · Adopción y cambio
- **Prompt:**
> Editorial head-and-shoulders portrait of a female senior partner, late 40s, Latin American,
> dark blazer, warm but composed expression (calm, not smiling), three-quarter angle. Blurred
> neutral concrete-grey background. Soft directional light, cool desaturated teal-charcoal
> grade with a subtle warm accent. [STYLE + NEGATIVE]
- **Aspect:** `--ar 11:10`. *(Mantener idéntico grade a #2 y #4 — deben parecer la misma sesión.)*

### 4 · `mra-leader-3` — Socio · Evidencia y ROI
- **Prompt:**
> Editorial head-and-shoulders portrait of a male partner, 50s, Latin American, navy suit,
> analytical and sober expression (not smiling), slight side angle. Blurred neutral
> concrete-grey background. Soft directional light, cool desaturated teal-charcoal grade.
> [STYLE + NEGATIVE]
- **Aspect:** `--ar 11:10`.

### 5 · `mra-persp-1` — Perspectiva "Adopción" (la última milla es humana)
- **Tipo / ratio / export:** foto documental horizontal · ~5:3 · **1200×720 px**
- **Prompt:**
> Documentary over-the-shoulder photograph of a professional working in their real daily flow
> — hands on a laptop and a printed page on a wooden desk, focus on the human at work rather
> than the screen. Soft window light, cool desaturated teal-charcoal grade with a warm gold
> highlight. Calm, focused, candid. [STYLE + NEGATIVE]
- **Aspect:** `--ar 5:3`.

### 6 · `mra-persp-2` — Perspectiva "Gobierno del cambio" (champion sin autoridad)
- **Prompt:**
> Documentary photograph evoking executive authority and governance — a single figure seated
> at the head of an empty modern boardroom table, viewed from a distance, or an authoritative
> empty executive chair by a glass wall. Quiet, symbolic, restrained. Soft architectural light,
> cool desaturated teal-charcoal grade, one warm gold accent. Strong negative space.
> [STYLE + NEGATIVE]
- **Aspect:** `--ar 5:3`.

### 7 · `mra-persp-3` — Perspectiva "Evidencia" (un número que resiste auditoría)
- **Prompt:**
> Documentary close-up of audited evidence on paper — a printed financial report with figures
> and charts on a desk, a hand annotating it with a fountain pen. Tactile, tangible, no
> screens. Soft directional light, cool desaturated teal-charcoal grade with a warm gold
> reflection. Shallow depth of field. [STYLE + NEGATIVE]
- **Aspect:** `--ar 5:3`.

---

## B · Assets de marca (2)

### 8 · `assets/og-returnai.png` — Tarjeta social (1200×630 px)
- **Tipo:** gráfica tipográfica (no foto). Mejor compuesta a mano/Figma que por IA, para
  control del logo y el texto.
- **Composición:** fondo platino `#f3f3f3` o carbón `#1e2a38`; logo DCA; rótulo **"Modelo ARIA"**
  en Marcellus; el **motivo del puente** (arco teal que asciende al punto oro). Mucho aire,
  cero gradientes.
- **Si se genera base por IA (solo el fondo/textura):**
> Minimal abstract brand background, off-white platinum tone, a single thin teal arc rising
> toward a small gold dot on the right, vast negative space, flat, no gradient, editorial,
> sober. [NEGATIVE]  — luego superponer logo + texto en edición.
- **Export:** PNG **1200×630** exacto.

### 9 · `assets/favicon.png` — Ícono (512×512 px)
- **Tipo:** gráfica. **NO requiere IA** — exportar directamente del SVG del logo: el arco teal
  que sube al punto oro, centrado sobre blanco, con padding. Probar legibilidad a 16 px.

---

## C · Textos pendientes (completan el inventario)

| Ubicación | Pendiente |
|---|---|
| Liderazgo (×3) | Nombres reales, cargos y credenciales (trayectoria, foco, publicaciones) |
| Perspectivas (×3) | Títulos reales de los 3 artículos + destino real del enlace (hoy → `blog-v6.html`) |
| Problema | Fuente exacta del "70%" (estudio citable) |
| Hero (caption) | "Comités ejecutivos · LatAm" — confirmar o ajustar |

---

## D · Cómo cargar las imágenes

Cada slot es un `<image-slot>` con `id` propio y persistencia: basta **arrastrar el archivo
generado** sobre el recuadro punteado en la página (el drop sobrevive recargas). IDs:
`mra-hero-photo`, `mra-leader-1/2/3`, `mra-persp-1/2/3`. Los assets de marca
(`og-returnai.png`, `favicon.png`) van en la carpeta `assets/`.

**Consistencia:** generar los 3 retratos en una sola tanda con la misma semilla/estilo, y las
3 miniaturas de Perspectivas en otra, para que cada fila se vea homogénea.
