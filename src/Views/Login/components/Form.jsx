import { useLocation, Link } from 'react-router-dom';
import axios from 'axios';
import './style/Form.css'

const Form = () => {

	const location = useLocation()
	const baseURL = "";

	let user;
	let password;
	let rol;

	if (location.pathname === '/login/type/client') {
		rol = 'cliente';
	} else if (location.pathname === '/login/type/admin') {
		rol = 'administrador';
	} else if (location.pathname === '/login/type/deliverycourier') {
		rol = 'mensajero';
	}

	async function submitFormLogin(e) { // <== Enviar datos a Backend
		e.preventDefault()
		alert("Enviando Datos a Backend para verificar inicio de Sesion");
		user = document.querySelector("#user").value
		password = document.querySelector("#password").value

		let data = {
			user: user,
			password: password,
			rol: rol
		}
		
		console.log(data)
		axios.post(baseURL, data)
		.then((response)=>{
			console.log(response)
		})
	}

	return (
		<form className="login-form" onSubmit={submitFormLogin}>
			<label htmlFor="user">Usuario</label>
			<input name="user" id="user" className="login-form__input" placeholder="Ingresa tu Usuario" type="text" required />
			<label htmlFor="password">Contraseña</label>
			<input name="password" id="password" className="login-form__input" placeholder="Ingresa tu Contraseña" type="password" required />
			<div className="login-form__submit--container">
				<input className="login-form__submit" type="submit" value='Ingresar' />

				{(location.pathname === "/login/type/client") && (
					<Link to="/login/register">
						<button className="login-form__submit">Registrate</button>
					</Link>)}
			</div>
		</form>
	)
}

export default Form;