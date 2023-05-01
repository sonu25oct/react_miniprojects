import React from "react";

const Title = ({ text }) => {
  return <div className="title">{!text ? "Title" : text}</div>;
};

export default Title;
