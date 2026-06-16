# Technology Stack: Arequipa Data Fest 2026

## 1. Introducción y Contexto
El frontend del Arequipa Data Fest 2026 funcionará como la interfaz principal de interacción y conversión del evento. Dado que el núcleo del sitio es la presentación de información (agenda, ponentes y propuesta de valor), se ha optado por una arquitectura orientada al contenido que priorice la velocidad de carga y la entrega de activos optimizados.

## 2. Objetivo del Stack Tecnológico
Proveer un entorno de desarrollo moderno, escalable y mantenible que permita:
1.  **Maximizar el rendimiento:** Cumplir con los Web Vitals críticos (LCP < 2.5s).
2.  **Garantizar la consistencia:** Utilizar un sistema de diseño basado en componentes reutilizables.
3.  **Facilitar la gestión de contenido:** Permitir actualizaciones rápidas mediante archivos de datos estructurados.
4.  **Asegurar la calidad:** Implementar tipado estático y herramientas de formateo automatizado.

## 3. Tecnologías Principales

| Categoría | Tecnología | Rol en la Arquitectura |
| :--- | :--- | :--- |
| **Framework** | Astro 6.x | Núcleo de desarrollo y generación de sitio estático (SSG). |
| **Lenguaje** | TypeScript | Tipado estático y robustez del código. |
| **Estilos** | TailwindCSS | Sistema de diseño y utilidades CSS. |
| **Gestión de Datos** | Content Collections | Manejo de Markdown con validación de esquemas (Zod). |
| **Paquetes** | pnpm | Gestión eficiente de dependencias. |

---

## 4. Descripción Detallada

### 4.1. Framework Principal: Astro 6.x
Astro ha sido seleccionado por su innovadora **Arquitectura de Islas**. A diferencia de los frameworks de SPA (Single Page Application) tradicionales, Astro elimina el JavaScript innecesario, enviando solo HTML al navegador por defecto.
*   **Responsabilidad:** Orquestar el renderizado de componentes y la generación de páginas estáticas durante el tiempo de construcción (Build-time).
*   **Modo de despliegue:** Static Site Generation (SSG) para máxima velocidad y disponibilidad.

### 4.2. Sistema de Estilos: TailwindCSS
Se utiliza un enfoque *utility-first* para la construcción de la interfaz.
*   **Responsabilidad:** Definir la capa visual y garantizar la adaptabilidad (Responsiveness) del sitio.
*   **Beneficio:** Genera un bundle de CSS mínimo al eliminar las clases no utilizadas durante la compilación, cumpliendo con el **RNF-002 (Optimización de recursos)**.

### 4.3. Gestor de Dependencias: pnpm
Se ha elegido pnpm sobre npm/yarn por su eficiencia en el manejo de espacio en disco y la velocidad de instalación mediante el uso de *content-addressable storage*.
*   **Responsabilidad:** Garantizar que el entorno de desarrollo sea consistente para todos los colaboradores.

### 4.4. Manejo de Contenido: Markdown + Zod
La información dinámica (agenda y speakers) se gestiona mediante archivos Markdown dentro de **Astro Content Collections**.
*   **Responsabilidad:** Separar los datos de la lógica de presentación.
*   **Validación:** Se utiliza **Zod** para definir esquemas estrictos. Si un archivo Markdown no cumple con los campos obligatorios (por ejemplo falta la imagen del ponente), el sistema generará un error de compilación inmediato.

### 4.5. Herramientas de Calidad y Formateo
Para mantener el estándar de código, se integran:
*   **ESLint:** Análisis estático para identificar patrones de código problemáticos.
*   **Prettier:** Formateo automático de código para mantener la consistencia estética entre desarrolladores.

---

## 5. Justificación Técnica y Beneficios

### 5.1. Rendimiento y SEO
Al utilizar Astro, el sitio web es inherentemente rápido. La generación de HTML estático permite que los motores de búsqueda indexen el contenido sin ejecutar JavaScript, lo que mejora drásticamente el posicionamiento SEO (Objetivo Específico 1).

### 5.2. Mantenibilidad (RNF-003)
La combinación de **TypeScript** y **Content Collections** crea un entorno donde los errores son detectados en tiempo de desarrollo. La componentización permite que cambios en elementos globales (como el botón de registro de Luma) se reflejen instantáneamente en todo el sitio.

### 5.3. Experiencia de Desarrollo (DX)
El uso de **Astro 6.x** ofrece un servidor de desarrollo extremadamente rápido y una sintaxis clara que reduce la curva de aprendizaje para el equipo.

---

## 7. Reglas de Consistencia para el Desarrollo

1.  **Componentes:** Todo componente nuevo debe ser responsive utilizando el enfoque *Mobile-First*.
2.  **Multimedia:** No se deben almacenar imágenes pesadas en el repositorio. Todas las imágenes deben referenciarse desde **Cloudinary** (ver MOD-04).
3.  **Estilos:** Evitar el uso de CSS plano (`.css`); utilizar exclusivamente clases de utilidad de TailwindCSS.
4.  **Commits:** Seguir la guía definida en `.github/CONTRIBUTING.md` para asegurar que el historial sea legible.

---
**Fecha:** Mayo 2025
**Versión:** 1.0.0
