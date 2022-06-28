import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getChairs } from '../../store/chairs';
import { NavLink } from 'react-router-dom'

function ShowChairs() {

    const dispatch = useDispatch();

    const chairsObject = useSelector(state => state.chairs);
    const chairsArray = Object.values(chairsObject);

    useEffect (()=> {
        dispatch(getChairs())
    }, [dispatch])

    return (
        <>
        <h1>All Chairs</h1>
        {chairsObject && chairsArray.map(chair => {
            return <ul key={chair.id}>
                <li>{chair.name}</li>
                <li>{chair.description}</li>
                <li>${chair.price}/day</li>
                <li>{chair.address}, { chair.city}, { chair.state}</li>
                <button><NavLink to={`/chair/${chair.id}`}>Edit</NavLink></button>
            </ul>
        })}
        </>
    )
}
//if chair.userId === userId reveal the edit button

export default ShowChairs
