# Website DCA — Arquitectura y Estado

> Las reglas de marca, sistema visual, tono, skills y flujo de producción están en `../CLAUDE.md` (raíz del workspace). Este archivo contiene solo lo específico del website principal.

## ⚠️ Gate Obligatorio — Pre-audit ANTES de implementar (canónico 2026-06-05)

TODA implementación, ajuste fino o nueva sección — en este website y en las 11 landing pages del proyecto — debe pasar por auditoría de dos skills **ANTES** de escribir código o desplegar:

1. `/behavioral-economics-c-level` — valida que el mecanismo BE es correcto para la etapa del visitante
2. `/ui-ux-pro-max` — valida que el patrón de interacción, layout y motion son apropiados para C-Level

**Sin dictamen de ambas skills, no hay implementación.**

Incidente que motivó la regla: S2 /returnai scrollytelling de 260vh — el usuario debía hacer scroll durante 2.5× la altura del viewport sin que la página avanzara visualmente. Trampa UX de alta gravedad implementada y desplegada sin audit previo (2026-06-05).

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
| `/nosotros` | `nosotros.html` | DCA, fundadores, validación de escala, método | ✅ **Fine-tuning cerrado definitivo** — 9 secciones (2026-06-08) |
| `/academia` | `academia.html` | Digital Change Academy: certificaciones | ⏳ Pendiente |
| `/red-aria` | `red-aria.html` | Captación de nodos/socios por país | ⏳ Pendiente |
| `/libro` | `libro.html` | ReturnAI la novela, Amazon, extracto | ⏳ Pendiente |
| `/comunidad` | `comunidad.html` | LARIA: 240 miembros, Skool | ⏳ Pendiente |
| `/contacto` | `contacto.html` | Formulario mínimo, sin chatbots | ⏳ Pendiente |
| `/lectores-fundadores` | `lectores-fundadores/index.html` | Cohorte cerrada de 50 "Lectores Fundadores" ReturnAI — destino exclusivo de invitación nominal/LinkedIn/newsletter, sin nav | ✅ Implementada (2026-07-13) — pendiente `BREVO_FORM_ACTION` y `PREORDER_URL` antes de publicar |

## Decisiones Canónicas de `/lectores-fundadores` — página de cohorte cerrada (2026-07-13)

> Página nueva e independiente, **no enlazada desde el nav principal** — único destino de invitaciones nominales, posts de LinkedIn y newsletter para la cohorte "Lectores Fundadores" de la novela ReturnAI (lanzamiento 22 de septiembre de 2026). Pre-audit ejecutado: `/behavioral-economics-c-level` + `/ui-ux-pro-max`.

### Patrón de archivo
- HTML/CSS/JS autocontenido en un solo archivo (no usa el sistema de CSS/JS en cascada del website principal) — mismo patrón que `/novela-returnai`. Header, footer, botón primario y tarjetas con marco oro sobre teal claro reutilizados verbatim de esa página.
- `<meta name="robots" content="noindex, nofollow">` — deliberado. Por qué: una página de "cohorte cerrada de 50" indexable en Google deja de sentirse exclusiva; refuerza la escasez real validada en el audit BE.

### Etapa conductual y mecanismos (audit BE)
- Etapa: **Cierre** (registro de cupo limitado), con hook de **Diagnóstico** en el H1 de pérdida — el visitante llega frío a contenido de DCA aunque sea C-Level con contexto previo del tema.
- Escasez real, no ficticia: invitación nominal + cohorte de 50 + Apex verificable por compra en Amazon.
- "Modelo ARIA" se menciona ya en el Bloque 3 (contexto de cohorte), antes del párrafo 3 de la página — regla de anclaje cognitivo.
- El número "50" está justificado con una razón operativa real (capacidad de la sala del mastermind en vivo), no como cifra de marketing sin explicación.

### Patrón visual — Apex NO es una 5ª tarjeta
- El peldaño "Apex" (primeros 20 fundadores que acrediten compra en Amazon) va en una **banda horizontal aparte, debajo del grid de 4 tarjetas** — fondo carbón, marco oro completo (3px), una sola frase corrida, sin bullets ni checkmarks.
- Por qué: un 5º tile dentro del mismo grid de beneficios lee como tier de pricing SaaS — prohibido por brand book (referencia McKinsey/Bain, no estética de vendor de tecnología).

### Formulario y atribución — regla de negocio, no preferencia UX
- El submit del formulario **nunca** redirige al AI Return Test. Estado de éxito inline sin recargar página: "Revisa tu correo: tu dossier va en camino." El enlace al ART lo entrega solo el email automático de bienvenida de Brevo.
- Por qué: proteger la atribución de "fundador" en Brevo — si el ART se ofrece desde esta página, se pierde el registro segmentado de la cohorte.

### Corrección post-revisión (2026-07-13) — cifra apilada y disclosure de IP
- **Corregido:** el Bloque 3 mencionaba "el sistema de 14 componentes... validado en 70+ organizaciones" junto a "Modelo ARIA". Eliminado — quedó solo "...lo resuelve con el Modelo ARIA."
- Por qué (dos razones, ambas suficientes por sí solas):
  1. Apilaba cifra con el Bloque 5 ("70+ organizaciones" vs. "Adopción superior al 70%") — un C-Level escéptico lee dos cifras con el mismo número a pocos scrolls de distancia como la misma cifra reformulada, o como descuido. Viola la regla de "una sola cifra en tratamiento display por página" (ver CLAUDE.md raíz). Además "70+ organizaciones" es una cifra que en la estrategia de contenidos sigue pendiente de confirmar (conflicto con "+2.000 líderes intervenidos").
  2. El número exacto de componentes del Modelo ARIA ("14 componentes") es información de propiedad intelectual — no se divulga en copy libre de páginas públicas sin pasar por el guardián de IP del modelo, aunque la página sea `noindex`.
- **Regla derivada:** la única cifra de prueba social de toda la página vive en el Bloque 5 (razón para creer) — no repetirla ni parafrasearla en ningún otro bloque.

### Integración Brevo conectada — endpoint real + honeypot (2026-07-14)
- `BREVO_FORM_ACTION` ya no es placeholder: apunta al formulario nativo de Brevo (`sibforms.com/serve/...`) vinculado a la lista **FUNDADORES_RETURNAI**.
- `<form id="lf-form">` ahora incluye, justo antes del botón de envío: dos campos ocultos estándar de Brevo (`locale=es`, `html_type=simple`) y un honeypot anti-spam (`email_address_check`).
- **QA sigue pendiente antes del lanzamiento público:** el `fetch` usa `mode:'no-cors'` → la respuesta es opaca, así que un rechazo de Brevo (campo faltante, ID de lista, locale) igual mostraría el mensaje de éxito en pantalla (falso positivo). Falta hacer un envío de prueba real y confirmar en el panel de Brevo que el contacto entró a la lista — no basta con ver el mensaje de éxito en el navegador. Si falla, usar el snippet nativo de Brevo ya comentado en el `<script>` en vez del fetch directo.
- `PREORDER_URL` (misma sección del `<script>`) — sigue vacío hasta que abra la preorden en KDP (~20 de agosto de 2026). Al asignarse, aparece automáticamente un botón secundario "Reservar el ebook en Amazon →" en el héroe.

#### Patrón del honeypot — por qué está hecho así (no simplificar)
- **`type="text"`, no `type="hidden"`:** un honeypot con `type="hidden"` no engaña a los bots de spam más simples (algunos ya ignoran campos hidden por diseño) ni sirve como señal fuerte para el anti-spam de Brevo, que espera un campo de texto real que un humano nunca completaría. El campo debe parecer rellenable para el bot, no invisible a nivel de DOM.
- **Ocultamiento por posición fuera de viewport (`position:absolute; left:-9999px`), nunca `display:none` ni `visibility:hidden`:** varios bots de scraping detectan y saltan campos con `display:none`/`visibility:hidden` precisamente porque es la técnica de honeypot más común y ya está en sus listas de evasión. Sacarlo del viewport por posición es menos detectable y es la misma técnica ya validada en esta página para `.skip-link` — reutilización intencional, no casualidad.
- **`tabindex="-1"` + `aria-hidden="true"` + `autocomplete="off"`:** sin esto, un usuario real con teclado o lector de pantalla podría llegar al campo por Tab y completarlo por error, lo que dispararía un falso positivo de spam y bloquearía su propio registro. El autocomplete apagado evita que el navegador lo rellene solo.
- **El valor debe permanecer SIEMPRE vacío** — ni el usuario, ni el JS del formulario, ni el autocompletado deben escribirle nada. Si en un futuro fine-tuning alguien "limpia" este campo pensando que es código muerto porque nunca se lee su valor en el JS del cliente, se rompe el anti-spam del lado de Brevo sin que se note en el navegador.

### Corrección de color — terracota reservado exclusivamente para advertencias (2026-07-14)
- **Corregido:** la línea de escasez del Bloque 6 ("La cohorte se cierra en 50...") usaba `var(--dca-terracotta)` para destacar el texto. Cambiado a `var(--dca-teal)`.
- Por qué: el brand book raíz reserva Terracota para "Alertas, badges de severidad" — no para énfasis general de copy. Aunque la reutilización era técnicamente legítima (mismo token que `/novela-returnai`), el uso semántico era incorrecto: la línea de escasez es un mensaje de urgencia comercial, no una advertencia de error/severidad.
- **Teal elegido sobre oro** por dos razones: (1) mejor contraste sobre el fondo platino de esa sección (~3.73:1 teal vs. ~3.30:1 oro); (2) el oro de esta página está reservado por spec exclusivamente para el CTA primario y la franja de estado — usarlo también aquí habría violado esa regla ya establecida.
- La variable `--dca-terracotta` se conserva declarada en `:root` (parte de la paleta base reutilizada) para casos reales de advertencia (ej. error de validación de formulario) — hoy sin uso activo en esta página.

### Corrección de copy — cierre no debe introducir productos sin enlace (2026-07-14)
- **Corregido:** el Bloque 7 (cierre) decía "La novela es la entrada; el AI Return Assessment es el diagnóstico profundo de tu organización." Cambiado a: "Los Lectores Fundadores ya lo habrán discutido con el autor y ya lo tendrán en sus manos."
- Por qué: el AI Return Assessment es un producto pago de la escalera de valor ($5,000, hasta 20 líderes) que esta página nunca introdujo ni enlazó. Mencionarlo justo después del único CTA de la página (registro), sin contexto ni ruta de acción, no ancla nada — solo compite con la decisión de conversión en el peor momento posible (justo al cierre). Diagnóstico BE: la etapa de Cierre necesita reforzar escasez/exclusividad y compromiso/consistencia, no introducir una oferta nueva de otra etapa (Solución) sin sus prerrequisitos (autoridad, enlace, explicación).
- **Regla derivada:** si un producto de la escalera de valor no tiene su propio bloque con explicación y CTA (como sí lo tiene el AI Return Test en `/novela-returnai`), no se nombra de pasada en ningún punto de esta página — ni en el cierre ni en ningún otro bloque. La frase de cierre solo puede reforzar hechos ya establecidos en la propia página (fecha de lanzamiento, exclusividad de fundador) — no introducir información nueva sin ruta de acción.

### Verificado al construir
- No existe ningún bloque de "Lectores Fundadores" embebido en `/novela-returnai` — nada que retirar de esa página.
- El CTA del libro en el homepage sigue apuntando a `/novela-returnai`, sin cruce con esta página.
- Esta página no enlaza al AI Return Test en ningún punto.
- Rutas relativas `../assets/og-returnai.png` y `../images/favicon.png` verificadas contra archivos reales — resuelven correctamente.

## Enrutamiento de CTAs y Enlaces — CANÓNICO (2026-06-29)

Todos los botones y enlaces del website + artículos apuntan a `https://www.digitalchangeadvisors.com` (URLs limpias, **siempre con `www`**). Cero enlaces a staging `dca-returnai.github.io`.

- **CTA "AI Return Test" → SIEMPRE `/art`** (la landing ART, `website/art/index.html`), con UTMs intactos (`?utm_source=<página>&utm_medium=website&utm_campaign=ai-return-test`). Unifica el destino: antes homepage y returnai saltaban directo a Tally — corregido.
- **Tally directo (`tally.so/r/Np6e5W`) → SOLO en los CTAs internos de la landing `/art`.** Ninguna otra página enlaza a Tally. (Excepción no-CTA: `tally.so/help/privacy-policy` como referencia legal.)
- **TidyCal (`tidycal.com/pwgdigital/returnai`)** se conserva como endpoint de agendamiento (equivalente funcional a Tally).
- **Footer — destinos de páginas aún no desplegadas:** Academia → `https://www.digitalchangeacademy.org` · Comunidad LARIA → `https://www.skool.com/comunidad-lada-2386/` · Libro ReturnAI → `/novela-returnai` · **Red ARIA → texto sin enlace** (hasta tener página).
- Fragmentos cross-page preservados como URL absoluta + ancla (`/#libro`, `/blog#newsletter-pulse`). Anclas de misma página quedan relativas (`#fases`).

## Repositorios de Despliegue

- **Dev (monorepo):** `DCA-ReturnAI/dca-presencia-digital-dev` — carpeta `website/`
- **Producción:** `DCA-ReturnAI/dca-website` — GitHub Pages activo
- **URL staging:** `https://dca-returnai.github.io/dca-website/`
- **Deploy CANÓNICO (MacBook o iMac):** `./deploy.sh website` (o `both`) desde la raíz del monorepo. **No usar `git subtree push` directo** — `deploy.sh` aborta si falta `website/CNAME` y verifica el dominio post-deploy. Ver "Hardening de Deploy y Dominio" en el CLAUDE.md raíz.
- **⚠️ Nota de sincronización:** Si la producción tiene commits directos del iMac, usar `--force` tras integrar los cambios remotos en el monorepo.
- **🌐 Dominio — CANÓNICO (2026-06-30):** El dominio es `digitalchangeadvisors.com` (apex), versionado en **`website/CNAME`**. `www` redirige al apex vía Cloudflare. **Nunca borrar `website/CNAME`.** Causa raíz de un incidente: el deploy por `subtree split + push --force` reemplaza `main` con el contenido de `website/`; si el `CNAME` solo existía en producción (creado por GitHub al fijar el dominio) y no en el código fuente, **el force-push lo borra y desconecta el dominio** (apex → 404, GitHub vacía el ajuste de Pages). Solución: el CNAME vive en el código fuente → sobrevive a todo redeploy. Si el dominio se cae, verificar con `GET /repos/DCA-ReturnAI/dca-website/pages` (campo `cname`) y, si está vacío, re-fijar con `PUT .../pages -d '{"cname":"digitalchangeadvisors.com"}'`.

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

## Sistema Newsletter — AI Return Pulse (canónico 2026-06-19)

### Presencia del formulario
- **`blog.html`** — sección `#newsletter-pulse` completa (con proof points, badge, lista de beneficios)
- **`article-paper00.html` … `article-paper09.html`** — formulario compacto `.art-pulse` inline, entre `.art-author-section` y `.art-cta`
- **`index.html` (homepage)** — ❌ NO. Decisión BE: diluye el CTA primario (AI Return Test). Prohibido añadir sin revisión estratégica explícita.

### Stack técnico
- **Endpoint GAS (cuenta GW):** `https://script.google.com/macros/s/AKfycbwZaU3UD_HeREVZ5s48paNfxKym7_CjUQaYeZnVeKtqGa3ucAuOIs2nzGbJsIu42vEn/exec`
- **Spreadsheet destino:** "AI Return Pulse - Suscriptores" · Drive `ceo@digitalchangeadvisors.com` · ID `1tR7UVxfeSRWPVUeuHT0JxKzqYW_PdA2q5Z2fiwZntVw`
- **Email de bienvenida:** vía Brevo (API key en el GAS), sale desde `ceo@digitalchangeadvisors.com`
- **Payload:** `{ email, source }` — source dinámico por `window.location.pathname` en artículos (`article-paper00`, `article-paper01`…), `'blog'` en `blog.html`
- **CSS artículos:** `.art-pulse` y clases derivadas en `styles-article.css` (al final del archivo)
- **Fix crítico:** `.art-pulse__success[hidden]` y `.art-pulse__error[hidden]` requieren `display:none` explícito — el `display:flex` del selector de clase sobreescribe el `[hidden]` del browser si no se añade este override

### Copy aprobado (artículos) — BE Opción A (2026-06-19)
- **Descripción bajo el título:** *"El análisis que no está en el artículo — cada dos semanas, antes de tu reunión de Junta."*
- **Mecanismo:** Escasez real (diferencia newsletter vs. blog público) + Consistencia post-lectura + Ancla situacional de Junta
- **Etapa BE:** Solución — el visitante acaba de terminar un artículo completo, alta receptividad

### Jerarquía en artículos (orden invariante)
```
[Contenido del artículo]
[Autor]
[AI Return Pulse — compacto]   ← micro-conversión escalón intermedio
[AI Return Test — CTA primario]
[Artículos relacionados]
```

## Decisiones Técnicas

- Imágenes en `assets/` (fotos, blog, líderes, hero) + `favicon.png` y `og-returnai.png`
- Logo v2.2 integrado como SVG inline en nav y footer (no archivo externo)
- `image-slot.js` solo para staging/autoría — reemplazar por `<img>` reales antes del dominio final

### ⚡ Rendimiento de Imágenes — CANÓNICO (2026-06-30)

**Regla: NINGUNA imagen se publica en PNG de foto.** Toda fotografía va en JPG optimizado (+ WebP donde haya `<picture>`), redimensionada a su ancho real de despliegue. Un PNG de foto de varios MB deja el header/hero en blanco mientras carga — inaceptable para C-Level.

*Incidente que motivó la regla (2026-06-30):* el hero del homepage era un PNG de **7.4 MB** → el C-Level veía el header en blanco los primeros segundos. Barrido completo del website: **>50 MB → <2 MB** de imágenes.

**Cómo optimizar (herramientas locales, sin Homebrew):**
- **JPG:** `sips --resampleWidth <ancho> in.png --out out.jpg -s format jpeg -s formatOptions <72-80>`
- **WebP:** `cwebp -q <80-82> -resize <ancho> 0 in.png -o out.webp` (binario libwebp descargable de `downloads.webmproject.org`)
- Anchos de referencia: hero full-bleed **1920** · tarjetas/miniaturas **800** · retratos **900** · portada libro **760**

**Estado actual (2026-06-30) — TODO el website en `<picture>` + WebP:**
- **Todas las páginas** (`index.html`, `returnai`, `nosotros`, `blog`, `article-paper00–09`): los `<image-slot>` → `<picture>` con **WebP + fallback JPG** reales (0 `<image-slot>` en producción). Heroes con `fetchpriority="high"`; resto `loading="lazy"` + `decoding="async"`; `width`/`height` para cero CLS.
- **Conversión CSS no destructiva:** los selectores `image-slot` pasaron a `:is(image-slot,img)` (matchea ambos) + regla `img.opt-img{display:block;width:100%;object-fit:cover}`. Así ningún estilo/animación de reveal/hover se rompió al cambiar de elemento.
- `image-slot.js` sigue cargado (por compatibilidad) pero ya no se usa en producción; se puede retirar de los `<head>` en una limpieza futura.
- **Másters PNG** (22 archivos, ~40 MB) movidos a `_image-masters/website/` (raíz del monorepo, **fuera** del subtree de deploy). `website/assets/` bajó a ~8.7 MB. Los PNG que SÍ se usan por `content=`/`href=` (og-returnai, favicon) o aún referenciados (dca-simbolo, field-study-cover) se conservaron.
- Es hardening técnico: no cambia diseño ni mecanismo BE/UX (misma imagen, misma posición, mismo recorte).

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

### Panel "Leer Preludio" (novela ReturnAI) — canónico 2026-07-10
- Botón: **"Leer Preludio"** (antes "Leer un extracto" — retirado, no reintroducir). Segundo botón: **"Ver más detalles"** → `https://www.digitalchangeadvisors.com/novela-returnai` (antes "Ver en Amazon" — retirado).
- Patrón UI: panel lateral derecho deslizante (`#preludio-panel`, drawer oscuro `var(--carbon)`) — **no modal centrado**. Es el mismo componente ya usado en `website/novela-returnai/index.html` para "Leer el primer capítulo" (`.preludio-panel`, `.preludio-panel__drawer`, etc.) — mismo sistema de clases, reutilizado verbatim.
- **Contenido:** el Preludio completo de la novela ("El momento en que todo cambió" — Adalid Puentes recibe el ultimátum de 120 días de Ricardo Mendoza), no un resumen/teaser. Texto fuente entregado por el usuario 2026-07-10 — no parafrasear ni resumir si se vuelve a tocar esta sección.
- Estructura: `.preludio-panel__header` (tag "Preludio" + h2 título + fecha) → `.preludio-panel__body` con párrafos, `.preludio-panel__quote` (diálogos, borde oro) y `.preludio-panel__emphasis` (líneas dramáticas cortas, bold) intercalados, `.preludio-panel__list` (los 3 objetivos de los 120 días), cierre en `.preludio-panel__question` ("Esta es su historia. / Podría ser la tuya.")
- JS en `app.js` (apertura/cierre, focus trap, Escape, click en backdrop), CSS en `styles.css` (sección "Panel lateral — Extracto del libro")
- **Incidente que motivó el rediseño (2026-07-10):** el modal centrado original nunca tuvo JS de apertura/cierre en ningún commit — el botón no hacía nada desde que se construyó. Se reemplazó por este panel lateral, que ya estaba validado y en producción en `/novela-returnai`.

> **Distinción con el Caso Ancla real:** El caso de la novela (Adalid Puentes, $8.2M/11%→70%) es diferente del caso ancla documentado con cliente real (Gestora de inversiones, $3.2M → 19%→67%, +13 puntos). El homepage usa el caso de la novela. El caso real se usa en copy de /returnai, /nosotros y argumentación con dato de negocio. No existe `/casos` como página independiente.

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
- **Footer descriptor:** "De la adopción de la IA al Retorno que sí importa." — nunca "Convertimos…" (frase de cierre canónica única, 2026-06-30)
- **Footer tira de ciudades:** ELIMINADA. Nunca reintroducir Santiago, Madrid ni Miami.
- **CTA final nota:** "Sin compromiso · 25 minutos · Tu reporte es confidencial" (no "Sin costo")
- **CTA cards:** 01 IUG · 02 Arquetipo organizacional · 03 Mapa de calor (incluye "3 capacidades instaladas") · 04 Costo financiero (usa "destrucción de valor" — loss aversion CFO/CEO)
- **Sección Industrias:** tira horizontal (`.industries-strip`) — no grid con links
- **Diferenciación:** componente `versus2` con arco SVG del logo — no tabla `versus` simple

## Decisiones Canónicas de `/nosotros` — **FINE-TUNING TOTAL CERRADO** (2026-06-08)

> Pre-audit ejecutado: `/behavioral-economics-c-level` + `/ui-ux-pro-max`. Etapa dictaminada: Validación. 10 secciones (S2 Propósito fusionada en S1). S1–S10 fine-tuning cerrados.

### Etapa conductual y mecanismos
- **Etapa:** Validación — visitante evalúa si DCA es firma real, no activa el problema (ya lo sabe)
- **Mecanismo principal:** Prueba social positiva + Reducción de fricción
- **NO repetir:** aversión a pérdida del homepage — genera reactance en esta etapa
- **CTA único:** `AI Return Test →` (→ `index.html#test`) — nunca un segundo botón de conversión
- **Frame CTA:** posición competitiva relativa ("tu organización dentro del mapa de 70+ empresas"), nunca "sin costo"

### Estructura — 10 secciones (canónica 2026-06-08)
1. **S1** `#nosotros` — Hero + Ficha + Propósito fusionados · un solo bloque blanco continuo · **fine-tuning cerrado**
2. **S2** `#la-firma` — La firma (bg-platinum) · **fine-tuning cerrado**
3. (sin id) — Banda editorial fullbleed · `src="assets/nosotros-banda.png"` ✅ · **fine-tuning cerrado**
4. `#liderazgo` — César Lozano · `src="assets/img-leader-1.png"` conectada ✅ · **fine-tuning cerrado**
5. (bg-platinum) — Ruth Jaramillo · `src="assets/img-leader-2.png"` conectada ✅ · espejada · **fine-tuning cerrado**
6. `#metodo` — Modelo ARIA grid estático 3 fases · **fine-tuning cerrado**
7. `#principios` — Cuatro reglas de operación · **fine-tuning cerrado**
8. (bg-teal) — Validación de escala · count-up `70+/57+/17/14` · **fine-tuning cerrado**
9. `#evidencia` — Evidencia de campo · $3.2M · count-up 19→67 · +13pts · **fine-tuning cerrado**
10. `#cta-final` — Diagnóstico ejecutivo · `AI Return Test →` · **fine-tuning cerrado**

**Secciones eliminadas/fusionadas:**
- ~~S3 Puente animado~~ — duplicaba el homepage, incompatible con etapa Validación
- ~~S11 Perspectiva intelectual~~ — repetía mecanismo Diagnóstico ya activado en homepage
- ~~S2 Propósito independiente~~ — fusionada dentro del hero (mismo fondo blanco, mismo discurso)

### S1 — Hero + Propósito (canónico 2026-06-08)
- H1: 2 líneas — "Construimos la evidencia de que / tu inversión en IA tiene retorno." · font `clamp(30px,3.5vw,48px)`
- Ficha: `align-items: center` · Operación: "Latinoamérica · España" / sub "Colombia · Panamá · México"
- Chapeau: "...cierra esa brecha con la arquitectura de rentabilización que convierte la inversión en IA en retorno auditable — documentado en 120 días."
- Propósito fusionado DENTRO del `<header>`, después del `hero__layout` · `margin-top:64px` sin border interno
- `purpose__statement`: 3 líneas pirámide (65/60/27 chars) · `clamp(20px,1.8vw,24px)` · `max-width:940px`
- Sin `purpose__rule`, sin scrollcue

### S2 — La Firma (canónico 2026-06-08)
- **p-pyramid**: `<div class="p-pyramid">` (no `<p>`) + `.p-pyramid { display:flex; flex-direction:column }` + `.p-pyramid .line { white-space:nowrap; font-size:15px }` — garantiza 3 líneas exactas. En mobile `<768px`: `white-space:normal`. ⚠️ Regla: NUNCA usar `<p>` para pirámide invertida dentro de contenedor de ancho fijo.
- **firma-mark**: `justify-content: flex-start` — símbolo anclado al borde izquierdo de su columna, más cercano al texto
- **p-pyramid copy**: L1 "DCA nació de una constatación de campo: ninguna firma estaba resolviendo" / L2 "la brecha entre las inversiones en IA y el retorno documentable." / L3 "70+ organizaciones intervenidas. Sin excepción."
- **not-firm**: reordenado (gestión del cambio primero) · Marcellus italic + borde oro
- **firm-affirm**: "Somos la firma que construye la evidencia. Eso es todo." · teal 600
- **ReturnAI P**: sujeto de la frase · "metodología propietaria" · "retorno auditable: documentado en el P&L en 120 días"

### S3 — Banda editorial (canónico 2026-06-08)
- Imagen: `assets/nosotros-banda.png` (1920×900px, grade frío teal-carbón, 3 ejecutivos latinoamericanos, mesa oscura, skyline ciudad)
- `image-slot #img-firma-banda` conectado con `src`
- Caption: "Acompañamos a comités ejecutivos a convertir la inversión en IA en retorno auditable."

### S4 — César Lozano (canónico 2026-06-08)
- **Quote canónica**: «Las decisiones de inversión en IA y la pregunta por su retorno ocurren en la misma sala — con 120 días de diferencia. Lo vimos repetirse en 70 organizaciones: siempre el mismo patrón. Un patrón se puede romper. El Modelo ARIA lo logra.»
  - "Lo vimos" = colectivo (César + Ruth) · sin arrogancia unipersonal
  - "El Modelo ARIA lo logra." = sujeto propietario + verbo activo · no "es la solución"
- **Prose canónica** (3 párrafos, sin redundancia con quote):
  - P1: "Con más de 30 años como consultor corporativo, César desarrolló una tesis que ningún vendor de IA quiere escuchar: el problema del retorno no es tecnológico. Es organizacional — y tiene solución si se interviene correctamente."
  - P2: "El Modelo ARIA es esa intervención: 14 componentes que no prometen transformación, sino evidencia de retorno medible, certificada en los KPIs que la organización definió antes de comenzar."
  - P3: "Su trabajo no es convencer a los equipos de que la IA es el futuro. Es construir la condición para que la inversión ya hecha demuestre su retorno ante la Junta — en 120 días."
- **Cred-list canónica**:
  - Rol: "Fundador y CEO de Digital Change Advisors"
  - Trayectoria: "70+ intervenciones organizacionales en USA y Latinoamérica"
  - Autoría: "Creador del *Modelo ARIA* — 14 componentes propietarios"
  - Publicaciones: "+10 obras de liderazgo y desarrollo empresarial. Autor de la novela «ReturnAI»" (una sola línea, sin `.pub` spans)

### S5 — Ruth Jaramillo (canónico 2026-06-08)
- **Quote canónica** (Opción A — paper08, voz de campo):
  «En veinte años al frente de operaciones empresariales nunca vi una tecnología que generara retorno sin un líder que creara las condiciones para que su equipo la usara de forma distinta. La IA no es la excepción — es el caso más extremo de esa regla.»
  - "Nunca vi" = observación de campo, no declaración teórica · sin arrogancia
  - Complementa la quote de César: él habla del patrón sistémico, ella del comportamiento de liderazgo
- **Prose canónica** (3 párrafos):
  - P1: "Su especialidad es la intersección que menos firmas practican: neurociencias de la adopción aplicadas a cómo la IA se incorpora al flujo diario de trabajo. Cuando un equipo certificado deja de usarla, no es un desafío de gestión — es un desafío de arquitectura cognitiva. Y esa distinción define si el retorno aparece o no en el P&L."
  - P2: "Dentro del Modelo ARIA, diseñó los tres instrumentos diagnósticos que convierten el comportamiento humano en variable medible e intervenible: el AIMT, el AILS y el AICD — 79 reactivos que traducen lo que habitualmente es percepción subjetiva en datos que la dirección puede gestionar y auditar ante la Junta."
  - P3: "Autora de «Sembrando Semillas de Vida» y co-autora de «Mentalidad Digital» — el libro que documenta cómo las neurociencias aplicadas al entorno corporativo determinan el retorno de la inversión en IA."
- **Cred-list canónica**:
  - Formación: "Ingeniera Industrial · MBA EAFIT"
  - Certificación: "Neuro Coach Profesional — Neuroscience and Coaching Institute (USA)"
  - Experiencia: "20+ años como ejecutiva empresarial"
  - Publicaciones: «Sembrando Semillas de Vida» / «Mentalidad Digital» (solo títulos en `.pub` spans, sin descriptores)
- **cred-list CSS** (ambas tarjetas): `.cred-list li { padding: 11px 0 9px 16px }` — reducido a la mitad. Override en `styles-nosotros7.css`.

### S6 — Modelo ARIA (canónico 2026-06-08)
- **Estructura:** grid estático `.metodo-grid` 3 columnas — NO el stepper aria2 interactivo (show/hide)
- **Razón:** contenido de apoyo (1 oración por fase); la interacción show/hide no aporta valor con tan poco contenido
- **Fases:** Diagnóstico / Solución / Impacto — nombres canónicos del homepage. **NUNCA** Assessment/Intervención/Atestación
- **Card 01 Diagnóstico:** "AIMT, AILS y AICD — 79 reactivos — establecen el AI Human Gap: las creencias, el liderazgo y la cultura que frenan el retorno de la IA en tu organización."
- **Card 02 Solución:** "Seis aceleradores propietarios intervienen los obstáculos identificados y conectan las herramientas de IA con los KPIs del negocio en el flujo diario de trabajo."
- **Card 03 Impacto:** "Cinco instrumentos evidencian el retorno en el P&L, instalan la gobernanza y transfieren el método como capacidad interna auditable."
- **Footer `.method-foot`:** "Cada componente es un instrumento propietario — no son una solución improvisada. **+57 consultores certificados DCA** los aplican con el mismo estándar en toda Latinoamérica: el cuerpo de conocimiento que convierte el método en capacidad replicable." + `btn--secondary` → `modelo-aria.html`
- **H2 font:** `clamp(22px, 2vw, 28px)` — sección de apoyo, no puede competir con H1 hero
- **CSS:** `.metodo-grid { display:grid; grid-template-columns:repeat(3,1fr); gap:24px; margin-top:32px }` + `.metodo-card` (border 1px, border-radius 12px, padding 32px 28px) + spring hover `translateY(-4px)` cubic-bezier(0.34,1.56,0.64,1)
- **Responsive:** `<1024px` → `grid-template-columns:1fr`

### S7 — Principios (canónico 2026-06-08)
- **H2:** "Cuatro reglas de operación que hacen la garantía de retorno firmable."
- **Chapeau:** "Sin ellas, un resultado de 120 días es una promesa. Con ellas, es un compromiso que se puede firmar antes de comenzar."
- **BE:** eliminado framing de negación ("No son valores de afiche") — activaba imagen negativa antes de corregirla. Reemplazado por contraste directo Sin/Con que opera con el mismo mecanismo sin paso negativo.
- **"firmar"** (no "rubricar") — lenguaje ejecutivo directo C-Level

### S8 — Validación de escala (canónico 2026-06-08)
- **Stats:** `70+` Empresas intervenidas · `57+` Consultores certificados DCA · `17` Países · `14` Componentes
- **Stat 17:** sublabel "PAÍSES · COMUNIDAD LARIA" — nunca solo "17 Países" sin este sublabel
- **Stat 14:** label "COMPONENTES PROPIETARIOS"
- **bg-teal** fondo teal sólido, count-up animado

### S9 — Evidencia de campo (canónico 2026-06-08)
- **Fix:** "+13 puntos de persistencia de clientes en 120 días." (no "Trece puntos de incremento en persistencia")
- **Por qué:** "19%→67%" son datos de adopción; "+13 puntos" es una métrica de negocio separada. La redacción anterior parecía implicar 67-19=48, no 13. El framing correcto lo atribuye explícitamente al indicador de negocio.
- **Texto canónico:** "El impacto en el negocio: +13 puntos de persistencia de clientes en 120 días. Retorno documentado en el P&L al día 120."

### S10 — CTA final (canónico 2026-06-08)
- **Nota:** "25 minutos · Aplicado por un socio · Tu diagnóstico es confidencial"
- **Frame:** posición competitiva relativa ("ubica a tu organización dentro del mapa de 70+ empresas") — apropiado para etapa Validación

### CSS canónico en `styles-nosotros7.css` (esta sesión)
- `.founder__body h2 { font-size: clamp(24px, 2.4vw, 32px) }` — nombres fundadores: equilibrio visual
- `#metodo .section-head h2 { font-size: clamp(22px, 2vw, 28px) }` — H2 sección de apoyo
- `.cred-list li { padding: 11px 0 9px 16px }` — espaciado reducido a la mitad
- `.metodo-grid`, `.metodo-card`, `.metodo-card__n`, `.metodo-card h3`, `.metodo-card p` — grid estático 3 fases

### Archivos de la página
- HTML: `nosotros.html`
- CSS: `styles-nosotros.css` → `styles-nosotros7.css` (7 archivos)
- JS específico: `enhance-nosotros4.js` (wayfinding dot-nav)
- JS sistema: `app.js` + `enhance4.js` + `enhance6.js`

### Datos canónicos de la página
- Stats display (S8, una vez): `70+` Empresas · `57+` Consultores · `17` Países · `14` Componentes
- Label del stat 17: **"Países · Comunidad LARIA"** — nunca solo "Países"
- Caso ancla (S9): **$3.2M · 19%→67% · +13 puntos · payback 120 días** (caso real, NDA)
- **PROHIBIDO** mezclar con caso novela (Adalid Puentes · $891K)

### Reglas canónicas — "17 países"
- **NUNCA** como cobertura de firma en ninguna sección
- Solo en stat S8 con sublabel "Comunidad LARIA"
- Operación real: **Latinoamérica · España** / sub **Colombia · Panamá · México**

### Partnerships
- No existe sección — sin alianzas oficiales activas en el lanzamiento
- CSS `.noso-partners` en `styles-nosotros7.css` · reactivar entre S9 y S10 cuando existan alianzas reales
- **NUNCA** logos placeholder de Microsoft/Anthropic/AWS sin acuerdo formal

### Comunidad LARIA
- NO como sección dedicada · LARIA = footer + stat S8 + `/comunidad` (no desplegar aún)

### CTA canónico
- Botón: `AI Return Test →` (teal, Montserrat 600)
- Nota: *"25 minutos · Sin compromiso · Tu diagnóstico es confidencial"*

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
- Footer canónico: descriptor "De la adopción de la IA al Retorno que sí importa." · sin tira de ciudades · 4 columnas ✅
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
  - Hero (2026-06-30, gate aprobado): foto ensanchada a `#top .hero-split { grid-template-columns: 1.18fr 0.82fr; gap: 56px; align-items: start }` — alineada arriba (a la altura del H1), scoped a returnai (no afecta `.hero-split` de modelo-aria). Imagen del hero: `<picture>` WebP+JPG.
- [~] `/nosotros` — **FINE-TUNING EN CURSO** (2026-06-08). 10 secciones. S1 cerrado: H1 2L, ficha, propósito integrado, pirámide 3L. S2 cerrado: p-pyramid `div+nowrap`, firma-mark `flex-start`, copy BE. S3 cerrado: banda editorial `nosotros-banda.png`. S4 cerrado: quote canónica "Lo vimos/Modelo ARIA lo logra" + prose 3P BE sin redundancias. S5–S10 pendientes.
- [ ] `/casos`
- [ ] 5 páginas restantes
- [ ] Landing pages (siguiente fase — 11 landings)

### Fase 4 — Infraestructura ✅ (GitHub repos configurados)
### Fase 5 — Lanzamiento

- [x] GitHub Pages activo: `https://dca-returnai.github.io/dca-website/`
- [ ] Dominio `www.digitalchangeadvisors.com` — conectar al finalizar toda la presencia web
