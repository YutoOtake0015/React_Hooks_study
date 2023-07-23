import { createContext } from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";

const mycodeInfo = {
  name: "mycode",
  age: 27,
};

const MyCodeContext = createContext(mycodeInfo);

ReactDOM.createRoot(document.getElementById("root")).render(
  <MyCodeContext.Provider value={mycodeInfo}>
    <App />
  </MyCodeContext.Provider>
);

export default MyCodeContext;
