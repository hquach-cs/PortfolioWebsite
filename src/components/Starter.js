import React from "react";
import Code from "./Code";
import "./../styles/starter.css";

// Styles
export default class Starter extends React.Component {
  render() {
    return (
      <div class="starterContainer" id="start">
        <Code />
        <div class="starterTitle">
          <h1>
            Henry <span>Quach</span>
          </h1>
          <div class="bars">
            <div class="bar"></div>
            <div class="bar2"></div>
          </div>
          <p>
            Software engineer residing in Nashville, TN.
            <span>Looking for a job opportunity.</span>
          </p>
        </div>
      </div>
    );
  }
}
