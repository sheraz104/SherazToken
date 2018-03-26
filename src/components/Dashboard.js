import React, { Component } from "react";
import { Jumbotron, Button } from "react-bootstrap";
import Info from "./Info";
import Form from "./Form";
import MetamaskAlert from "./MetamaskAlert";
import web3 from '../web3';
import Token from '../contracts/TokenInstance';

const styles = {
  jumboStyle: {
    width: "50%",
    margin: "auto",
    height: "400px"
  }
};

class Dashboard extends Component {
    state = {
        address:'',
        balance:''
    }
  getAddress = () => {};

  getBalance = async () => {
    const accounts = await web3.eth.getAccounts();
   
    const balance = await Token.methods.balanceOf(accounts[0]).call();
    console.log("balance", balance)
    this.setState((prevState) => {
        return {
            balance: balance
        }
    })
  };

  async componentDidMount() {
    const accounts = await web3.eth.getAccounts();
    this.setState((prevState) => {
        return {address: accounts[0]}
    });

    const balance = await Token.methods.balanceOf(accounts[0]).call();
    console.log("balance", balance)
    this.setState((prevState) => {
        return {
            balance: balance
        }
    })
}
  render() {
    return (
      <div>
        <MetamaskAlert />
        <div style={{ textAlign: "center", marginTop: "5%" }}>
          <Jumbotron style={styles.jumboStyle}>
            <Info address={this.state.address} balance={this.state.balance} />
            <Form getBalance={this.getBalance} />
          </Jumbotron>
        </div>
      </div>
    );
  }
}

export default Dashboard;
