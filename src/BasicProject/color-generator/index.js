/* eslint-disable no-unused-vars */
import "./index.css";
import Values from "values.js";
import { useState } from "react";
import SingleColor from "./SingleColor";

const App = () => {
  const [color, setColor] = useState("");
  const [error, setError] = useState(false);
  const [list, serList] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    try {
      let colors = new Values(color).all(10);
      serList(colors);
    } catch (error) {
      setError(true);
    }
  };
  return (
    <>
      <section className="container">
        <h3>color generator</h3>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            value={color}
            onChange={(e) => setColor(e.target.value)}
            placeholder="#f15025"
            className={`${error ? "error" : null}`}
          />
          <button className="btn" type="submit">
            submit
          </button>
        </form>
      </section>
    </>
  );
};

export default App;
