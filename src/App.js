import React, { useState } from "react";
function App() {
  // useState take color name is string formatd
  
  let [color, setcolor] = useState("grey");
  return (
    // if inside the style key-value pair if valu is not in double quotes it treat as javascript variable
    <>
      <div
        className="w-full  duration-200"
        style={{ backgroundColor: color, height: "100vh" }}
      >
        <div style={{ textAlign: "center", fontSize: "40px", color: "gold" }}>
          <h1>BackgroundColor Changer</h1>
        </div>
        <button
          style={{ backgroundColor: "red" }}
          onClick={() => {
            setcolor("red");
          }}
        >
          red
        </button>
        <button
          style={{ backgroundColor: "blue" }}
          onClick={() => {
            setcolor("blue");
          }}
        >
          blue
        </button>
        <button
          style={{ backgroundColor: "green" }}
          onClick={() => {
            setcolor("green");
          }}
        >
          grren
        </button>
        <button
          style={{ backgroundColor: "brown" }}
          onClick={() => {
            setcolor("brown");
          }}
        >
          brown
        </button>
        <button
          style={{ backgroundColor: "orange" }}
          onClick={() => {
            setcolor("orange");
          }}
        >
          orange
        </button>
        <button
          style={{ backgroundColor: "purple" }}
          onClick={() => {
            setcolor("purple");
          }}
        >
          purple
        </button>
        <button
          style={{ backgroundColor: "pink" }}
          onClick={() => {
            setcolor("pink");
          }}
        >
          pink
        </button>

        <button
          style={{ backgroundColor: "magenta" }}
          onClick={() => {
            setcolor("magenta");
          }}
        >
          magenta
        </button>
        <button
          style={{ backgroundColor: "black", color: "white" }}
          onClick={() => {
            setcolor("black");
          }}
        >
          whilte
        </button>
      </div>
    </>
  );
}

export default App;
