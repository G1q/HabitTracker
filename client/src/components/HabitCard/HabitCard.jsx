/* eslint-disable react/prop-types */
import Calendar from '../Calendar/Calendar'
import './HabitCard.css'
import { Link } from 'react-router-dom'

const HabitCard = ({ habit }) => {
    return (
        <article className="habit__card" style={{ '--_color': habit.color }}>
            <header className='habit__card--header'>
                <Link to={`/habits/${habit._id}`}><h2 className='habit__card--title'>
                    <img src={`img/${habit.icon}`} alt="habit icon" className='habit__card--icon' />
                    <span>{habit.title}</span>
                </h2></Link>
                <button>✔</button>
            </header>
            <main className='habit__card--content'>
                <p className='habit__card--description'>{habit.description}</p>
                <Calendar habitName={habit.title} />
            </main>
        </article>
    )
}

export default HabitCard