# Api desarrollada con nodejs, express, typescrip y mongodb

Esta es una pai que nos permite extraer información de la Api https://jsonplaceholder.typicode.com/ se procesa y se guarda en una base de datos mongodb,

Documentacíon https://app.swaggerhub.com/apis-docs/icadigital/wrapper-typicode/1.0.0

A continuación, tenemos una secuencia de comnados a utilizar antes de subir el server de la api.

# Crear archivo para las variables de entrono

```
cp .env-example .env

Definir varibales como el puerto y datos para la base de tados
PORT=
API =
USER=
PASSWORD =
HOST=
DB=

```

# Iniciar el servidor en modo desarrollo

```
npm run dev

```

# Compilar archivos del proyecto en la capeta dist

```
npm run build

```

# Iniciar servidor con archivos compilados en la carpeta dist

```
npm start

```

# Correr test

```
npm test

NOTA: configura las variables de entorno en el comando test en el packaje.json estas variables de entorno seran  paralos test ya que al monento de ejecutar los test no reconoce las variables definidas en el, archivo .env las varibles definidas para los test o pruebas  deben de ser datos locales solo para efectos de pruebas

Se recomienda correr tes por acrivo por el momento hay un incoveniente con el puerto al ejecutar todos los tes y no por archivo

```

# Listar los usuarios

```
GET: api/users
200 OK
Response lista de usuarios

```

# Listar publicaciones

```
GET: api/post
200 OK
Response lista de publicaciones

```

# Consultar fotos de un usuario

```
GET: api/photos/users/<number id>
/*
 @param <number> id required
 *
*/

200 OK
Response: lista de fotos del id usduario enviado

```

# Listar Registros de peticiones realizadas.

```
PUT: /api/records/<string id>
/*
 @param <string> id required
 *
*/
200 OK

```

# Editar registro de una petición

```
DELETE: /api/records/<string id>
/*
 @param <string> id required
 *
*/
200 OK
```
