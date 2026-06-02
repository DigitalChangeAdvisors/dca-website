# Website DCA — Arquitectura y Estado

> Las reglas de marca, sistema visual, tono, skills y flujo de producción están en `../CLAUDE.md` (raíz del workspace). Este archivo contiene solo lo específico del website principal.

## Archivo de referencia canónico

**`index.html`** es la homepage en producción. `Homepage v6.html` es histórico — no modificar, no deployar.

CSS en cascada (cargar en este orden):
- `styles.css` → tokens, tipografía, botones, nav, footer, reveal base, modal
- `styles4.css` → motion fluido v4: ARIA pinned, diagrama-puente, perspectivas
- `styles5.css` → hardening v5: a11y, contraste AA, breakpoints tablet
- `styles6.css` → motion expresivo v6: word-reveal, nav condensada, hovers
- `app.js` · `enhance4.js` · `enhance6.js` · `image-slot.js`

Nuevas páginas: `<body class="v4 v5 v6">` y cargar las 4 CSS + 3 JS + image-slot.

## Mapa de Páginas

| Ruta | Archivo | Propósito | Estado |
|------|---------|-----------|--------|
| `/` | `index.html` | Homepage — fine-tuning BE completo (14 secciones) | ✅ Completo y en producción |
| `/blog` | `blog.html` | Perspectivas — liderazgo de pensamiento | ✅ Completo y en producción |
| `/modelo-aria` | `modelo-aria.html` | Autoridad intelectual: 14 componentes, 6 sprints, garantía | ✅ Desplegada — fine-tuning al final |
| `/returnai` | `returnai.html` | Vitrina comercial: sistema ReturnAI, escalera de valor | ✅ Implementada — fine-tuning al final |
| `/nosotros` | `nosotros.html` | DCA, fundadores, casos, partnerships | ⏳ **SIGUIENTE EN COLA** |
| `/academia` | `academia.html` | Digital Change Academy: certificaciones | ⏳ Pendiente |
| `/red-aria` | `red-aria.html` | Captación de nodos/socios por país | ⏳ Pendiente |
| `/casos` | `casos.html` | ROI documentado — caso ancla $3.2M | ⏳ Pendiente |
| `/libro` | `libro.html` | ReturnAI la novela, Amazon, extracto | ⏳ Pendiente |
| `/comunidad` | `comunidad.html` | LARIA: 240 miembros, Skool | ⏳ Pendiente |
| `/contacto` | `contacto.html` | Formulario mínimo, sin chatbots | ⏳ Pendiente |

## Repositorios de Despliegue

- **Dev (monorepo):** `DCA-ReturnAI/dca-presencia-digital-dev` — carpeta `website/`
- **Producción:** `DCA-ReturnAI/dca-website` — GitHub Pages activo
- **URL staging:** `https://dca-returnai.github.io/dca-website/`
- **Deploy desde MacBook (monorepo):** `git subtree push --prefix=website production-website main --force`
- **⚠️ Nota de sincronización:** Si la producción tiene commits directos del iMac, usar `--force` tras integrar los cambios remotos en el monorepo.

## Decisiones Técnicas

- Imágenes (`img-*.png`) residen en `website/` (misma carpeta que los HTML)
- `assets/` contiene `favicon.png` y `og-returnai.png`
- Logo v2.2 integrado como SVG inline en nav y footer (no archivo externo)
- `image-slot.js` solo para staging/autoría — reemplazar por `<img>` reales antes del dominio final

## Decisiones de Copy Aplicadas en Homepage (fine-tuning 2026-06-02)

Decisiones no obvias que deben mantenerse en todas las páginas:

- **Hero créditos:** `57+ Consultores certificados` (no "17 Países" — los 17 países van en la sección Validación con datos, no en el hero)
- **Huella geográfica:** eliminada del footer — la operación real es Colombia + Panamá + México. "17 países" refiere a la comunidad LARIA (Skool), no a presencia de firma
- **Modal "Leer un extracto":** abre popup con contraportada del libro. Cifra real del libro: `$891K en el P&L`. JS en `app.js`, CSS en `styles.css` (sección Modal)
- **Sección Problema H2:** "retorno de su inversión en IA" (no "ROI de IA")
- **Label sección Libro:** "El libro" (no "Novela empresarial")
- **Footer descriptor:** eslogan canónico del Brand Book — "De la inversión en IA al retorno que importa." (no usar "Convertimos…" — verbo no canónico; canónico es "Construimos")
- **Footer tira de ciudades:** ELIMINADA. Operación real: Colombia + Panamá + México. Santiago, Madrid y Miami son presencia falsa — nunca reintroducir.
- **CTA final nota:** "Sin compromiso · 25 minutos · Tu reporte es confidencial" (no "Sin costo" — heurístico precio-calidad invertido para C-Level)
- **CTA cards 03-04:** card 03 añade "3 capacidades instaladas" (efecto dotación + loss aversion); card 04 usa "destrucción de valor" (loss aversion CFO/CEO)

## Regla de Fine-Tuning (CANÓNICA)

> Los placeholders de imágenes, textos pendientes (nombres, credenciales, fuentes) y la
> validación de textos bajo Behavioral Economics se completan durante el **fine-tuning final
> de cada página** — NO bloquean la construcción ni el avance al siguiente paso.
> Construir primero, afinar al final.

## Estado del Proyecto

### Fase 0 — Fundamentos ✅
### Fase 1 — Diseño ✅
### Fase 2 — Contenido 🔄 (9 páginas pendientes)
### Fase 3 — Construcción

- [x] Homepage (`index.html`) — fine-tuning BE completo 14 secciones + modal libro
- [x] Perspectivas (`blog.html`)
- [x] `/modelo-aria` — v6 integrada. Fine-tuning pendiente: image-slots → img reales, textos líderes (placeholder), validación BE
- [x] `/returnai` — v6 implementada, brand compliance aplicado, routing canónico. Fine-tuning al final.
- [ ] `/nosotros` — **SIGUIENTE EN COLA**
- [ ] `/casos`
- [ ] 5 páginas restantes

### Fase 4 — Infraestructura ✅ (GitHub repos configurados)
### Fase 5 — Lanzamiento

- [x] GitHub Pages activo: `https://dca-returnai.github.io/dca-website/`
- [ ] Dominio `www.digitalchangeadvisors.com` — conectar al finalizar toda la presencia web
