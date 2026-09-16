# Protocolo de Reencuadre Autoral · Blog Perspectivas
## Digital Change Advisors · Septiembre 2026

**Documento de trabajo para Claude Code.** Define la intervención quirúrgica que debe aplicarse, artículo por artículo, a las perspectivas publicadas en `https://digitalchangeadvisors.com/blog`.

> **Naturaleza de la intervención: aditiva y de reordenamiento. NO es una reescritura.**
> Ningún párrafo del cuerpo argumental se reescribe, se acorta ni se elimina. Ninguna referencia externa se retira. Ningún mecanismo de cierre se modifica. Lo que cambia son metadatos, etiquetas, orden de bloques y encabezados, más tres adiciones breves y acotadas por artículo.

---

## 1 · Problema que resuelve

El desarrollo argumental de las perspectivas está equilibrado: la tesis de Digital Change Advisors ocupa varias secciones, define vocabulario propio y nombra componentes del Modelo ARIA.

El desequilibrio está en los bordes. La firma externa citada ocupa casi todas las posiciones que un motor generativo lee primero, y esas posiciones no son evidentes al leer el artículo completo.

Diagnóstico verificado sobre `article-paper16`:

| Posición estructural | Ocupante actual |
|---|---|
| Etiqueta de categoría | `Gobernanza · Bain` |
| Título de pestaña | Hallazgo de Bain |
| Meta descripción | Abre con "Bain midió a 951 compañías" |
| `og:description` | Abre con "Bain midió que solo el 7%" |
| Bajada bajo el titular | Cita a Bain con enlace saliente en las primeras 60 palabras |
| Puntos clave | 3 de 4 son de la fuente externa |
| Tarjeta en el índice del blog | Abre con la fuente externa |
| Primera sección de contenido | Metodología y cifras de la fuente externa |

En el primer tercio del documento la firma externa aparece en siete posiciones estructurales y Digital Change Advisors en dos.

## 2 · Principio rector

**No se disputa el dato. Se disputa la pregunta.**

La firma externa es dueña legítima de su cifra porque la midió, y siempre lo será. Digital Change Advisors no compite por preguntas factuales del tipo *qué porcentaje de empresas opera agentes autónomos*.

Compite por preguntas interpretativas y causales, donde el motor cita a quien ofrece la explicación con nombre propio:

- ¿Por qué la autonomía no cierra la brecha entre productividad y resultado?
- ¿Qué es la fuga de productividad de la IA?
- ¿Qué debe existir para que delegar una decisión produzca resultado y no solo velocidad?

Esas respuestas ya están escritas en los artículos. Están colocadas donde el motor las lee tarde.

**Regla transversal que gobierna todo el protocolo:** toda afirmación de Digital Change Advisors debe ser una frase completa con sujeto nombrado. `Digital Change Advisors sostiene que la autonomía amplía la fuga porque…` sobrevive a la extracción fuera de contexto. `Por eso la amplía` no sobrevive a nada.

---

## 3 · Alcance

### 3.1 Artículos a intervenir

Dieciséis perspectivas. **`article-paper00` queda excluido por completo: no se toca ni un carácter, ni sus metadatos, ni su tarjeta en el índice.** Está anclado y citado en la novela ReturnAI.

| # | Ruta | Fuente externa | Tipo | Autor |
|---|---|---|---|---|
| 1 | `/article-paper16` | Bain (951 compañías) | A | César Lozano |
| 2 | `/article-paper15` | BCG (11.749 trabajadores) | A | Ruth Jaramillo |
| 3 | `/article-paper14` | 750 directores financieros | A | Ruth Jaramillo |
| 4 | `/article-paper13` | Bain (951 empresas) | A | César Lozano |
| 5 | `/article-paper12` | CEPAL (4.500 empresas) | A | Ruth Jaramillo |
| 6 | `/arquetipos/` | Ninguna · marco propio | B | Ruth Jaramillo |
| 7 | `/article-paper11` | Cuatro bancos centrales | A | César Lozano |
| 8 | `/article-paper10` | McKinsey (1.719 organizaciones) | A | César Lozano |
| 9 | `/article-paper09` | Marco propio | B | Ruth Jaramillo |
| 10 | `/article-paper08` | Mixto | A o B según auditoría | Ruth Jaramillo |
| 11 | `/article-paper07` | McKinsey (1.993 organizaciones) | A | César Lozano |
| 12 | `/article-paper03` | MIT Project NANDA | A | Ruth Jaramillo |
| 13 | `/article-paper06` | Stanford AI Index | A | César Lozano |
| 14 | `/article-paper01` | Mixto | A o B según auditoría | César Lozano |
| 15 | `/article-paper04` | Mixto | A o B según auditoría | César Lozano |
| 16 | `/article-paper05` | Mixto | A o B según auditoría | Ruth Jaramillo |
| 17 | `/article-paper02` | Marco propio | B | César Lozano |

> La columna de tipo es una hipótesis a validar en la auditoría. **Tipo A** = artículo anclado en una fuente externa que hoy domina los bordes. **Tipo B** = marco propietario sin fuente externa dominante. El tipo determina qué intervenciones aplican.

### 3.2 Prohibido tocar

- `article-paper00`, en cualquier forma.
- Cualquier párrafo del cuerpo argumental: no se reescribe, no se acorta, no se resume.
- Las referencias, enlaces y atribuciones a fuentes externas: no se retiran ni se debilitan.
- Los mecanismos conductuales de cierre: la sección de qué cambia en la gestión, la síntesis, el bloque de la pregunta que el artículo no responde, la cita destacada y la llamada al AI Return Test.
- El módulo de autor, el bloque de boletín, el bloque del test y los artículos relacionados al pie.
- Las cifras publicadas: ninguna se corrige, se redondea ni se actualiza.

---

## 4 · Las siete intervenciones

### Intervención 1 · Reetiquetar la categoría
**Aplica a: Tipo A**

La etiqueta actual mezcla taxonomía propia con la firma externa: `Gobernanza · Bain`.

**Acción:** la etiqueta conserva solo la taxonomía propia y añade la marca de autoría. La fuente se declara en un elemento separado e inmediatamente visible.

```
ANTES:  Gobernanza · Bain
DESPUÉS: Gobernanza · Tesis DCA
         + elemento independiente: «Fuente analizada: Bain, 2026»
```

El elemento de fuente analizada usa una clase distinta de la etiqueta de categoría, con jerarquía visual menor. La transparencia se conserva íntegra; la taxonomía deja de anunciar que el artículo trata sobre la firma externa.

Aplicar el mismo cambio en la miga de pan.

### Intervención 2 · Invertir el eje de los metadatos
**Aplica a: Tipo A y Tipo B**

Es la intervención de mayor impacto por unidad de esfuerzo y es invisible para el lector.

Cuatro campos: `<title>`, `meta description`, `og:title`, `og:description`. En los cuatro, la afirmación de Digital Change Advisors va primero y la fuente externa va como respaldo.

**Ejemplo trabajado sobre `article-paper16`:**

```
TITLE ANTES:
Solo el 7% opera agentes de IA autónomos en producción | DCA

TITLE DESPUÉS:
La autonomía de los agentes no cierra la fuga de productividad: la amplía | DCA
```

```
DESCRIPTION ANTES:
Bain midió a 951 compañías: solo el 7% opera agentes plenamente autónomos.
La autonomía no cierra la fuga de productividad de la IA — la amplía.

DESCRIPTION DESPUÉS:
La autonomía de los agentes de IA no cierra la brecha entre productividad y
resultado: la amplía. Lectura de Digital Change Advisors sobre la medición de
Bain a 951 compañías.
```

**Reglas:**
- La afirmación propia ocupa la primera oración completa.
- La fuente externa se nombra en la segunda oración, siempre con su cifra de muestra.
- `title` por debajo de 65 caracteres visibles antes del separador cuando sea posible; nunca sacrificar la afirmación propia para lograrlo.
- `og:title` y `og:description` reflejan la misma jerarquía.
- No inventar afirmaciones: la tesis debe extraerse literalmente del propio artículo, de su sección de tesis o de su síntesis.

### Intervención 3 · Elevar la definición propietaria
**Aplica a: Tipo A y Tipo B**

Cada artículo contiene al menos una frase que define un término propio con sujeto nombrado. En `article-paper16` es:

> Digital Change Advisors llama fuga de productividad de la IA a la disipación de la capacidad que la herramienta libera en el puesto individual antes de convertirse en un resultado financiero registrable.

Es el activo más citable del artículo: definición completa, autosuficiente y atribuida.

**Acción:** localizar esa frase y moverla dentro de las primeras cien palabras del cuerpo, antes de la primera mención sustantiva de la fuente externa. Es un movimiento, no una reescritura: la frase viaja literal.

Si el artículo no contiene una definición atribuida, **no inventar una**: registrarlo en la auditoría como pendiente editorial y continuar con el resto de intervenciones.

### Intervención 4 · Invertir el orden de los puntos clave
**Aplica a: Tipo A**

Los mismos puntos, en orden inverso: los de Digital Change Advisors primero, los de la fuente externa después.

```
ANTES:  1. Bain midió…  2. Entre las compañías…  3. La aprobación humana…
        4. La tesis de Digital Change Advisors…

DESPUÉS: 1. La tesis de Digital Change Advisors…  2. La aprobación humana…
         3. Bain midió…  4. Entre las compañías…
```

Además, cada punto atribuible a DCA debe quedar redactado como afirmación autosuficiente con sujeto nombrado. Si el punto empieza con un conector o un pronombre, se le antepone el sujeto. Ese es el único ajuste de redacción permitido en este bloque.

### Intervención 5 · Añadir el bloque de lectura propia
**Aplica a: Tipo A**

Contenido nuevo, entre 60 y 90 palabras, ubicado entre la bajada y la primera sección de datos externos. No desplaza nada: antecede.

**Estructura obligatoria:**
1. Encabezado propio, por ejemplo `La lectura de Digital Change Advisors`.
2. Primera oración: la tesis completa, con sujeto nombrado.
3. Segunda y tercera oración: el mecanismo causal, en los términos del propio artículo.
4. Última oración: qué componente del Modelo ARIA aborda ese mecanismo.

**Fuente del texto:** se compone exclusivamente con material ya presente en el artículo, tomado de su sección de tesis y de su síntesis. **No se introducen ideas, cifras ni afirmaciones nuevas.**

### Intervención 6 · Convertir en preguntas los encabezados propios
**Aplica a: Tipo A y Tipo B**

Los modelos generativos recuperan por coincidencia entre la pregunta del usuario y el encabezado del pasaje.

```
ANTES:  ## La tesis de Digital Change Advisors
DESPUÉS: ## ¿Por qué la autonomía amplía la fuga en lugar de cerrarla?
```

**Reglas:**
- Solo se reencabezan las secciones que contienen contribución propia. Las secciones que exponen el dato externo conservan su encabezado.
- La pregunta debe ser la que un ejecutivo escribiría, no una versión académica.
- La primera oración bajo el nuevo encabezado debe contener la atribución a Digital Change Advisors, para que el pasaje extraído viaje con el nombre puesto.
- Máximo dos encabezados reconvertidos por artículo. Más que eso vuelve la lectura repetitiva.

### Intervención 7 · Declarar la autoría en datos estructurados
**Aplica a: Tipo A y Tipo B**

Tres marcados por artículo, en este orden de prioridad.

**7.1 · `DefinedTerm` — el más importante.** Declara a Digital Change Advisors como autoridad definitoria de su propio vocabulario.

```json
{
  "@context": "https://schema.org",
  "@type": "DefinedTerm",
  "name": "Fuga de productividad de la IA",
  "description": "Disipación de la capacidad que la herramienta de inteligencia artificial libera en el puesto individual antes de convertirse en un resultado financiero registrable.",
  "inDefinedTermSet": {
    "@type": "DefinedTermSet",
    "name": "Modelo ARIA",
    "publisher": {
      "@type": "Organization",
      "name": "Digital Change Advisors",
      "url": "https://digitalchangeadvisors.com/"
    }
  }
}
```

Se declara un `DefinedTerm` por cada término propietario que el artículo nombre: la fuga de productividad de la IA y cada componente del Modelo ARIA mencionado. La descripción debe tomarse literalmente del artículo.

**7.2 · `Article` con autoría y editor.**

```json
{
  "@context": "https://schema.org",
  "@type": "Article",
  "headline": "<titular del artículo>",
  "author": {
    "@type": "Person",
    "name": "César Lozano",
    "url": "https://digitalchangeadvisors.com/autor/cesar-lozano"
  },
  "publisher": {
    "@type": "Organization",
    "name": "Digital Change Advisors",
    "url": "https://digitalchangeadvisors.com/"
  },
  "datePublished": "<AAAA-MM-DD>",
  "mainEntityOfPage": "<canonical>",
  "about": "Rentabilización de inversiones en inteligencia artificial"
}
```

Para artículos de Ruth Jaramillo, `author.url` apunta a `/autor/ruth-jaramillo`. **Si esa página aún no existe, dejar el nombre sin `url` y registrarlo como pendiente. No inventar la ruta.**

**7.3 · `citation` hacia la fuente externa.** Declara la cita sin que la fuente se apropie de la página.

```json
"citation": {
  "@type": "CreativeWork",
  "name": "<título del informe externo>",
  "publisher": { "@type": "Organization", "name": "<firma externa>" },
  "url": "<URL del informe>"
}
```

**Regla de enlaces salientes:** conservar un único enlace saliente por fuente, ubicado en la sección donde se expone el dato. Si la bajada contiene un segundo enlace a la misma fuente, convertirlo en mención sin enlace. La atribución textual se conserva íntegra; solo se elimina la duplicación del enlace en posición temprana.

### Intervención complementaria · Tarjeta del índice
**Aplica a: Tipo A**

El resumen de la tarjeta en `/blog` debe seguir la misma jerarquía que la meta descripción: afirmación propia primero, fuente después. Usar el mismo texto de la meta descripción para garantizar consistencia.

### Adición única al cierre
**Aplica a: Tipo A y Tipo B**

En la cita destacada del bloque final, incluir la atribución **dentro** del texto entrecomillado, para que al copiarse en un mensaje o un correo viaje con el nombre puesto. Es la única modificación autorizada en la zona de cierre.

---

## 5 · Tipo B · Marcos propietarios

Los artículos sin fuente externa dominante no necesitan reequilibrio: necesitan amplificación.

Aplican las intervenciones **2, 3, 6 y 7**, más:

- La etiqueta de categoría añade `· Marco DCA`.
- Los datos estructurados deben declarar `DefinedTerm` para el marco completo y para cada uno de sus componentes.
- El titular debe formularse como pregunta si no lo está ya.

No aplican las intervenciones 1, 4 y 5, que existen para contrarrestar el dominio de una fuente externa que aquí no existe.

---

## 6 · Método de ejecución

### Fase 1 · Auditoría, sin modificar nada

Producir una tabla por artículo:

| Ruta | Tipo (A/B) | Fuente externa | Etiqueta actual | Title actual | Meta description actual | ¿Tiene definición atribuida? | ¿Dónde aparece? | Nº de puntos clave y cuántos son externos | Enlaces salientes y su posición | Datos estructurados presentes | Encabezados candidatos a pregunta |

Reportar además:
- Artículos donde el tipo hipotético del apartado 3.1 no coincide con lo encontrado.
- Artículos sin definición atribuida.
- Artículos donde no exista un bloque de puntos clave.
- Cualquier cifra o afirmación que no tenga fuente identificable.

**Detenerse al final de la Fase 1 y esperar aprobación.**

### Fase 2 · Artículo piloto

Aplicar las siete intervenciones únicamente a `article-paper16`. Entregar el resultado para revisión antes de continuar.

### Fase 3 · Ejecución por tandas

Tandas de cuatro artículos, en el orden de la tabla del apartado 3.1, comenzando por los más recientes. Al final de cada tanda, entregar el reporte de cambios y esperar aprobación antes de la siguiente.

Razón del secuenciamiento: los artículos recientes son los que más tráfico y más probabilidad de citación tienen, y un error detectado en la primera tanda evita replicarlo dieciséis veces.

---

## 7 · Criterios de aceptación por artículo

- [ ] Ningún párrafo del cuerpo argumental fue reescrito, acortado o eliminado.
- [ ] Ninguna atribución a fuente externa fue retirada ni debilitada.
- [ ] La primera oración del `title` y de la `meta description` contiene una afirmación de Digital Change Advisors.
- [ ] La definición propietaria aparece dentro de las primeras cien palabras del cuerpo.
- [ ] En Tipo A, el primer punto clave es de Digital Change Advisors.
- [ ] En Tipo A, existe el bloque de lectura propia entre 60 y 90 palabras, compuesto solo con material ya presente en el artículo.
- [ ] Al menos un encabezado propio quedó formulado como pregunta, con atribución en su primera oración.
- [ ] El JSON-LD valida sin errores e incluye `DefinedTerm`, `Article` y `citation`.
- [ ] Existe un solo enlace saliente por fuente externa, ubicado en la sección del dato.
- [ ] La zona de cierre permanece intacta salvo la atribución dentro de la cita.
- [ ] La tarjeta del índice refleja la misma jerarquía que la meta descripción.

## 8 · Prohibiciones absolutas

1. **No tocar `article-paper00`.**
2. No inventar afirmaciones, cifras, definiciones ni tesis. Todo el material nuevo se compone con texto ya presente en el artículo.
3. No retirar ni debilitar ninguna atribución a una fuente externa. El reequilibrio se logra elevando lo propio, nunca disminuyendo lo ajeno.
4. No modificar cifras publicadas, aunque parezcan inconsistentes. Reportarlas.
5. No alterar los mecanismos de cierre ni la llamada al AI Return Test.
6. No crear enlaces a rutas que no existan, incluida `/autor/ruth-jaramillo` si aún no está publicada.
7. No aplicar más de dos encabezados en forma de pregunta por artículo.
8. Ante cualquier duda sobre si un cambio constituye reescritura, detenerse y preguntar.

## 9 · Nota de vigilancia editorial

`article-paper03` se apoya en la cifra del 95% de iniciativas de inteligencia artificial que no llegan al resultado, del MIT Project NANDA. Es hoy la estadística más disputada del debate público sobre IA. **No modificar el artículo por este motivo**, pero registrarlo en el reporte: cuando esa perspectiva se use en prensa o en materiales de campaña, conviene liderar con dato propio y dejar esa cifra como respaldo.

---

## Anexo · Tokens de marca

| Token | Valor | Uso |
|---|---|---|
| Teal Corporativo | `#2E8B76` | Acentos estructurales, etiquetas |
| Oro Estratégico | `#A48111` | Detalle, antetítulos. Siempre sólido |
| Carbón DCA | `#1E2A38` | Tipografía de cuerpo |
| Platino Tecnológico | `#DFE3E1` | Separadores y bordes |
| Tipografía display | Marcellus | Titulares |
| Tipografía de cuerpo | Montserrat | Texto corrido |

El elemento nuevo de `Fuente analizada` usa Montserrat, tamaño menor que la etiqueta de categoría, en Carbón al 70% de opacidad o en Platino sobre fondo claro. No usar Oro: está reservado al detalle de marca.
