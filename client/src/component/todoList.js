import React, { useEffect } from "react";
import "../css/todoList.css";
import { useSelector, useDispatch } from "react-redux";
import { getDateInfo, getEventInfo, checkEvent } from "../action";

function TodoList() {
  const dispatch = useDispatch();
  const dateInfo = useSelector((state) => state.date.date);
  const eventList = useSelector((state) => state.event.event);
  const d = new Date();
  const y = d.getFullYear();
  const m = d.getMonth() + 1;
  const day = d.getDate();
  let yesterday = d.setDate(d.getDate() - 1);
  yesterday = new Date(yesterday);
  const sqlDate = y.toString() + "-" + m.toString() + "-" + day.toString();
  const weather = (e) => {
    if (e == 0) {
      return "rainy";
    } else {
      return "sunny";
    }
  };
  useEffect(() => {
    dispatch(getDateInfo(sqlDate));
  }, []);
  useEffect(() => {
    dispatch(getEventInfo(sqlDate));
  }, []);
  console.log(...dateInfo);
  return (
    <div>
      <div className="cardWrap">
        <div className="mainCard">
          <div className="detail">
            <div className="dateWrap">
              <h3 className="date">
                {y}年{m}月{day}日
              </h3>
            </div>
            <div className="weatherWrap">
              <h3>天氣</h3>
              <div className="weatherIcon">
                {/* {dateInfo.weather == 0 ? "rainy":"sunny" } */}
                {weather(dateInfo.weather)}
                {/* {dateInfo.weather} */}
              </div>
            </div>
            <div className="noteWrap">
              <h3 className="noteText">NOTE</h3>
              {/* note資料串接問題（非同步） */}
              <p className="noteText"></p>
            </div>
          </div>
          <div className="todoList">
            <h2 className="todoText">代辦事項</h2>
            <div className="bulletBox">
              {eventList.map((e) => (
                <div className="bullet" key={e.eventId}>
                  <input
                    type="checkbox"
                    className="bulletCheck"
                    checked={e.done ? "check" : ""}
                    onClick={() => {
                      dispatch(checkEvent(e.eventId));
                    }}
                  ></input>
                  <p className="eTitle">{e.title}</p>
                  <p className="eReminder">{e.reminder}</p>
                  <button className="editBtn">EDIT</button>
                  <button className="deleteBtn">DELETE</button>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TodoList;
