/* eslint-disable react/prop-types */
import './HabitCard.css'
import { Link } from 'react-router-dom'

const HabitCard = ({ habit }) => {
    return (
        <article className="habit__card">
            <header className='habit__card--header'>
                <Link to='/habits/edit' state={{ id: habit._id }}><h2 className='habit__card--title'>
                    <img src={habit.icon} alt="habit icon" className='habit__card--icon' />
                    <span>{habit.title}</span>
                </h2></Link>
                <button>✔</button>
            </header>
            <main className='habit__card--content'>
                <p className='habit__card--description'>{habit.description}</p>
                <div className='habit__card--months'>
                    <button>Prev month</button>
                    <p className='habit__card--current-month'>{new Date().toLocaleString('default', { month: 'long' })}</p>
                    <button>Next month</button>
                </div>
                <div>Calendar</div>
            </main>
        </article>
    )
}

export default HabitCard