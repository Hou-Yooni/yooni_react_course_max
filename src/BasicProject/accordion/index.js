/* eslint-disable no-unused-vars */
import { useState } from "react";
import data from "./data";
import SingleQuestion from "./Question";
import "./index.css";
const App = () => {
  const [question, setQuestion] = useState(data);
  return (
    <main>
      <div className="container">
        <h3>questions and answers about login</h3>
        <section className="info">
          {question.map((question) => {
            return <SingleQuestion key={question.id} {...question} />;
          })}
        </section>
      </div>
    </main>
  );
};
export default App;
