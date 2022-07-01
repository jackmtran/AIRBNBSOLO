import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getReviews, deleteReviews } from '../../store/reviews';
import { NavLink, useHistory, useParams } from 'react-router-dom';
import './Reviews.css'

function ShowReviews() {

    const dispatch = useDispatch();
    const history = useHistory();


    const reviewsObject = useSelector(state => state.reviews);
    const reviewsArray = Object.values(reviewsObject);

    const url = window.location.href.split('/')
    const out = Number(url[url.length - 1])

    useEffect(() => {
        dispatch(getReviews(out))
    }, [dispatch])

    return (
        <>
            <h1>How was the chair?</h1>
            {reviewsObject && reviewsArray.map(review => {

                const forHoverREVDEL = (e) => {
                    e.preventDefault();
                    const buttonData = Number(e.target.id);
                    for (const review of reviewsArray) {
                        if (review.id === buttonData) {
                            dispatch(deleteReviews(review, buttonData))
                            history.push(`/reviews/chair/${review.chairId}`)
                        }
                    }


                }

                return<div className= "chairsreviews" key={review.id}>
                    <ul className="revtitle">{review.title}</ul>
                    <ul className="revline">{review.reviewLine}</ul>
                    <ul><button id={review.id} className='button buttonspace' onClick={forHoverREVDEL}>Delete</button></ul>
                </div>
            })}
        </>
    )
}

export default ShowReviews
