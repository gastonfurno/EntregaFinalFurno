# gfphone

Aplicación de venta de celulares utilizando React y Firebase como base de datos.

## Instalación

Asegúrate de tener [Node.js](https://nodejs.org/) instalado en tu máquina.

1. Clona este repositorio: `git clone https://github.com/gastonfurno/EntregaFinalFurno.git`
2. Navega al directorio del proyecto: `cd gfphone`
3. Instala las dependencias: `npm install`

## Configuración de Firebase

1. Crea un proyecto en [Firebase](https://firebase.google.com/) si aún no tienes uno.
2. Configura tu aplicación React para usar la base de datos de Firebase. Puedes encontrar la configuración en el archivo `src/firebase/firebaseConfig.js`.

```javascript
// src/firebase/firebaseConfig.js

const firebaseConfig = {
  apiKey: "TU_API_KEY",
  authDomain: "TU_AUTH_DOMAIN",
  projectId: "TU_PROJECT_ID",
  storageBucket: "TU_STORAGE_BUCKET",
  messagingSenderId: "TU_MESSAGING_SENDER_ID",
  appId: "TU_APP_ID"
};

export default firebaseConfig

Para correr la aplicacion deberas ingresar el comando: 'npm run dev'
Abre tu navegador y ve a http://localhost:5173/
