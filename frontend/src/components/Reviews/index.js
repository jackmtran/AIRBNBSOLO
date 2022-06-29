import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getReviews } from '../../store/reviews';
import { NavLink, useHistory, useParams } from 'react-router-dom';
import { deleteReviews } from '../../store/reviews'
import './Reviews.css'

function ShowReviews() {

    const dispatch = useDispatch();
    const history = useHistory();
    const {id} = useParams();


    const reviewsObject = useSelector(state => state.reviews);
    const reviewsArray = Object.values(reviewsObject);

    useEffect(() => {
        dispatch(getReviews())
    }, [dispatch])

    return (
        <>
            <h1>How was the chair?</h1>
            {reviewsObject && reviewsArray.map(review => {

                const forHoverREVDEL = (e) => {
                    e.preventDefault();
                    dispatch(deleteReviews(reviewsObject, id))
                    history.push('/reviews')
                }

                return <ul key={review.id}>
                    <ul>{review.title}</ul>
                    <ul>{review.reviewLine}</ul>
                    <ul><button className='button buttonspace' onClick={forHoverREVDEL}>Delete</button></ul>
                </ul>
            })}
        </>
    )
}

export default ShowReviews
