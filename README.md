<a name="readme-top"></a>

<div align="center">

<img width="100%" src="https://res.cloudinary.com/dohwcedep/image/upload/f_auto/q_auto/arequipa-data-fest.png" alt="Logo de Arequipa Data Fest 2026" />

## Web oficial de Arequipa Data Fest 2026

Arequipa Data Fest es el encuentro pionero de datos, tecnologia e innovación que impulsa ideas, decisiones y el futuro en Arequipa. [Reportar error](https://github.com/Arequipa-Data-Fest/arequipa-data-fest-web/issues) · [Sugerir algo](https://github.com/Arequipa-Data-Fest/arequipa-data-fest-web/issues)

</div>

# Para empezar

## 1. Requisitos previos

Antes de comenzar, debe tener instalado **Volta** en su sistema operativo. Volta es el gestor encargado de asegurar que todos utilicemos las mismas versiones de Node.js y pnpm definidas en el archivo `package.json`.

*   **Instalación de Volta:** Siga las instrucciones en [volta.sh](https://volta.sh/).

## 2. Preparación de herramientas

Una vez clonado el repositorio, acceda a la carpeta del proyecto. Volta detectará automáticamente las versiones necesarias. Ejecute los siguientes comandos para asegurar que las herramientas globales estén instaladas en su entorno de Volta:

```bash
# Instalar y fijar las versiones del proyecto
volta install node@24.16.0
volta install pnpm@11.2.1
```

Asegúrese de que la salida de estos comandos coincida con las versiones oficiales:
```bash
node -v
pnpm -v
```

Por ejemplo

```bash
node -v 
v24.16.0

pnpm -v
11.7.0

volta list
⚡️ Currently active tools:

    Node: v24.16.0 (default)
    npm: v11.10.0 (default)
    Yarn: v1.22.22 (default)
    Tool binaries available:
        mcp-hub (default)
        pnpm, pnpx, pn, pnx (default)

See options for more detailed reports by running `volta list --help`.
```

## 3. Instalación de Dependencias
Instale los paquetes necesarios del proyecto utilizando `pnpm`. Esto configurará Astro 6, Tailwind 4 y los loaders de contenido.

```bash
pnpm install
```

## 4. Ejecución del Entorno de Desarrollo
Para iniciar el servidor local con recarga en caliente (Hot Module Replacement):

```bash
pnpm dev
```
El sitio estará disponible en: `http://localhost:3000`

## 5. Comandos de validación y calidad
Antes de realizar cualquier commit, es obligatorio validar que el código cumple con los estándares de TypeScript y los esquemas de Content Collections (Astro 6).

| Comando | Propósito |
| :--- | :--- |
| `pnpm astro check` | Valida errores de TypeScript y esquemas de contenido (Zod). |
| `pnpm build` | Genera una versión de producción para verificar el empaquetado. |
| `pnpm preview` | Ejecuta localmente la versión de producción construida. |


## 6. Diagnóstico y comandos útiles
Si experimenta problemas con la caché o inconsistencias en los estilos de Tailwind 4, utilice los siguientes comandos:

*   **Limpiar caché de Astro:**
    ```bash
    pnpm exec astro clean
    ```
*   **Reinstalar dependencias (limpieza profunda):**
    ```bash
    rm -rf node_modules && pnpm install
    ```
*   **Verificar estado de Volta:**
    ```bash
    volta list
    ```

---

## Recordatorios clave para Colaboradores:
1.  **Tailwind 4:** No busque el archivo `tailwind.config.js`. Toda configuración de tema debe realizarse en `src/styles/global.css` mediante variables CSS dentro del bloque `@theme`.
2.  **Content Collections:** Los datos de ponentes y agenda se encuentran en `src/content/`. Si añade nuevos campos, actualice el esquema en `src/content.config.ts`.
3.  **Imágenes:** No suba imágenes pesadas al repositorio. Utilice siempre URLs de Cloudinary siguiendo el formato definido en la documentación de multimedia.
