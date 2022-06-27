import { csrfFetch } from "./csrf"

const CREATE_CHAIR = 'chair/CREATE_CHAIR'
const READ_CHAIR = 'chair/READ_CHAIR'
const UPDATE_CHAIR = 'chair/UPDATE_CHAIR'
const DELETE_CHAIR = 'chair/DELETE_CHAIR'


const createChair = chair => {
  return {
    type: CREATE_CHAIR,
    chair
  }
}


const readChair = chair => {
  return {
    type: READ_CHAIR,
    chair
  }
}


const updateChair = chair => {
  return {
    type: UPDATE_CHAIR,
    chair
  }
}



const deleteChair = chair => {
  return {
    type: DELETE_CHAIR,
    chair
  }
}

//THUNKING

//READ
export const readChairs = () => async dispatch => {
  const res = await csrfFetch('/api/chairs')

  if (res.ok) {
    const chairs = await res.json()
    dispatch(readChair(chairs))
    return res
  }
}


//CREATE
// export const createChairs = (newChair) => async dispatch => {
//   const res = await csrfFetch('/api/chairs/create', {
//     method: 'POST',
//     headers: { 'Content-Type': 'application/json' },
//     body: JSON.stringify(newChair)
//   })

//   if (res.ok) {
//     const newchairs = await res.json()
//     dispatch(createChair(newchairs))
//     return newchairs
//   }
// }




// //UPDATE
// export const updateChairs = deets => async dispatch => {
//   const res = await fetch(`/api/items/${deets.id}`, {
//     method: 'PUT',
//     headers: {'Content-Type': 'application/json'},
//     body: JSON.stringify(deets)
//   });

//   if (res.ok) {
//     const chair = await res.json();
//     dispatch(updateChair(chair));
//     return chair;
//   }
// };

// //DELETE
// export const deleteChairs = (chairId, userId) => async dispatch => {
//   const res = await fetch(`/api/chairs/${chairId}`, {
//     method: 'DELETE',
//   });

//   if (res.ok) {
//     const { id: deletedChairId } = await res.json();
//     dispatch(deleteChair(deletedChairId, userId));
//     return deletedChairId;
//   }
// };


const initialState = {};

export const chairReducer = (state = initialState, action) => {
  let newState = {...state};
  switch(action.type) {
    case READ_CHAIR:
      action.chairs.forEach((chair) => {
        return newState[chair.id] = chair;
    });
      return newState;
    case CREATE_CHAIR:
      if(!state[action.createChair.id]) {
        newState = {
          ...state,
          [action.createChair.id]: action. createChairs,
        };
      }
  return newState
  default:
    return state;
  }
}



export default chairReducer;
