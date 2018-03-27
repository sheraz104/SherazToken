import React, { Component } from "react";
import Navbar from "./Navbar";
import { asyncComponent } from "react-async-component";
import MetamaskAlert from "./MetamaskAlert";
const styles = {
  fontStyles: {
    fontFamily: "Roboto Mono"
  }
};

class App extends Component {
  state = {
    FankariComponent: MetamaskAlert
  }
  async componentDidMount() {
    let ShowComponent;
    if (typeof window.web3 == "undefined") {
      ShowComponent = "./MetamaskAlert";
    } else {
      ShowComponent = "./Dashboard";
    }

    const FinalComponent = asyncComponent({
      resolve: () => import(`${ShowComponent}`),
      LoadingComponent: () => <div>Loading ...</div>, // Optional
      ErrorComponent: () => <div>error</div> // Optional
    })
    this.setState({FankariComponent: FinalComponent})
  }
  getWork = () => {};
  render() {
    const { FankariComponent } = this.state;
    return (
      <div style={styles.fontStyles}>
        <Navbar />
        <FankariComponent />
      </div>
    );
  }
}

export default App;
