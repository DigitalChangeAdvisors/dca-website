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
| `/contacto` | `contacto/index.html` | AI Return Test como vía preferente; correo + agenda directa; ubicación y constitución legal | ✅ Implementada (2026-08-04) |
| `/fundadores` | `fundadores/index.html` | Cohorte cerrada de 50 "Lectores Fundadores" ReturnAI — destino exclusivo de invitación nominal/LinkedIn/newsletter, sin nav | ✅ Implementada (2026-07-13) — pendiente `BREVO_FORM_ACTION` y `PREORDER_URL` antes de publicar |
| `/novela-returnai` | `novela-returnai/index.html` | Landing pública del libro ReturnAI — héroe, caso Adalid, capítulo 1, AI Return Test | ✅ En producción — CTAs de compra reparados (2026-07-14), libro aún no a la venta |
| `/arquetipos` | `arquetipos/index.html` | Página madre de los 7 arquetipos de rentabilización de la IA — marco de diagnóstico, `DefinedTermSet` JSON-LD, CTA doble AI Return Test / AI Return Assessment | ✅ Implementada y desplegada (2026-08-05) — ver "Decisiones Canónicas de `/arquetipos`" abajo |

## Infraestructura GEO (2026-07-22)

Refuerzo técnico para que los motores generativos (ClaudeBot, GPTBot, Google-Extended, PerplexityBot) puedan rastrear, indexar y citar el sitio. Cambios puramente técnicos/invisibles — ninguno pasó por el gate de BE/UI-UX porque ninguno toca copy ni patrón de interacción visible, excepto donde se anota lo contrario.

* **Cloudflare:** el toggle "robots.txt gestionado" (Security Settings → Bot traffic) generaba automáticamente `Disallow: /` para ClaudeBot, GPTBot, Google-Extended, Applebot-Extended, Amazonbot y meta-externalagent — sin opción granular por bot. Se apagó por completo. Los bots que sí se quieren seguir bloqueando (Amazonbot, Bytespider, CCBot, meta-externalagent, Applebot-Extended) se controlan aparte en **AI Crawl Control** (Security → tabla de rastreadores, columna "Bloquear rastreador"), que es el mecanismo de bloqueo real y forzado — el robots.txt es solo una petición voluntaria que los bots serios respetan.
* **`website/robots.txt`** (nuevo): `Allow: /` explícito + referencia al sitemap — respaldo permanente en el propio origen, independiente de que Cloudflare reactive el toggle.
* **`website/sitemap.xml`** (nuevo, 2026-07-22): 17 páginas indexables en su versión original. Excluía deliberadamente `/fundadores` y `/privacy-policy` (ambas `noindex`) y las landings ABM por arquetipo (`amenaza`, `ara`, `barco`, `feudos`, `sindrome` — comparten título, riesgo de contenido duplicado) y `sprint-roadmap-01-baip`/`centro-baip` (no son contenido de cara al cliente). `lastmod` de cada entrada usa la fecha real de última modificación del archivo — nunca fabricar una fecha uniforme. **Corrección (2026-08-05):** ese listado original agrupaba `/ara` con las landings ABM por error de conteo (y le faltaban `teatro`, `tormenta`, `trampa`, publicadas después). Estado real y vigente: 7 landings ABM (`amenaza`, `barco`, `feudos`, `sindrome`, `teatro`, `tormenta`, `trampa`) fuera del sitemap con `noindex, follow`; `/ara` es producto propio (AI Return Assessment, L2 de la escalera ReturnAI) y sí está en el sitemap desde esa fecha. Detalle en "Decisiones Canónicas de `/arquetipos`" más abajo.
* **`website/llms.txt`** (nuevo): resumen del canon de la firma para agentes de IA, por sección temática (canon, instrumentos, obra editorial, perspectivas, vocabulario propietario).
* **`modelo-aria.html`:** `<link rel="canonical">` (no existía); JSON-LD `FAQPage` (marca la sección de preguntas frecuentes ya existente) + `DefinedTerm` para "Modelo ARIA"; un `<h2>` con la pregunta literal "¿Qué es el Modelo ARIA?" — visualmente oculto (clip técnico estándar, no `display:none`) para no tocar el H1 de conversión existente; fecha de actualización visible en el footer (junto al copyright).
* **`novela-returnai/index.html`:** JSON-LD `Book`.
* **`nosotros.html`:** `sameAs` (LinkedIn) agregado al schema `Person` existente de César Lozano; corregido de paso un término vetado que estaba en ese mismo bloque (`"Gestión del cambio organizacional"` → `"Arquitectura de Sistemas Sociotécnicos"`, tabla de términos vetados del CLAUDE.md raíz); línea de desambiguación del homónimo agregada al bio visible (`<p class="founder__credit">`, mismo patrón ya usado para los créditos de foto — **sí pasó por aprobación explícita del usuario** antes de tocar copy en una página "cerrada definitiva").

**Deploy:** `./deploy.sh website` desde la raíz del monorepo, como cualquier otro cambio de este proyecto.

## Decisiones Canónicas de `/novela-returnai` — CTAs de compra reparados (2026-07-14)

> El libro sale el 22 de septiembre de 2026 y todavía no está a la venta. Varios botones apuntaban a anclas muertas (`#amazon-link`, `#amazon-impreso`, `#amazon-ebook`) en 7 ocurrencias sobre 4 ubicaciones (header, héroe, "Tu próximo paso", modal del capítulo 1). Se reemplazaron por un único CTA "Unirme a los Lectores Fundadores →" hacia `/fundadores`, con línea de apoyo de precios/fecha reutilizada verbatim. Se agregó la misma franja de estado de `/fundadores` bajo el header, y se corrigió `$3.2M → $8.2M` en `meta description` y `og:description` (inconsistencia con el resto de la página, que ya usaba $8.2M en el héroe y el cuerpo).

### Decisión 1 — El header NO lleva subtexto de precio/fecha (deliberado, no un olvido)
El CTA del header ("Unirme a los Lectores Fundadores →") no tiene línea de apoyo debajo, a diferencia del héroe, "Tu próximo paso" y el modal del capítulo 1, que sí la tienen. Por qué: el header es una barra sticky compacta de 68px de alto — el mismo patrón que usa el resto del sitio. Meter una segunda línea de texto ahí obliga a rediseñar la altura/estructura del header, un cambio de layout mayor al que se pidió (fix de CTAs rotos, no rediseño de header). Si en el futuro se decide agregarlo, es una decisión de layout nueva, no una corrección de copy.

### Decisión 2 — `PREORDER_URL` vacía es un estado válido, no una tarea sin terminar
Igual que en `/fundadores`, `PREORDER_URL` se declaró vacía en un bloque de configuración al inicio del `<script>`. Vacía = estado correcto y esperado hasta que abra la preorden en KDP (~20 de agosto de 2026) — no es una variable a medio terminar. El botón secundario "Reservar el ebook en Amazon →" se activa solo asignándole un valor; no requiere tocar el HTML. Aparece junto al botón primario **solo** en héroe y "Tu próximo paso" — deliberadamente ausente del header y del modal del capítulo 1, para no sobrecargar esos dos puntos con un segundo CTA.

### Decisión 3 — Criterio de limpieza de CSS: "toda clase sin referencia en el HTML", no una lista cerrada
Se eliminaron 6 clases CSS huérfanas tras colapsar los dos botones de compra en uno: `.cta-libro-option`, `.cta-libro-option-format`, `.cta-libro-option-price`, `.cta-libro-option-sub`, `.cta-libro-option--secondary`, `.btn-preludio-ebook` (con sus `:hover`). El criterio no fue "borrar esta lista cerrada de nombres" — fue **"toda clase que quedó sin ninguna referencia en el HTML tras este cambio"**, verificado con grep antes de cada borrado (incluida `.cta-libro-option--secondary`, que no estaba en la lista inicial y se sumó al confirmarse huérfana con el mismo método). Precedente: si en el futuro aparece otro selector huérfano relacionado con este mismo cambio, se limpia con el mismo criterio — grep de verificación primero, borrado después.

## Decisiones Canónicas de `/fundadores` — página de cohorte cerrada (2026-07-13)

> Página nueva e independiente, **no enlazada desde el nav principal** — único destino de invitaciones nominales, posts de LinkedIn y newsletter para la cohorte "Lectores Fundadores" de la novela ReturnAI (lanzamiento 22 de septiembre de 2026). Pre-audit ejecutado: `/behavioral-economics-c-level` + `/ui-ux-pro-max`.

### Renombre de ruta — `/lectores-fundadores` → `/fundadores` (2026-07-15)
- La carpeta física y la URL pública se acortaron de `/lectores-fundadores` a `/fundadores` — más fácil de escribir/decir en invitaciones nominales. El texto visible de la página ("Lectores Fundadores") no cambió, solo la ruta.
- Verificado antes del rename: **cero invitaciones, posts de LinkedIn o correos ya distribuidos** con el enlace viejo — por eso no se dejó página de redirect en `/lectores-fundadores` (a diferencia de `landings/novela-returnai-landing.html`, que sí necesitó redirect porque ya tenía tráfico real apuntándole). Si en el futuro aparece un enlace `/lectores-fundadores` roto en algún canal externo no contemplado aquí, crear un redirect de meta-refresh siguiendo ese mismo patrón.
- El PDF se movió junto con la carpeta y luego se renombró de `dossier-fundadores.pdf` a `dossier.pdf` (2026-07-15, URL más corta) — no está enlazado desde el HTML (solo vive en el correo de bienvenida de Brevo), así que ninguno de los dos cambios rompe nada del lado del sitio; si Brevo ya tenía alguna de las URLs viejas del PDF configurada en la plantilla, hay que actualizarla ahí manualmente. URL final: `https://www.digitalchangeadvisors.com/fundadores/dossier.pdf`.
- Actualizados con el rename: el `<link rel="canonical">` de esta misma página, y los 4 CTAs hardcodeados hacia esta ruta en `website/novela-returnai/index.html` (header, héroe, "Tu próximo paso", modal del capítulo 1).

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

## Correcciones de contenido en los 10 papers de investigación (2026-08-04/05)

> Cuatro pasadas de corrección, cada una con script Python de sustitución literal verificado antes de escribir (conteo exacto esperado por cadena, abortar sin tocar archivos si no coincide), commit propio, y despliegue verificado en producción con `curl -F`. Los 5 scripts (`fix_nomenclatura_dca.py`, `fix_nomenclatura_dca_2.py`, `fix_caso_ancla_dca.py`, `aplicar_cierres_dca.py`, `fix_registros_120dias.py`) quedan comprometidos en la raíz del repo como rastro de auditoría — no son tooling reutilizable, son el registro de qué cadena exacta cambió y por qué.

1. **Nomenclatura retirada + cifras sin fuente (commit `7f1824f`):** `"Estrella del Norte Digital"` → `"AI North Star"` (12× en `article-paper02.html`, incluye `<title>`/`og:title`/JSON-LD/`<h1>`); expansión errónea del acrónimo ARIA en `article-paper04.html`; datos propios sin muestra/período/método en `article-paper05.html` y `article-paper06.html`; cifra del compromiso contractual reutilizada con otro significado en `article-paper03.html`. Segunda pasada: mismo retiro de nomenclatura en `llms.txt` y `blog.html` (headline JSON-LD + `<h3>` de tarjeta + comentario).
2. **Cierres de los 10 papers (commit `5f6bebc`):** los 10 párrafos de cierre reescritos por dirección, instalando vocabulario propietario (`el KPI que importa`, `adopción registrada`/`adopción activa`, `ROI estimado`, `retorno documentado`, los arquetipos `La Trampa Burocrática` y `El Síndrome del Paralítico`) sin tocar los CTA de cierre de artículo. Mismo commit: corrección del caso ancla — `article-paper08.html` y `modelo-aria.html` declaraban $3,2M (cifra de **inversión**) como si fuera la cifra de **retorno** del caso ancla, sobredeclarando el resultado real 3,6 veces; el retorno documentado del caso es $891.000 en 120 días (ya correcto en `article-paper09.html` y la portada) — alineados sin mezclar con el caso de la novela ReturnAI (regla ya vigente, ver `feedback_casos_narrativa.md` en memoria).
3. **Opción D — reencuadre de la afirmación de 120 días por registro (commit `dd23639`):** doctrina de tres registros — R1 Compromiso (oferta contractual, libre uso), R2 Mecánica (duración del servicio, libre uso), R3 Resultado (requiere muestra/período/método o se reformula). El único R3 sin respaldo era una frase de `article-paper09.html` ("el patrón se repite sin excepción... documentan... dentro de los 120 días" — enunciado estadístico sobre una población sin muestra), reformulado como mecanismo de secuencia. `article-paper02.html` y `ara/index.html`: se añadió la cláusula de garantía contractual de re-intervención donde la cifra de 120 días circulaba sola. `returnai.html`: `"empresa real"` → `"empresa de seguros"` en el bloque de la novela, corrigiendo contradicción interna (titular decía "real", el cuerpo dos párrafos después decía "ficción empresarial").
4. **Micro-corrección de artículo (mismo commit que el paquete de arquetipos, `1c2b7cd`):** `article-paper05.html` y `article-paper08.html` nombraban arquetipos con artículo mayúsculo (`La Trampa Burocrática`, `El Síndrome del Paralítico`) — el artículo no es parte del nombre canónico; corregido a minúscula sin tocar el resto de la prosa.

**Hallazgo transversal a las 4 pasadas:** `article-paper04.html` y `article-paper09.html` codifican vocales acentuadas como entidades HTML (`&oacute;`, etc.) en vez de UTF-8 literal — cualquier grep de verificación sobre esos dos archivos debe usar la entidad, no la tilde literal, o dará falso negativo. Documentado también como hallazgo de sesión: el `grep` de esta máquina es en realidad `ugrep`, que puede dar falso negativo con un `$` en medio del patrón — usar `grep -F` (cadena fija) en cualquier verificación que incluya cifras en dólares.

## Estándar de Publicación — Perspectivas / Papers del Blog (canónico 2026-09-01)

> Documentado tras auditar los 10 papers existentes (`article-paper00.html`…`article-paper09.html`) tal como están construidos hoy — no es una regla nueva, es la formalización de un patrón que ya era 100% consistente en el código pero nunca se había escrito. Ver también el comando `/perspectiva` en `.claude/commands/`, que implementa este flujo completo.

### Flujo de 9 pasos
1. El usuario entrega el texto — formato `.md` exportado de Google Docs (mismo patrón que los "Paper 0X DCA - ....md" ya en el repo): `####` para subtítulos, `**negrita**`, `*cursiva*` para epígrafes/citas, cifras con fuente citable.
2. Claude estructura el contenido mapeándolo a los bloques del sistema (ver tabla de clases abajo).
3. Pasa por `/validar-marca`: términos prohibidos, regla de "adopción" como medio (nunca como fin), regla de verificabilidad numérica (cifra de tercero → `citation` en JSON-LD con autor + URL primaria; cifra propia → muestra/período/método; si no se puede cumplir ninguna, se reformula sin la cifra).
4. Claude genera el prompt de Nano Banana 2 (ver plantilla abajo) — **una sola imagen sirve de tarjeta del catálogo y de hero del artículo** (patrón de los 9 papers 01–09; paper00 usó dos imágenes distintas, patrón abandonado después).
5. El usuario genera la imagen y la entrega — master ~3:2 (p. ej. 800×533), composición centrada, nada crítico en el 15–18% superior/inferior (debe sobrevivir recorte a 16:9 tarjeta, 16:6.5 hero desktop, 4:3 hero mobile).
6. Claude optimiza y exporta con Pillow: WebP (q82) + JPG (q78), nombrados `assets/blog-article-paperNN.{webp,jpg}`.
7. Claude construye `article-paperNN.html` completo (head/OG/JSON-LD, hero, cuerpo, autor, CTA, relacionados) clonando el patrón exacto de un paper existente.
8. Alta en `blog.html`: tarjeta nueva en `.article-grid`, entrada nueva en `Blog.blogPost[]` (JSON-LD), contador `<b>N</b> perspectivas` actualizado (regresión ya ocurrida una vez — ver "Correcciones de contenido" arriba, no repetirla).
9. Alta en `sitemap.xml` + `./deploy.sh website` + verificación en vivo (margen 30–60s de caché de borde antes de reportar fallo — ver Regla 8 del CLAUDE.md raíz).

### Qué entrega el usuario vs. qué decide Claude
El texto en formato `.md` no basta para derivar todo — por artículo, confirmar con el usuario:
- **Autor**: César Lozano, Ruth Jaramillo, Alejandro Ríos, u otro nuevo (requiere foto de perfil si es nuevo)
- **Badge de categoría**: Marco · Análisis · Investigación · Tendencias · Gobernanza · Metodología (mapea a `.format-badge--frame` los primeros/Gobernanza/Metodología, a `.format-badge--field` Análisis/Investigación/Tendencias)
- **`data-stage`** (taxonomía de filtro del catálogo): `adopcion` · `evidencia` · `gobierno` · `roi`
- **Contenido de `.art-insights`** ("Puntos clave", 2–4 líneas tras el hero) — Claude propone, el usuario aprueba

### Tabla de clases — `styles-article.css` (verificada, no inventar nombres nuevos)
| Bloque | Clase / patrón | Nota |
|---|---|---|
| Párrafo de cuerpo | `.art-body p` (sin clase propia) | 17px, line-height 1.78 — no crear `.paragraph` ni similar |
| Negrita / cursiva inline | `<strong>` / `<em>` nativos | No existe `.highlight`/`.mark` — nunca envolver en spans nuevos |
| Cita destacada (pull quote) | `<blockquote class="art-quote"><p>…</p><cite>Autor — Rol</cite></blockquote>` | Cursiva display, borde oro izquierdo |
| Dato de campo / implicación práctica | `<div class="art-callout"><span class="art-callout__label">…</span><p>…</p></div>` | Fondo teal 5%, borde teal |
| Puntos clave (resumen) | `<div class="art-insights" role="note" aria-label="Puntos clave">` | Fondo carbón sólido, siempre justo tras `.art-hero`, antes del primer párrafo |
| H2 de sección | `.art-body h2` | Barra oro izquierda — nunca `<h2>` sin este contenedor |
| H3 de subsección | `.art-body h3` | Uppercase, teal, sin barra |
| Cifras destacadas | `.art-stats` (grid 3 col) con `.art-stat` × N | `.art-stat__num` + `.art-stat__label` |
| CTA inline en texto | `<a class="art-inline-cta">texto — Realiza el AI Return Test →</a>` | Distinto de `.btn--gold` (botón sólido de sección) |
| Separador | `<hr class="art-divider" />` | — |
| Tags de cierre | `.art-tags` > `.art-tag` × N | — |
| Bio de autor | `.art-author-section` > `.art-author-card` | Foto + nombre + rol + `.art-author__bio` |
| Newsletter compacto | `.art-pulse` | Entre `.art-author-section` y `.art-cta` — ver "Sistema Newsletter" abajo |
| CTA principal de cierre | `.art-cta` con botón `.btn.btn--gold` | Fondo teal sólido |
| Artículos relacionados | `.art-related` > `.art-rel-card` × 3 | — |
| Hero de imagen | `.art-hero` (fuera de `.art-header`, antes de `.art-body`) | `aspect-ratio:16/6.5` desktop → `4/3` en `≤767px`; `<picture>` WebP+JPG, `loading="eager"` (es LCP) |

**Jerarquía invariante de cierre de artículo:** `[Cuerpo] → [Autor] → [AI Return Pulse] → [AI Return Test CTA] → [Artículos relacionados]` (ya documentada en "Sistema Newsletter" abajo, aplica igual aquí).

**Firmas de autor canónicas** (ver "Firma de Autoría" abajo para el detalle completo): César Lozano `Socio fundador · CEO · Arquitecto del Modelo ARIA`; Ruth Jaramillo `Socia fundadora · Neurociencias de la Adopción · Cocreadora del Modelo ARIA` (versión corta en tarjetas: `Socia fundadora · Cocreadora del Modelo ARIA`); Alejandro Ríos `Consultor Asociado · Validación Empírica del Retorno`.

**Imágenes — patrón de un solo archivo compartido:** a diferencia de `/arquetipos` (que sí necesitó hero dedicado tras rechazar el crop compartido — ver esa sección arriba), los 9 papers 01–09 reutilizan el mismo `assets/blog-article-paperNN.{webp,jpg}` como tarjeta de catálogo (`aspect-ratio:16/9` en `.article-card__img-wrap`) y como hero de artículo (`.art-hero`). Solo crear un segundo archivo (`blog-feat-paperNN`) si, al revisar el resultado, el recorte compartido corta algo importante en alguno de los tres aspect-ratios — no por defecto.

**Prompt base para Nano Banana 2 (inglés, plantilla — personalizar `[SUJETO]` según el tema del artículo):**
```
Photorealistic corporate photograph, documentary style — no posed stock-photo
smiles, no direct eye contact with camera. [SUJETO: p.ej. "A senior executive
reviewing financial data on a laptop, alone in a glass-walled office at dusk"].
Composition: centered subject, generous headroom, nothing critical within the
top or bottom 18% of the frame — must survive cropping to 16:9, 16:6.5, and 4:3
from the same master. Lighting: high contrast, single directional light source,
executive atmosphere. Color grading: slightly desaturated, teal-carbon color
cast (#2e8b76 / #1e2a38) with a single subtle warm gold accent (#a48111) — muted,
not saturated. No text, no logos, no graphic overlays. No gradient backgrounds.
Aspect ratio 3:2. Style reference: Bain & Company / McKinsey editorial
photography, not generic tech-vendor stock imagery.
```
Basado en la regla "Producción Visual — Fotografía" del CLAUDE.md raíz (estilo documental, desaturado, alto contraste, overlay teal/carbón) — el grading va horneado en el prompt de generación, no aplicado después vía CSS (a diferencia del `.hero-video::after` de las landings ARA, que sí superpone overlay por CSS sobre video).

### Hueco identificado — sin corregir, dejar para cuando aparezca de nuevo
`article-paper09.html` tiene un `<h1 class="art-title">` de 3 líneas y resuelve el tamaño de fuente con `style="font-size:clamp(20px,2vw,24px)"` **inline**, en vez de una clase modificadora — el sistema por defecto (`.art-title { font-size: clamp(26px,3.2vw,44px) }`) no cubre titulares largos. **Regla para el próximo paper con titular de 3 líneas:** crear `.art-title--long` en `styles-article.css` en vez de repetir el inline style — no es bloqueante, solo evitar que el parche a mano se vuelva costumbre.

## Decisiones Canónicas de `/arquetipos` y las 7 landings ABM (2026-08-05)

> Paquete ejecutado en una sola sesión: página madre nueva + saneamiento SEO de las 7 landings de arquetipo + indexación de `/ara`. Contexto: las 7 landings ABM (`amenaza`, `barco`, `feudos`, `sindrome`, `teatro`, `tormenta`, `trampa`) compartían `<title>`, no tenían `<meta name="robots">` ni `canonical` propia, y no existía ninguna página que nombrara el marco completo de los 7 arquetipos como objeto citable por motores generativos.

### Patrón de ruta — género sobre conteo
`/arquetipos` sigue el patrón `website/arquetipos/index.html` (subdirectorio), no `website/arquetipos.html` — es el patrón dominante de las páginas de su mismo género (landings de diagnóstico: `/art`, `/ara`, las 7 ABM), no el de los papers sueltos. Canónica con barra final: `https://digitalchangeadvisors.com/arquetipos/` — verificada en vivo con `curl -sIL` que esa es la forma que resuelve `200` sin redirección (mismo comportamiento que `/ara/`; GitHub Pages sirve `index.html` de directorio en la forma con barra y hace 301 desde la forma sin barra). **Regla derivada: antes de fijar cualquier canonical/sitemap/enlace interno para una página nueva en subdirectorio, verificar con `curl -sIL` cuál forma resuelve 200 directo — no asumir.**

### Las 7 landings ABM — no confundir con `/ara`
`/ara` **no** es una landing ABM — es el AI Return Assessment, segundo nivel de la escalera de valor ReturnAI, con derecho propio a indexarse. Las 7 landings ABM (`amenaza`, `barco`, `feudos`, `sindrome`, `teatro`, `tormenta`, `trampa`) reciben tráfico por distribución de campaña/URL directa, no por navegación del sitio — de ahí `noindex, follow` (no `nofollow`: los enlaces salientes de esas páginas, incluido el nuevo enlace a `/arquetipos/`, deben seguir transmitiendo señal).
- **Título propio por landing** (dejaron de compartir `"AI Return Assessment · Digital Change Advisors"`): `Arquetipo <Nombre> | Digital Change Advisors`.
- **Normalización de `<h1>`:** el nombre canónico del arquetipo no lleva artículo. 4 de las 7 lo llevaban (`El Barco Sin Timón`, `El Síndrome del Paralítico`, `La Tormenta Perfecta`, `La Trampa Burocrática`) — normalizadas a `Barco sin Timón`, `Síndrome del Paralítico`, `Tormenta Perfecta`, `Trampa Burocrática`. La cadena bare (sin el tag `<h1>`) aparece 4× por archivo (h1, h2 del hero, cuerpo) — la sustitución se acotó al `<h1>` completo con su tag para no tocar el resto de la prosa, tal como pedía el alcance.
- **Enlace nuevo:** `Ver los siete arquetipos de rentabilización` → `/arquetipos/`, insertado como párrafo nuevo dentro de la sección `#arquetipo-contexto` de cada landing, justo después del párrafo que nombra su arquetipo específico — sin tocar ninguna otra prosa existente.
- Permanecen **fuera del sitemap.xml** (decisión ya vigente, ahora reforzada con `noindex`).

### `/ara` — de "sin metadatos" a producto indexado
Antes de esta sesión, `/ara/index.html` solo tenía `<title>` — sin canonical, sin description, sin OG tags. Se completó con el patrón de 5 etiquetas de compartición que ya usa `/art` (`og:url`, `og:type`, `og:title`, `og:description`, `og:image`) + `twitter:card`, más canonical propia y alta en `sitemap.xml`. `og:image` verificado 200 en vivo.
- **Bloqueo y levantamiento (mismo día):** el alta en sitemap/IndexNow se retuvo inicialmente porque el testimonio con IUG 48,4 (presente en las 7 landings + `/ara`) tenía autorización de uso sin confirmar — indexar `/ara` habría aumentado su exposición justo cuando las 7 landings la reducían. El bloqueo se levantó el mismo día al confirmarse autorización escrita del titular, obtenida antes de la publicación de las landings. Ver el registro permanente en el `CLAUDE.md` raíz, sección "Regla de verificabilidad", para que ninguna auditoría futura reabra esto como pendiente.

### `/arquetipos` — contenido y datos estructurados
Plantilla: familia `.art-body` (mismas hojas de estilo en cascada que los papers — `styles.css/4/5/6.css` + `styles-article.css`), nav y footer estándar del sitio. Contenido literal aprobado por dirección: H1 + 2 párrafos de intro + 7 `<h3>` (uno por arquetipo, sin artículo) + H2 de cierre + CTA doble (`AI Return Test` primario en `.btn--gold`, `AI Return Assessment` secundario en `.btn--ghost-light` — variante ya existente en `styles.css` para CTA secundario sobre fondo oscuro, no se creó CSS nuevo).
- **`DefinedTermSet` JSON-LD**, mismo patrón que el `DefinedTermSet` de Modelo ARIA (`modelo-aria.html`): `publisher` apuntando a `{"@id": "https://digitalchangeadvisors.com/#organization"}` (no duplicar el objeto Organization completo), 7 `DefinedTerm` con `name` = nombre sin artículo (idéntico al `<h3>`) y `description` = primera frase literal del párrafo aprobado — sin parafrasear.
- **Enlaces entrantes** (además de las 7 landings): `/art`, como párrafo nuevo dentro de `.timeline-content` en el paso "Acceso incluido" del timeline de resultados — sección elegida porque ya describe "la página personalizada de tu arquetipo" como resultado del diagnóstico, sin forzar la redacción. `/modelo-aria`, como `<li>` nuevo en la columna "Perspectivas" del footer. **Deliberadamente sin tocar el CSS de `/art`:** el candidato obvio (`.footer-connectors-grid`, 2 tarjetas) es una cuadrícula fija a 2 columnas — una 3ª tarjeta habría exigido rehacer el layout; se usó un enlace de texto en su lugar.
- `llms.txt`: nueva sección `## Arquetipos de rentabilización` insertada antes de `## Diagnóstico` (no dentro de ella — el marco de arquetipos es un objeto propio, no un instrumento de diagnóstico); `AI Return Assessment` añadido dentro de `## Diagnóstico`.

### Verificación post-deploy — caché de borde inconsistente, no regresión
La primera pasada de verificación en producción (curl inmediato tras el force-push) dio ceros en casi todos los checks — diagnosticado como **propagación inconsistente entre POPs de Cloudflare** justo después del `deploy.sh` (los mismos comandos, un par de minutos después, dieron los valores correctos). **Regla derivada: dar al menos 30–60 segundos de margen antes de verificar en producción tras un `deploy.sh website`, y si el primer intento da cero en algo que se sabe presente en el commit desplegado, reintentar antes de reportarlo como fallo real.**

### Fine-tuning — íconos de arquetipo + tarjeta en `/blog` (2026-08-05)

Primera iteración de fine-tuning sobre `/arquetipos`, con gate BE/UI-UX previo (ambas skills corridas antes de tocar código, como exige la regla del proyecto):

- **Íconos por arquetipo:** cada uno de los 7 bloques (`<h3>` + `<p>`) pasó a un layout `.arquetipo-block` (ícono + texto, fila en desktop / apilado y centrado en mobile ≤640px), reutilizando el mismo PNG que ya identifica al arquetipo en su landing individual. Los PNG fuente son 210×210px (tamaño de hero de landing, ~50KB) — se generaron versiones `-sm` a 128px (`sips --resampleWidth 128`, ~20KB, ~60% más livianas) para el uso a 64px aquí; las landings siguen usando sus 210px sin cambio. `alt=""` en los 7 — el nombre del arquetipo ya está en el `<h3>` adyacente, un alt descriptivo lo duplicaría para lectores de pantalla.
- **Tarjeta en el catálogo de `/blog`** (`#catalogo`, primera posición): reutiliza el componente `.article-card` existente sin CSS nuevo, badge `Marco` (patrón ya usado por otro contenido de framework en el catálogo), filtro `data-stage="adopcion"` (Comportamiento & uso), atribuida a César Lozano (confirmado por el usuario — el framework está integrado al ecosistema del Modelo ARIA / AI Return Test que él creó, aunque el copy de la propia página lo atribuye a la firma, no a una persona). Título y excerpt reutilizan el H1 y la meta description ya aprobados de la página — sin copy nuevo.
- **Imagen de la tarjeta:** generada con Nano Banana 2 a partir de un prompt propio (composición de 7 íconos abstractos en grid sobre fondo plano, sin texto) — el resultado final tiene sombreado/gradiente sutil tipo "app icon", diverge del brief estrictamente plano/McKinsey pedido, pero fue revisado y aprobado por el usuario ("está lista") antes de publicarse; no se bloqueó por eso. Fuente 1600×900px redimensionada a 800×450 (convención "tarjetas/miniaturas 800"), exportada a JPG (q78, ~47KB) y WebP (q82, ~15KB) con Pillow — ver nota de `cwebp` no disponible arriba. Máster PNG en `_image-masters/arquetipos-perspectivas.png` (fuera de los subtrees publicables).

**Auditoría de regresión del mismo día (independiente del fine-tune, encontrada al revisar `blog.html` completo):**
- El JSON-LD `Blog.blogPost[]` tenía 8 entradas, no 10 — `article-paper08` y `article-paper09` nunca se agregaron cuando se publicaron (regresión preexistente, no introducida por el fine-tune). Corregido con los datos reales de cada paper (headline/autor/fecha/`timeRequired` — no inventados).
- El headline de `article-paper04` en `blog.html` (JSON-LD y tarjeta visible) decía "...la brecha **entre los dos** es mayor de lo que parece" — diverge del headline canónico real del paper ("...la brecha es mayor de lo que parece"). Corregido en las 2 ubicaciones.
- El contador estático `<b>9</b> perspectivas` en el HTML crudo no reflejaba las tarjetas reales — solo se corregía por JS al cargar. Relevante para GEO: un rastreador que lee HTML sin ejecutar JS vería el número equivocado. Corregido a `10`.
- `/arquetipos` **no** se agregó al `blogPost[]` — es `DefinedTermSet`, no `BlogPosting`; forzarlo ahí sería un error de tipado en datos estructurados, más dañino para GEO que no incluirlo. Sí está en el catálogo visible y en `llms.txt`.

### Hero del artículo `/arquetipos` — reemplazado (2026-08-06)

El artículo `/arquetipos` ganó un bloque `.art-hero` (mismo patrón que los 10 papers: `<picture>` WebP+JPG, full-bleed, `object-fit:cover`, `aspect-ratio:16/6.5` desktop → `4/3` en `≤767px`) justo debajo del `.art-lead`, antes de `<article class="art-body">`.

- **Primer intento (retirado):** se reutilizó `assets/blog-article-arquetipos.jpg/webp` (el grid de 7 íconos de la tarjeta de `/blog`) también como hero. El usuario lo rechazó — el crop de `object-fit:cover` entre 2.46:1 (desktop) y 4:3 (mobile) cortaba los íconos de forma visible.
- **Reemplazo:** foto fotorrealista de una sala de juntas ejecutiva vacía (sin personas, mesa de madera en fuga central hacia ventanal con skyline nocturno, grid de luces de techo, grading teal-carbón desaturado con acento oro puntual) — generada con Nano Banana 2 a partir de un prompt propio diseñado específicamente para sobrevivir ese rango de crop: composición simétrica centrada, margen de aire deliberado arriba/abajo (nada crítico dentro del 15% superior/inferior del encuadre). Master entregado por el usuario a 1123×461px (aspecto 2.436:1 — coincide casi exactamente con el `aspect-ratio:16/6.5` del contenedor, 2.4615:1).
- **Asset dedicado, no compartido con la tarjeta de `/blog`:** a diferencia del patrón de los 10 papers (un mismo archivo sirve de tarjeta y de hero), aquí se usó un nombre de archivo propio — `assets/article-hero-arquetipos.jpg/webp` — para no tocar la tarjeta del catálogo de `/blog` (`blog-article-arquetipos.jpg/webp`, grid de íconos), que ya estaba aprobada y es una pieza conceptualmente distinta (composición gráfica vs. fotografía). Exportado sin upscale (mismo 1123×461px nativo) vía Pillow — mismo patrón `cwebp` no disponible, ver nota arriba. Master en `_image-masters/portada_arquetipos.png`.
- **Incidente de despliegue no relacionado con la imagen:** tras publicar, el asset dio `404` varios minutos — no fue el patrón ya documentado de propagación de caché de borde, sino un build de GitHub Pages atascado (dos `deploy.sh` seguidos en la misma sesión). Ver Regla 8 en el `CLAUDE.md` raíz para el diagnóstico y fix (`gh api -X POST .../pages/builds`).

## Enrutamiento de CTAs y Enlaces — CANÓNICO (2026-06-29, host actualizado 2026-08)

> **⚠️ Actualización 2026-08 (decisión D-A) — la regla "siempre con `www`" de 2026-06-29 queda retirada, no matizada.** Host canónico = **apex** (`https://digitalchangeadvisors.com`, sin `www`). Motivo: el `CNAME` de GitHub Pages es el apex (ver "Dominio — CANÓNICO", 2026-06-30) y `www` ya hace 301 hacia él vía Cloudflare; mantener `canonical`/`og:url`/enlaces en `www` significaba declarar como referencia una URL que solo redirige, un salto extra que un rastreador no necesita dar. Se alinea el código con la infraestructura real (que vive en Cloudflare, sin versionar) — no al revés. Todo enlace, `canonical`, `og:url` y referencia JSON-LD al propio dominio se corrigió a apex el 2026-08 (ver `scripts/verify-robots.sh`, que ahora también verifica esto). Los enlaces salientes a terceros (Tally, TidyCal, Skool, etc.) no se tocan — son dominios ajenos, fuera del alcance de esta regla.

Todos los botones y enlaces del website + artículos apuntan a `https://digitalchangeadvisors.com` (URLs limpias, **siempre apex, sin `www`**). Cero enlaces a staging `dca-returnai.github.io`.

- **CTA "AI Return Test" → SIEMPRE `/art`** (la landing ART, `website/art/index.html`), con UTMs intactos (`?utm_source=<página>&utm_medium=website&utm_campaign=ai-return-test`). Unifica el destino: antes homepage y returnai saltaban directo a Tally — corregido.
- **Tally directo (`tally.so/r/Np6e5W`) → SOLO en los CTAs internos de la landing `/art`.** Ninguna otra página enlaza a Tally. (Excepción no-CTA: `tally.so/help/privacy-policy` como referencia legal.)
- **TidyCal (`tidycal.com/pwgdigital/returnai`)** se conserva como endpoint de agendamiento (equivalente funcional a Tally).
- **Footer — destinos de páginas aún no desplegadas:** Academia → `https://www.digitalchangeacademy.org` · Comunidad LARIA → `https://www.skool.com/comunidad-lada-2386/` · Libro ReturnAI → `/novela-returnai` · **Red ARIA → texto sin enlace** (hasta tener página).
- Fragmentos cross-page preservados como URL absoluta + ancla (`/#libro`, `/blog#newsletter-pulse`). Anclas de misma página quedan relativas (`#fases`).

## Repositorios de Despliegue

- **Dev (monorepo):** `DigitalChangeAdvisors/dca-presencia-digital-dev` — carpeta `website/`
- **Producción:** `DigitalChangeAdvisors/dca-website` — GitHub Pages activo
- **URL staging:** `https://dca-returnai.github.io/dca-website/`
- **Deploy CANÓNICO (MacBook o iMac):** `./deploy.sh website` (o `both`) desde la raíz del monorepo. **No usar `git subtree push` directo** — `deploy.sh` aborta si falta `website/CNAME` y verifica el dominio post-deploy. Ver "Hardening de Deploy y Dominio" en el CLAUDE.md raíz.
- **⚠️ Nota de sincronización:** Si la producción tiene commits directos del iMac, usar `--force` tras integrar los cambios remotos en el monorepo.
- **🌐 Dominio — CANÓNICO (2026-06-30):** El dominio es `digitalchangeadvisors.com` (apex), versionado en **`website/CNAME`**. `www` redirige al apex vía Cloudflare. **Nunca borrar `website/CNAME`.** Causa raíz de un incidente: el deploy por `subtree split + push --force` reemplaza `main` con el contenido de `website/`; si el `CNAME` solo existía en producción (creado por GitHub al fijar el dominio) y no en el código fuente, **el force-push lo borra y desconecta el dominio** (apex → 404, GitHub vacía el ajuste de Pages). Solución: el CNAME vive en el código fuente → sobrevive a todo redeploy. Si el dominio se cae, verificar con `GET /repos/DigitalChangeAdvisors/dca-website/pages` (campo `cname`) y, si está vacío, re-fijar con `PUT .../pages -d '{"cname":"digitalchangeadvisors.com"}'`.
- **📛 Nota de organización (2026-07-22):** el org de GitHub se movió de `DCA-ReturnAI` a `DigitalChangeAdvisors`. Las URLs viejas siguen redirigiendo (GitHub las conserva), pero cualquier remote configurado con el nombre viejo conviene actualizarlo al hacerle push — evita depender del redirect indefinidamente.

## Infraestructura Técnica GEO — robots.txt, sitemap.xml, llms.txt, schema (2026-07-22)

> Ejecutado al integrar la "Estrategia GEO DCA 2026-2027" (documento aparte) a la bitácora de lanzamiento de 12 semanas. Verificado en vivo contra producción, no solo desplegado.

### Hallazgo — Cloudflare bloqueaba a los rastreadores de IA por defecto
El toggle **"robots.txt gestionado"** de Cloudflare (Security Settings → Bot traffic) escribía automáticamente `Disallow: /` para ClaudeBot, GPTBot, Google-Extended, Applebot-Extended, Amazonbot y meta-externalagent — comportamiento por defecto de esa función, nadie del equipo lo configuró así. Se apagó ese toggle y se desbloquearon individualmente ClaudeBot, GPTBot y Claude-User en **AI Crawl Control**. El `robots.txt` propio (`website/robots.txt`) es ahora la única fuente de verdad — no depende de que ese toggle de Cloudflare se mantenga apagado.

### Archivos nuevos en la raíz de `website/`
- `robots.txt` — `Allow: /` explícito + referencia a `sitemap.xml`.
- `sitemap.xml` (estado 2026-07-22, ver corrección 2026-08-05 arriba) — páginas core (`/`, `/modelo-aria`, `/returnai`, `/nosotros`, `/novela-returnai`, `/art`, `/blog`) + los 10 papers de investigación (`article-paper00`–`09`). **Deliberadamente fuera en ese momento:** `/fundadores` y `/privacy-policy` (ambas `noindex`); `amenaza`, `ara`, `barco`, `feudos`, `sindrome` (agrupación errónea — `/ara` no es ABM); `centro-baip` y `sprint-roadmap-01-baip` (no son contenido de cara al cliente). **Estado vigente:** 20 URLs — `/arquetipos/` y `/ara/` sumadas, las 7 landings ABM (`amenaza`, `barco`, `feudos`, `sindrome`, `teatro`, `tormenta`, `trampa`) confirmadas fuera con `noindex, follow`.
- `llms.txt` — resumen del canon de la firma para agentes de IA (formato estándar: H1 + resumen + enlaces por sección).
- Dado de alta en Google Search Console (propiedad de Dominio, verificada por TXT en Cloudflare) y Bing Webmaster Tools (verificado por CNAME en Cloudflare) — ambos confirmados en estado correcto.

### Schema markup agregado (sin tocar copy visible ni UX, salvo lo anotado)
- `modelo-aria.html`: `<link rel="canonical">` (no existía), JSON-LD `FAQPage` (envolviendo el FAQ visual ya existente) + `DefinedTerm` para "Modelo ARIA", `dateModified` en el JSON-LD `Service` existente, fecha de actualización visible en el footer, y un `<h2>` visualmente oculto (técnica de recorte estándar — cero impacto visual, sí lo lee un lector de pantalla) con la pregunta literal "¿Qué es el Modelo ARIA?". El H1 de conversión no se tocó.
- `novela-returnai/index.html`: JSON-LD `Book` nuevo (autor, editorial, fecha de lanzamiento 2026-09-22, formatos impreso/ebook).
- `nosotros.html`: `sameAs` (LinkedIn) agregado al schema `Person` de César Lozano existente. **Corrección de paso:** el campo `knowsAbout` tenía "Gestión del cambio organizacional" — término vetado (ver tabla de arriba); corregido a "Arquitectura de Sistemas Sociotécnicos". Se agregó la línea de desambiguación visible del homónimo (conferencista motivacional mexicano) reutilizando la clase `.founder__credit` ya existente — sin CSS nuevo. Página marcada "cerrado definitivo" en el mapa de arriba: este cambio de copy visible sí pasó por confirmación explícita del usuario antes de implementarse, dado el gate obligatorio de esta sección.

### Por qué `blog.html` no se tocó
Los 10 papers de investigación **ya estaban enlazados** desde `/blog` (masthead + catálogo + riel "Lo último") antes de esta sesión. Una verificación inicial con grep buscando `article-paperXX.html` (con extensión) dio negativo porque el sitio usa URLs limpias sin `.html` — patrón de búsqueda incorrecto, no ausencia real de enlaces. Corregido el patrón, los 10 aparecían correctamente enlazados. No hubo cambio de contenido/UX en `blog.html`.

## ⚠️ Punto Único de Falla — Cloudflare AI Crawl Control (2026-08-03)

> El permiso de rastreo por IA para este dominio **no vive en el repositorio**. Vive en un panel de Cloudflare (Security → AI Crawl Control) que no tiene revisión de código, no dispara alerta ante un cambio, y **ya bloqueó silenciosamente a los rastreadores de IA una vez** (hallazgo del 2026-07-22, ver sección de arriba: el toggle "robots.txt gestionado" escribía `Disallow: /` para GPTBot/ClaudeBot/Google-Extended/Applebot-Extended/Amazonbot/meta-externalagent sin que nadie del equipo lo configurara así). `website/robots.txt` es una petición voluntaria — la aplicación real y forzada del bloqueo o permiso ocurre en ese panel. Si alguien lo reconfigura sin pasar por aquí, el sitio puede desaparecer de las superficies generativas sin que el `git log` lo refleje.

### Inventario de estado — AI Crawl Control (verificación pendiente de panel)

| Rastreador | Estado documentado | Fuente / fecha |
|---|---|---|
| GPTBot | Permitido (desbloqueado explícitamente) | Sección "Infraestructura Técnica GEO" arriba, 2026-07-22 |
| ClaudeBot | Permitido (desbloqueado explícitamente) | ídem |
| Claude-User | Permitido (desbloqueado explícitamente) | ídem |
| Amazonbot | Bloqueado (deliberado, según nota de 2026-07-22) | ídem |
| Bytespider | Bloqueado (deliberado, según nota de 2026-07-22) | ídem |
| CCBot | **Desbloqueado (decisión D-B, 2026-08-03)** — revierte deliberadamente el bloqueo de 2026-07-22. Motivo: presencia en el corpus de entrenamiento (Common Crawl alimenta a la mayoría de LLMs) es una apuesta de autoridad de categoría para la estrategia GEO de la firma; no hay contenido sensible publicado en este dominio que justifique excluirlo. Se verificó que la nota de 2026-07-22 no registraba una razón individual y sustantiva para bloquear CCBot específicamente — solo lo agrupaba junto a Amazonbot/Bytespider/Meta-ExternalAgent/Applebot-Extended sin motivo propio. **Acción pendiente del usuario:** reflejar este desbloqueo en el panel de AI Crawl Control (columna "Bloquear rastreador" → off para CCBot) | Decisión D-B, 2026-08-03 |
| Meta-ExternalAgent | Bloqueado (deliberado, según nota de 2026-07-22) | ídem |
| Applebot-Extended | Bloqueado (deliberado, según nota de 2026-07-22) | ídem |
| OAI-SearchBot | **Pendiente de verificar** — sin registro previo | — |
| ChatGPT-User | **Pendiente de verificar** — sin registro previo | — |
| Claude-SearchBot | **Pendiente de verificar** — sin registro previo | — |
| Google-Extended | **Pendiente de verificar** — el hallazgo de 2026-07-22 dice que Cloudflare lo bloqueaba por defecto; no hay registro de que se haya desbloqueado explícitamente en AI Crawl Control (a diferencia de GPTBot/ClaudeBot/Claude-User) | — |
| PerplexityBot | **Pendiente de verificar** — sin registro previo | — |
| Perplexity-User | **Pendiente de verificar** — sin registro previo | — |

No tuve acceso al panel de Cloudflare en este entorno (sin `wrangler`, sin token API) — esta tabla es una reconstrucción de lo ya documentado en este archivo, no una verificación en vivo. **Acción pendiente del usuario:** entrar a Security → AI Crawl Control, confirmar/corregir cada fila, y resolver el conflicto de CCBot.

### ⚠️ Metodología de revisión — CORREGIDA (2026-08-04)

> Esta sección reemplaza la metodología implícita en la tabla de arriba (una lista fija de agentes "conocidos"). La observación que la motivó: ShapBot/0.1.0 fue el agente de **mayor volumen** del 2026-08-03 (58 de 283 solicitudes, 20.5%) y no aparecía en ninguna lista — un proceso que solo revisara la tabla de arriba nunca lo habría detectado.

**La revisión periódica NO compara `robots.txt`/AI Crawl Control contra la tabla de agentes de arriba (lista fija).** La compara contra los **agentes efectivamente vistos** en `docs/infraestructura/rastreo-historico.csv` durante el período — una lista fija envejece; el tráfico real no. Procedimiento:
1. Agrupar el CSV del período por `user_agent`/agente y ordenar por volumen.
2. Cualquier agente con volumen relevante (no un hit aislado) que **no** esté ya en `docs/infraestructura/agentes-ia.md` entra al inventario con una decisión explícita: permitir, bloquear, o pendiente de verificar — igual que se hizo con ShapBot.
3. La tabla de arriba sigue siendo el registro histórico de las decisiones de 2026-07-22/2026-08-03 sobre los rastreadores de entrenamiento/recuperación en vivo más conocidos (GPTBot, ClaudeBot, etc.) — no se descarta, pero ya no es el único criterio de "qué revisar".
- **Próxima revisión:** 2026-11 (sin cambio de fecha, solo de método — ver `docs/infraestructura/agentes-ia.md`).

### Estado del toggle "robots.txt gestionado"
Debe permanecer **desactivado**. Activarlo revierte la decisión canónica del 2026-07-22: Cloudflare volvería a escribir `Disallow: /` automáticamente para varios rastreadores de IA sin pasar por este archivo ni por `website/robots.txt`. El control de regresión de esto vive en `scripts/verify-robots.sh` (ver T5) — falla en rojo si aparece cualquier línea `Disallow` en el `robots.txt` servido, porque esa es la firma de que el toggle se reactivó.

### Verificación y responsable
- **Fecha de esta documentación:** 2026-08-03.
- **Verificación de panel:** pendiente — no se realizó en esta sesión (sin acceso). Responsable de completarla: César Lozano (CEO, único operador con acceso al panel de Cloudflare de este dominio).
- **Próxima revisión:** 2026-11 (alineada con la revisión de `robots.txt` — ver comentario en el propio archivo).

### Instrucción de recuperación — si un rastreador queda bloqueado
1. Confirmar primero que no es un problema de `robots.txt` (correr `scripts/verify-robots.sh` — si falla en la comprobación de "sin líneas Disallow", el toggle gestionado se reactivó: apagarlo en Security Settings → Bot traffic).
2. Si `robots.txt` está limpio, entrar a Security → AI Crawl Control y buscar el rastreador en la tabla — columna "Bloquear rastreador" debe estar en off para los de entrenamiento/recuperación en vivo listados arriba.
3. Revisar Bot Analytics (mismo panel) para confirmar que el desbloqueo se tradujo en tráfico real del rastreador, no solo en el ajuste — ver T4 más abajo.
4. Documentar el cambio en esta misma tabla con fecha, para que quede trazable qué se tocó y cuándo — este archivo es el único registro con control de versiones de un ajuste que vive fuera del repositorio.

### Evidencia real observada — capturas de panel (2026-08-03/04)

> Capturas del dashboard de Cloudflare (`AI Crawl Control`), aportadas por el usuario durante esta sesión. Confirman en vivo varios puntos que antes estaban marcados "pendiente de verificar".

- **Plan de la zona:** Free (no Business/Enterprise). El feature AI Crawl Control y su API de lectura (`bot_management`, ver T9) están disponibles igual en este plan.
- **Toggle "robots.txt gestionado":** confirmado **apagado** en dos pantallas distintas (Información general y Señales) — consistente con la decisión de 2026-07-22.
- **Últimas 24h (snapshot, no línea base de 30 días):** 121 solicitudes de rastreadores de IA detectadas · 98 permitidas · 23 fallidas · ruta más rastreada `/sitemap.xml` (14 solicitudes exitosas) · **0 violaciones de `robots.txt`** (coherente con que el archivo actual no tiene ningún `Disallow`).
- **Solicitudes permitidas por organización (24h):** Meta 36 · Anthropic 25 · Google 17 · OpenAI 8 · Microsoft/Bing 8 · Perplexity 3 · **Common Crawl (CCBot) 1** · Apple 0 · ByteDance/Bytespider 0 · DuckDuckGo 0.

**⚠️ Conflicto detectado con la tabla de arriba:** la nota de 2026-07-22 marca a **Meta-ExternalAgent** y **CCBot** como bloqueados deliberadamente en AI Crawl Control. Pero el tráfico observado muestra **36 solicitudes permitidas de Meta y 1 de CCBot en las últimas 24h** — si el bloqueo fuera un bloqueo forzado real (edge/WAF), no deberían aparecer como "permitidas". Hipótesis más probable: ese "bloqueo" de 2026-07-22 nunca fue un bloqueo forzado — fue (como el resto de este mecanismo) una entrada en el `robots.txt` gestionado, es decir, una petición voluntaria que un rastreador no compliant simplemente ignora. Si esto es correcto, refuerza aún más el argumento del punto único de falla: ni siquiera el "bloqueo" documentado bloqueaba de verdad.
**No confirmado a falta de la pestaña "Seguridad" de AI Crawl Control** (columna "Bloquear rastreador" por bot) — el usuario no capturó esa pantalla. Acción pendiente: capturarla para cerrar esto con certeza.

- **Hallazgo fuera de alcance, para registro:** la pantalla "Señales → Disponibilidad de robots.txt" lista **14 hosts monitoreados**, incluyendo 2 subdominios con certificado SSL inválido (`526 Invalid SSL Certificate`, identificadores tipo hash) y `vault.digitalchangeadvisors.com` respondiendo `404`. No forman parte de esta tarea (no son el dominio principal ni están en el sitemap) — se documentan aquí como hallazgo de higiene de DNS/SSL a revisar aparte, no se investigaron ni se tocaron.
- **Artefactos:** las 4 capturas quedaron en `infraestructura/` (raíz del monorepo) — ruta distinta de `docs/infraestructura/` que proponía la tarea original. No las moví ni renombré sin confirmar contigo primero.

## Auditoría técnica adicional (2026-08-04) — title/description, JS, rutas, API Cloudflare

> Ejecutada al cierre del "Paquete 2" (entidad, citación e indexación). Cubre las 7 páginas del sitemap que no son papers de investigación (home, modelo-aria, returnai, nosotros, novela-returnai, art, blog) — los 10 papers ya se auditaron en el diagnóstico previo al Paquete 2.

### `title` / `meta description` — 15 de 17 páginas fuera de rango
Regla del proyecto: título 50–60 caracteres, descripción 120–155. **Solo 2 páginas cumplen `title`** (`/nosotros` 45, `/article-paper03` 53 — ambas cerca del límite inferior, no exactas) **y solo 2 cumplen `description`** (`/nosotros` 148, `/article-paper09` 141). Ninguna página cumple ambas. La mayoría de los títulos duplica o triplica el límite superior (ej. `/article-paper09` en 130, `/modelo-aria` en 105). **No corregido** — es reescritura de copy en 17 páginas, requiere su propia sesión de `/copy` + `/validar-marca`, no una corrección mecánica.

### Dependencia de JavaScript — las 7 páginas, contenido sustancial en HTML crudo
Verificado con `curl` (sin ejecutar JS), igual método que los 10 papers: `/` 2.027 palabras, `/modelo-aria` 2.434, `/returnai` 2.162, `/nosotros` 1.229, `/novela-returnai` 3.104, `/blog` 1.255, `/art` 1.568 — todas ya contadas en HTML servido, ninguna depende de inyección por JS. Único uso real de `innerHTML` fuera del formulario de newsletter: el filtro de temas de `/blog` (chips de categoría, conteo de "perspectivas visibles") — UI de filtrado, no oculta contenido de los artículos, que ya están en el HTML.

### Rutas con error — sin 404 reales; 2 saltos de redirección evitables
Se probaron los 22 enlaces internos únicos de las 17 páginas del sitemap. **Cero 404.** Dos enlaces todavía apuntan a rutas de directorio sin barra final (301 innecesario, mismo defecto ya identificado y pospuesto para las "9 rutas restantes"):
- `art/index.html` → enlaza a `/ara` (falta `/`)
- `novela-returnai/index.html` → enlaza a `/fundadores` (falta `/`)

### API de Cloudflare — reintento con token real (2026-08-04) — resultado mixto, confirmado en vivo

> Primer intento (mismo día, antes): sin token disponible, conclusión provisional "todo manual". El usuario proveyó un token de solo lectura vía archivo local temporal (nunca commiteado, borrado al cerrar la verificación) y se reintentó con acceso real.

- **Serie histórica de solicitudes por rastreador — SÍ funciona.** Dataset `httpRequestsAdaptiveGroups` (GraphQL de zona, endpoint `https://api.cloudflare.com/client/v4/graphql`). Confirmado en vivo con una consulta real (ver `scripts/cloudflare-bot-history.sh` para la query exacta). **Límite duro del plan Free: máximo 1 día por consulta** (`"zone ... cannot request a time range wider than 1d"` — error literal de la API al pedir 4 semanas). Granularidad: horaria (`datetimeHour`). Campos accesibles con este token: `userAgent`, `verifiedBotCategory`, `edgeResponseStatus`, `botScore`. **No accesible con este token:** `botManagementDecision` (error `authz`, "does not have access to the field") — es una restricción de plan/producto (Bot Management), no de permisos del token.
- **Estado de acción por rastreador (AI Crawl Control) y toggle "robots.txt gestionado" — NO accesibles con este token.** `GET /zones/{id}/bot_management` y `GET /zones/{id}/ai-audit/robots` devuelven `"Authentication error"` — el token no tiene el scope `Bot Management Read`. Esto es una limitación del **token**, no del plan (el token sí puede leer datos básicos de zona y GraphQL Analytics). Para resolverlo: generar un token nuevo con scope `Zone → Bot Management → Read` añadido.
- **Extracción automatizada — CORREGIDO (2026-08-10), esta nota estaba desactualizada.** `scripts/cloudflare-bot-history.sh` — lee `CLOUDFLARE_API_TOKEN`/`CLOUDFLARE_ZONE_ID` de variables de entorno (nunca hardcodeadas, nunca commiteadas), corre una vez al día (la ventana de 24h del plan Free lo obliga), acumula en `docs/infraestructura/rastreo-historico.csv`. **Sí está automatizado** vía `.github/workflows/cloudflare-bot-history.yml` (`schedule: cron '0 6 * * *'` + `workflow_dispatch` para corridas manuales) desde el 2026-08-05, con los secrets `CLOUDFLARE_API_TOKEN`/`CLOUDFLARE_ZONE_ID` configurados en el repo — **6 corridas `schedule` consecutivas exitosas confirmadas (2026-08-05 a 2026-08-10)**, cada una hace commit+push automático del CSV actualizado bajo el autor `cloudflare-bot-history-bot`. La única corrida fallida fue la primera (`workflow_dispatch`, 2026-08-04, antes de que los secrets quedaran configurados) — esperable, no es una falla activa. La frase anterior ("Pensado para cron/launchd diario; no está automatizado con un scheduler todavía") quedó obsoleta el mismo día en que se configuró el workflow y nadie actualizó esta nota — hallazgo de la auditoría de regresión del 2026-08-10 (ver `feedback_documentacion_desactualizada.md` en memoria).
- **Token usado en esta verificación:** de solo lectura, **caduca el 3 de octubre de 2026**. Al vencer: `scripts/cloudflare-bot-history.sh` empezará a fallar con `"Authentication error"` en cada corrida automática — el propio `check_token()` del script ya avisa dinámicamente en el log de Actions cuando falten ≤14 días (confirmado funcionando en las corridas reales, no solo en local) — hay que generar un token nuevo con el mismo scope mínimo (`Zone → Analytics → Read` para la serie histórica; añadir `Zone → Bot Management → Read` si en el futuro se resuelve el punto anterior) y actualizar el secret `CLOUDFLARE_API_TOKEN` del repo (Settings → Secrets and variables → Actions), no una variable de entorno local.

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
| "modelo ADA" | "Modelo ARIA" | Nomenclatura retirada; encontrada residual en `landings/DCA_Benchmark_BigFour_PromptLibrary.html` (corregido 2026-08-04) |
| "LADA" / "Comunidad LADA" | "LARIA" / "Comunidad LARIA" | Nomenclatura retirada; corregido en 9 archivos de texto visible (2026-08-04). El slug legado `comunidad-lada-2386` en la URL real de Skool NO se toca — depende de si Skool permite migrar la URL sin romper enlaces existentes (pendiente, verificación del usuario) |
| "Aceleración del Retorno de la Inteligencia Artificial" (expansión larga de ARIA) | "Aceleración del Retorno de la IA" | Cadena canónica única (confirmado 2026-08-04, decisión explícita: "de la IA", no la forma larga). Corregido en 4 archivos donde se había instalado la variante larga: `website/art`, `landings/art`, `landings/ai-return-test-landing`, `landings/novela` |
| "Liderazgo Digital" como nombre del Sprint 5 de la Solución ReturnAI | "Modernización del Liderazgo" | Nombre canónico ya fijado en la tabla de sprints de `../CLAUDE.md` — `website/returnai.html` nunca lo reflejó hasta 2026-08-04 |
| "Certificación de Champions internos" (cierre de Sprint 6, rol interno) | "Habilitación de Champions internos" | Distingue el rol interno de cierre de la Solución ReturnAI del programa comercial "Certificación de Champions ReturnAI" de Digital Change Academy — mismo sustantivo colisionaba dos ofertas distintas (corregido 2026-08-04, `modelo-aria.html`) |

### Confirmado NO retirado (re-auditado 2026-08-04)
- **LED / MATCH / PATH** como códigos de componente del Modelo ARIA (`Digital Team Leadership (LED)`, etc.) — explícitamente aprobados en este mismo archivo, sección "Datos canónicos de esta página" de `/modelo-aria`. Un inventario de nomenclatura los señaló por error como retirados; no lo son en este contexto metodológico.
- La cadena deletreada "Liderazgo de Equipos para la Era Digital" no aparece en ningún archivo — no había nada que corregir ahí.

### Pendiente sin término vigente documentado
- **"Visión 4.0"** en `sprint-roadmap-02-baip/index.html` (página interna `noindex`) — no existe hoy un término de reemplazo documentado en el canon. Dejado sin tocar hasta que se defina uno.

## Firma de Autoría — Ruth Jaramillo (canon vigente, agosto 2026)

- **Firma canónica:** `Socia fundadora · Neurociencias de la Adopción · Cocreadora del Modelo ARIA`
- **Versión corta, solo por restricción real de ancho** (ej. tarjetas compactas del catálogo de `/blog`): `Socia fundadora · Cocreadora del Modelo ARIA`
- **Formato:** separador punto medio `·` (U+00B7). "Neurociencias de la Adopción" siempre con N y A mayúsculas — nombre canónico de una de las tres disciplinas fundacionales del Modelo ARIA, sin variantes. "Modelo ARIA" siempre con ARIA en mayúsculas. "Socia fundadora": Socia con mayúscula inicial, fundadora en minúscula.
- **Aplica en:** páginas de artículo (byline, bloque de autor, bio, citas destacadas), índice del blog, `index.html` (rol visible, alt, JSON-LD `founder`), `llms.txt`.
- **Excepción deliberada — `/nosotros`:** esa página conserva `Directora — Digital Change Academy` en JSON-LD, `.label`, `alt` y `.founder__credit`. **No es una inconsistencia pendiente — es una decisión de posicionamiento del usuario.** Digital Change Academy es una marca distinta de Digital Change Advisors, con dominio propio (`digitalchangeacademy.org`), y su dirección es un cargo real que se mantiene visible en la ficha institucional. No normalizar esta diferencia sin autorización expresa del usuario.
- **Firmas relacionadas, también canónicas:**
  - César Lozano: `Socio fundador · CEO · Arquitecto del Modelo ARIA` (sin cambios)
  - Alejandro Ríos: `Consultor Asociado · Validación Empírica del Retorno`
- **Razón de fondo:** Digital Change Advisors es una firma de consultoría estratégica cuya categoría propietaria es la rentabilización de las inversiones en IA corporativa. No se posiciona en las categorías capacitación, formación, gestión del cambio, transformación cultural ni recursos humanos. Las firmas de autoría son un punto de contacto de alta visibilidad con lectores C-Level; una firma que ancle en cargo funcional o en la marca de formación traslada la percepción de la firma a una categoría ajena.
- **Vocabulario prohibido como descripción de rol o de lo que vende la firma:** transformación humana, transformación cultural, gestión del cambio, capacitación, formación, curso, taller, desarrollo de liderazgo, recursos humanos, gestión humana.
- **Excepción de nombre propio:** el componente MATCH conserva su nombre expandido "Modelo Ágil de Transformación Cultural y Humana". Es propiedad intelectual con denominación registrada, no vocabulario descriptivo, y no se modifica nunca.
- **Desglose canónico del Modelo ARIA:** 14 componentes propietarios = 3 instrumentos de diagnóstico (AIMT, AILS, AICD) + 7 frameworks ágiles + 4 herramientas de gestión. Los 7 frameworks se califican como "de rentabilización", nunca "de transformación humana".
- **Decisión editorial pendiente (no resuelta):** `article-paper09` interpela al CHRO en su titular y en su meta description. El encuadre hacia recursos humanos de esa pieza está identificado y a la espera de decisión editorial del usuario. No modificar sin instrucción expresa.

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
- **WebP:** `cwebp -q <80-82> -resize <ancho> 0 in.png -o out.webp` (binario libwebp descargable de `downloads.webmproject.org`) — **⚠️ no está instalado en este Mac (2026-08-05), y no hay Homebrew para instalarlo por línea de comandos.** No perder tiempo intentándolo de nuevo sin descargar primero el binario manualmente. Alternativa que sí funciona en este equipo, sin instalación de sistema: `python3 -m pip install --user Pillow`, luego `Image.open(in.png).convert('RGB').resize((w,h), Image.LANCZOS).save(out.webp, 'WEBP', quality=82)`. Usado y verificado en la tarjeta de `/arquetipos` en `blog.html` (2026-08-05).
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
- Botón: **"Leer Preludio"** (antes "Leer un extracto" — retirado, no reintroducir). Segundo botón: **"Acceso anticipado"** → `https://www.digitalchangeadvisors.com/novela-returnai` (antes "Ver en Amazon", luego "Ver más detalles" — ambos retirados; ver sección "El libro" — fine-tuning 2026-07-14 más abajo para el porqué y la jerarquía de botones actual).
- Patrón UI: panel lateral derecho deslizante (`#preludio-panel`, drawer oscuro `var(--carbon)`) — **no modal centrado**. Es el mismo componente ya usado en `website/novela-returnai/index.html` para "Leer el primer capítulo" (`.preludio-panel`, `.preludio-panel__drawer`, etc.) — mismo sistema de clases, reutilizado verbatim.
- **Contenido:** el Preludio completo de la novela ("El momento en que todo cambió" — Adalid Puentes recibe el ultimátum de 120 días de Ricardo Mendoza), no un resumen/teaser. Texto fuente entregado por el usuario 2026-07-10 — no parafrasear ni resumir si se vuelve a tocar esta sección.
- Estructura: `.preludio-panel__header` (tag "Preludio" + h2 título + fecha) → `.preludio-panel__body` con párrafos, `.preludio-panel__quote` (diálogos, borde oro) y `.preludio-panel__emphasis` (líneas dramáticas cortas, bold) intercalados, `.preludio-panel__list` (los 3 objetivos de los 120 días), cierre en `.preludio-panel__question` ("Esta es su historia. / Podría ser la tuya.")
- JS en `app.js` (apertura/cierre, focus trap, Escape, click en backdrop), CSS en `styles.css` (sección "Panel lateral — Extracto del libro")
- **Incidente que motivó el rediseño (2026-07-10):** el modal centrado original nunca tuvo JS de apertura/cierre en ningún commit — el botón no hacía nada desde que se construyó. Se reemplazó por este panel lateral, que ya estaba validado y en producción en `/novela-returnai`.

### Sección "El libro" — fine-tuning de cara al lanzamiento (2026-07-14)

- **Etiqueta de estado nueva**, apilada debajo de "El libro" y encima del H2 "ReturnAI": "Lanzamiento 22 de septiembre · Acceso anticipado abierto". Reutiliza la clase `.label` existente (misma tipografía/tamaño/tracking que "El problema" y "Fundamento intelectual") con un override de color en línea a `var(--gold)` — **no se creó ninguna clase CSS nueva**.
- **⚠️ No existe ningún patrón de eyebrow dorado en el sitio.** `.label` (usado por "El problema", "Fundamento intelectual" y "El libro") es **teal** (`var(--teal)`), no dorado — verificado en `styles.css`. Lo único en oro son acentos puntuales vía modificador `--gold` (ej. `.badge--gold`, sufijos de cifras en `.hero__cred`, `.anchor__num`). Si una instrucción futura (propia o de otra sesión) asume que existe un eyebrow dorado reutilizable "porque así se ve en el sitio", verificar primero contra la hoja de estilos — no lo hay como componente, solo como override puntual aplicado caso por caso.
- **Párrafo de descripción** cambiado a clave de pérdida: "Tu empresa invirtió en IA. ¿Tu equipo la está usando? ReturnAI es la novela donde un directivo lo descubre — y lo resuelve con método. Únete a los Lectores Fundadores antes del lanzamiento." Reemplaza el copy anterior ("El marco completo que usamos con más de 70 empresas...").
- **Jerarquía de botones invertida:** "Acceso anticipado" (antes "Ver más detalles", mismo destino `/novela-returnai`) pasa a `btn--primary` — es el CTA de conversión de esta sección. "Leer Preludio" pasa a `btn--secondary` — su función es contenido, no conversión, y no debe competir en peso visual con el primario. El orden en el DOM no cambió (Leer Preludio primero, Acceso anticipado segundo); solo las clases y el texto.
- **El home sigue sin enlazar directo a `/fundadores`** — solo enruta a `/novela-returnai`, que es quien enruta a la cohorte. Sin precio, sin "comprar", sin cuenta regresiva. Verificado por grep en todo `index.html` tras el cambio.
- **Barrido de archivos hermanos (2026-07-14):** verificado que ningún otro repo de la organización (`dca-website`, `dca-landings`, `dca-website-dev`, `dca-aplicativos-dev`, `art-landing`, `adopciondigitalacelerada-site`, `Landings-Funnel-ReturnAI`) tiene una copia activa/publicada de esta sección.

#### ⚠️ `dca-website-dev` — repo congelado, decisión pendiente (no urgente) — 2026-07-14

Tiene una réplica completa de la sección "El libro" (y probablemente del resto del home), pero **congelada en un snapshot de junio de 2026** — no refleja ningún cambio de producción desde entonces: botones "Leer un extracto"/"Ver en Amazon" (nomenclatura retirada), ambos con `href="#"` (anclas muertas, el mismo patrón de bug ya resuelto dos veces en `/novela-returnai` y `landings/novela-returnai-landing.html`), modal `#modal-extracto` con copy antiguo ("El 95% de las empresas invierte en IA. Solo el 5% genera retorno medible."), chapeau desactualizado.

- **Clasificación de riesgo:** repo **privado**, `has_pages: false`, sin `homepage` configurado, último push 2026-06-03 (+5 semanas sin actividad). **No hay exposición pública ni usuario real que pueda toparse con esos botones muertos** — a diferencia de `landings/novela-returnai-landing.html`, que sí estaba servida en una URL pública real. Por eso esto **no es deuda urgente** (nadie puede hacer clic en el enlace roto hoy), pero **sí es una decisión pendiente** — es la misma familia de problema estructural que la landing hermana: una copia paralela que puede divergir en silencio.
- **Riesgo latente:** si alguien retoma `dca-website-dev` en el futuro asumiendo que es un ambiente de desarrollo activo, hereda el modal viejo, el chapeau desactualizado y los enlaces de Amazon rotos sin saber que la referencia real cambió hace semanas.
- **No reparar** — sería mantenimiento sobre un entorno de desarrollo posiblemente abandonado, esfuerzo mal dirigido.
- **Antes de usar este repo para cualquier trabajo futuro, decidir explícitamente una de dos:** (a) actualizarlo desde cero contra el estado real de `website/` en el monorepo, o (b) archivarlo/eliminarlo. No retomarlo asumiendo que está al día.

Ver `project_novela_returnai_ctas_fix.md` en memoria para el detalle completo del barrido.

> **Distinción con el Caso Ancla real:** El caso de la novela (Adalid Puentes, $8.2M/11%→70%) es diferente del caso ancla documentado con cliente real (Gestora de inversiones, $3.2M → 19%→67%, +13 puntos). El homepage usa el caso de la novela. El caso real se usa en copy de /returnai, /nosotros y argumentación con dato de negocio. No existe `/casos` como página independiente.

### Sección Validación (stats bg-teal)
- `70+` Empresas intervenidas · `57+` Consultores certificados DCA · `17` Países · Comunidad LARIA
- Los 17 países = comunidad LARIA (Skool), **no** presencia de firma

### Líderes en homepage
- Solo 2: **César Lozano** (CEO) + **Ruth Jaramillo** (Socia fundadora · Neurociencias de la Adopción · Cocreadora del Modelo ARIA)
- El tercer líder (si aplica) va en `/nosotros`, no en homepage

### Bio Ruth Jaramillo (canónica)
- "Ingeniera Industrial, MBA EAFIT. Coach Profesional certificada por el Neuroscience and Coaching Institute (USA). 20+ años como ejecutiva empresarial. Cocreadora de los Frameworks Ágiles que fundamentan el Modelo ARIA. Autora de «Sembrando Semillas de Vida» y co-autora del libro de divulgación científica «Mentalidad Digital»."
- **No incluir** "Transformación Humana 4.0" — eliminado en fine-tuning

### Garantía (copy canónico) — actualizado 2026-08-04, sustituye la forma anterior
- **Forma canónica completa, única:** "Retorno documentado en 120 días, con garantía contractual de re-intervención si no se alcanza."
- **Regla:** la cláusula de garantía ("con garantía contractual de re-intervención si no se alcanza") **nunca se separa** de la cifra "120 días" en ninguna afirmación propia de DCA sobre su propio servicio (home, `llms.txt`, JSON-LD `Service` de `/modelo-aria` y `/returnai`). Si la cifra aparece sola en ese tipo de afirmación, es una regresión — corregirla.
- **No aplica** a: citas textuales de testimonios, encabezados de casos de estudio con datos de un cliente específico, la trama de la novela ReturnAI, ni badges numéricos que ya están acompañados de su propia explicación en prosa inmediata (ej. "Bridge" de `/modelo-aria` y `/`). Esos son hechos narrados o históricos, no la promesa de servicio de DCA.
- **Forma anterior, retirada:** "Retorno documentado en 120 días. Si no se logra en ese plazo, continuamos hasta documentarlo." — sustituida en `index.html` (chapeau, `og:description`, sección de garantía), `llms.txt` (no existía ahí, se añadió) y el JSON-LD `Service` de `modelo-aria.html`/`returnai.html` (no tenían la cláusula).

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
- Ruth: "Socia fundadora · Neurociencias de la Adopción · Cocreadora del Modelo ARIA — Ingeniera Industrial, MBA EAFIT, Coach certificada NCI."
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
