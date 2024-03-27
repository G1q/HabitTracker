import './EditHabit.css'
import { useLocation } from 'react-router-dom'

const EditHabit = () => {
    const dataLink = useLocation()
    const { id } = dataLink.state

    return (
        <h1>Edit habit, id: {id}</h1>
    )
}

export default EditHabit