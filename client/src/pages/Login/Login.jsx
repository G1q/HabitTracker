import { useState } from 'react'
import { useNavigate, Link, Navigate } from 'react-router-dom'
import './Login.css'
import axiosInstance from '../../config/axios.config.js'
import { useAuth } from '../../contexts/AuthContext'

const Login = () => {
	const { isLoggedIn } = useAuth()
	const [email, setEmail] = useState('')
	const [password, setPassword] = useState('')
	const [error, setError] = useState(false)

	const navigate = useNavigate()

	const loginUser = async (e) => {
		e.preventDefault()

		if (!email) return setError('Email is required!')
		if (!password) return setError('Password is required!')

		setError(false)

		try {
			const response = await axiosInstance.post(`/auth/login`, { email, password })
			localStorage.setItem('token', response.data.token)
			navigate(0)
		} catch (error) {
			setError(error.message) || setError(error.response.data.message)
		}
	}

	return (
		<section className='user-section'>
			{!isLoggedIn() ? (
				<div className='user-section__container'>
					<h1 className='user-section__title'>Login</h1>
					<form>
						<div className="form__group">
							<label htmlFor="email">Email</label>
							<input
								type="email"
								name="email"
								id="email"
								value={email}
								onChange={(e) => setEmail(e.target.value)}
							/>
						</div>

						<div className="form__group">
							<label htmlFor="password">Password</label>
							<input
								type="password"
								name="password"
								id="password"
								value={password}
								onChange={(e) => setPassword(e.target.value)}
							/>
						</div>

						{/* {error && <ErrorMessage message={error} />} */}
						{error}
						<button
							type="button"
							onClick={loginUser}
						>
							Login
						</button>
						<p>
							You do not have an account? Please <Link to="/register">register</Link> a new one
						</p>
					</form>
				</div>
			) : (
				<Navigate to="/" />
			)}
		</section>
	)
}

export default Login
