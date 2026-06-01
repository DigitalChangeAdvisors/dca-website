# Website DCA — Arquitectura y Estado

> Las reglas de marca, sistema visual, tono, skills y flujo de producción están en `../CLAUDE.md` (raíz del workspace). Este archivo contiene solo lo específico del website principal.

## Archivo de referencia canónico

**`Homepage v6.html`** es la versión de referencia de diseño. Todo sistema visual, motion y componentes del website se derivan de este archivo.

CSS en cascada (cargar en este orden):
- `styles.css` → tokens, tipografía, botones, nav, footer, reveal base
- `styles4.css` → motion fluido v4: ARIA pinned, diagrama-puente, perspectivas
- `styles5.css` → hardening v5: a11y, contraste AA, breakpoints tablet
- `styles6.css` → motion expresivo v6: word-reveal, nav condensada, hovers
- `app.js` · `enhance4.js` · `enhance6.js` · `image-slot.js`

Nuevas páginas: `<body class="v4 v5 v6">` y cargar las 4 CSS + 3 JS + image-slot.

## Mapa de Páginas

| Ruta | Archivo | Propósito | Estado |
|------|---------|-----------|--------|
| `/` | `index.html` | Homepage — instalar categoría, capturar CEO en 8 segundos | ✅ Completo |
| `/blog` | `blog.html` | Perspectivas — liderazgo de pensamiento | ✅ Completo |
| `/modelo-aria` | `modelo-aria.html` | Autoridad intelectual: 14 componentes, 6 sprints, garantía | 🔄 QA visual pendiente (fine-tuning al final) |
| `/returnai` | `returnai.html` | Escalera de valor completa, tabla vs. vendors | ⏳ Pendiente |
| `/nosotros` | `nosotros.html` | DCA, fundadores, casos, partnerships | ⏳ Pendiente |
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
- **Deploy website:** `git subtree push --prefix=website production-website main`

## Decisiones Técnicas

- Imágenes (`img-*.png`) residen en `website/` (misma carpeta que los HTML)
- `assets/` contiene `favicon.png` y `og-returnai.png`
- Logo v2.2 integrado como SVG inline en nav y footer
- `image-slot.js` maneja los slots de imágenes arrastrables

## Regla de Fine-Tuning (CANÓNICA)

> Los placeholders de imágenes, textos pendientes (nombres, credenciales, fuentes) y la
> validación de textos bajo Behavioral Economics se completan durante el **fine-tuning final
> de cada página** — NO bloquean la construcción ni el avance al siguiente paso.
> Construir primero, afinar al final.

## Estado del Proyecto

### Fase 0 — Fundamentos ✅
### Fase 1 — Diseño ✅
### Fase 2 — Contenido ⏳ (copy de 9 páginas pendiente)
### Fase 3 — Construcción

- [x] Homepage (`index.html`)
- [x] Perspectivas (`blog.html`)
- [x] `/modelo-aria` — v6 integrada (778 líneas), routing corregido, enhance-aria.js + enhance-v6.js. Fine-tuning al final.
- [ ] `/returnai` — **SIGUIENTE EN COLA**
- [ ] `/nosotros`
- [ ] `/casos`
- [ ] 5 páginas restantes

### Fase 4 — Infraestructura ✅ (GitHub repos configurados)
### Fase 5 — Lanzamiento

- [x] GitHub Pages activo: `https://dca-returnai.github.io/dca-website/`
- [ ] Dominio `www.digitalchangeadvisors.com` — conectar al finalizar toda la presencia web
