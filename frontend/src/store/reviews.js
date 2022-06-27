const CREATE_REVIEW = 'review/CREATE_REVIEW'
const READ_REVIEW = 'review/READ_REVIEW'
const UPDATE_REVIEW = 'review/UPDATE_REVIEW'
const DELETE_REVIEW = 'review/DELETE_REVIEW'


const createReview = review => {
  return {
    type: CREATE_REVIEW,
    review
  }
}


const readReview = review => {
    return {
      type: READ_REVIEW,
      review
    }
  }


const updateReview = review => {
    return {
      type: UPDATE_REVIEW,
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

//CREATE
export const createReviews = (newrEview) => async dispatch => {
  const res = await csrfFetch('/api/reviews', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(reviews)
  })

  if (res.ok) {
    const reviews = await res.json()
    dispatch(createReview(reviews))
    return reviews
  }
}

//READ
export const readReviews = () => async dispatch => {
  const res = await fetch('/api/reviews')

  if (res.ok) {
    const reviews = await res.json()
    dispatch(readReview(reviews))
    return res
  }
}


//UPDATE
export const updateReviews = views => async dispatch => {
  const response = await fetch(`/api/items/${views.id}`, {
    method: 'PUT',
    headers: {'Content-Type': 'application/json'},
    body: JSON.stringify(views)
  });

  if (response.ok) {
    const reviews = await response.json();
    dispatch(updateReview(reviews));
    return reviews;
  }
};


//DELETE
export const deleteReviews = (reviewId, chairId) => async dispatch => {
    const res = await fetch(`/api/reviews/${reviewId}`, {
      method: 'DELETE',
    });

    if (res.ok) {
      const { id: deletedReviewId } = await response.json();
      dispatch(deleteReview(deletedReviewId, chairId));
      return deletedReviewId;
    }
  };
