import { useState } from 'react';
import { BrowserRouter as Router, Link, Route } from 'react-router-dom';

import './style/Login.css'

import Header from './components/Header';
import SelectAccountType from './components/SelectAccountType';
import Form from './components/Form'
import Register from './components/Register'

function Login() {

	const [theme, setTheme] = useState('light')
	let savedTheme = localStorage.getItem('theme')

	if (savedTheme !== theme) {
		setTheme(savedTheme);
	}

	function toogleTheme() {
		let alternativeTheme = theme === 'light' ? 'dark' : 'light'
		setTheme(alternativeTheme)
		localStorage.setItem('theme', alternativeTheme)
	}

	return (
		<Router>
			<div id="root-container" className={theme ? theme : 'light'}>

				<div className="rootBtn themeBtn" onClick={toogleTheme}>Cambiar esquema de colores</div>

				<Route path='/login/type'>
					<Link to="/login">
						<div className="rootBtn backBtn">Tipos de cuenta</div>
					</Link>
				</Route>

				<Route path='/login/register'>
					<Link to="/login">
						<div className="rootBtn backBtn">Iniciar Sesion</div>
					</Link>
				</Route>

				<Route path="/login">
					<div id="login-card">
						<Header />
						<Route exact path='/login/register'>
							<Register />
						</Route>

						<Route path="/login" exact>
							<SelectAccountType />
						</Route>

						<Route path='/login/type'>
							<Form />
						</Route>
					</div>
				</Route>
			</div>
		</Router>
	);
};

export default Login;