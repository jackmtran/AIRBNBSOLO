// frontend/src/components/LoginFormPage/index.js
import { addReviews, getReviews } from '../../store/reviews'
import { getChairs } from '../../store/chairs'
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

  const updateTitle = (e) => setTitle(e.target.value);
  const updateReviewLine= (e) => setReviewLine(e.target.value);


  const handleSUBREV= async (e) => {
     e.preventDefault();

    const url = window.location.href.split('/')
    const out = Number(url[url.length - 1])

    const reviewList = {
        title,
        reviewLine,
        userId,
        chairId: out,
    };

    dispatch(addReviews(reviewList));
    history.push(`/reviews/chair/${reviewList.chairId}`)
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
