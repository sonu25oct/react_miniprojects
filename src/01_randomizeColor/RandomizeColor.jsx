import React from "react";
import Title from "../Title";
import "bootstrap/dist/css/bootstrap.min.css";

const RandomizeColors = () => {
  const colorHandler = () => {
    console.log("clicked");
  };
  return (
    <div>
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
      <button className="btn btn-primary " onClick={colorHandler}>
        Click Me
      </button>
    </div>
  );
};

export default RandomizeColors;
