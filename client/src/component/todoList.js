import React from "react";
import "../css/todoList.css";

function TodoList() {
  return (
    <div>
      <div className="cardWrap">
        <div className="mainCard">
          <div className="detail">
            <div className="dateWrap">
              <h3>2022-01-11</h3>
            </div>
            <div className="weatherWrap">
              <h3>天氣</h3>
              <div className="weatherIcon">sunny</div>
            </div>
            <div className="noteWrap">
              <h3 className="noteText">NOTE</h3>
              <p className="noteText">今天天氣好</p>
            </div>
          </div>
          <div className="todoList">
            <h2 className="todoText">代辦事項</h2>
            <div className="bulletBox">
              <div className="bullet">
                <input type="checkbox" className="bulletCheck"></input>
                <p className="todo">洗衣服</p>
                <button className="editBtn">edit</button>
                <button className="deleteBtn">delete</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TodoList;
