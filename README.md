API RESTful de Artículos con Node.js, Express y MySQL

Este proyecto es una API RESTful básica desarrollada con Node.js, Express y MySQL/MariaDB. Permite gestionar una tabla de artículos mediante operaciones CRUD: listar, consultar, crear, actualizar y eliminar registros.

El objetivo principal del proyecto es practicar la creación de una API conectada a una base de datos relacional, usando rutas HTTP y consultas SQL desde un servidor Express.

Tecnologías utilizadas
Node.js
Express
MySQL / MariaDB
XAMPP
Postman
Git / GitHub
Estructura de la base de datos

La API trabaja con una base de datos llamada:

articulosbd

Dentro de esta base de datos se utiliza una tabla llamada:

articulos

La tabla contiene los siguientes campos:

id INT AUTO_INCREMENT PRIMARY KEY,
descripcion VARCHAR(100),
precio DECIMAL(10,2),
stock INT
Creación de la base de datos
CREATE DATABASE IF NOT EXISTS articulosbd;

USE articulosbd;

CREATE TABLE IF NOT EXISTS articulos (
    id INT AUTO_INCREMENT PRIMARY KEY,
    descripcion VARCHAR(100),
    precio DECIMAL(10,2),
    stock INT
);
Instalación del proyecto

Clona el repositorio:

git clone URL_DEL_REPOSITORIO

Entra en la carpeta del proyecto:

cd API_Restful_Node_Js_Express

Instala las dependencias:

npm install
Configuración de la conexión

La conexión con MySQL/MariaDB se realiza desde el archivo principal del proyecto. Por defecto, la configuración usada es:

host: 'localhost',
user: 'root',
password: '',
database: 'articulosbd'

Esta configuración está pensada para un entorno local con XAMPP. Si tu usuario, contraseña o nombre de base de datos son diferentes, tendrás que modificar esos valores.

Ejecución del servidor

Para iniciar la API:

node app

Si todo está correctamente configurado, la consola debería mostrar un mensaje indicando que el servidor está operativo en el puerto 3000 y que la conexión con MySQL se ha realizado correctamente.

La URL base del proyecto es:

http://localhost:3000
Endpoints disponibles
Ruta de inicio
GET /

Devuelve un mensaje simple para comprobar que el servidor está funcionando.

Obtener todos los artículos
GET /api/articulos

Devuelve todos los registros guardados en la tabla articulos.

Obtener un artículo por ID
GET /api/articulos/:id

Ejemplo:

GET /api/articulos/1

Devuelve el artículo cuyo id coincide con el valor indicado en la URL.

Crear un nuevo artículo
POST /api/articulos

Body de ejemplo en formato JSON:

{
  "descripcion": "Teclado mecánico",
  "precio": 49.99,
  "stock": 20
}

Inserta un nuevo artículo en la base de datos.

Actualizar un artículo
PUT /api/articulos/:id

Ejemplo:

PUT /api/articulos/1

Body de ejemplo:

{
  "descripcion": "Teclado mecánico RGB",
  "precio": 59.99,
  "stock": 15
}

Actualiza los datos del artículo indicado por su id.

Eliminar un artículo
DELETE /api/articulos/:id

Ejemplo:

DELETE /api/articulos/1

Elimina de la base de datos el artículo cuyo id coincide con el indicado.

Pruebas con Postman

Para probar la API se puede utilizar Postman. Es importante usar siempre el puerto correcto:

http://localhost:3000

Por ejemplo:

http://localhost:3000/api/articulos

Si se usa solo localhost/api/articulos, la petición puede ir al puerto 80 y no al servidor de Node.js.

Estado del proyecto

Este proyecto está enfocado al aprendizaje de APIs RESTful con Node.js, Express y MySQL. Actualmente incluye las operaciones principales de un CRUD básico sobre artículos.