/* eslint-disable react/prop-types */

// new Date().toLocaleString('default', { month: 'long' })

import { useEffect, useState } from 'react';
import './Calendar.css'

const Calendar = ({ habitName, onClick }) => {
    const [month, setMonth] = useState(new Date().getMonth() + 1)

    useEffect(() => { getDaysInCurrentMonth() }, [month])

    const getDaysInCurrentMonth = () => {
        const now = new Date();
        return new Date(now.getFullYear(), now.getMonth() + 1, 0).getDate();
    }

    const days = new Array(getDaysInCurrentMonth())
    days.fill(0)


    return (
        <div className="habit__calendar">
            <div className='habit__card--months'>
                <button onClick={() => { setMonth(prev => prev - 1) }}>Prev month</button>
                <p className='habit__card--current-month'>{month}</p>
                <button onClick={() => { setMonth(prev => prev + 1) }}>Next month</button>
            </div>
            <div className="habit__calendar-grid">
                {
                    days.map((day, index) => (
                        <div key={`${habitName}-day-${index + 1}`} className="habit__calendar-grid--till">
                            <label htmlFor={`${habitName.trim().toLowerCase().replaceAll(' ', '-')}-day${index + 1}`}>{index + 1}</label>
                            <input type="checkbox" name={`${habitName.trim().toLowerCase().replaceAll(' ', '-')}-day${index + 1}`} id={`${habitName.trim().toLowerCase().replaceAll(' ', '-')}-day${index + 1}`} onClick={onClick} />
                        </div>
                    ))
                }
            </div>
        </div>
    )
}

export default Calendar