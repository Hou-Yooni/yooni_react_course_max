import { useState, useEffect } from "react";

const ResizeWidth = () => {
  const [size, setSize] = useState(window.innerWidth);
  const checkSize = () => {
    setSize(window.innerWidth);
  };
  useEffect(() => {
    console.log("createEventListener");
    window.addEventListener("resize", checkSize);
    return () => {
      window.removeEventListener("resize", checkSize);
      console.log("removeEventListener");
    };
  }, []);
  return (
    <>
      <h1 style={{ color: "#d7b272", fontSize: "90px", marginBottom: 0 }}>
        {`${size} px`}
      </h1>
      <p style={{ color: "#ead0a4" }}>Current Window Width</p>
    </>
  );
};

export default ResizeWidth;
