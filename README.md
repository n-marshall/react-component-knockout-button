# react-component-knockout-button
Button component for React with transparent text

![result](./docs/knockout.png "result")

## Installation

`yarn add react-component-knockout-button`

## Usage

[embedmd]:# (./docs/usage.js javascript)
```javascript
import React from "react";
import ReactDOM from "react-dom";
import Radium, { Style } from "radium";

import KnockoutButton from "react-component-knockout-button";

const styles = {
  container: {
    backgroundSize: "cover",
    backgroundImage: "url(http://brokensquare.com/Code/assets/landscape.jpg)",
    padding: "20% 20%"
  }
};

const App = () => (
  <div>
    <div style={styles.container}>
      <KnockoutButton text={"Click me !"} />
    </div>
  </div>
);

const AppRadium = Radium(App);

ReactDOM.render(
  <div>
    <AppRadium />
  </div>,
  document.getElementById("app")
);
```





