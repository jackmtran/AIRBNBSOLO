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
        {chairsObject && chairsArray.map(chair => {
            return <ul key={chair.id}>
                <li>{chair.name}</li>
            </ul>
        })}
        </>
    )
}


export default ShowChairs
