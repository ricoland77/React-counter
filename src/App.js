import "./App.css";
import { useState } from "react";

function App(props) {
  const [counter, setCounter] = useState(0);

  return (
    <div className="container">
      <header className="top">
        <i class="fa-solid fa-calculator"></i>
        <p>React Counter</p>
      </header>
      <div className="counter-menu">
        <div className="counter">
          <button className="less">–</button>
          <p className="count">0</p>
          <button
            className="more"
            onClick={() => {
              props.setCounter(props.counter + 1);
            }}
          >
            +
          </button>
        </div>
        <div>
          <button className="reset">Reset</button>
        </div>
      </div>
      <footer className="footer">
        <p>Made with React at Le Reacteur by Rico</p>
      </footer>
    </div>
  );
}

export default App;
