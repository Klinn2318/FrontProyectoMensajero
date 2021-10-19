import axios from "axios";

const Register = () => {

    const baseURL = "http://localhost:8080/usuario/crear"

    async function submitFormRegister(usuario, password) { // <== Enviar datos a Backend
        let data = {
            usuario: usuario,
            password: password
        }
        console.log(data)
        axios.post(baseURL, data)
            .then((response) => {
                window.location.href = "/home"
            })
            .catch(error => {
                alert(`El usuario ${data.usuario} ya esta registrado, pruebe con otro`)
            });
    }

    let usuario;
    let password;
    let passwordRepeat;


    function validateData(e) {
        e.preventDefault();
        usuario = document.querySelector("#usuario").value;
        password = document.querySelector("#password").value;
        passwordRepeat = document.querySelector("#repeat-password").value;

        if (usuario.length === 0 || password.length === 0 || passwordRepeat.length === 0) {
            alert("Porfavor, Rellena todos los campos")
            return;
        } else if (password.length < 6) {
            alert("La contraseña debe tener por lo menos 6 caracteres")
            return;
        } else if (password !== passwordRepeat) {
            alert("Las contraseñas no coinciden")
            return;
        } else {
            submitFormRegister(usuario, password);
        }

    }

    return (
        <form className="login-form" onSubmit={validateData}>
            <label htmlFor="usuario">Usuario</label>
            <input name="usuario" id="usuario" className="login-form__input" placeholder="Ingresa un Usuario" type="text"
                   required/>
            <label htmlFor="password">Contraseña</label>
            <input name="password" id="password" className="login-form__input" placeholder="Ingresa una Contraseña"
                   type="password" required/>
            <label htmlFor="repear-password">Repite la contraseña</label>
            <input name="password" id="repeat-password" className="login-form__input"
                   placeholder="Ingresa de nuevo tu Contraseña" type="password" required/>

            <input className="login-form__submit" type="submit" value="Registar"/>
        </form>
    )
}

export default Register