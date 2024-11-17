# Tienda.JS

Tienda.JS es una plataforma de comercio electrónico diseñada para ofrecer a los usuarios una experiencia fluida al explorar y comprar productos tecnológicos de calidad. Esta aplicación, desarrollada con tecnologías modernas, permite a los usuarios gestionar su carrito de compras, procesar transacciones y almacenar órdenes en Firebase.

## Tabla de Contenidos

- [Características](#características)
- [Tecnologías Utilizadas](#tecnologías-utilizadas)
- [Instalación](#instalación)
- [Uso](#uso)
- [Dependencias](#dependencias)
- [Estructura de Proyecto](#estructura-de-proyecto)

## Características

- **Interfaz amigable y responsiva**: Optimizada para dispositivos móviles y de escritorio.
- **Gestión de carrito de compras**: Agregar, quitar y modificar cantidades de productos.
- **Validaciones avanzadas**: Manejo de mensajes de error para stock insuficiente o intentos de quitar productos inexistentes.
- **Procesamiento de órdenes**: Integración con Firebase Firestore para guardar órdenes de compra.
- **Temporizador de checkout**: Limita el tiempo para completar la compra.
- **Animaciones con notificaciones**: Mensajes de éxito y error claros para mejorar la experiencia del usuario.

## Tecnologías Utilizadas

- **React**: Para el desarrollo de componentes y gestión de estados.
- **React Router**: Navegación fluida entre rutas.
- **Firebase**: Almacenamiento de órdenes con Firestore.
- **FontAwesome**: Para íconos interactivos y accesibles.
- **Vite**: Entorno de desarrollo rápido y eficiente.
- **ESLint**: Mantenimiento de calidad del código.
- **CSS**: Personalización de estilos y diseño responsivo.

## Instalación

1. Clona el repositorio desde [GitHub](https://github.com/tuusuario/tienda-js.git):
   ```bash
   git clone https://github.com/tuusuario/tienda-js.git

2. Navega al directorio del proyecto: cd C:\Users\technisys\Desktop\Tienda.JS

3. Instala las dependencias necesarias: npm install

4. Configura Firebase agregando tus credenciales en el archivo `firebaseConfig.js`.

5. Ejecuta la aplicación en modo desarrollo: npm run dev

## Uso

1.  **Inicio**: Página de bienvenida con un resumen de los productos ofrecidos.
2.  **Productos**: Explora y filtra productos en la tienda.
3.  **Detalles del producto**: Consulta información detallada de cada producto.
4.  **Carrito**: Administra los productos seleccionados antes de la compra.
5.  **Checkout**: Completa la compra con un temporizador que refuerza la urgencia.
6.  **Contacto**: Formulario para consultas o soporte.

## Dependencias

### Producción

-   [React](https://reactjs.org/)
-   [React Router DOM](https://reactrouter.com/)
-   [Firebase](https://firebase.google.com/)
-   [FontAwesome](https://fontawesome.com/)

### Desarrollo

-   [Vite](https://vitejs.dev/)
-   [ESLint](https://eslint.org/)
-   [gh-pages](https://www.npmjs.com/package/gh-pages)

## Estructura de Proyecto


src/
├── assets/                # Recursos como imágenes y estilos globales
├── components/            # Componentes principales de la aplicación
├── context/               # Gestión de estados globales
├── firebaseConfig.js      # Configuración de Firebase
├── App.jsx                # Componente principal
├── App.css                # Estilos globales
├── index.html             # Punto de entrada HTML
├── main.jsx               # Renderizado de React
├── README.md              # Documentación del proyecto
└── package.json           # Dependencias y scripts


¡Disfruta usando **Tienda.JS** y no dudes en contribuir al proyecto!


### Ajustes personalizados:
- Cambia el enlace del repositorio de GitHub por el tuyo.
- Asegúrate de que las secciones sean consistentes con la estructura y funcionalidad actual del proyecto.