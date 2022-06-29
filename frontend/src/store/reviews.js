import { csrfFetch } from './csrf';


const ADD_REVIEW = 'review/ADD_REVIEW'
const GET_REVIEW = 'review/GET_REVIEW'
const EDIT_REVIEW = 'review/EDIT_REVIEW'
const DELETE_REVIEW = 'review/DELETE_REVIEW'


const addReview = allReviews => {
  return {
    type: ADD_REVIEW,
    allReviews
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

const deleteReview = did => {
    return {
      type: DELETE_REVIEW,
      did
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
export const editReviews = (review, id) => async dispatch => {

  const response = await fetch(`/api/reviews/${id}`, {
    method: 'PUT',
    headers: {'Content-Type': 'application/json'},
    body: JSON.stringify(review)
  });

  if (response.ok) {
    const editedReview = await response.json();
    dispatch(editReview(editedReview));
    return editedReview;
  }
};


//DELETE
export const deleteReviews = (did, id) => async dispatch => {

    const res = await fetch(`/api/reviews/${id}`, {
      method: 'DELETE',
    });

    if (res.ok) {
      const reviewId = await res.json(did);
      dispatch(deleteReview(reviewId));
      return reviewId;
    }
  };


  const initialState = {};

export const reviewReducer = (state = initialState, action) => {
  let newState = { ...state }
   switch (action.type) {

    case GET_REVIEW:
      action.allReviews.forEach((review) => {
      return newState[review.id] = review;
    });
      return newState;

      case ADD_REVIEW:
        return { ...state, [action.review.id]: { ...action.review}}

      case EDIT_REVIEW:
        return {...state, [action.review.id]: action.review };

      case DELETE_REVIEW:
        delete newState[action.did.id];
        return newState

  default:
    return state;
  }
}
