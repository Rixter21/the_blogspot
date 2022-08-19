import React from 'react'
import styles from './web3Button.module.scss';
import { connect } from '../../scripts/index.js.js';


const web3Button = () => {
  return (
    <button
      type="button"
      id="connectButton"
      onClick={connect}
      className={styles.button}
    >
      Connect Wallet
    </button>
  );
}

export default web3Button