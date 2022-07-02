import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getEvent, postEvent, deleteEvent, putEvent } from "./action";
import "./App.css";

function App() {
  const dispatch = useDispatch();
  const eventList = useSelector((state) => state.event.event);
  const [date, setDate] = useState("");
  const [title, setTitle] = useState("");
  const [newEvent, setNewEvent] = useState("");

  useEffect(() => {
    dispatch(getEvent());
  }, []);

  return (
    <div className="App" style={{ display: "none" }}>
      <h2>
        {eventList.map((event) => (
          <div key={event.eventId}>
            <p>
              I'm going to {event.title} at {event.date}
            </p>
            <input
              placeholder="edit the event"
              onChange={(e) => {
                setNewEvent(e.target.value);
              }}
            ></input>
            <button
              onClick={() => {
                dispatch(putEvent({ newEvent, eventId: event.eventId }));
              }}
            >
              edit
            </button>
            <button
              onClick={() => {
                dispatch(deleteEvent(event.eventId));
              }}
            >
              delete
            </button>
          </div>
        ))}
      </h2>
      <input
        onChange={(e) => {
          setDate(e.target.value);
        }}
        placeholder="enter date"
      ></input>
      <input
        onChange={(e) => {
          setTitle(e.target.value);
        }}
        placeholder="enter event"
      ></input>
      <button
        onClick={() => {
          dispatch(postEvent({ date, title }));
        }}
      >
        post data
      </button>
    </div>
  );
}

export default App;
