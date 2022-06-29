import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getChairs } from '../../store/chairs';
import { NavLink } from 'react-router-dom';
import './Chairs.css'

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
                <ul>{chair.name}</ul>
                <ul>{chair.description}</ul>
                <ul>${chair.price}/day</ul>
                <ul>{chair.address}, { chair.city}, { chair.state}</ul>
                <ul><button className='button'><NavLink className='navlinkEDIT' to={`/chair/${chair.id}`}>Edit</NavLink></button></ul>
            </ul>
        })}
        </>
    )
}
//if chair.userId === userId reveal the edit button

export default ShowChairs
