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



export const login = (user) => async (dispatch) => {
    const { credential, password } = user;
    const response = await csrfFetch('/api/session', {
      method: 'POST',
      body: JSON.stringify({
        credential,
        password,
      }),
    });
    const data = await response.json();
    dispatch(setUser(data.user));
    return response;
  };
