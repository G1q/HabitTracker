import './Logo.css'
import { Link } from 'react-router-dom'

const Logo = () => {
	return (
		<Link
			to="/"
			className="logo"
		>
			<img
				src="https://img.freepik.com/free-vector/cloud-logo-initial-colorful-gradient_343694-1299.jpg"
				alt="habit tracker logo"
			/>
			<span>HabitsTracker</span>
		</Link>
	)
}

export default Logo
