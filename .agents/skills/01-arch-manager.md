# Skill: Architecture & Consistency Manager

## Propósito
Garantizar que cualquier modificación o adición al sistema respete la arquitectura definida, los módulos establecidos y el alcance del Arequipa Data Fest 2026.

## Responsabilidades
- Validar la trazabilidad entre requerimientos funcionales (RF) y la implementación.
- Asegurar que no se introduzcan funcionalidades fuera del alcance (Out of Scope).
- Mantener la integridad de los 5 módulos core (MOD-01 a MOD-05).

## Reglas de Ejecución
1. **Validación de Módulo:** Antes de crear un archivo, identificar a qué módulo pertenece.
2. **Consistencia de Nomenclatura:** Seguir el estándar `RF-XXX` para funciones y `RNF-XXX` para criterios de calidad.
3. **No-Backend Policy:** Bloquear cualquier intento de implementar bases de datos o sistemas de autenticación propios; recordar que el registro es vía Luma.

## Flujo de Trabajo
- Entrada: Solicitud de nueva funcionalidad.
- Proceso: Verificar contra el archivo `03-scope.md`.
- Salida: Aprobación técnica o sugerencia de ajuste arquitectónico.
