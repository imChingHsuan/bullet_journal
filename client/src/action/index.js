import Axios from "axios";

export const getEvent = () => async (dispatch) => {
  const res = await Axios.get("http://localhost:3001/api/get");

  dispatch({
    type: "apiGet",
    payload: res.data,
  });
};

export const postEvent =
  ({ date, title }) =>
  async (dispatch) => {
    const res = await Axios.post("http://localhost:3001/api/insert", {
      date: date,
      title: title,
    });

    dispatch({
      type: "apiPost",
      payload: res.data,
    });
  };

export const deleteEvent = (eventId) => async (dispatch) => {
  const res = await Axios.delete(`http://localhost:3001/api/delete/${eventId}`);
  dispatch({
    type: "apiDelete",
    payload: res.data,
  });
};

export const putEvent =
  ({ newEvent, eventId }) =>
  async (dispatch) => {
    const res = await Axios.put(`http://localhost:3001/api/update/${eventId}`, {
      newEvent: newEvent,
    });
    dispatch({
      type: "apiPut",
      payload: res.data,
    });
  };
