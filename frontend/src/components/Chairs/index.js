import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getChairs } from '../../store/chairs';
import { NavLink, useHistory } from 'react-router-dom';
import './Chairs.css'

function ShowChairs() {

    const dispatch = useDispatch();
    const history = useHistory();

    const chairsObject = useSelector(state => state.chairs);
    const chairsArray = Object.values(chairsObject);

    useEffect(() => {
        dispatch(getChairs())
    }, [dispatch])

    return (
        <>
            <h1>Hey, have a seat.</h1>
            {chairsObject && chairsArray.map(chair => {
                // if(chair.userId === userId) reveal edit button

                const forHoverEDIT = (e) => {
                    e.preventDefault();
                    history.push(`/chair/${chair.id}`)
                }

                const forHoverADDREV = (e) => {
                    e.preventDefault();
                    history.push(`/reviews/create`)
                }

                const forHoverREADREV = (e) => {
                    e.preventDefault();
                    history.push(`/reviews`)
                }

                return <ul className='gridthechairs' key={chair.id}>
                    <ul>{chair.name}</ul>
                    <ul>{chair.description}</ul>
                    <ul>${chair.price}/day</ul>
                    <ul>{chair.address}, {chair.city}, {chair.state}</ul>
                    <ul><button className='button buttonspace' onClick={forHoverEDIT}>Edit</button>
                    <button className='button buttonspace' onClick={forHoverADDREV}>Add A Review</button>
                    <button className='button buttonspace' onClick={forHoverREADREV}>Read Reviews</button></ul>
                </ul>
            })}
        </>
    )
}
//if chair.userId === userId reveal the edit button

export default ShowChairs
