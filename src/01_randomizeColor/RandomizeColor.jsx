import React from "react";
import Title from "../Title";
import "bootstrap/dist/css/bootstrap.min.css";

const RandomizeColors = () => {
  const colorHandler = (e) => {
    // console.log(ColorHeandler());
    let body = document.querySelector("body");
    body.style.background = ColorHeandler();
    e.target.style.background = ColorHeandler();
    e.target.style.color = ColorHeandler();
    e.target.style.borderColor = ColorHeandler();
  };

  const ColorHeandler = () => {
    let letter = "0123456789ABCDEF";
    let color = "#";
    for (let i = 0; i < 6; i++) {
      color += letter[Math.floor(Math.random() * 16)];
    }
    return color;
  };
  return (
    <div className="container text-center">
      <Title text={"Randomize Color"} />
      <button className="btn btn-primary me-2" onClick={colorHandler}>
        Click Me
      </button>
      <button className="btn btn-danger me-2" onClick={colorHandler}>
        Click Me
      </button>
      <button className="btn btn-success me-2" onClick={colorHandler}>
        Click Me
      </button>
      <button className="btn btn-warning " onClick={colorHandler}>
        Click Me
      </button>
    </div>
  );
};

export default RandomizeColors;
