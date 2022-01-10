import React from "react";

const Scroller = (props) => {
  return (
    <div
      style={{
        overflow: "auto",
        border: "1px solid black",
        height: "800px",
      }}
    >
      {props.children}
    </div>
  );
};

export default Scroller;
