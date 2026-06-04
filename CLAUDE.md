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
| `/modelo-aria` | `modelo-aria.html` | Autoridad intelectual: 14 componentes, 6 sprints, garantía | ✅ Fine-tuning BE completo |
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

## Términos Vetados — Comunicación Externa (acumulativo)

| Término prohibido | Sustituto | Criterio |
|---|---|---|
| "metodología" | "método", "modelo" o "sistema" | Cuando describe ARIA → "Modelo"; proceso → "método"; arquitectura → "sistema" |
| "17 países" | Eliminar o "70+ organizaciones en Latinoamérica" | Solo en /comunidad con framing LARIA explícito |
| "Gestión del cambio" | "Arquitectura de Sistemas Sociotécnicos" | Nombre canónico del tercer pilar del Modelo ARIA |
| "Ciencia de la adopción" | "Neurociencias de la Adopción" | Nombre canónico del segundo pilar del Modelo ARIA |
| "adopción" como FIN | "retorno" | "adopción" solo válido como MEDIO: el camino, no el destino |
| "soluciones integrales" | — | Framing genérico de vendor |
| "transformación digital" | — | Categoría anterior de DCA, no la actual |

## Decisiones Técnicas

- Imágenes (`img-*.png`) residen en `website/` (misma carpeta que los HTML)
- `assets/` contiene `favicon.png` y `og-returnai.png`
- Logo v2.2 integrado como SVG inline en nav y footer (no archivo externo)
- `image-slot.js` solo para staging/autoría — reemplazar por `<img>` reales antes del dominio final

## Datos y Decisiones Canónicas del Homepage — BLOQUEO DE PRODUCCIÓN

> `index.html` en producción es la referencia canónica para **todos** los datos numéricos, copies y decisiones estructurales del sitio. Ninguna página futura puede usar versiones diferentes de estos valores sin revisión explícita.

### Credenciales y datos en hero
- `70+` Empresas intervenidas · `57+` Consultores certificados · `14` Componentes propietarios
- **No usar** "17 Países" en ninguna página ni landing page — eliminado permanentemente (2026-06-03). Solo en `/comunidad` con framing estricto de comunidad LARIA.

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

> **Fine-tuning completado.** Los 3 puntos críticos y los 5 ajustes del inventario 🟡 están en producción (commit `4b4abe8`). Fine-tuning hero completado en sesión posterior (commits `f169561` → `72c7151`, 2026-06-03).

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
- Framing diferente al home: aquí son "autores del Modelo ARIA", no "líderes de la firma".
- César: "CEO · Digital Change Advisors — Autor del Modelo ARIA y del framework MATCH. Líder de más de 70 intervenciones de retorno de IA en LatAm."
- Ruth: "Directora · Digital Change Academy — Cocreadora de los Frameworks Ágiles del Modelo ARIA. Ingeniera Industrial, MBA EAFIT, Coach certificada NCI."
- Fotos: usar `<img src="img-leader-1.png">` y `<img src="img-leader-2.png">` (reales, ya en producción).

### Inventario completo — decisiones de cada sección

| Sección | Decisión | Estado |
|---|---|---|
| Hero S1 | Conservar — copy correcto para etapa Solución | ✅ |
| El Problema S2 | Texto thesis + problem__bridge + indicator-cards (oro, clip-path stagger) — fine-tuning BE completo | ✅ |
| Diagrama-Puente S2.5 | Title: "…puente del uso al impacto." · leyenda 3+7+4 teal / 120 días oro · "niveles" · max-width 320px — fine-tuning BE completo ✅ |
| Fundamento Intelectual S3 | discipline-triad Capacidad→Intención→Rentabilidad · bg-platinum · íconos SVG stroke · synergy-close — fine-tuning BE completo ✅ |
| Las 3 Fases sticky rail S4 | H2 antítesis · toolkit vs. secuencia · cadena causal · 79 reactivos · 2 métricas · 17 sem. evidencia · nombres ARIA corregidos · animación stepper fixed — fine-tuning BE completo ✅ |
| Los 14 Componentes S5 | Conservar íntegro — único en toda la presencia web | ✅ |
| Sprints MATCH S6 | Conservar íntegro — explica el *cómo* de la implementación | ✅ |
| Caso Ancla S7 | Bloque metodológico: componentes ARIA activados + evidencia de atribución | ✅ |
| Diferenciación S8 | Conservar — ARIA vs. vendor tecnológico (framing distinto al home) | ✅ |
| Casos de Aplicación S9 | Conservar íntegro — auto-categorización del CEO | ✅ |
| Liderazgo S10 | 2 fundadores reales, fotos reales, label "Quién lo construyó" | ✅ |
| FAQ Ejecutivo S11 | Conservar íntegro — reduce fricción ante el comité | ✅ |
| Responsabilidad / Garantía | Conservar íntegro — risk reversal CFO | ✅ |
| Perspectivas S13 | Autores asignados (Adopción → César; Gobierno del cambio → Ruth; Evidencia → César) · sin nota de staging | ✅ |
| CTA Final | Nota canónica: "Sin compromiso · 25 minutos · Tu reporte es confidencial" | ✅ |

### Ajustes 🟡 — Implementación (2026-06-03)

**S2 El Problema — fine-tuning BE completo (2026-06-03):**
- Título canónico: `"Indicadores que diagnosticamos antes de toda intervención ARIA"` (no "Tu comité ya está viendo esto")
- **Texto thesis (canónico):** "El **70% de las organizaciones** que han invertido en IA no puede documentar ROI ante su Junta. No es la tecnología lo que falla; es la ausencia de método para convertir **uso** en **impacto** económico auditable."
  - Punto y coma: preserva el desplazamiento de hipótesis (antítesis) sin dos frases cortas — decisión BE justificada
  - "uso" e "impacto" en negrita: contraste conceptual clave, sin mayúsculas sostenidas (registro C-Level, no redes sociales)
- **Párrafo puente `problem__bridge` (canónico):** "DCA construye esa última milla. Para eso fue diseñado el **Modelo ARIA**: 14 componentes que convierten esa brecha en retorno auditable."
  - Instala "Modelo ARIA" + "14 componentes" antes de que el visitante llegue a S3 (anclaje de solución propietaria)
- **Fuente:** "síntesis DCA sobre retorno de inversiones en IA 2024–2025 y diagnósticos propios en 70+ organizaciones" (no "estudios de adopción empresarial")
- **Indicadores — 3 tarjetas canónicas:**
  1. "Pilotos aprobados hace +12 meses sin veredicto financiero para la Junta"
  2. "Licencias activas que no aparecen como valor recuperado en el P&L" — "recuperado" (no "capturado": este es contexto P&L/contable, no estratégico)
  3. "Comité ejecutivo exigiendo el número de ROI de la estrategia de IA"
  - Sin punto final: sintagmas nominales, no oraciones completas — correcto tipográficamente
- **Diseño indicator-card:** borde izquierdo oro 4px · border-radius 0/6px · fondo blanco · sombra base 2px · hover spring lift translateY(-4px)
- **Animación reveal:** `@keyframes indicator-reveal` (clip-path desde derecha) disparado por `.indicator-stack.in` · stagger nth-child 0/120ms/240ms · `data-reveal` en el contenedor, NO en las cards individuales · título del aside sin `data-reveal` (evita desplazamiento visual sobre primera tarjeta)

**S2.5 Diagrama-Puente — fine-tuning BE completo (2026-06-03):**
- **H2 canónico:** "14 componentes construyen el puente del uso al impacto." — `<br>` forzado después de "el" para corte correcto en 2 líneas
- **Chapeau:** antítesis con punto y coma: "El problema no es la intención; es la ausencia de estructura." (nunca punto seguido — mismo patrón que S2 thesis)
- **"fases" → "niveles":** tanto en el chapeau como en la leyenda izquierda. Terminología canónica para toda la página.
- **Leyenda izquierda — texto canónico:** "14 componentes propietarios en 3 niveles de intervención, diseñados para superar los obstáculos que impiden la rentabilización de la inversión en IA."
- **Leyenda — colores:** `3 + 7 + 4` en teal · `120 días` en oro — espeja los polos del SVG (teal = inversión ya hecha, oro = KPI documentado)
- **Leyenda max-width:** 320px (de 280px) — para igualar 4 líneas en ambas columnas

**S3 Fundamento Intelectual — fine-tuning BE completo (2026-06-03):**
- **Fondo:** `bg-platinum` — separación visual clara con S2.5 (blanco) y S4 (blanco)
- **Subtítulo bajo H2:** `<p class="aria-expansion">Aceleración del Retorno de la IA</p>` — Montserrat 400, carbón-55. Sin letras destacadas (A/R/IA): registro C-Level, no juego tipográfico.
- **Thesis:** "—Aceleración del Retorno de la IA—" eliminada del párrafo (estaba en el medio, interrumpía lectura). `<b>` en carbón, no teal — evita competencia visual con los `disc-outcome`. `max-width: 820px` en el contenedor.
- **Texto thesis canónico (sin la expansión del acrónimo):** "…son los **factores humanos y organizacionales** que impiden que la IA convierta en retorno. Por eso ARIA no es un playbook genérico, sino un sistema de **14 componentes propietarios** en 3 grupos de intervención, construido sobre tres disciplinas y calibrado en intervención real."
- **Foundation-roots y method-strip:** ELIMINADOS. Reemplazados por `.discipline-triad`.
- **discipline-triad — secuencia causal (canónica):**
  - Card 1: Neurociencias de la Adopción → **Capacidad** · ícono nodo neural · badge 01 · borde teal
  - Card 2: Economía del Comportamiento → **Intención** · ícono bifurcación Y · badge 02 · borde teal
  - Card 3: Arquitectura Sociotécnica → **Rentabilidad** · ícono círculos interlocking · badge 03 · borde oro
  - "Arquitectura Sociotécnica" = nombre corto canónico aprobado (vs. "Arquitectura de Sistemas Sociotécnicos")
  - Íconos: SVG stroke-only, `pathLength="100"`, animados con `stroke-dashoffset` al scroll (stagger 0.25/0.45/0.65s)
  - Flechas: SVG inline, teal, 65% opacidad (no carácter →)
- **synergy-close — texto canónico:** "La rentabilización de la IA no es gestión del cambio basada en suposiciones. Es **ingeniería organizacional** donde la capacidad operativa se diseña, se mide y se escala para convertir la inversión en **retorno auditable**."
  - "ingeniería organizacional" en teal bold — reencuadre de categoría, escaneable
  - "retorno auditable" en oro bold — espeja el polo KPI DOCUMENTADO del diagrama-puente
- **Credencial:** "14 componentes · 70+ organizaciones" — 13px, separada por línea oro (evidence post-claim, no display marketing)
- **BE rationale synergy:** El mensaje de sinergia agrega porque instala la conclusión de qué producen las tres disciplinas JUNTAS ("ingeniería organizacional"), no solo qué son por separado. Sin él, el triad queda como inputs sin output demostrado.

**S3 Fundamento Intelectual — correcciones CSS (2026-06-04):**
- **Thesis paragraph:** `#fundamento .section-head { margin-bottom: 28px }` (de 56px) · contenedor `max-width: 960px; margin: auto` · `font-size: clamp(17px,1.6vw,20px)`
- **Bug animación íconos en refresh:** replaced `stroke-dashoffset: 100` inicial + transition por `stroke-dashoffset: 0` (visible por defecto) + `@keyframes discStrokeDraw` (from 100 → to 0). Causa raíz: el browser restaura scroll position ANTES de que el IntersectionObserver disparara, dejando los íconos permanentemente invisibles.

**S4 Las 3 Fases — fine-tuning BE completo (2026-06-04):**

**Label canónico:** "Los 3 niveles del Modelo ARIA" (no "fases")

**H2 canónico:** "El diagnóstico determina la / intervención. No al revés." — `<br>` forzado después de "la". Antítesis en dos líneas: primera instala el diferenciador, "No al revés." cierra el desplazamiento de hipótesis (mismo mecanismo BE que S2 thesis).

**Chapeau canónico:** "El Modelo ARIA no sigue una secuencia de pasos iguales para todos: el Diagnóstico determina qué componentes se activan en los niveles 2 y 3, en qué combinación y en qué orden — descartando los que no generan impacto en tu contexto y usando solo los recursos que tu caso específico requiere."

**Stepper subtexts canónicos:**
- 01 Diagnóstico: "79 reactivos · Línea base auditable" ("reactivos" = término psicométrico del instrumento, más preciso que "variables")
- 02 Solución: "Arquitectura a la medida" ("Arquitectura" activa diseño sistémico + autoridad; "a la medida" = señal bespoke)
- 03 Impacto: "Quick Wins documentados · ROI Auditado" (wins → se convierten en evidencia formal en Fase 3; "Auditado" > "Documentado" para CEO que presenta ante Junta)

**Rail-foot canónico:** "El método está probado; su aplicación se calibra con el diagnóstico — sin sobre-ejecución de recursos." (semicolon: rigor + personalización + argumento de eficiencia en una sola frase)

**Insight estructural — toolkit vs. metodología secuencial:**
ARIA NO es ADKAR ni similar. El diagnóstico de Fase 1 determina cuáles de los 7 aceleradores de Fase 2 se activan, en qué combinación y orden. No todos se usan en todos los casos. Este diferenciador debe aparecer en copy de esta página y landing pages futuras.

**Las dos métricas que se definen al inicio de Fase 2 (insight de César Lozano, canónico):**
1. Métrica de **comportamiento**: qué debe hacer el equipo de forma diferente para incorporar la IA en el flujo diario
2. Métrica de **KPI de negocio**: qué indicador financiero debe moverse y cuánto
Estas dos métricas se monitorizan sprint a sprint y alimentan el Reporte Ejecutivo de Fase 3. El Reporte es la CONSOLIDACIÓN de 17 semanas de evidencia — no una evaluación de último momento.

**Nombres de componentes corregidos (7 errores):**
| Nombre incorrecto (antes) | Nombre ARIA canónico |
|---|---|
| AI North Star (AINS) | AI Strategic Alignment Lab |
| AI Mindset Canvas (AIMC) | AI Performance Mindset Lab |
| AI Inspiration Board (AIIB) | AI Commitment Architecture |
| Agile Solution Design (ASD) | AI Capability Architecture |
| Impact Validation Matrix | AI ROI Validation Matrix |
| Talent Roadmap Strategy Map | AI Workforce Strategy Routes |
| Agency Activators | AI Execution Activators |

**Duraciones y entregables canónicos:**
| Nivel | Semanas | Entregable |
|---|---|---|
| Diagnóstico | 1–3 | Informe de Línea Base Auditable (LBA) — referencia para medición antes/después de Fase 3 |
| Solución | 4–10 | Sprint Log semanal con evidencia de movimiento en las dos métricas de transformación |
| Impacto | 11–17 | Reporte Ejecutivo de Retorno — consolidación de 17 semanas de evidencia, estructurada para Comité de Inversión y área financiera |

**Fix técnico — animación stepper (enhance4.js, afecta homepage y modelo-aria):**
- **Problema:** `IntersectionObserver` con `rootMargin: '-40% 0px -45% 0px'` (ventana 15% del viewport) no disparaba correctamente para los steps altos de `/modelo-aria`
- **Fix:** reemplazado por lógica scroll-based integrada en el bucle `rAF` existente (`onScrollFx`). Threshold: `window.innerHeight * 0.5`. El step activo = el último cuyo top cruzó el 50% del viewport. Funciona para cualquier altura de step.

**S7 Caso Ancla — componentes metodológicos activados:**
- Diagnóstico: AI Mindset Test (87 líderes) · AI Leadership Style (12 directores) · AI Culture Diagnostic (3 unidades de negocio)
- Solución: MATCH (6 sprints · 90 días) · AI North Star (alineación C-Suite) · Digital Team Leadership (LED)
- Impacto: Impact Validation Matrix (KPI ancla: persistencia de clientes) · AI Governance Canvas (gobierno post-intervención)

**S13 Perspectivas — autores asignados:**
- "Adopción" (última milla humana) → **César Lozano**
- "Gobierno del cambio" (champion sin autoridad) → **Ruth Jaramillo**
- "Evidencia" (número ROI vs. auditoría) → **César Lozano**

**CSS nuevo en `styles-modelo-aria.css`:**
- `.phase-dur` / `.phase-dur--gold` — pill de duración bajo el h3 de cada fase
- `.phase-dlv` / `.phase-dlv--gold` — chip de entregable bajo la lista de cada fase
- `.case__method` / `.case__method-grid` / `.case__method-list` — bloque metodológico en sección de caso
- `.badge--gold` — variante oro del badge (fondo `#fff8e8`, borde `var(--gold)`)
- `.leaders` override → `repeat(2, 1fr)` + `max-width: 760px` (2 fundadores, no 3)

### Fine-tuning Hero S1 — decisiones aprobadas (2026-06-03)

**Eyebrow:** "Modelo Propietario · Digital Change Advisors" (antes: "Metodología propietaria")

**H1 font-size:** override `.mra-hero--split h1 { font-size: clamp(30px,3.4vw,48px) }` — reduce de 62px base para layout split (texto largo en columna estrecha)

**Chapeau (versión final aprobada — outcome-first):**
> "14 componentes propietarios que construyen la evidencia de retorno auditable para tu Junta, fundados en Economía del Comportamiento, Neurociencias de la Adopción y Arquitectura de Sistemas Sociotécnicos. Validado en 70+ organizaciones en Latinoamérica."

**Imagen hero:** `img-mra-hero.jpg` (960×1200px, 200KB, grade teal 7%) — `<image-slot>` reemplazado por `<img loading="eager">`

**Hero credentials — 3 datos finales:** `14` Componentes · `120` Días · `70+` Empresas
- "17 Países" eliminado permanentemente
- "3 Niveles de intervención" probado y descartado
- Fix técnico crítico: `.hero__cred span` del CSS base interceptaba el `<span data-count>` dentro del `<b>`, forzándolo a 12.5px. Fix: `.mra-hero--split .hero__cred b span { font-size: inherit }`
- Escala final: `clamp(48px,5vw,68px)` teal · labels 13px carbon-70

**S3 Fundamento — disciplinas con nombres canónicos:**
- Antes: "Economía del comportamiento · Ciencia de la adopción · Gestión del cambio"
- Después: "Economía del Comportamiento · Neurociencias de la Adopción · Arquitectura de Sistemas Sociotécnicos"
- "Gestión del cambio" era término prohibido. "Ciencia de la adopción" era impreciso.

**Marco conceptual canónico de las 3 disciplinas:** documentado en memoria (`project_aria_disciplines.md`). Aplica a todo el sitio y landing pages futuras.

### Datos canónicos de esta página
- Stats del hero: `14` Componentes · `120` Días · `70+` Empresas — **3 datos finales**. "17 Países" eliminado permanentemente de todas las páginas (regla 2026-06-03).
- Caso ancla (S7): **$3.2M · 19%→67% · +13 puntos persistencia · payback 120 días** (caso real con NDA — mismo que `/nosotros`)
- **PROHIBIDO** usar caso novela (Adalid Puentes · $8.2M) en esta página

### Archivos de la página
- HTML: `modelo-aria.html`
- CSS: `styles.css` + `styles4.css` + `styles5.css` + `styles6.css` + `styles-modelo-aria.css`
- JS: `app.js` + `enhance4.js` + `enhance6.js` + `enhance-aria.js` + `enhance-v6.js`
- **`image-slot.js`** activo — hero photo resuelto (`img-mra-hero.jpg` 960×1200px). Pendiente: `mra-persp-1/2/3` (Perspectivas) antes del dominio final.

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
- [x] `/modelo-aria` — Fine-tuning BE completo (8 puntos · commit `4b4abe8`). Pendiente: image-slots → img reales antes del dominio final
- [x] `/returnai` — v6 implementada, brand compliance aplicado, routing canónico. Fine-tuning al final. **bridge usa 19% (real case) — verificar alineación con homepage (11%)**
- [x] `/nosotros` — Implementada (13 secciones). Archivos: `nosotros.html` + `styles-nosotros*.css` (×6) + `enhance-nosotros4.js`. Deuda técnica: fotos reales pendientes (image-slot activo), `og-nosotros.png` específica pendiente, JSON-LD `sameAs` (LinkedIn) pendiente. Fine-tuning BE (secciones Propósito + Principios) al final.
- [ ] `/casos`
- [ ] 5 páginas restantes

### Fase 4 — Infraestructura ✅ (GitHub repos configurados)
### Fase 5 — Lanzamiento

- [x] GitHub Pages activo: `https://dca-returnai.github.io/dca-website/`
- [ ] Dominio `www.digitalchangeadvisors.com` — conectar al finalizar toda la presencia web
