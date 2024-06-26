/* eslint-disable react/prop-types */
/* eslint-disable react-refresh/only-export-components */
import { createContext, useContext, useState } from 'react'
import { jwtDecode } from 'jwt-decode'

const AuthContext = createContext()

export const AuthProvider = ({ children }) => {
	const [authToken, setAuthToken] = useState(localStorage.getItem('token') || null)

	const isLoggedIn = () => {
		if (!authToken) {
			return false
		}

		const decodedToken = jwtDecode(authToken)
		const currentTime = Date.now() / 1000

		return decodedToken.exp > currentTime
	}

	const getUserRole = () => {
		if (!authToken) {
			return null
		}

		const decodedToken = jwtDecode(authToken)
		return decodedToken.role
	}

	const getUserId = () => {
		if (!authToken) {
			return null
		}

		const decodedToken = jwtDecode(authToken)
		return decodedToken.id
	}

	const getUsername = () => {
		if (!authToken) return null

		const decodedToken = jwtDecode(authToken)
		return decodedToken.username
	}

	const getUserSettings = () => {
		if (!authToken) return null

		const decodedToken = jwtDecode(authToken)
		return decodedToken.settings
	}

	return <AuthContext.Provider value={{ authToken, setAuthToken, isLoggedIn, getUserRole, getUserId, getUsername, getUserSettings }}>{children}</AuthContext.Provider>
}

export const useAuth = () => {
	return useContext(AuthContext)
}
