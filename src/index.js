import React from "react";
import ReactDOM from "react-dom";
import Navbar from "./components/Navbar";
import Starter from "./components/Starter";
import "./styles/index.css";

class App extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        <Navbar />
        <Starter />
        <div style={{ height: "1500px" }}></div>
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById("root"));
