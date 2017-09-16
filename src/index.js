import React from "react";
import Radium from "radium";
import KnockoutText from "react-component-knockout-text";

import Button from "./Button";

const styles = {
  container: {
    position: "relative",
    borderRadius: 999,
    overflow: "hidden",
    minHeight: "50%",
    backgroundColor: "transparent"
  },
  buttonContainer: {
    position: "absolute",
    height: "100%",
    width: "100%"
  },
  button: {
    backgroundColor: "transparent",
    cursor: "pointer",
    height: "100%",
    width: "100%",
    ":hover": {
      backgroundColor: "hsla(0,0%,0%,0.2)"
    }
  }
};

const KnockoutButton = ({ text, style = {}, ...props }) => (
  <div style={{ ...style, ...styles.container }}>
    <div style={styles.buttonContainer}>
      <Button {...props} style={styles.button} />
    </div>
    <KnockoutText text={text} style={style} />
  </div>
);

export default Radium(KnockoutButton);
