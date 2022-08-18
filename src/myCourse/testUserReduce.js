import { useReducer } from "react";

const TestUserReduce = () => {
  const defaultState = {
    show: false,
  };

  const reducer = (state, action) => {
    if (action.type === "SHOW_ITEM") {
      return {
        ...state,
        show: true,
      };
    }
    return state;
  };

  const [state, dispatch] = useReducer(reducer, defaultState);

  const clickHanlder = () => {
    dispatch({ type: "SHOW_ITEM" });
  };

  return (
    <>
      {state.show && <h1>hello</h1>}
      <button onClick={clickHanlder}>click</button>
    </>
  );
};

export default TestUserReduce;
