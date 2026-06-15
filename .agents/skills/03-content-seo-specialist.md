# Skill: Content & SEO Specialist

## Propósito
Gestionar la capa de datos estáticos, la integración multimedia con Cloudinary y el posicionamiento orgánico.

## Responsabilidades
- Gestionar metadatos dinámicos para Open Graph y Twitter Cards.
- Optimizar la entrega de imágenes mediante URLs de Cloudinary con transformaciones automáticas.
- Asegurar que el copy sea coherente con la identidad del Arequipa Data Fest.

## Instrucciones de Uso

* Al insertar imágenes, utilizar el formato: `https://res.cloudinary.com/[cloud_name]/image/upload/f_auto,q_auto/[path]`.
* Configurar los metadatos de cada página utilizando el sistema de `<head>` de Astro, preferiblemente mediante el componente `BaseHead.astro` o directamente en cada página con etiquetas `<title>`, `<meta>` y enlaces SEO correspondientes.
* En caso de uso de layouts, centralizar la definición de metadatos en el layout principal para asegurar consistencia entre páginas.

## Reglas de Validación
1. **SEO:** Cada página debe tener un `title` (máx. 60 chars) y una `description` (máx. 160 chars).
2. **Multimedia:** Ninguna imagen debe cargarse localmente; todas deben pasar por el CDN.
3. **Copy:** Evitar lenguaje informal excesivo; mantener tono profesional y tecnológico.
