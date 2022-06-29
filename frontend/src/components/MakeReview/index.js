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
  const chair = useSelector(state => state.chairs);
  const [title, setTitle] = useState("");
  const [reviewLine, setReviewLine] = useState("");
  const chairId = 3;
  const [userId] = useState(user.id)
  const id = 2;

  const updateTitle = (e) => setTitle(e.target.value);
  const updateReviewLine= (e) => setReviewLine(e.target.value);


  const handleSUBREV= async (e) => {

    console.log(chairId)
    console.log(chair)
    const reviewList = {
        id,
        title,
        reviewLine,
        userId,
        chairId,
    };

    e.preventDefault();
    dispatch(addReviews(reviewList));
    history.push('/reviews')
  };

  const handleCANCELREV = (e) => {
    e.preventDefault();
    history.push('/chairs')
  }

  return (
    <>
      <h1>Tell Us About Your Experience.</h1>
      <form className='post-form' onSubmit={handleSUBREV}>
        <input type="text" className='inputs' placeholder="tl;dr" value={title} onChange={updateTitle} required />
        <textarea type="text" className='textareas' placeholder="How was it?" value={reviewLine} onChange={updateReviewLine} required/>
        <button type="submit" className='button'>Submit Your Review</button>
        <button type="button" className='button' onClick={handleCANCELREV}> Cancel</button>
      </form>
    </>)
}


export default MakeReview;
