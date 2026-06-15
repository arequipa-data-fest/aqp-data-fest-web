# Contributing to Arequipa Data Fest 2026

Gracias por formar parte del equipo de desarrollo. Para mantener la calidad del código y la estabilidad del sitio, todos los colaboradores deben seguir estrictamente esta guía de flujo de trabajo.

---

## 1. Estrategia de Ramas (Branching Strategy)

Utilizamos una adaptación de **GitHub Flow** con una rama de integración permanente.

### Estructura del Repositorio
- **`main`**: Versión estable en producción. Solo recibe cambios desde `develop`.
- **`develop`**: Rama principal de integración. Todo desarrollo nuevo se une aquí primero.
- **Ramas Temporales**:
    - `feature/*`: Nuevas funcionalidades.
    - `fix/*`: Corrección de errores.
    - `refactor/*`: Mejoras de código sin cambios funcionales.
    - `chore/*`: Tareas de mantenimiento o configuración.
    - `docs/*`: Cambios exclusivos en documentación.

---

## 2. Convención de Nomenclatura de Ramas

Formato: `tipo/descripcion-breve` (usar kebab-case).
- Correcto: `feature/speakers-grid`, `fix/nav-responsive`.
- Incorrecto: `cambios-finales`, `fix_bug`, `mi-rama`.

---

## 3. Flujo de Trabajo Diario

### Paso 1: Iniciar una Tarea
Toda tarea debe estar vinculada a una o más **Issue** en GitHub. Antes de codificar:
1. Sincroniza `develop`: `git pull origin develop`.
2. Crea tu rama: `git checkout -b feature/nombre-de-la-issue`.

### Paso 2: Desarrollo y Commits
Sigue el estándar de **Conventional Commits**:
- `feat: ...` (Funcionalidad)
- `fix: ...` (Error)
- `docs: ...` (Documentación)
- `chore: ...` (Mantenimiento)

### Paso 3: Pull Request (PR)
1. Sube tu rama: `git push origin feature/nombre-de-la-issue`.
2. Abre un PR hacia la rama `develop`.
3. El PR debe incluir:
    - Referencia a la Issue (por ejemplo, `Closes #12`).
    - Descripción clara de los cambios.
    - Capturas de pantalla (si hay cambios de UI).
4. Espera la revisión de un compañero y la aprobación del Project Lead.

---

## 4. Reglas

1. **Prohibido el push directo** a `main` y `develop`.
2. **Revisión Obligatoria:** Ningún código entra a `develop` sin al menos una aprobación.
3. **Calidad:** Asegúrate de que el proyecto compile y pase el Linter antes de enviar el PR.
4. **Commits Limpios:** Evita mensajes genéricos como "update" o "fix".

---

## 5. Responsabilidades

- **Developers:** Responsables de la implementación, sus propios PRs y realizar revisiones de código (Peer Review) a sus compañeros.
- **Project Lead:** Responsable de la arquitectura, resolución de conflictos complejos y aprobación de despliegues a `main`.
- **QA/DevOps:** Responsable de validar el cumplimiento de los Requerimientos No Funcionales y el éxito del despliegue automático.

---

*Nota: El incumplimiento sistemático de estas reglas será motivo de revisión del acceso al repositorio.*
