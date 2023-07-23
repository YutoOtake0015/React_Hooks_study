import {
  useEffect,
  useState,
  useContext,
  useRef,
  useReducer,
  useMemo,
} from "react";
import "./App.css";
import MyCodeContext from "./main";

const reducer = (state, action) => {
  switch (action.type) {
    case "increment":
      return state + 1;
    case "decrement":
      return state - 1;
    default:
      return state;
  }
};

function App() {
  const [count, setCount] = useState(0);
  const mycodeInfo = useContext(MyCodeContext);
  const ref = useRef();
  const [state, dispatch] = useReducer(reducer, 0);

  const handleClick = () => {
    setCount(count + 1);
  };
  useEffect(() => {
    console.log("Hello React");
  }, [count]);

  const handleRef = () => {
    console.log(ref.current.value);
  };

  const [count01, setCount01] = useState(0);
  const [count02, setCount02] = useState(0);
  const square = useMemo(() => {
    let i = 0;
    while (i < 2000) {
      i++;
    }
    return count02 * count02;
  }, [count02]);

  return (
    <div className="App">
      <h1>UseState, useEffect</h1>
      <button onClick={handleClick}>プラス</button>
      <p>{count}</p>
      <hr />

      <h1>useContext</h1>
      <p>{mycodeInfo.name}</p>
      <p>{mycodeInfo.age}</p>
      <hr />

      <h1>useRef</h1>
      <input type="text" ref={ref} />
      <button onClick={handleRef}>useRef</button>
      <hr />

      <h1>useReducer</h1>
      <p>カウント: {state}</p>
      <button onClick={() => dispatch({ type: "increment" })}>＋</button>
      <button onClick={() => dispatch({ type: "decrement" })}>−</button>
      <hr />

      <h1>useMemo</h1>
      <div>カウント１:{count01}</div>
      <div>カウント２:{count02}</div>
      <div>結果:{square}</div>
      <button onClick={() => setCount01(count01 + 1)}>＋</button>
      <button onClick={() => setCount02(count02 + 1)}>＋</button>
      <hr />
    </div>
  );
}

export default App;
