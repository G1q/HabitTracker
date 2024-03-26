import { Link } from 'react-router-dom'
import './Navbar.css'
import { BiPlusCircle } from 'react-icons/bi'

const Navbar = () => {
	return (
		<nav className="primary-navigation">
			<ul>
				<li>
					<span>Hi, </span>
					<Link to="/profile">BG</Link>
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
				<li>{/* TODO: logout btn */}</li>
			</ul>
		</nav>
	)
}

export default Navbar
