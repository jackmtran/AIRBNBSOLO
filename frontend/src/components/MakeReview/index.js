// frontend/src/components/LoginFormPage/index.js
import { addReviews} from '../../store/reviews'
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from "react-router-dom";
import './MakeReview.css'

function MakeReview() {
  const dispatch = useDispatch();
  const history = useHistory();
  const user = useSelector(state => state.session.user);

  const [title, setTitle] = useState("");
  const [reviewLine, setReviewLine] = useState("");
  const [userId] = useState(user.id);

  let errorsHolder = {title:'', reviewLine: ''};
  const [errors, setErrors] = useState(errorsHolder);


  const updateTitle = (e) => setTitle(e.target.value);
  const updateReviewLine= (e) => setReviewLine(e.target.value);


  const handleSUBREV= async (e) => {
     e.preventDefault();


     let error = false;
     errorsHolder = {...errorsHolder};

     if(title.length < 3) {
     errorsHolder.title = "Title must be at least 3 characters."
     error = true
     }
     if(title === '') {
      errorsHolder.title = "Title must be at least 3 characters."
      error = true
      }
     if(reviewLine === '') {
      errorsHolder.reviewLine = "Review is needed.";
      error = true;
     }
     else if (reviewLine.length < 4) {
      errorsHolder.reviewLine = "Reviews must be at least 4 characters."
      error = true
     }
     else if (reviewLine.length > 40) {
      errorsHolder.reviewLine = "Reviews must be under 40 characters."
      error = true
     }
     setErrors(errorsHolder);


    if(!error){
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
}

  const handleCANCELREV = (e) => {
    e.preventDefault();
    history.push('/chairs')
  }

  return (
    <>
      <h1>Tell Us About Your Experience.</h1>
      <form className='post-form' onSubmit={handleSUBREV}>
      {errors.title && <div className="errorformat">{errors.title} </div>}
      {errors.reviewLine && <div className="errorformat">{errors.reviewLine} </div>}
        <input type="text" className='inputs' placeholder="tl;dr" value={title} onChange={updateTitle} />
        <textarea type="text" className='textareas' placeholder="How was it?" value={reviewLine} onChange={updateReviewLine}/>
        <button type="submit" className='button'>Submit Your Review</button>
        <button type="button" className='button' onClick={handleCANCELREV}> Cancel</button>
      </form>
    </>)
}


export default MakeReview;
