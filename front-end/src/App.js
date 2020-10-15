import React from "react";
import logo from "./logo.svg";
import "./App.css";
import io from "socket.io-client";
let socket = io("http://localhost:8080");

function App() {
  socket.on("news_by_server", function (msg) {
    console.log("msg=====>", msg);
  });
  return <div className="App">hello</div>;
}

export default App;
