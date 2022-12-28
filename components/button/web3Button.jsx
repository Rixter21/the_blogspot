import React from "react";
import { connect } from "../../scripts/index.js.js";

const web3Button = () => {
  return (
    <button
      type="button"
      id="connectButton"
      onClick={connect}
      style={{ color: 'white', backgroundColor: 'red' }}
    >
    Connect Wallet
    </button>

  );
};

export default web3Button;
