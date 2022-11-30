
const initialState = {
    userId: null
};


const SET_USER_ID = "SET_USER_ID";

export const setUserId = (id) => {
    return {
        type: SET_USER_ID,
        payload: id
    }
}



export default (state = initialState, { type, payload }) => {
    console.log(type, payload)
  switch (type) {
    case SET_USER_ID: 
        return {
            userId: payload
        }

  default:
    return state
  }
}
