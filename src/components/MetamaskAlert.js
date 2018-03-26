import React, { Component } from "react";
import { Alert } from "react-bootstrap";
import web3 from '../web3';

export default () => {
  return (
    <div>
      {typeof window.web3 == "undefined" && (
        <Alert
          style={{
            width: "50%",
            margin: "auto",
            marginTop: "5%",
            textAlign: "center"
          }}
          bsStyle="danger"
        >
          Make sure that <strong>Metamask</strong> chrome extention is installed, connected
          to <strong> Ropsten </strong> network and an account is unlocked!
        </Alert>
      )}
    </div>
  );
};
