import { useState } from 'react'
import { Link, useNavigate, Navigate } from 'react-router-dom'
import './Register.css'
import axiosInstance from '../../config/axios.config.js'
import { useAuth } from '../../contexts/AuthContext'

const Register = () => {
    const { isLoggedIn } = useAuth()
    const [username, setUsername] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [terms, setTerms] = useState(false)
    const [error, setError] = useState(false)

    const navigate = useNavigate()

    const registerUser = async (e) => {
        e.preventDefault()

        if (username.length < 3) return setError('Username must have minimum 3 chars')
        if (!/^[A-Za-z0-9]*$/.test(username)) return setError('Username must contain only letters and numbers')

        if (!email) return setError('Email is required!')
        if (!/^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/.test(email)) return setError('Email must follow the rules (e.g.: email@example.com)')

        if (password.length < 7) return setError('Password must have minimum 7 characters!')

        if (!terms) return setError('You must accept terms and conditions!')
        setError(false)

        try {
            await axiosInstance.post(`/users`, { username, email, password })
            navigate('/')
        } catch (error) {
            setError(error.message) || setError(error.response.data.message)
        }
    }

    return (
        <section className='user-section' id="register-page">
            {!isLoggedIn() ? (
                <div className='user-section__container'>
                    <h1 className='user-section__title'>Create a new account</h1>
                    <form>
                        <div className="form__group">
                            <label htmlFor="username">Username</label>
                            <input
                                type="text"
                                name="username"
                                id="username"
                                value={username}
                                onChange={(e) => setUsername(e.target.value)}
                            />
                        </div>

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

                        <div className="form__group checkbox__group">
                            <input
                                type="checkbox"
                                name="agree"
                                id="agree"
                                value={terms}
                                onChange={() => setTerms(!terms)}
                            />
                            <label htmlFor="agree">I have read and agreed to the terms and conditions</label>
                        </div>

                        {/* {error && <ErrorMessage message={error} />} */}
                        {error}
                        <button
                            type="button"
                            onClick={registerUser}
                        >
                            Create FREE account
                        </button>
                        <p>
                            You already have an account? Please <Link to="/login">Login</Link> to your account
                        </p>
                    </form>
                </div>

            ) : (
                <Navigate to="/" />
            )}
        </section>
    )
}

export default Register
