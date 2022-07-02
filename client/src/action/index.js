import Axios from "axios";

// 開始
export const getDateInfo = (dateTime) => async (dispatch) => {
  const res = await Axios.get(`http://localhost:3001/date/get/${dateTime}`);
  dispatch({
    type: "dateGet",
    payload: res.data,
  });
};

export const getEventInfo = (dateTime) => async (dispatch) => {
  const res = await Axios.get(`http://localhost:3001/event/get/${dateTime}`);
  dispatch({
    type: "eventInfoGet",
    payload: res.data,
  });
};

export const checkEvent = (eventId) => async (dispatch) => {
  const res = await Axios.put(`http://localhost:3001/check/${eventId}`);
  dispatch({
    type: "checkUpdate",
    payload: res.data,
  });
};
