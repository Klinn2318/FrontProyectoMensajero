import { useLocation } from "react-router-dom";

import './style/Header.css'

const Header = () => {
	const location = useLocation()
	let userType;

	if (location.pathname === '/login/type/client') {
		userType = 'Cliente';
	} else if (location.pathname === '/login/type/admin') {
		userType = 'Administrador';
	} else if (location.pathname === '/login/type/deliverycourier') {
		userType = 'Mensajero';
	}

	return (
		<header>
			{location.pathname === '/login' && (<h1>Bienvenido</h1>)}
			{(userType === 'Cliente' || userType === 'Administrador' || userType === 'Mensajero') && (<h1>Iniciar Sesion</h1>)}
			{location.pathname === '/login/register' && (<h1>Registrate</h1>)}
			{location.pathname === '/login' && (<h4>Selecciona el tipo de cuenta</h4>)}

			{(location.pathname === '/login/type/client' ||
				location.pathname === '/login/type/admin' ||
				location.pathname === '/login/type/deliverycourier') && (<h4>Estas iniciando sesion como: <strong>"{userType}"</strong></h4>)}
		</header>
	);
};

export default Header;