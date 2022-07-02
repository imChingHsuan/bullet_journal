const initialState = {
  event: [],
};

const eventReducer = (state = initialState, action) => {
  switch (action.type) {
    case "eventInfoGet":
      return {
        ...state,
        event: action.payload,
      };
    case "checkUpdate":
      return {
        ...state,
        event: [...state, action.payload],
      };
    default:
      return state;
  }
};

export default eventReducer;

//GET reference by https://medium.com/手寫筆記/server-side-rendering-ssr-in-reactjs-part4-38649606d384
