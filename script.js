document.getElementById('formulario').addEventListener('submit', (event) =>{
    event.preventDefault()
    
    //Valiudad campo nomvre
    let entradaNomvre = document.getElementById('name')
    let errorNomvre = document.getElementById('nameError')

    if(entradaNomvre.value.trim() === ''){
        errorNomvre.textContent = 'Introduce tu nomvre porfavor'
        errorNomvre.classList.add('error-message')
    }else{
        errorNomvre.textContent = ''
        errorNomvre.classList.remove('error-message')
    }

    // validar correo electronico
    let emailEntrada = document.getElementById('email')
    let emailError = document.getElementById('emailError')
    let emailPattern = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if(!emailPattern.test(emailEntrada.value)){
        emailError.textContent = 'Introduce un email valido porfavor'
        emailError.classList.add('error-message')
    }else {
        emailError.textContent = ''
        emailError.classList.remove('error-message')
    }

    // validar la contraseña
    let contraseñaEntrada = document.getElementById('password')
    let contraseñaError = document.getElementById('passwordError')
    let contraseñaPattern =  /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[$@$!%*?&#.$($)$-$_])[A-Za-z\d$@$!%*?&#.$($)$-$_]{8,15}$/;
    if(!contraseñaPattern.test(contraseñaEntrada.value)){
        contraseñaError.textContent = 'la contraseña tiene que tener almenos 8 caracteres, numeros, mayuscula, minuscula y caracteres especiales'
        contraseñaError.classList.add('error-message')
    }

    // si todos los campos son validos enviar formulario

    if(!errorNomvre.textContent && !emailError.textContent && !contraseñaError.textContent){
        alert('El formulario se envio con exito')
        document.getElementById('formulario').reset();
    }
})