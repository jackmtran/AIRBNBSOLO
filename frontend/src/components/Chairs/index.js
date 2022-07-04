import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getChairs } from '../../store/chairs';
import { useHistory, useParams } from 'react-router-dom';
import './Chairs.css'

function ShowChairs() {

    const dispatch = useDispatch();
    const history = useHistory();

    const user = useSelector(state => state.session.user)
    const chairsObject = useSelector(state => state.chairs);
    const chairsArray = Object.values(chairsObject);

    useEffect(() => {
        dispatch(getChairs())
    }, [dispatch])


    if (!user) {
        return (
            <>
                <h1>Hey, have a seat.</h1>
                {chairsObject && chairsArray.map(chair => {
                    return <ul className='gridthechairs' key={chair.id}>
                        <div className="eachchair">
                            <ul><img src={chair.url} className='chairspic' alt='chairpicture' /></ul>
                            <ul className="chairtitle">{chair.name}</ul>
                            <ul className="chairstuff">{chair.description}</ul>
                            <ul className="chairstuff">${chair.price}/day</ul>
                            <ul className="chairstuff">{chair.address}, {chair.city}, {chair.state}</ul>
                        </div>
                    </ul>
                }
                )

                }</>
        )
    }
    else {
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
                    if (chair.userId === user.id) {
                        return <ul className='gridthechairs' key={chair.id}>
                            <div className="eachchair">
                                <ul><img src={chair.url} className='chairspic' alt='chairpicture' /></ul>
                                <ul className="chairtitle">{chair.name}</ul>
                                <ul className="chairstuff">{chair.description}</ul>
                                <ul className="chairstuff">${chair.price}/day</ul>
                                <ul className="chairstuff">{chair.address}, {chair.city}, {chair.state}</ul>
                                <ul className="spacing">
                                    <button className='button buttonspace' id={chair.id} onClick={forHoverADDREV}>Add A Review</button>
                                    <button className='button buttonspace' id={chair.id} onClick={forHoverREADREV}>Read Reviews</button>
                                    <button className='button buttonspace' onClick={forHoverEDIT}>Edit Post</button></ul>
                            </div>
                        </ul>
                    }
                    else {
                        return <ul className='gridthechairs' key={chair.id}>
                            <div className="eachchair">
                                <ul><img src={chair.url} className='chairspic' alt='chairpicture' /></ul>
                                <ul className="chairtitle">{chair.name}</ul>
                                <ul className="chairstuff">{chair.description}</ul>
                                <ul className="chairstuff">${chair.price}/day</ul>
                                <ul className="chairstuff">{chair.address}, {chair.city}, {chair.state}</ul>
                                <ul className="spacing">
                                    <button className='button buttonspace' id={chair.id} onClick={forHoverADDREV}>Add A Review</button>
                                    <button className='button buttonspace' id={chair.id} onClick={forHoverREADREV}>Read Reviews</button>
                                    {/* <button className='button buttonspace' onClick={forHoverEDIT}>Edit Post</button> */}
                                </ul>
                            </div>
                        </ul>
                    }
                })}
            </>
        )
    }
}
//if chair.userId === userId reveal the edit button

export default ShowChairs
