import Axios from "axios";

export const getEvent = () => async (dispatch) => {
  const res = await Axios.get(`http://localhost:3001/event/get`);

  dispatch({
    type: "eventGet",
    payload: res.data,
  });
};

export const postEvent =
  ({ date, title }) =>
  async (dispatch) => {
    const res = await Axios.post(`http://localhost:3001/event/insert`, {
      date: date,
      title: title,
    });

    dispatch({
      type: "eventPost",
      payload: res.data,
    });
  };

export const deleteEvent = (eventId) => async (dispatch) => {
  const res = await Axios.delete(
    `http://localhost:3001/event/delete/${eventId}`
  );
  dispatch({
    type: "eventDelete",
    payload: res.data,
  });
};

export const putEvent =
  ({ newEvent, eventId }) =>
  async (dispatch) => {
    const res = await Axios.put(
      `http://localhost:3001/event/update/${eventId}`,
      {
        newEvent: newEvent,
      }
    );
    dispatch({
      type: "eventPut",
      payload: res.data,
    });
  };

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
