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

                const forHoverEDIT = (e) => {
                    e.preventDefault();
                    history.push(`/chair/${chair.id}`)
                }

                const forHoverADDREV = (e) => {
                    e.preventDefault();
                    const chairId = Number(e.target.id)
                    history.push(`/reviews/create/${chairId}`)
                }

                const forHoverREADREV = (e) => {
                    e.preventDefault();
                    history.push(`/reviews/chair/${chair.id}`);
                }

                return <ul className='gridthechairs' key={chair.id}>
                    <div className="eachchair">
                    <ul> <a href={chair.url}><img src={chair.url} className='chairspic'/></a></ul>
                    <ul>{chair.name}</ul>
                    <ul>{chair.description}</ul>
                    <ul>${chair.price}/day</ul>
                    <ul>{chair.address}, {chair.city}, {chair.state}</ul>
                    <ul><button className='button buttonspace' onClick={forHoverEDIT}>Edit</button>
                    <button className='button buttonspace' id={chair.id} onClick={forHoverADDREV}>Add A Review</button>
                    <button className='button buttonspace' id={chair.id} onClick={forHoverREADREV}>Read Reviews</button></ul></div>
                </ul>
            })}
        </>
    )
}
//if chair.userId === userId reveal the edit button

export default ShowChairs
