import { csrfFetch } from './csrf';


const ADD_REVIEW = 'review/ADD_REVIEW'
const GET_REVIEW = 'review/GET_REVIEW'
// const EDIT_REVIEW = 'review/EDIT_REVIEW'
const DELETE_REVIEW = 'review/DELETE_REVIEW'


const addReview = review => {
  return {
    type: ADD_REVIEW,
   review
  }
}

const getReview = allReviews => {
    return {
      type: GET_REVIEW,
      allReviews
    }
  }

// const editReview = review => {
//     return {
//       type: EDIT_REVIEW,
//       review
//     }
//   }

const deleteReview = did => {
    return {
      type: DELETE_REVIEW,
      did
    }
  }



//THUNKING

//READ
export const getReviews = (id) => async dispatch => {
  const res = await csrfFetch(`/api/reviews/chair/${id}`)

  if (res.ok) {
    const reviews = await res.json()
    dispatch(getReview(reviews))
  }
}

//CREATE
export const addReviews = (newReview) => async (dispatch) => {

  const res = await csrfFetch('/api/reviews/create/:id', {
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



// //UPDATE
// export const editReviews = (review, id) => async dispatch => {

//   const response = await csrfFetch(`/api/reviews/${id}`, {
//     method: 'PUT',
//     headers: {'Content-Type': 'application/json'},
//     body: JSON.stringify(review)
//   });

//   if (response.ok) {
//     const editedReview = await response.json();
//     dispatch(editReview(editedReview));
//     return editedReview;
//   }
// };


//DELETE
export const deleteReviews = (did, id) => async dispatch => {

    const res = await csrfFetch(`/api/reviews/${id}`, {
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
      const anotherState = {};
      action.allReviews.forEach((review) => {
      return anotherState[review.id] = review;
    });
      return anotherState;

      case ADD_REVIEW:
        return { ...state, [action.review.id]: { ...action.review}}

      // case EDIT_REVIEW:
      //   return {...state, [action.review.id]: action.review };

      case DELETE_REVIEW:
        delete newState[action.did.id];
        return newState

  default:
    return state;
  }
}
