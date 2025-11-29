// Configuración de Firebase para Compras Mantenimiento
// Este fichero se comparte entre el programa principal y la app de responsables.

const firebaseConfig = {
  apiKey: "AIzaSyCjmIiEt91ORnjW6lNrIkEl6rGG-uxIqgk",
  authDomain: "compras-mantenimiento.firebaseapp.com",
  projectId: "compras-mantenimiento",
  storageBucket: "compras-mantenimiento.firebasestorage.app",
  messagingSenderId: "520661805072",
  appId: "1:520661805072:web:1a3068244aa06ee9cb8295"
};

// Inicializar Firebase (SDK compat)
firebase.initializeApp(firebaseConfig);

// Exponer instancia de Firestore para todo el programa
const db = firebase.firestore();
