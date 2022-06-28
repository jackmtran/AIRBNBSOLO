import { csrfFetch } from './csrf';


const ADD_REVIEW = 'review/ADD_REVIEW'
const GET_REVIEW = 'review/GET_REVIEW'
const EDIT_REVIEW = 'review/EDIT_REVIEW'
const DELETE_REVIEW = 'review/DELETE_REVIEW'


const addReview = getreview => {
  return {
    type: ADD_REVIEW,
    getreview
  }
}

const getReview = review => {
    return {
      type: GET_REVIEW,
      review
    }
  }

const editReview = review => {
    return {
      type: EDIT_REVIEW,
      review
    }
  }

const deleteReview = review => {
    return {
      type: DELETE_REVIEW,
      review
    }
  }



//THUNKING

//READ
export const getReviews = () => async dispatch => {
  const res = await csrfFetch('/api/reviews')

  if (res.ok) {
    const reviews = await res.json()
    dispatch(getReview(reviews))
  }
}

//CREATE
export const addReviews = (newReview) => async dispatch => {
  const res = await csrfFetch('/api/reviews', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(newReview)
  })

  if (res.ok) {
    const newReview = await res.json()
    dispatch(addReview(newReview))
    return newReview
  }
}



//UPDATE
export const editReviews = reviews => async dispatch => {
  const response = await fetch(`/api/reviews/${reviews.id}`, {
    method: 'PUT',
    headers: {'Content-Type': 'application/json'},
    body: JSON.stringify(reviews)
  });

  if (response.ok) {
    const edreview = await response.json();
    dispatch(editReview(edreview));
    return edreview;
  }
};


//DELETE
export const deleteReviews = (reviewId) => async dispatch => {

    const res = await fetch(`/api/reviews/${reviewId}`, {
      method: 'DELETE',
    });

    if (res.ok) {
      const reviewId = await response.json();
      dispatch(deleteReview(reviewId));
      return reviewId;
    }
  };


  const initialState = {};

export const reviewReducer = (state = initialState, action) => {


   switch (action.type) {
    case GET_REVIEW:
      const loadState = { ...state }
      action.getreview.forEach(review => (loadState[review.id] = review))
      return loadState;

    case ADD_REVIEW:
      return { ...state, [action.review.id]: { ...action.review }}


  default:
    return state;
  }
}
