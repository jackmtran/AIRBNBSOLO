import { csrfFetch } from "./csrf"

const ADD_CHAIR = 'chair/ADD_CHAIR'
const GET_CHAIR = 'chair/GET_CHAIR'
const EDIT_CHAIR = 'chair/EDIT_CHAIR'
const DELETE_CHAIR = 'chair/DELETE_CHAIR'

const getChair = (allChairs) => {
  return {
    type: GET_CHAIR,
    allChairs
  }
}

const addChair = chair => {
  return {
    type: ADD_CHAIR,
    chair
  }
}

const editChair = chair => {
  return {
    type: EDIT_CHAIR,
    chair
  }
}

const deleteChair = did => {
  return {
    type: DELETE_CHAIR,
    did
  }
}

//THUNKING

//READ
export const getChairs = () => async (dispatch) => {

  const response = await csrfFetch(`/api/chairs`)

    const allChairs = await response.json();
    dispatch(getChair(allChairs))
};


// CREATE
export const addChairs = (newChair) => async dispatch => {

  const res = await csrfFetch(`/api/chairs/create`, {
    method: 'POST',
    headers: { 'Content-Type' : 'application/json' },
    body: JSON.stringify(newChair)
  });

  if (res.ok) {
    const createdChair = await res.json()
    dispatch(addChair(createdChair))
    return createdChair;
  }
};


// //UPDATE
export const editChairs = (chair, id) => async dispatch => {

  const res = await csrfFetch(`/api/chairs/${id}`, {
    method: 'PUT',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(chair)
  });

  if (res.ok) {
    const editedChair = await res.json(chair);
    dispatch(editChair(editedChair));
    return editedChair;
  }
};

// //DELETE
export const deleteChairs = (did, id) => async dispatch => {

  const res = await csrfFetch(`/api/chairs/${id}`, {
    method: 'DELETE',
  });

  if (res.ok) {
    const chairId = await res.json(did);
    dispatch(deleteChair(chairId));
    return chairId;
  }
};



const initialState = {};

export const chairReducer = (state = initialState, action) => {
  let newState = { ...state }
   switch (action.type) {

    case GET_CHAIR:
      action.allChairs.forEach((chair) => {
      return newState[chair.id] = chair;
    });
      return newState;

      case ADD_CHAIR:
        return { ...state, [action.chair.id]: { ...action.chair}}

      case EDIT_CHAIR:
        newState = {...state, [action.chair.id]: action.chair };
      return newState

      case DELETE_CHAIR:
        delete newState[action.did.id];
        return newState

  default:
    return state;
  }
}
