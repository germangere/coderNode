Proyecto backend - API ecommerce (NodeJS - Express)

La Api permite la gestión de usuarios, roles, productos, carritos, órdenes de compra, y chat. Todo se respalda en MongoDB.
El proyecto integra:
- Sesiones con JWT
- Permisos de usuarios
- Rol de administrador
- Encriptación de contraseñas
- Routing
- Middlewares
- Patrón Factory
- Singleton
- Envío de emails
- Envío de mensajes de texto/whatsapp
- Configuraciones de servidor


Algunas indicaciones de uso:

En el login devuelvo el JWT para ser utilizado en los encabezados de las peticiones que lo requieran.

El modo admin se activa desde la consola cuando levantamos el server con el flag < -u admin > para la vista de órdenes y la adminstración de productos disponibles.

El tiempo de sesión se configura en minutos.

El modelo está preparado para integrar distintas bases de datos, pero actualmente funciona sólo con mongodb.

Para ingresar al chat con postman primero hay que hacer un get en la carpeta chat/ingreso al chat, luego conectarse al socket.
