const initialState = {
  event: [],
};

const eventReducer = (state = initialState, action) => {
  switch (action.type) {
    case "apiGet":
      return {
        ...state,
        event: action.payload,
      };
    case "apiPost":
      return {
        ...state,
        event: [...state, action.payload],
      };
    case "apiDelete":
      return {
        ...state,
        event: action.payload,
      };
    case "apiPut":
      return {
        ...state,
        event: action.payload,
      };
    default:
      return state;
  }
};

export default eventReducer;

//GET reference by https://medium.com/手寫筆記/server-side-rendering-ssr-in-reactjs-part4-38649606d384
