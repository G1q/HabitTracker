/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { useAuth } from '../../contexts/AuthContext'
import './Homepage.css'
import axiosInstance from '../../config/axios.config.js'

const Homepage = () => {
    const { isLoggedIn, getUserId } = useAuth()
    const [user, setUser] = useState({})
    const [error, setError] = useState(false)

    useEffect(() => {
        getUser()
    }, [])

    const getUser = async () => {
        try {
            const response = await axiosInstance.get(`/users/${getUserId()}`)
            setUser(response.data)

        } catch (error) {
            setError(error.message) || setError(error.response.data.message)
        }
    }

    return (
        <section className='user-section'>
            {isLoggedIn() && (
                <div className='user-section__container'>
                    <h1 className='user-section__title'>Habits Tracker</h1>
                    {error}
                    <div className="habits">
                        {
                            user.habits && user.habits.length > 0 ? (
                                // TODO: Create list of habits
                                <p>Test</p>
                            ) : (
                                <div className='habits-empty'>
                                    <div className="habits-empty__container">
                                        <p>You have no habits registered. Please add your first habit</p>
                                        <Link to="/habits/new" className='cta-link'>Add new habit</Link>
                                    </div>
                                </div>
                            )
                        }
                    </div>
                </div>
            )}
        </section>
    )
}

export default Homepage