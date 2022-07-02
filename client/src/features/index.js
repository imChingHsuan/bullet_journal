import { combineReducers } from "redux";
import eventReducer from "./event";
import dateReducer from "./date";

const allReducers = combineReducers({
  event: eventReducer,
  date: dateReducer,
});

export default allReducers;
