import React from "react";

const DemoOutput = (props) => {
  console.log("DemoOutput running");
  return <p>{props.show ? "Hello there" : ""}</p>;
};

export default React.memo(DemoOutput);
