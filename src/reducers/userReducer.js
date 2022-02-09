const initState = {
  user: { username: "", type: "" },
  id: "",
  room: null,
};

const userReducer = (state = initState, action) => {
  switch (action.type) {
    case "ADD_USER":
      return {
        ...state,
        username: action.payload,
      };
    case "SET_ERROR":
      return { ...state, error: action.payload };
    case "SET_HOST":
        console.log(action.payload)
      return {
        ...state,
        user: action.payload,
        room: action.room,
      };
    case "SET_PLAYER":
      return {
        ...state,
        user: action.payload,
        room: action.room,
      };
    case "SET_ID":
      return {
        ...state,
        id: action.payload.id,
      };
    case "RESET_TYPE":
      return initState;
    default:
      return state;
  }
};

export default userReducer;
