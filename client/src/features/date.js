const initialState = {
  date: [],
};

const dateReducer = (state = initialState, action) => {
  switch (action.type) {
    case "dateGet":
      return {
        ...state,
        date: action.payload,
      };
    default:
      return state;
  }
};

export default dateReducer;
