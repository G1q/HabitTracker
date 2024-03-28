/* eslint-disable react-hooks/exhaustive-deps */
import './AddHabit.css'
import { useAuth } from '../../contexts/AuthContext'
import { useEffect, useState } from 'react'
import { Navigate, useNavigate } from 'react-router-dom'
import axiosInstance from '../../config/axios.config.js'
import { formatDate } from '../../utilities/formatDate.js'
import { ICONS } from '../../data/icons'
import { COLORS } from '../../data/colors.js'
import GridSelector from '../../components/GridSelector/GridSelector.jsx'


const AddHabit = () => {
    const { isLoggedIn, getUserId } = useAuth()
    const [error, setError] = useState(false)
    const [habits, setHabits] = useState([])
    const [habit, setHabit] = useState({
        createdAt: formatDate(new Date()),
        completionsPerDay: 1
    })

    const navigate = useNavigate()

    useEffect(() => {
        getHabits()
    }, [])

    const getHabits = async () => {
        try {
            const response = await axiosInstance.get(`/users/habits/${getUserId()}`)
            setHabits(response.data)

        } catch (error) {
            setError(error.message) || setError(error.response.data.message)
        }
    }

    const handleChange = (e) => {
        setHabit(prev => ({
            ...prev,
            [e.target.name]: e.target.value
        }))
    }

    const createHabit = async () => {
        const updatedHabits = [...habits, habit]
        console.log(habit)

        try {
            console.log(habit)
            await axiosInstance.put(`/users/habits/${getUserId()}`, { habits: updatedHabits })
            navigate('/')
        } catch (error) {
            setError(error.message) || setError(error.response.data.message)
        }
    }

    return (
        <section className='user-section'>
            {isLoggedIn() ? (
                <div className='user-section__container'>
                    <h1 className='user-section__title'>Add new habit</h1>
                    <form>
                        <div className="form__group">
                            <label htmlFor="title">Habit name</label>
                            <input type="text" name="title" id="title" onChange={handleChange} />
                        </div>

                        <div className="form__group">
                            <label htmlFor="description">Description</label>
                            <textarea name="description" id="description" rows={5} onChange={handleChange}></textarea>
                        </div>

                        <div className="form__group">
                            <label htmlFor="completionsPerDay">Completions Per Day</label>
                            <div className="form__group flex__group">
                                <input type="number" name="completionsPerDay" id="completionsPerDay" min={1} max={10} value={habit.completionsPerDay} onChange={(e) => setHabit((prev) => ({ ...prev, completionsPerDay: e.target.value > 10 ? 10 : Number(e.target.value) }))} />
                                <button type="button" onClick={() => setHabit(prev => ({
                                    ...prev,
                                    completionsPerDay: prev.completionsPerDay > 1 ? prev.completionsPerDay - 1 : prev.completionsPerDay
                                }))} > -</button>

                                <button type="button" onClick={() => setHabit(prev => ({
                                    ...prev,
                                    completionsPerDay: prev.completionsPerDay < 10 ? prev.completionsPerDay + 1 : prev.completionsPerDay
                                }))} > +</button>
                            </div>
                        </div>

                        <GridSelector className="form__group" onChange={handleChange} items={ICONS} title="Icons" name="icon" />

                        <GridSelector className="form__group" onChange={handleChange} items={COLORS} title="Color" name="color" backgroundImage={false} />

                        {error}
                        <button
                            type="button"
                            onClick={createHabit}
                        >
                            Create new habit
                        </button>

                    </form>
                </div >
            ) : (
                <Navigate to="/" />
            )}
        </section >
    )
}

export default AddHabit