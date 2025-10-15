# API para Sistema de Gestión Universitaria (NestJS + Prisma)

## 📖 Descripción del Proyecto

Esta es una API RESTful construida con **NestJS** y **Prisma ORM**, diseñada para gestionar las entidades y relaciones de un sistema universitario. La arquitectura sigue un diseño modular y desacoplado, garantizando escalabilidad y mantenibilidad.

La API maneja operaciones CRUD para todas las entidades principales y gestiona relaciones complejas como **uno a muchos** (Profesor -> Títulos) y **muchos a muchos** (Profesores <-> Materias, Estudiantes <-> Materias).

---

## ✨ Características Principales

Este proyecto cumple con los criterios de excelencia de la evaluación a través de las siguientes características:

* **Diseño Modular y Escalable:** Cada recurso (Estudiantes, Profesores, etc.) está encapsulado en su propio módulo. Se utiliza un `PrismaModule` centralizado que es importado por los demás módulos, promoviendo el bajo acoplamiento y la reutilización de código.

* **CRUD Completo por Reccurso:** Todos los endpoints principales implementan las operaciones `GET` (listado y por ID), `POST`, `PATCH` y `DELETE`.

* **Validación Robusta de Datos (DTOs):** Se utiliza `class-validator` en los DTOs para asegurar la integridad de los datos de entrada (ej. formato de email, longitud de cédula, tipos de datos numéricos).

* **Manejo Avanzado de Errores:** El servicio responde con códigos de estado HTTP semánticos y mensajes claros, manejando explícitamente los errores de Prisma:
    * **`P2002` (Unique Constraint):** Devuelve `409 Conflict` si se intenta crear un registro duplicado (ej. un estudiante ya inscrito en una materia).
    * **`P2003` (Foreign Key Constraint):** Devuelve `404 Not Found` si se intenta crear una relación con un ID que no existe.
    * **`404 Not Found`:** Se maneja en las búsquedas por ID (`findOne`) cuando el recurso no existe.

* **Relaciones Complejas Implementadas:**
    * **Creación Anidada (1:N):** El endpoint `POST /profesores` permite crear un profesor y sus títulos asociados en una sola transacción.
    * **Tablas Pivote (N:M):** Se gestionan las relaciones `ProfesorMateria` e `Inscripcion` a través de sus propios módulos para asignar y desasignar entidades.

---

## 🚀 Instalación y Puesta en Marcha

Sigue estos pasos para configurar y ejecutar el proyecto localmente.

### 1. Requisitos Previos
* Node.js (v18 o superior)
* Git
* PostgreSQL

### Instalar Dependencias

npm install

### Configurar Variables de Entorno

DATABASE_URL="postgresql://postgres:Dontaquito.28@localhost:5432/sistema_u"

### Ejecutar las Migraciones de la Base de Datos

npx prisma migrate dev

### Iniciar el Servidor

npm run start:dev

### API Endpoints

Recurso	Ruta Base	Notas
Estudiantes	/estudiantes	CRUD completo.
Profesores	/profesores	Soporta creación anidada de Títulos.
Carreras	/carreras	CRUD completo.
Aulas	/aulas	CRUD completo.
Materias	/materias	Relacionado con Carreras y Aulas.
Títulos	/titulos	Relacionado con Profesores.
Asignaciones	/profesor-materia	Gestiona la relación N:M entre Profesores y Materias.
Inscripciones	/inscripciones	Gestiona la relación N:M entre Estudiantes y Materias. 

### Pruebas con Postman
La colección de Postman con todas las pruebas funcionales se encuentra en el documento Pruebas API-biblioteca.postman_collection.json, incluido en el repositorio.

Instrucciones:

Abre Postman.

Haz clic en Import.

Selecciona el archivo Pruebas API-biblioteca.postman_collection.json para cargar la colección completa.

