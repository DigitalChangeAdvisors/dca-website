# Especificación · Sistema de Autoridad Personal
## Digital Change Advisors · Versión 2.0 · Septiembre 2026

**Documento de trabajo para Claude Code.** Especificaciones completas de cuatro frentes que deben quedar articulados como un solo sistema: la página canónica de autor, el saneamiento de la página de inicio, el módulo de autor en el blog Perspectivas, y la revisión de los perfiles de LinkedIn de los dos socios.

**Todos los datos de este documento están confirmados por el cliente. No quedan campos pendientes de decisión.** Cualquier dato que no aparezca aquí debe preguntarse, nunca inferirse.

Sitio: `https://digitalchangeadvisors.com`

---

## 0. Antes de tocar código

Ejecuta y reporta antes de proponer cambios:

1. Stack del sitio: framework, CMS, hosting, sistema de rutas y de estilos.
2. Rutas existentes y estructura actual del menú principal.
3. Inventario de artículos del blog Perspectivas: URL, título, fecha y firma actual.
4. Estado de los datos estructurados existentes (JSON-LD, Open Graph).
5. Dónde viven los tokens de marca.
6. **Verificación de la ruta `/mapa`:** confirmar si existe, si carga y hacia dónde dirige. Es la dirección impresa en el libro y no puede modificarse. Reportar su estado exacto.
7. **Verificación del formulario del instrumento** en `https://tally.so/r/Np6e5W`: confirmar si captura empresa, sector, cargo y correo corporativo. Si no captura esos cuatro campos, reportarlo como bloqueante crítico.

No modifiques nada hasta reportar lo anterior.

---

## 1. Objetivo y principio rector

Este sistema no se construye para ganar audiencia ni para posicionamiento en buscadores tradicionales. Se construye para **sobrevivir a una verificación**.

La secuencia real es: la firma envía una invitación en frío a un ejecutivo, ese ejecutivo o alguien de su equipo busca el nombre en un buscador o se lo pregunta a un modelo de lenguaje, y con lo que encuentre decide si concede la reunión.

**Consecuencias de diseño que gobiernan todo el documento:**

- La página de autor es una **página de evidencia**, no una biografía.
- Toda afirmación publicada debe ser comprobable por un tercero.
- La consistencia literal de las cadenas de texto entre plataformas importa más que la variedad estilística. Repetir la misma frase palabra por palabra es el objetivo, no un defecto.
- La llamada a la acción es siempre **medirse**, nunca contactar ni comprar el libro.
- **Nunca afirmar un resultado que no se puede documentar.** La firma hoy puede probar la precisión de su diagnóstico, no todavía el retorno obtenido en un cliente de inteligencia artificial. La comunicación debe reflejar esa distinción con exactitud.

---

## 2. Activos canónicos

Cadenas literales. **No se parafrasean, no se acortan, no se adaptan por canal.**

### 2.1 Identidad

```
NOMBRE_CANONICO_1: César Lozano
DESCRIPTOR_CORTO_1: Creador del Modelo ARIA · Rentabilización de inversiones en inteligencia artificial

NOMBRE_CANONICO_2: Ruth Jaramillo
DESCRIPTOR_CORTO_2: Socia fundadora de Digital Change Advisors · Adopción sostenible de la inteligencia artificial
```

Ambos nombres y descriptores deben aparecer sin variación en la web, en el módulo de autor, en LinkedIn y en cualquier ficha externa. Sin iniciales, sin diminutivos, sin variantes de orden.

### 2.2 Declaración de posición · Bloque de apertura de `/autor/cesar-lozano`

```
César Lozano es un consultor colombiano especializado en la rentabilización de
inversiones corporativas en inteligencia artificial y creador del Modelo ARIA.
Durante treinta años ha acompañado a más de setenta empresas a través de cuatro
olas tecnológicas sucesivas, y sostiene que la adopción falla siempre por la
misma causa: la última milla entre la herramienta y el flujo diario de trabajo.
```

### 2.3 Definición de la fuga · Bloque de problema

```
La fuga de productividad de la inteligencia artificial es la distancia entre los
empleados que reportan ser más productivos con IA y las empresas que no
encuentran ese efecto en su EBIT. Esa fuga es medible, tiene causas humanas
identificables y se cierra en ciento veinte días.
```

### 2.4 Compromiso · Bloque de método

```
Trabajamos contra resultados: documentamos el retorno en ciento veinte días o
volvemos a intervenir sin costo adicional.
```

### 2.5 Ancla externa · Uso obligatorio con ficha completa

```
McKinsey, "The state of AI in 2026: On the road to ROI", 25 de agosto de 2026.
Encuesta a 1.719 ejecutivos en 97 países, en campo entre el 4 de mayo y el 8 de
junio de 2026.

Datos citables:
- 80 % reporta que la IA mejoró su productividad individual.
- 37 % atribuye al menos algún impacto en el EBIT de su organización.
- 6 % atribuye un impacto de 5 % o más del EBIT y lo califica como significativo.
- 44 % escala IA en toda la empresa, frente a 38 % el año anterior, sin que la
  proporción con impacto en EBIT haya variado.
```

**Reglas de uso, sin excepción:**

- Nunca escribir "el 43 % de las empresas fuga productividad". La formulación correcta es "ocho de cada diez frente a menos de cuatro de cada diez".
- Nunca usar el verbo *confirmar* entre McKinsey y un dato de la novela. McKinsey **establece** el fenómeno; la novela lo **dramatiza**; el estudio lo **mide** en Colombia.
- Toda cita incluye firma, título, fecha y tamaño de muestra.

### 2.6 Instrumento · Par canónico

```
AI RETURN TEST
Preguntas: 55
Duración: menos de 30 minutos
URL canónica: https://digitalchangeadvisors.com/art/
URL de entrada desde el libro: https://digitalchangeadvisors.com/mapa
Formulario: https://tally.so/r/Np6e5W
```

**Cadena canónica de uso:** `55 preguntas · menos de 30 minutos`

> **Corrección obligatoria.** La página `/art/` declara actualmente 25 minutos en múltiples lugares, incluido un dato destacado rotulado como tiempo exacto de aplicación, y no menciona el número de preguntas. El libro impreso declara 55 preguntas y 30 minutos, y es inmutable. **La web cede.** Reemplazar toda aparición de "25 minutos", "25′" y equivalentes por el par canónico. Reportar cada instancia corregida.

> **Regla de rutas.** `/mapa` es una entrada diferenciada, deliberada, para identificar a quienes llegan por el libro. No debe eliminarse, no debe unificarse con `/art/` y no debe perder su trazabilidad. Si redirige, la redirección debe conservar el parámetro de origen.

### 2.7 Autoría verificable · Lista completa y confirmada

**Línea de negocio (7 títulos anteriores + la novela):**

| # | Título | Año | Registro | Disponibilidad |
|---|---|---|---|---|
| 1 | La Otra Vía Para La Competitividad | 2001 | ISBN 978-958-33-2700-1 | Amazon y sitio DCA |
| 2 | Cómo Liderar A Las Nuevas Generaciones | 2015 | ISBN 978-958-59120-1-4 | Amazon y sitio DCA |
| 3 | ¿Qué Hacer Con Estos Jóvenes? | 2016 | ISBN 978-958-59120-3-8 | Amazon y sitio DCA |
| 4 | Líderes GEFEs | 2017 | ISBN 978-958-59120-2-1 | Amazon y sitio DCA |
| 5 | Las 6 Claves Para Aprovechar La Disrupción Digital | 2019 | Edición propia | Sitio DCA |
| 6 | Cultura Digital Para Triunfar En La Industria 4.0 | 2021 | Edición propia | Sitio DCA |
| 7 | Mentalidad Digital *(coautoría con Ruth Jaramillo)* | 2023 | Edición propia | Sitio DCA |
| 8 | ReturnAI | 2026 | ISBN 978-628-02-4464-8 | Amazon, Apple Books, Google Play Books, Kobo, sitio DCA |

**Fuera de la línea de negocio (no se despliegan):** tres títulos sobre liderazgo personal — *El Mundo Ya Tiene Dueño*, *La Vida Es Una Maratón* y *Revive Tu Pasión*. Se mencionan en una sola línea de cierre, sin desplegar títulos.

**Cadena de cierre autorizada:**
```
Es además autor de tres títulos sobre liderazgo personal.
```

**Reglas de presentación:**

- Los títulos 5, 6 y 7 se etiquetan explícitamente como **edición propia**. La diferencia se declara, no se disimula. Una lista donde unos títulos muestran registro y otros lo omiten sin explicación es lo que un verificador castiga.
- La coautoría de *Mentalidad Digital* se atribuye en ambas páginas de autor.
- **Verificación aritmética publicable:** siete títulos anteriores de la línea más tres de liderazgo personal suman diez libros anteriores a ReturnAI. Esta cifra coincide con la afirmación del posfacio de la novela y es verificable. No modificarla.

### 2.8 Testimonios verificados

Tres testimonios reales, de personas reales, con autorización expresa del cliente para publicar nombre, cargo, empresa, fotografía y texto. Los textos son de los propios ejecutivos.

```
1. Rubén Darío Cañas A. · CEO · Subocol – Grupo SURA
2. Julián Hurtado · CEO · Susuerte S.A.
3. Diego Parra · CIO · SUMMA – Grupo Argos
```

**Regla crítica de uso.** Estos testimonios atestiguan **la precisión del diagnóstico**, no un retorno obtenido. No pueden presentarse bajo rótulos de resultados, de retorno, de ROI ni de casos de éxito. El rótulo autorizado para la sección es **validación de campo del diagnóstico** o equivalente.

Debe conservarse la nota al pie existente que aclara que corresponden a líderes que aplicaron el diagnóstico durante la fase de validación del instrumento y que sus nombres, cargos y empresas son verificables públicamente.

### 2.9 Caso propio · Aplicación del método a la operación de la firma

```
Situación: producción de un libro tomaba 18 meses en promedio en los diez
títulos anteriores.
Intervención: co-creación con inteligencia artificial aplicando el Modelo ARIA.
Resultado: 16 semanas.
Factor de aceleración: 4,5x.
```

Es el único caso de rentabilización de una inversión en IA con línea base, intervención y resultado medido que la firma puede exhibir hoy. Se presenta como tal, sin ampliarlo.

---

## 3. Frente 1 · Páginas canónicas de autor

### 3.1 Rutas y navegación

```
/autor                      → página índice de autores
/autor/cesar-lozano         → construir en esta fase
/autor/ruth-jaramillo       → especificada, se construye en fase 2
```

- **Entrada en el menú principal:** rótulo `El autor del Modelo ARIA`, apuntando a `/autor/cesar-lozano`.
- Posición sugerida en el menú: después de la entrada del Modelo, antes de Perspectivas. Ajustar según la estructura real reportada en la Fase 1.
- La página índice `/autor` se crea desde ahora, aunque solo liste un autor, para evitar redirecciones cuando se sume la segunda página.
- **No debe existir ningún bloque personal en el encabezado de la página de inicio.**

### 3.2 Estructura de la página de César Lozano

Ocho bloques, en este orden exacto.

**Bloque 1 · Declaración de posición.** Cadena 2.2 literal. Primer texto sustantivo de la página, dentro del primer tercio del HTML renderizado. Encabezado de nivel 1 con el nombre canónico. Fotografía sin desplazar el texto por debajo del pliegue.

**Bloque 2 · La credencial.** Cifras verificables como patrón observado, nunca como caso comercial vigente:

- 30 años de trayectoria
- Más de 100 proyectos ejecutados
- 70 empresas intervenidas
- Cerca de 25.000 ejecutivos formados
- 4 olas tecnológicas sucesivas acompañadas

Rejilla de cifras con etiqueta corta. Sin adjetivos. Sin nombres de empresas cliente más allá de los tres testimonios autorizados.

**Bloque 3 · El problema.** Cadena 2.3, seguida del ancla McKinsey con ficha completa según 2.5. Es el bloque con mayor probabilidad de ser citado por un modelo de lenguaje; su redacción no se altera.

**Bloque 4 · Autoría verificable.** Tabla de la sección 2.7, con etiquetas de edición propia donde corresponde, coautoría atribuida, y la línea de cierre sobre los tres títulos de liderazgo personal. Enlaces a las fichas de compra donde existan.

**Bloque 5 · El caso propio.** Contenido de la sección 2.9, con estructura de caso: situación, intervención, resultado medido.

**Bloque 6 · El instrumento.** Presentación del AI Return Test con el par canónico `55 preguntas · menos de 30 minutos` y enlace a `/art/`.

**Bloque 7 · Lo que no hacemos.** Desmarque explícito, redactado en positivo sobre el interlocutor y no en negativo sobre otras disciplinas. Debe dejar claro que el trabajo no es capacitación, gestión del cambio, liderazgo, cultura ni gestión humana, y que el interlocutor es el responsable del resultado de negocio. Función: filtrar al interlocutor equivocado antes de la reunión.

**Bloque 8 · Cómo se trabaja y llamada a la acción.** Cadena 2.4 sobre la garantía de ciento veinte días. Cierra con una única llamada a la acción hacia la medición.

Prohibido en este bloque: formulario de contacto genérico, enlace de compra del libro, invitación a agendar sin medición previa.

### 3.3 Reglas de redacción

- **Tercera persona en toda la página.** Un modelo cita con más facilidad "César Lozano es el creador del Modelo ARIA" que "soy consultor desde hace treinta años".
- **Nombre completo y descriptor en la primera frase.** Cerca de la mitad de las citas que hacen los modelos generativos proviene del primer tercio del contenido.
- **Cifras concretas en lugar de adjetivos.** Prohibidos: reconocido, líder, experto de talla, referente, apasionado, visionario.
- Ninguna afirmación no comprobable. Sin superlativos, sin lenguaje motivacional.

### 3.4 Datos estructurados

JSON-LD de tipo `Person` en cada página de autor:

- `name`, `jobTitle`, `description` (declaración de posición), `nationality`
- `worksFor` enlazado a `Organization` de Digital Change Advisors
- `knowsAbout` con los términos de categoría
- `sameAs` con las URL verificadas: LinkedIn, fichas de autor en plataformas de venta
- `url` apuntando a la página canónica
- `author` de los libros listados, con `Book` e `isbn` donde exista

`Organization` en la página de inicio, con `founder` enlazando a ambos socios.

### 3.5 Página de Ruth Jaramillo · Fase 2

Misma plantilla, mismos ocho bloques, ángulo complementario: por qué la adopción falla en las personas y qué la hace sostenible en el tiempo. No es una réplica ni una biografía corta de equipo. Se construye después del lanzamiento, con ángulo editorial aprobado por el cliente. **No construir en esta fase.**

### 3.6 Criterios de aceptación

- [ ] Carga por debajo de 2 segundos en conexión estándar.
- [ ] La declaración de posición aparece en el primer tercio del HTML renderizado.
- [ ] El JSON-LD valida sin errores.
- [ ] Todas las cifras publicadas tienen fuente o registro.
- [ ] El texto es legible sin JavaScript.
- [ ] Existe una sola llamada a la acción y apunta a la medición.
- [ ] El rótulo del menú es `El autor del Modelo ARIA`.
- [ ] La ruta índice `/autor` existe aunque liste un solo autor.

---

## 4. Frente 2 · Saneamiento de la página de inicio

### 4.1 Retiro del bloque de evidencia ilustrativo

En la página de inicio existe un bloque de evidencia con una cifra de inversión, cifras de uso antes y después de la intervención, puntos de retención de clientes y un testimonio entrecomillado atribuido a un Director de Transformación Digital de una gestora de inversiones.

**Ese caso es una composición ilustrativa. El cliente autoriza su retiro.**

Debe eliminarse por completo: texto, cifras, testimonio, atribución y cualquier metadato asociado.

### 4.2 Sustitución

**La posición en el recorrido se conserva.** El lugar donde está el bloque es correcto: después de la declaración de categoría y antes de la llamada a la acción. Es donde el visitante que ya entendió la propuesta busca la prueba de que es real.

**La forma cambia.** No replicar el formato extenso de la página del instrumento:

- Tres tarjetas en fila con fotografía, nombre, cargo, empresa y **una sola línea de testimonio** por persona, extraída del texto autorizado sin alterarlo.
- Enlace a la versión completa en `/art/`.
- Rótulo de sección: **validación de campo del diagnóstico**. Nunca evidencia de resultados, casos de éxito ni retorno documentado.
- Conservar la nota al pie sobre la fase de validación y la verificabilidad pública de nombres, cargos y empresas.

**Razón del cambio de forma:** en `/art/` los testimonios hablan del instrumento a alguien que ya lo está considerando. En la página de inicio cumplen otra función, que es un chequeo de credibilidad de cinco segundos sobre la firma. Además, replicar el texto largo en dos rutas hace que el mismo contenido compita consigo mismo.

**Advertencia de honestidad.** El bloque que sale afirmaba un resultado; los testimonios que entran atestiguan la precisión de un diagnóstico. Son cosas distintas y el reemplazo no puede disimularlo. La página de inicio pierde su afirmación de resultado, y debe perderla, porque la firma todavía no tiene un caso de retorno documentado en inteligencia artificial. Se recupera cuando exista.

---

## 5. Frente 3 · Módulo de autor en Perspectivas

### 5.1 Qué es

Bloque compacto y persistente al pie de cada artículo del blog y de cada documento descargable.

**Contenido, en este orden:**

1. Fotografía del autor, circular o cuadrada pequeña.
2. Nombre canónico, en negrita.
3. Descriptor corto, **literal y sin variaciones entre artículos**.
4. Una línea de contexto de dos frases máximo, reutilizable.
5. Enlace a la página canónica de autor, con texto de enlace fijo.

La repetición literal de la misma cadena en decenas de páginas es lo que consolida la asociación entre el nombre y la categoría. Es deliberado.

### 5.2 Implementación

- Componente reutilizable, no texto copiado en cada artículo.
- Debe aceptar el autor como parámetro para soportar a los dos socios.
- Debe renderizarse en el HTML servido, no inyectarse solo por cliente.
- Añadir `author` al marcado estructurado de cada artículo, enlazado por `sameAs` a la página canónica.

### 5.3 Corrección de firma · Acción confirmada

El artículo firmado por **Alejandro Ríos**, presentado como consultor asociado, corresponde a un recurso narrativo de la novela y no a una persona real.

**Acción autorizada: el artículo se conserva y su firma pasa a César Lozano.**

Eliminar además toda referencia a Alejandro Ríos como miembro del equipo, consultor asociado o integrante de cualquier red profesional, en ese artículo y en cualquier otra parte del sitio. Reportar todas las instancias encontradas.

### 5.4 Auditoría de artículos existentes

Reportar en tabla:

| Artículo | URL | Firma actual | Tiene módulo de autor | Dato propio en el primer tercio | Acción requerida |

Ejecutar:

1. Añadir el módulo de autor a todos los artículos que no lo tengan.
2. Aplicar la corrección de firma de la sección 5.3.
3. Marcar los artículos sin dato propio en su primer tercio. **No reescribirlos**; solo listarlos con recomendación.

### 5.5 Guía editorial para artículos futuros

Documentar en el repositorio:

- El dato propio y la afirmación central van en el primer tercio del texto.
- El desarrollo argumental va después.
- Toda cifra de tercero se cita con firma, título, fecha y tamaño de muestra.
- Todo artículo lleva módulo de autor y firma de una persona real.

---

## 6. Frente 4 · Perfiles de LinkedIn

Claude Code **no puede editar LinkedIn**. El entregable es un archivo con el contenido exacto listo para pegar.

Archivo a generar: `linkedin/perfiles-actualizados.md`

### 6.1 Contenido a producir para cada socio

Ambos perfiles se producen en esta fase, aunque la página de Ruth Jaramillo se construya después.

- **Titular:** debe contener el descriptor corto canónico. Máximo 220 caracteres.
- **Acerca de:** abre con la declaración de posición correspondiente, adaptada mínimamente a primera persona; sigue con la definición de la fuga y el compromiso de ciento veinte días; cierra con la llamada a la acción hacia la medición. Máximo 2.600 caracteres.
- **Experiencia actual:** cargo, empresa y descripción alineada con la categoría. Sin vocabulario de capacitación ni de gestión humana.
- **Sección destacada:** enlaces a la página canónica de autor, al AI Return Test y a la novela.
- **URL personalizada:** verificar que sea legible y estable.

Para Ruth Jaramillo, usar el descriptor 2.1 y atribuir la coautoría de *Mentalidad Digital*.

### 6.2 Verificación de coherencia de entidad

Lista de comprobación de que la misma cadena de nombre y el mismo descriptor aparecen sin variación en:

- Página canónica de autor
- Módulo de autor del blog
- Perfil personal de LinkedIn
- Página de empresa en LinkedIn
- Fichas de autor en Amazon, Apple Books, Google Play Books y Kobo
- Directorios profesionales o de conferencistas

Reportar toda discrepancia. Un perfil que dice "consultor en transformación digital" y otro que dice "creador del Modelo ARIA" producen dos entidades borrosas en lugar de una nítida.

---

## 7. Prohibiciones absolutas

1. **No publicar ninguna afirmación no comprobable.**
2. **No usar casos, cifras, testimonios o personajes ilustrativos como si fueran reales.** Si aparece cualquier otro bloque de evidencia que no corresponda a un cliente identificable, reportarlo y detenerse.
3. **No firmar contenido con nombres de personas que no existen.**
4. **No presentar los tres testimonios verificados bajo rótulos de resultado, ROI, retorno o caso de éxito.** Atestiguan precisión de diagnóstico.
5. **No usar personajes ni empresas de la novela ReturnAI en materiales de marketing sin marca explícita de ficción.** Fórmula autorizada: `La cifra es ficción. El patrón no.`
6. **Vocabulario prohibido en toda la web:** capacitación, formación, entrenamiento, gestión del cambio, cambio cultural, liderazgo como servicio, desarrollo de talento, recursos humanos, gestión humana.
7. **No incluir enlaces de compra del libro como llamada a la acción principal** en ninguna página del sistema de autoridad.
8. **No exponer los reactivos de los instrumentos de diagnóstico, sus algoritmos de puntuación ni sus baremos de interpretación.**
9. **No eliminar ni unificar la ruta `/mapa`.**

---

## 8. Fuera de alcance

No abordar en este trabajo, aunque se detecte:

- El solapamiento entre el AI Return Assessment publicado a 5.000 dólares y la Auditoría de Fuga de Productividad prevista entre 8.000 y 12.000. Es una decisión de portafolio pendiente del cliente. **Reportarlo si se encuentra, no resolverlo.**
- Rediseño visual del sitio más allá de lo necesario para los bloques especificados.
- Construcción de la página de Ruth Jaramillo.

---

## 9. Entregables esperados

1. Reporte de Fase 1 con stack, rutas, inventario de artículos, estado de `/mapa` y del formulario.
2. Páginas `/autor` y `/autor/cesar-lozano` implementadas con datos estructurados.
3. Página de inicio saneada: bloque ilustrativo retirado y sustituido según la sección 4.
4. Corrección del par canónico del instrumento en `/art/`, con reporte de instancias corregidas.
5. Componente de módulo de autor desplegado en todos los artículos.
6. Corrección de la firma del artículo de Alejandro Ríos y eliminación de sus menciones.
7. Tabla de auditoría de artículos, con acciones ejecutadas y pendientes.
8. Archivo `linkedin/perfiles-actualizados.md` con contenido listo para pegar.
9. Lista de verificación de coherencia de entidad con discrepancias reportadas.
10. Guía editorial versionada en el repositorio.

---

## Anexo · Tokens de marca

Fuente de verdad: Brand Book Digital Change Advisors 2026, versión 1.0.

| Token | Valor | Uso |
|---|---|---|
| Teal Corporativo | `#2E8B76` | Subtítulos, acentos estructurales, encabezados de tabla |
| Oro Estratégico | `#A48111` | Detalle, líneas de título, antetítulos. Siempre sólido, sin opacidad |
| Carbón DCA | `#1E2A38` | Tipografía de cuerpo y contraste alto |
| Platino Tecnológico | `#DFE3E1` | Separadores, bordes, fondos alternos |
| Terracota | `#C2593F` | Reservado a alertas moderadas |
| Tipografía display | Marcellus | Títulos |
| Tipografía de cuerpo | Montserrat | Texto corrido, listas, tablas |
| Ratio cromático | Predominio de blanco, teal en acentos, oro en detalle | Toda la web |

**Tono de voz:** diagnóstico sin condescendencia, claridad ejecutiva, sin lenguaje motivacional ni promesas sin evidencia. El interlocutor es un ejecutivo que responde por un resultado de negocio.
