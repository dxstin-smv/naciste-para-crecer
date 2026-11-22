# Naciste para Crecer — formulario web

## Archivos
- `index.html`: estructura de la página.
- `css/estilos.css`: diseño adaptable a computadora y celular.
- `js/app.js`: preguntas, navegación, validación, correo y WhatsApp.

## Abrir en Visual Studio Code
1. Descomprime `naciste-para-crecer.zip`.
2. Abre la carpeta `naciste-para-crecer` en Visual Studio Code.
3. En `js/app.js`, el correo `EMAIL_DESTINO` ya está configurado como `josecoaching.n@gmail.com`. Cámbialo solo si deseas recibir las evaluaciones en otra dirección.
4. `WHATSAPP_NUMERO` permanece pendiente. Cuando tengas el número definitivo, configúralo con código de país y solo dígitos. Para México empieza con `52`, seguido del número.
5. Guarda los cambios y abre `index.html` en el navegador. Es recomendable usar la extensión Live Server.

## Envío por correo
Este prototipo usa FormSubmit como servicio de entrega de formularios, sin servidor propio.
- En el primer envío, FormSubmit enviará un correo de activación al destinatario. Hay que abrirlo y confirmar.
- Después de activar la dirección, las siguientes respuestas se enviarán a ese correo.
- Prueba primero con datos ficticios.
- La entrega depende del servicio externo y de la conexión a internet. Revisa también spam/correo no deseado.

## Antes de publicarlo
- Añade un aviso de privacidad completo y visible, con la identidad del responsable, finalidades, conservación, medios para ejercer derechos y datos de contacto.
- Define quién tendrá acceso al correo que recibe las respuestas y protege esa cuenta con contraseña robusta y verificación en dos pasos.
- El formulario pregunta por información de salud y datos personales. Limita la recolección a lo estrictamente necesario, no solicites detalles médicos innecesarios y obtén consentimiento informado adecuado antes de recopilarla.
- Si atenderás menores de edad, establece un proceso apropiado de autorización de madre, padre o tutor y revisión profesional.
- No publiques el formulario con un número de ejemplo de WhatsApp.

## Nota técnica
No se guardan respuestas en el navegador. El envío se realiza a través de FormSubmit. Para uso profesional con información sensible, conviene evaluar un proveedor con controles de privacidad y seguridad adecuados o un backend propio con acceso restringido.
