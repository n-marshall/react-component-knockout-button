import React from "react";
import Radium from "radium";
import KnockoutText from "react-component-knockout-text";

import Button from "./Button";

const styles = {
  container: {
    position: "relative",
    borderRadius: 200,
    overflow: "hidden"
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
  <div style={styles.container}>
    <div style={styles.buttonContainer}>
      <Button
        style={styles.button}
        onPress={() => {
          console.log("CLICKED");
        }}
      />
    </div>
    <KnockoutText text={text} />
  </div>
);

export default Radium(KnockoutButton);
