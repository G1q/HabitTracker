import { Outlet } from 'react-router-dom'
import Header from '../components/Header/Header'

const MainLayout = () => {
	return (
		<>
			<Header />
			<main style={{ maxWidth: 'var(--max-width)', marginInline: 'auto' }}>
				<Outlet />
			</main>
		</>
	)
}

export default MainLayout
