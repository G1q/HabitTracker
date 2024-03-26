import { BrowserRouter, Routes, Route } from 'react-router-dom'
import MainLayout from './layouts/MainLayout'

function App() {
	return (
		<BrowserRouter>
			<Routes>
				<Route
					path="/"
					element={<MainLayout />}
				>
					<Route
						index
						element={<h1>Homepage</h1>}
					/>
					<Route
						path="/login"
						element={<h1>Login</h1>}
					/>
					<Route
						path="/register"
						element={<h1>Register</h1>}
					/>
					<Route
						path="/habits/new"
						element={<h1>Add new habit</h1>}
					/>
					<Route
						path="/habits/edit"
						element={<h1>Edit habit</h1>}
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
	)
}

export default App
