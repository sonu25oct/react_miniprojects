import React from "react";

const Title = ({ text }) => {
  return (
    <div className="title">
      <h1 className="mb-4 mt-5">{!text ? "Title" : text}</h1>
    </div>
  );
};

export default Title;
