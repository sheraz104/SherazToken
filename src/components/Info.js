import React, { Component } from "react";
import { Well } from "react-bootstrap";
import web3 from "../web3";
import Token from "../contracts/TokenInstance";

const styles = {
  wellStyle: {
    width: "80%",
    margin: "auto",
    textAlign: "left"
  }
};

export default props => {
  const { balance, address } = props;
  return (
    <div>
      <Well style={styles.wellStyle} bsSize="large">
        Your Address: {address}
      </Well>
      <Well style={styles.wellStyle} bsSize="large">
        Tokens Owned: {balance}
      </Well>
    </div>
  );
};
