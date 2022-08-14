/** @type import('hardhat/config').HardhatUserConfig */

const { graphql } = require('graphql');

require('dotenv').config();
require("@nomiclabs/hardhat-ethers");
require("@nomiclabs/hardhat-etherscan");
 
const { 
  API_URL, 
  PRIVATE_KEY, 
  ETHERSCAN_API_KEY,
  NEXT_PUBLIC_GRAPHCMS_ENDPOINT 
} = process.env;

module.exports = {
  solidity: "0.8.9",
  defaultNetwork: "goerli",
  networks: {
    hardhat: {},
    goerli: {
      url: API_URL,
      accounts: [`0x${PRIVATE_KEY}`]
    }
  },
  etherscan: {
    apiKey: ETHERSCAN_API_KEY,
  },
  graphcms: {
    graphqlAPI: NEXT_PUBLIC_GRAPHCMS_ENDPOINT
  }
};

