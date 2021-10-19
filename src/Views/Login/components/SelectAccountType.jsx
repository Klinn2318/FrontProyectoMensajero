import { Link } from 'react-router-dom'

import './style/SelectAccountType.css'

// --> Icons <-- //
import UserAdminIcon from './icon/Admin'
import UserNormalIcon from './icon/NormalUser'
import UserDeliveryCourierIcon from './icon/DeliveryCourier'

const Form = () => {
	return (
		<div className="selectAcountType">
			<Link to="/login/type/admin">
				<div className="accountType--container">
					<UserAdminIcon />
					<span className="accountType--span">Administrador</span>
				</div>
			</Link>
			<Link to="/login/type/client">
				<div className="accountType--container">
					<UserNormalIcon />
					<span className="accountType--span">Cliente</span>
				</div>
			</Link>
			<Link to="/login/type/deliverycourier">
				<div className="accountType--container">
					<UserDeliveryCourierIcon />
					<span className="accountType--span">Mensajero</span>
				</div>
			</Link>
		</div>
	);
}

export default Form;