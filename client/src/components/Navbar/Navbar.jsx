import { Link } from 'react-router-dom'
import './Navbar.css'
import { BiPlusCircle } from 'react-icons/bi'
import LogoutButton from '../LogoutButton/LogoutButton'
import { useAuth } from '../../contexts/AuthContext'

const Navbar = () => {
	const { isLoggedIn, getUsername } = useAuth()

	return (
		<nav className="primary-navigation">
			<ul>
				{!isLoggedIn() &&
					<>
						<li>
							<Link to="/login">Login</Link>
						</li>
						<li>
							<Link to="/register">Register</Link>
						</li>
					</>
				}
				{
					isLoggedIn() && <>
						<li>
							<span>Hi, </span>
							<Link to="/profile">{getUsername()}</Link>
						</li>
						<li>
							<Link
								to="/habits/new"
								className="cta-link"
							>
								<BiPlusCircle size={20} />
								<span>Add new habit</span>
							</Link>
						</li>
						<li><LogoutButton /></li>
					</>
				}

			</ul>
		</nav>
	)
}

export default Navbar
