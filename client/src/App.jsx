import { BrowserRouter, Routes, Route } from 'react-router-dom'
import MainLayout from './layouts/MainLayout'
import { AuthProvider } from './contexts/AuthContext'
import Register from './pages/Register/Register'
import Login from './pages/Login/Login'
import Homepage from './pages/Homepage/Homepage'
import AddHabit from './pages/AddHabit/AddHabit'
import EditHabit from './pages/EditHabit/EditHabit'

function App() {
	return (
		<AuthProvider>
			<BrowserRouter>
				<Routes>
					<Route
						path="/"
						element={<MainLayout />}
					>
						<Route
							index
							element={<Homepage />}
						/>
						<Route
							path="/login"
							element={<Login />}
						/>
						<Route
							path="/register"
							element={<Register />}
						/>
						<Route
							path="/habits/new"
							element={<AddHabit />}
						/>
						<Route
							path="/habits/edit"
							element={<EditHabit />}
						/>
						<Route
							path="/habits/:id"
							element={<h1>Habit Page</h1>}
						/>
						<Route
							path="/profile"
							element={<h1>Profile page</h1>}
						/>
						<Route
							path="/profile/settings"
							element={<h1>User settings page</h1>}
						/>
						<Route
							path="/profile/edit"
							element={<h1>User edit page</h1>}
						/>
						<Route
							path="/profile/stats"
							element={<h1>User stats page</h1>}
						/>
					</Route>

					<Route
						path="*"
						element={<h1>Page not found</h1>}
					/>
				</Routes>
			</BrowserRouter>
		</AuthProvider>
	)
}

export default App
