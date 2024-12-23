document.getElementById('formulario').addEventListener('submit',(event) =>{
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
    if(contrasenaEntrada.value.length < 8){
        contrasenaError.textContent = 'La contraseña debe tener al menos 8 caracteres'
        contrasenaError.classList.add('error-message')
    }else{
        contrasenaError.textContent = ''
        contrasenaError.classList.remove('error-message')
    }
    //Si todos los campos son válidos enviar form
    if(!errorNombre.textContent && !emailError.textContent && !contrasenaError.textContent){
        //Backend que reciba la info
        alert('El formulario se ha enviado con exito')
        document.getElementById('formulario').reset()
    }
})