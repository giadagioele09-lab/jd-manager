// Firebase SDK - Connessione JD Manager
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.0/firebase-app.js";
import { getAuth, GoogleAuthProvider, signInWithPopup } from "https://www.gstatic.com/firebasejs/10.7.0/firebase-auth.js";

const firebaseConfig = {
  apiKey: "AIzaSyCppFhxRO8NatltrmBXqUXGj-cWG5X8wdU",
  authDomain: "jd-manager-quello-definitivo.firebaseapp.com",
  projectId: "jd-manager-quello-definitivo",
  storageBucket: "jd-manager-quello-definitivo.firebasestorage.app",
  messagingSenderId: "412067831707",
  appId: "1:412067831707:web:4b61a8a3c0477cc830cb3e",
  measurementId: "G-ZBSRRHKT6G"
};

// Inizializzazione Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();

// Funzione login con Google
export async function signInWithGoogle() {
  try {
    const result = await signInWithPopup(auth, provider);
    const user = result.user;
    alert("Accesso eseguito come: " + user.email);
    localStorage.setItem("loggedUser", user.email);

    // Controllo ruolo
    if (user.email === "maslowgiady1309@gmail.com") {
      localStorage.setItem("role", "master");
      alert("Benvenuta, Master!");
    } else {
      localStorage.setItem("role", "operator");
      alert("Accesso come Operatore limitato.");
    }

    window.location.href = "index.html";
  } catch (error) {
    alert("Errore durante il login: " + error.message);
  }
}
