const API_KEY = process.env.API_KEY;
const PRIVATE_KEY = process.env.PRIVATE_KEY;
const CONTRACT_ADDRESS = process.env.CONTRACT_ADDRESS;

const { ethers } = require("hardhat");

const contract = require("../artifacts/contracts/blogSpot.sol/BlogSpot.json");
console.log(JSON.stringify(contract.abi));

// Provider  - this is a node provider that gives you read and write access to the blockchain.
const alchemyProvider = new ethers.providers.AlchemyProvider(network="goerli", API_KEY);

// Signer - this represents an Ethereum account that has the ability to sign transactions.
const signer = new ethers.Wallet(PRIVATE_KEY, alchemyProvider);

// Contract - this is an Ethers.js object that represents a specific contract deployed on-chain.
const blogSpotContract = new ethers.Contract(CONTRACT_ADDRESS, contract.abi, signer);

async function main() {
  const message = await blogSpotContract.message();
  console.log("The message is: " + message);
}
main();

