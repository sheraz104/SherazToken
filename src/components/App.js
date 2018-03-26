import React, { Component } from "react";
import Navbar from "./Navbar";
import Dashboard from "./Dashboard";

const styles = {
  fontStyles: {
    fontFamily: "Roboto Mono"
  }
};

class App extends Component {
  render() {
    return (
      <div style={styles.fontStyles}>
        <Navbar />
        <Dashboard />
      </div>
    );
  }
}

export default App;
