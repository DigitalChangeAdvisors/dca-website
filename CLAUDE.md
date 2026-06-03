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
| `/nosotros` | `nosotros.html` | DCA, fundadores, casos, partnerships | ✅ **Deployada** — 13 secciones live. Deuda: fotos reales, og específica, JSON-LD LinkedIn |
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

## Datos y Decisiones Canónicas del Homepage — BLOQUEO DE PRODUCCIÓN

> `index.html` en producción es la referencia canónica para **todos** los datos numéricos, copies y decisiones estructurales del sitio. Ninguna página futura puede usar versiones diferentes de estos valores sin revisión explícita.

### Credenciales y datos en hero
- `70+` Empresas intervenidas · `57+` Consultores certificados · `14` Componentes propietarios
- **No usar** "17 Países" en el hero — va en la sección Validación con su label correcto

### Diagrama-puente uso→impacto
- Valor de inicio: **11%** (uso inicial) — no 19%
- El bridgeKpi anima hasta el valor de impacto documentado
- Aplica a homepage y cualquier otra página que reproduzca este diagrama

### Method strip (debajo de Modelo ARIA)
- `14` Componentes propietarios · `6` Dimensiones de medición del impacto · `7` Frameworks ágiles de transformación humana · `10` Obstáculos intervenidos en causa raíz
- **No usar** el strip anterior: "6 Sprints / 120 Días / 70+ Intervenciones"

### Herramientas del Modelo ARIA (ul items en cada fase)
- **Diagnóstico:** Índice de Urgencia Global · AIMT · AILS · AICD · Plan de intervención a la medida
- **Solución:** AINS · AIMC · AIIB · DAS · MATCH (Agile Model for Cultural and Human Transformation)
- **Impacto:** LED (Digital Team Leadership) · AI Governance Canvas · Impact Validation Matrix · Talent Roadmap Strategy Map · Agency Activators · PATH (Human Transformation Assurance Plan)
- Los identificadores MATCH / LED / PATH aparecen en el homepage en la lista técnica de herramientas de la metodología — esto es intencional y aprobado. No aplica la restricción de nombres internos en este contexto metodológico.

### Modal "Leer un extracto" (novela ReturnAI)
- Personaje: **Adalid Puentes** · Inversión: **$8,2 millones** · Adopción inicial: **11%** · Resultado: **$891K en el P&L**
- Apertura modal: "El 95% de las empresas invierte en IA. Solo el **5%** genera retorno medible."
- JS en `app.js`, CSS en `styles.css` (sección Modal)

> **Distinción con el Caso Ancla real:** El caso de la novela (Adalid Puentes, $8.2M/11%→70%) es diferente del caso ancla documentado con cliente real (Gestora de inversiones, $3.2M → 19%→67%, +13 puntos). El homepage usa el caso de la novela. El caso real se usa en páginas de evidencia (`/casos`) y en argumentación con dato de negocio.

### Sección Validación (stats bg-teal)
- `70+` Empresas intervenidas · `57+` Consultores certificados DCA · `17` Países · Comunidad LARIA
- Los 17 países = comunidad LARIA (Skool), **no** presencia de firma

### Líderes en homepage
- Solo 2: **César Lozano** (CEO) + **Ruth Jaramillo** (Directora — Digital Change Academy)
- El tercer líder (si aplica) va en `/nosotros`, no en homepage

### Bio Ruth Jaramillo (canónica)
- "Ingeniera Industrial, MBA EAFIT. Coach Profesional certificada por el Neuroscience and Coaching Institute (USA). 20+ años como ejecutiva empresarial. Cocreadora de los Frameworks Ágiles que fundamentan el Modelo ARIA. Autora de «Sembrando Semillas de Vida» y co-autora del libro de divulgación científica «Mentalidad Digital»."
- **No incluir** "Transformación Humana 4.0" — eliminado en fine-tuning

### Garantía (copy canónico)
- "Retorno documentado en 120 días. Si no se logra en ese plazo, continuamos hasta documentarlo."

### Copy y estructura adicional
- **H2 Problema:** "El 70% no puede demostrar retorno de su inversión en IA."
- **Sección Problema H2:** "retorno de su inversión en IA" (no "ROI de IA")
- **Label sección Libro:** "El libro" (no "Novela empresarial")
- **Footer descriptor:** "De la inversión en IA al retorno que importa." — nunca "Convertimos…"
- **Footer tira de ciudades:** ELIMINADA. Nunca reintroducir Santiago, Madrid ni Miami.
- **CTA final nota:** "Sin compromiso · 25 minutos · Tu reporte es confidencial" (no "Sin costo")
- **CTA cards:** 01 IUG · 02 Arquetipo organizacional · 03 Mapa de calor (incluye "3 capacidades instaladas") · 04 Costo financiero (usa "destrucción de valor" — loss aversion CFO/CEO)
- **Sección Industrias:** tira horizontal (`.industries-strip`) — no grid con links
- **Diferenciación:** componente `versus2` con arco SVG del logo — no tabla `versus` simple

## Decisiones Canónicas de `/nosotros` — BLOQUEO DE PRODUCCIÓN

> Implementación completada 2026-06-02. Copy aprobado por `/validar-marca` (91/100). Claude Design expandió el brief de 8 a 13 secciones — todas en producción.

### Propósito y etapa conductual
- **Etapa:** Validación — el prospecto ya conoce el método, ahora valida a las personas
- **Mecanismo principal:** Prueba Social de Autoridad + Efecto Halo
- **Mecanismo secundario:** Reciprocidad (insight propietario antes del CTA)
- **CTA único:** `AI Return Test →` (→ `index.html#test`) — nunca un segundo botón de conversión

### Estructura real — 13 secciones implementadas
1. `#nosotros` — Hero + Ficha institucional (en cascada al scroll)
2. `#proposito` — Por qué existimos (credo — abierto a BE tuning)
3. `#puente` — Del uso al impacto — SVG animado · **bridge: 19%→67%** (caso real)
4. `#la-firma` — La firma · H2: *"Una categoría que no existía antes de que la necesitáramos."*
5. (sin id) — Banda editorial fullbleed · `image-slot #img-firma-banda` (pendiente foto real)
6. `#liderazgo` — César Lozano · image-slot · cred-list
7. (bg-platinum) — Ruth Jaramillo · image-slot espejado · cred-list extendida
8. `#metodo` — Modelo ARIA stepper fijo (3 fases: Assessment / Intervención / Atestación)
9. `#principios` — Cuatro principios (abierto a BE tuning)
10. (bg-teal) — Validación de escala · count-up 70+/57+/17/14
11. (sin id) — Perspectiva DCA · pullquote con cita de adopción canónica
12. `#evidencia` — Evidencia de campo · $3.2M · count-up 19→67 · CTA → `casos.html`
13. `#cta-final` — Diagnóstico ejecutivo · `AI Return Test →`

### Archivos de la página
- HTML: `nosotros.html`
- CSS: `styles-nosotros.css` + `nosotros2.css` + `nosotros3.css` + `nosotros4.css` + `nosotros5.css` + `nosotros6.css`
- JS específico: `enhance-nosotros4.js` (wayfinding dot-nav 7 anclas)
- JS sistema: `app.js` + `enhance4.js` + `enhance6.js` (no duplicar)

### Datos canónicos de la página
- Stats display (solo en Sección 5, una vez): `70+` Empresas · `57+` Consultores · `17` Países · `14` Componentes
- Caso ancla en Sección 7: **$3.2M · 19%→67% · +13 puntos · payback 120 días** (caso real, NDA)
- **PROHIBIDO** mezclar con caso novela (Adalid Puentes · $8.2M · 11%→70% · $891K)

### Términos y reglas específicas de esta página
- "transformación digital" **NO aparece** — ni siquiera como negación. Reemplazado por: *"No somos un vendor de herramientas de IA. No somos una firma de gestión del cambio. No somos una agencia de capacitación."*
- "adopción" aparece como medio en Sección 6: *"La adopción es el camino. El retorno es el destino."* — correcto y aprobado
- Bio Ruth Jaramillo en esta página: versión extendida con credenciales completas (vs. versión corta en homepage)
- "capacitación en IA" **prohibido** en contexto de Ruth — usar *"inversión en IA de tu organización"*
- Tira de ciudades: **ELIMINADA**. Tercer líder: **NO aparece** en esta página

### Foto de fundadores
- César: retrato ejecutivo, 3/4 o perfil, overlay carbón 15%, aspect-ratio 4/5, placeholder `#f3f3f3`
- Ruth: mismas especificaciones, imagen espejada (texto izquierda en Sección 3, texto derecha en Sección 4)
- Hasta tener fotos reales: `image-slot.js` activo — reemplazar antes del dominio final

### CTA canónico
- Botón: `AI Return Test →` (teal `#2e8b76`, Montserrat 600)
- Nota subordinada: *"25 minutos · Sin compromiso · Tu diagnóstico es confidencial"*
- CTA secundario (texto-link): *"Ver el caso completo →"* enlaza a `/casos` — no compite con botón principal

---

## Decisiones Canónicas de `/modelo-aria` — Fine-Tuning (2026-06-03)

> Fine-tuning activo. Los 3 puntos críticos se resuelven antes de cualquier otro ajuste.

### Etapa conductual y mecanismos
- **Etapa del visitante:** Solución — ya reconoció el problema en el home, evalúa si ARIA es el método correcto
- **Mecanismo principal:** Autoridad cognitiva + Efecto ancla (profundidad metodológica)
- **Mecanismo secundario:** Reciprocidad (dar detalle antes de pedir acción)
- **Error a evitar:** Reactivar aversión a la pérdida (mecanismo del home) más de una vez en esta página

### Elementos compartidos con el home (ya sincronizados)
- Nav canónica: 4 ítems + CTA · clase `is-current` en "Modelo ARIA" ✅
- Footer canónico: descriptor "De la inversión en IA al retorno que importa." · sin tira de ciudades · 4 columnas ✅
- Logo SVG: `font-weight="400"` · `focusable="false"` · sin `role="img"` redundante ✅

### Los 3 puntos críticos (prioridad de fine-tuning)

**Punto 1 — Eliminar method-strip duplicado (S3)**
- El bloque de 4 contadores (14 / 120 / 70+ / 17) en la sección Fundamento es idéntico al `hero__cred` del hero de esta misma página.
- Acción: eliminar el `<div class="method-strip">` de S3. Reemplazar con los datos canónicos del método: `14 componentes · 6 dimensiones de medición · 7 frameworks ágiles · 10 obstáculos intervenidos` (misma tabla canónica que en el homepage).
- El párrafo `evidence-cap` que sigue también puede eliminarse — queda absorbido por el fundamento.

**Punto 2 — Transformar el diagrama-puente SVG (S2.5)**
- El SVG bridge es la firma visual del homepage. Repetirlo en modelo-aria destruye su exclusividad.
- Acción: reemplazar por una visualización que muestre los **3 grupos de componentes como infraestructura del puente**: 3 tramos (Diagnóstico / Solución / Impacto) con los 14 componentes distribuidos. Colores: teal para los tramos, oro para los marcadores de componentes.
- El texto de la sección ("Del uso al impacto") puede conservarse — es el concepto; la visualización debe ser diferente.

**Punto 3 — Reemplazar Liderazgo placeholders (S10)**
- DCA tiene 2 fundadores reales: César Lozano y Ruth Jaramillo. No existe un tercer socio.
- Acción: eliminar el tercer `.leader` div. Reemplazar los 2 restantes con los datos reales.
- Framing diferente al home: aquí son "autores de la metodología", no "líderes de la firma".
- César: "CEO · Digital Change Advisors — Autor de la metodología ARIA y del framework MATCH. Líder de más de 70 intervenciones de retorno de IA en LatAm."
- Ruth: "Directora · Digital Change Academy — Cocreadora de los Frameworks Ágiles del Modelo ARIA. Ingeniera Industrial, MBA EAFIT, Coach certificada NCI."
- Fotos: usar `<img src="img-leader-1.png">` y `<img src="img-leader-2.png">` (reales, ya en producción).

### Inventario completo — decisiones de cada sección

| Sección | Decisión | Razón |
|---|---|---|
| Hero S1 | ✅ Conservar | Copy distinto al home, correcto para etapa Solución |
| El Problema S2 | 🟡 Reducir + reframe | Máximo 3 bullets; cambiar de "síntomas" a "indicadores de diagnóstico ARIA" |
| Diagrama-Puente S2.5 | 🔴 **CRÍTICO** — Transformar | Mismo SVG que home; reemplazar por visualización de 3 tramos + 14 componentes |
| Fundamento Intelectual S3 | 🔴 **CRÍTICO** — Eliminar method-strip | Contador 14/120/70+/17 duplica el hero__cred de esta misma página |
| Las 3 Fases sticky rail S4 | 🟡 Diferenciar visualmente | Agregar duración por fase (sem. 1-3 / 4-10 / 11-17) y entregable clave no visible en home |
| Los 14 Componentes S5 | ✅ Conservar íntegro | Único en toda la presencia web. Núcleo de autoridad intelectual |
| Sprints MATCH S6 | ✅ Conservar íntegro | Único. Explica el *cómo* de la implementación |
| Caso Ancla S7 | 🟡 Transformar perspectiva | Home muestra resultados; aquí mostrar componentes activados + modelo de medición |
| Diferenciación S8 | ✅ Conservar | Framing diferente al home (ARIA vs. vendor tecnológico, no DCA vs. vendor genérico) |
| Casos de Aplicación S9 | ✅ Conservar íntegro | Único. Auto-categorización del CEO en su escenario real |
| Liderazgo S10 | 🔴 **CRÍTICO** — Reemplazar | 3 placeholders → 2 fundadores reales + fotos reales + framing como autores de ARIA |
| FAQ Ejecutivo S11 | ✅ Conservar íntegro | Único. Reduce fricción cognitiva ante el comité de inversión |
| Responsabilidad / Garantía | ✅ Conservar íntegro | Único. Risk reversal para el CFO en etapa de cierre |
| Perspectivas S13 | 🟡 Asignar autores reales | Títulos correctos; eliminar `<p>` de "Títulos de muestra"; asignar César o Ruth como autor |
| CTA Final | 🟡 Ajustar nota | Usar nota canónica: "Sin compromiso · 25 minutos · Tu reporte es confidencial" |

### Datos canónicos de esta página
- Stats del hero: `14` Componentes · `120` Días · `70+` Empresas · `17` Países (comunidad LARIA, no presencia de firma)
- Caso ancla (S7): **$3.2M · 19%→67% · +13 puntos persistencia · payback 120 días** (caso real con NDA — mismo que `/nosotros`)
- **PROHIBIDO** usar caso novela (Adalid Puentes · $8.2M) en esta página

### Archivos de la página
- HTML: `modelo-aria.html`
- CSS: `styles.css` + `styles4.css` + `styles5.css` + `styles6.css` + `styles-modelo-aria.css`
- JS: `app.js` + `enhance4.js` + `enhance6.js` + `enhance-aria.js` + `enhance-v6.js`
- **`image-slot.js`** activo — reemplazar por `<img>` reales antes del dominio final

---

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
- [x] `/modelo-aria` — v6 integrada. Fine-tuning pendiente: image-slots → img reales, textos líderes (placeholder), validación BE, **bridge usa 19% (real case) — verificar si debe alinearse a 11% del homepage**
- [x] `/returnai` — v6 implementada, brand compliance aplicado, routing canónico. Fine-tuning al final. **bridge usa 19% (real case) — verificar alineación con homepage (11%)**
- [x] `/nosotros` — Implementada (13 secciones). Archivos: `nosotros.html` + `styles-nosotros*.css` (×6) + `enhance-nosotros4.js`. Deuda técnica: fotos reales pendientes (image-slot activo), `og-nosotros.png` específica pendiente, JSON-LD `sameAs` (LinkedIn) pendiente. Fine-tuning BE (secciones Propósito + Principios) al final.
- [ ] `/casos`
- [ ] 5 páginas restantes

### Fase 4 — Infraestructura ✅ (GitHub repos configurados)
### Fase 5 — Lanzamiento

- [x] GitHub Pages activo: `https://dca-returnai.github.io/dca-website/`
- [ ] Dominio `www.digitalchangeadvisors.com` — conectar al finalizar toda la presencia web
