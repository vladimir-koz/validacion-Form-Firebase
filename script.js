// Importa los módulos necesarios desde Firebase
import { initializeApp } from "https://www.gstatic.com/firebasejs/11.1.0/firebase-app.js";
import { getFirestore, collection, addDoc } from "https://www.gstatic.com/firebasejs/11.1.0/firebase-firestore.js";

// Configuración de Firebase
const firebaseConfig = {
    apiKey: "AIzaSyDUimiHowyfAitQaDsJvaf_wlDaHfedyE4",
    authDomain: "form-d270a.firebaseapp.com",
    projectId: "form-d270a",
    storageBucket: "form-d270a.appspot.com",
    messagingSenderId: "410862454122",
    appId: "1:410862454122:web:93ffd46f7127454b269113",
    measurementId: "G-F05FCHGLYF"
};

// Inicializar Firebase y Firestore
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

document.getElementById('formulario').addEventListener('submit',async (event) =>{
    event.preventDefault()

    //Validad campo nombre
    let entradaNombre = document.getElementById('name')
    
    let errorNombre = document.getElementById('nameError')

    if(entradaNombre.value.trim() ===''){
        errorNombre.textContent = 'Por favor, introducí tu nombre'
        errorNombre.classList.add('error-message')
    }else{
        errorNombre.textContent=''
        errorNombre.classList.remove('error-message')
    }
    //Validad correo electronico
    let emailEntrada = document.getElementById('email')
    let emailError = document.getElementById('emailError')
    let emailPattern = /[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if(!emailPattern.test(emailEntrada.value)){
        emailError.textContent = 'Por favor, introducí un mail valido'
        emailError.classList.add('error-message')
    }else{
        emailError.textContent = ''
        emailError.classList.remove('error-message')
    }
    //Validad contraseña
    let contrasenaEntrada = document.getElementById('password')
    let contrasenaError = document.getElementById('passwordError')
    let contrasenaPattern = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[$@$!%*?&])[A-Za-z\d$@$!%*?&]{8,15}/;
    if(!contrasenaPattern.test(contrasenaEntrada.value)){
        contrasenaError.textContent = 'La contraseña debe tener al menos 8 caracteres'
        contrasenaError.classList.add('error-message')
    }else{
        contrasenaError.textContent = ''
        contrasenaError.classList.remove('error-message')
    }
    //Si todos los campos son válidos enviar form
    if(!errorNombre.textContent && !emailError.textContent && !contrasenaError.textContent){
        //Backend que reciba la info
        try {
            // Agregar un documento a la colección "users"
            await addDoc(collection(db, "users"), {
                nombre: entradaNombre.value,
                email: emailEntrada.value,
                password: contrasenaEntrada.value
            });
            alert('El formulario se ha enviado con éxito');
            document.getElementById('formulario').reset();
        } catch (error) {
            console.error("Error al guardar los datos:", error);
        }
    }
})