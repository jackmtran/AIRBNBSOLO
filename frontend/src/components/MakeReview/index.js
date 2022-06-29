// frontend/src/components/LoginFormPage/index.js
import { addReviews } from '../../store/reviews'
import React, { useEffect, useState } from 'react';
import * as sessionActions from '../../store/session';
import { useDispatch, useSelector } from 'react-redux';
import { NavLink, useHistory, useParams } from "react-router-dom";
import './MakeReview.css'

function MakeReview() {
  const dispatch = useDispatch();
  const history = useHistory();
  const user = useSelector(state => state.session.user);
  const [title, setTitle] = useState("");
  const [reviewLine, setReviewLine] = useState("");
  const [userId] = useState(user.id);
  const [chairId] = useState(chair.id);

  const updateTitle = (e) => setTitle(e.target.value);
  const updateReviewLine= (e) => setReviewLine(e.target.value);

  const handleSubmit = async (e) => {


    const reviewList = {
        title,
        reviewLine,
        userId,
        chairId
    }

    e.preventDefault();
    dispatch(addReviews(reviewList));
    history.push('/reviews')
  };

  const handleCancelClick = (e) => {
    e.preventDefault();
    history.push('/reviews')
  }

  return (
    <>
      <h1>List Your Chairs !</h1>
      <form className='post-form' onSubmit={handleSubmit}>
        <input type="text" className='inputs' placeholder="Title" value={title} onChange={updateTitle} required />
        <input type="text" className='inputslast' placeholder="How was your experience?" value={reviewLine} onChange={updateReviewLine} required />
        <button type="submit" className='button' >Submit Your Review</button>
        <button type="button" className='button' onClick={handleCancelClick}> Cancel</button>
      </form>
    </>)
}


export default MakeReview;
