import React from "react";
import GameBoard from "./components/gameBoard";
import "./App.css";

function App() {
  const data = {
    israel: "jerusalem",
    usa: "washington",
    france: "paris",
    germany: "berlin",
    italy: "rome",
    japan: "tokyo",
  };

  return (
    <div className="App">
      <h1>Counrty-City match</h1>
      <GameBoard data={data} />
    </div>
  );
}

export default App;
