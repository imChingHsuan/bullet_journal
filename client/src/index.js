import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import logger from "redux-logger";
import { Provider } from "react-redux";
import eventReducer from "./features/event";
import Navbar from "./component/navbar";
import TodoList from "./component/todoList";

const store = createStore(eventReducer, applyMiddleware(thunk, logger));
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
      <Navbar />
      <TodoList></TodoList>
    </Provider>
  </React.StrictMode>
);
