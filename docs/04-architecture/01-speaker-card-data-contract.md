# Contrato de Datos para Tarjetas de Ponentes

Este documento define el contrato de datos para las tarjetas de ponentes del sitio web de Arequipa Data Fest. Establece qué campos son renderizados en las tarjetas de ponentes (optimizadas para reconocimiento, descubrimiento y navegación) y cuáles campos están reservados exclusivamente para la página dinámica de detalle del ponente (información completa).

## Principio de Diseño

> Las tarjetas de ponentes deben permitir un reconocimiento rápido, descubrimiento y navegación.
> La página de detalle del ponente debe gestionar la información completa sin duplicación.

Mantener biografías extensas o información secundaria dentro de las tarjetas de ponentes genera una carga cognitiva innecesaria y duplica información que ya está disponible en la página de detalle. El siguiente contrato establece una separación clara.

---

## Clasificación de Campos en Dos Niveles

### Nivel 1 — Campos de la Tarjeta

Estos campos son enviados y renderizados por el componente `SpeakerCard`. Están diseñados para una visualización rápida.

| Campo           | Tipo                   | Requerido | Propósito                                                                                                                                                                                            |
| --------------- | ---------------------- | --------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `name`          | `string`               | Sí        | Identificador principal. Se muestra en las tres variantes. Cuando `isRevealed` es `false`, se reemplaza por "Pronto".                                                                                |
| `role`          | `string`               | Sí        | Cargo profesional (ejemplo: "Sr. Data Engineer"). Se muestra en las variantes `expanded` y `featured`. Cuando `isRevealed` es `false`, se reemplaza por "Speaker Invitado".                          |
| `company`       | `string`               | Opcional  | Organización asociada al ponente (ejemplo: "Yape"). Se muestra junto a `role` en las variantes `expanded` y `featured` cuando el ponente está revelado.                                              |
| `imageFilename` | `string`               | Sí        | Identificador público de Cloudinary para la fotografía del ponente. Cuando `isRevealed` es `false`, utiliza como respaldo `speakers/incognito-placeholder`.                                          |
| `imageAlt`      | `string`               | Sí        | Texto alternativo accesible para la imagen del ponente.                                                                                                                                              |
| `tags`          | `{label: string}[]`    | Opcional  | Etiquetas de temas o especialidades (ejemplo: "Data Engineering", "Power BI"). Las tarjetas compactas muestran únicamente la primera etiqueta; las variantes `expanded` y `featured` muestran todas. |
| `badge`         | `string`               | Opcional  | Etiqueta destacada (ejemplo: "Fundador Data Wizard"). Solo se muestra en la variante `featured` como una insignia sobre el nombre.                                                                   |
| `variant`       | `"v1" \| "v2" \| "v3"` | Sí        | Controla la distribución visual de la tarjeta. En `SpeakerGrid` se asigna como: `v1` → `compact`, `v2` → `expanded`, `v3` → `featured`.                                                              |
| `isRevealed`    | `boolean`              | Sí        | Control de visibilidad. Cuando es `false`, la tarjeta muestra contenido de reemplazo independientemente de los valores reales de los datos.                                                          |

---

### Nivel 2 — Campos Exclusivos de la Página de Detalle

Estos campos existen en el esquema de colección de contenido de ponentes, pero nunca son enviados ni renderizados por `SpeakerCard`. Son utilizados exclusivamente por el componente `SpeakerDetail` en la página dinámica `/speakers/[id]`.

| Campo           | Tipo                              | Requerido | Propósito                                                                                                                                                                                                                                    | Motivo de exclusión en tarjetas                                                                                                                                                          |
| --------------- | --------------------------------- | --------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `description`   | `string`                          | Opcional  | Resumen breve de la biografía. Se utiliza como descripción meta para SEO y como contenido alternativo cuando no existe un cuerpo Markdown.                                                                                                   | Genera carga cognitiva en las tarjetas. Duplica información disponible en la página de detalle. Anteriormente solo se mostraba en la variante `featured`.                                |
| `talks`         | `{title, description?, time?}[]`  | Opcional  | Lista estructurada de las charlas del ponente en el evento, con horario y descripción opcionales.                                                                                                                                            | Demasiado detallado para una tarjeta. Las charlas se muestran con contexto completo (hora y descripción) en la página de detalle.                                                        |
| `social`        | `{linkedin?, twitter?, website?}` | Opcional  | Enlaces a perfiles externos renderizados como botones interactivos en la página de detalle.                                                                                                                                                  | Los enlaces externos interactivos en una tarjeta entran en conflicto con la acción principal de la tarjeta: navegar hacia la página de detalle. Nunca se renderizan en ninguna variante. |
| `companies`     | `{name, role?}[]`                 | Opcional  | Organizaciones o empresas donde el ponente ha trabajado. Se renderiza como una sección de "Experiencia profesional" en la página de detalle. Por defecto utiliza un arreglo vacío y está preparado para una carga progresiva de información. | La experiencia laboral es información contextual detallada que pertenece a la página de detalle.                                                                                         |
| Cuerpo Markdown | Content                           | Opcional  | Contenido completo de la biografía renderizado mediante el componente `<Content />` de Astro.                                                                                                                                                | Es contenido extenso por naturaleza. La página de detalle es la única superficie adecuada para mostrarlo.                                                                                |

---

## Matriz de Campos por Variante

Esta matriz muestra exactamente qué campos del Nivel 1 son renderizados por cada variante:

| Campo                        | Compact (`v1`)              | Expanded (`v2`)             | Featured (`v3`)             |
| ---------------------------- | --------------------------- | --------------------------- | --------------------------- |
| `imageFilename` / `imageAlt` | Sí                          | Sí                          | Sí                          |
| `name`                       | Sí                          | Sí                          | Sí                          |
| `role`                       | No                          | Sí                          | Sí                          |
| `company`                    | No                          | Sí (agregado al rol)        | Sí (agregado al rol)        |
| `tags`                       | Sí (solo la primera)        | Sí (todas)                  | Sí (todas)                  |
| `badge`                      | No                          | No                          | Sí                          |
| `isRevealed`                 | Sí (control de visibilidad) | Sí (control de visibilidad) | Sí (control de visibilidad) |

---

## Mapeo con la Implementación

### Esquema de Colección de Contenido (`content.config.ts`)

El esquema Zod define todos los campos (Nivel 1 + Nivel 2). Es la única fuente de verdad para los datos válidos de los ponentes. El esquema no cambia; el contrato opera a nivel de interfaz de componentes, no en la capa de datos.

### Interfaz del Componente (`SpeakerCard.astro`)

La interfaz `Props` acepta únicamente campos del Nivel 1 junto con propiedades de diseño (`href`, `speakerId`, `accent`). Los campos del Nivel 2 (`description`, `social`) son excluidos de la interfaz.

### Consumidores

| Consumidor               | Contexto                                 | Campos enviados                                            |
| ------------------------ | ---------------------------------------- | ---------------------------------------------------------- |
| `SpeakerGrid.astro`      | Página de listado `/speakers`            | Todos los campos del Nivel 1                               |
| `FeaturedSpeakers.astro` | Sección destacada de la página principal | Todos los campos del Nivel 1 (solo variante compacta)      |
| `SpeakerDetail.astro`    | Página de detalle `/speakers/[id]`       | `CollectionEntry<'speakers'>` completo (todos los niveles) |


