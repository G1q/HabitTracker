/* eslint-disable react-hooks/exhaustive-deps */
import { Navigate, useParams, useNavigate, Link } from 'react-router-dom'
import { useAuth } from '../../contexts/AuthContext'
import './Habit.css'
import { useEffect, useState } from 'react'
import axiosInstance from '../../config/axios.config'

import { IoTrashOutline, IoCheckmark, IoArrowUndoCircleOutline } from "react-icons/io5";
import { RiEditLine } from "react-icons/ri";



const Habit = () => {
    const { isLoggedIn, getUserId } = useAuth()
    const { id } = useParams()
    const [habit, setHabit] = useState({})

    const [error, setError] = useState()

    const navigate = useNavigate()

    useEffect(() => {
        getHabit()
    }, [])

    const getHabit = async () => {
        try {
            const response = await axiosInstance.get(`/users/habits/${getUserId()}`)
            const habitsArray = response.data.filter(item => item._id === id)
            setHabit(habitsArray[0])

        } catch (error) {
            setError(error.message) || setError(error.response.data.message)
        }
    }

    const deleteHabit = async () => {
        const confirmation = window.confirm('Are you sure you want to delete this habit?')

        if (confirmation) {
            try {
                const response = await axiosInstance.get(`/users/habits/${getUserId()}`)
                const habitsArray = response.data.filter(item => item._id !== id)
                await axiosInstance.put(`/users/habits/${getUserId()}`, { habits: habitsArray })

                navigate('/')

            } catch (error) {
                setError(error.message) || setError(error.response.data.message)
            }
        }
    }

    const completeHabit = async () => {
        try {
            const response = await axiosInstance.get(`/users/habits/${getUserId()}`)
            const habitsArray = response.data
            const habitIndex = habitsArray.findIndex(habit => habit._id === id)
            habitsArray[habitIndex] = habit
            await axiosInstance.put(`/users/habits/${getUserId()}`, { habits: habitsArray })
            navigate('/')

        } catch (error) {
            setError(error.message) || setError(error.response.data.message)
        }
    }

    return (
        <section className='user-section'>
            {isLoggedIn() ? (
                <>
                    <h1 className='habit__title'>
                        {error}
                        <img src={`/img/${habit.icon}`} title={habit.title} alt="" />
                        <span>{habit.title}</span>
                    </h1>
                    <p className='habit__description'>{habit.description}</p>
                    <div className='habit__months'>
                        <button>Prev month</button>
                        <p className='habit__current-month'>{new Date().toLocaleString('default', { month: 'long' })}</p>
                        <button>Next month</button>
                    </div>
                    <div>Calendar</div>
                    <div className="habit__actions">
                        <button className='habit__complete-btn' onClick={() => setHabit(prev => ({
                            ...prev,
                            completed: prev.completed < prev.completionsPerDay ? prev.completed + 1 : prev.completionsPerDay
                        }))}>
                            <IoCheckmark />
                            <span>Complete {`(${habit.completed} / ${habit.completionsPerDay})`}</span>
                        </button>
                        <button className='habit__reset-btn' onClick={() => setHabit(prev => ({
                            ...prev,
                            completed: 0
                        }))}>
                            <IoArrowUndoCircleOutline />
                            <span>Reset today</span>
                        </button>
                        <Link to={`/habits/edit`} state={{ id: habit._id }} className='habit__edit-btn'>
                            <RiEditLine />
                            <span>Edit</span>
                        </Link>
                        <button className='habit__delete-btn' onClick={() => deleteHabit()}>
                            <IoTrashOutline />
                            <span>Delete</span>
                        </button>
                        <button className='habit__complete-btn' onClick={completeHabit}>Save changes</button>
                    </div>
                </>
            ) : (
                <Navigate to="/" />
            )}
        </section >
    )
}

export default Habit