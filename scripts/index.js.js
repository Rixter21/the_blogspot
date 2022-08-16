
const { ethers } = require('ethers')


async function connect() {
    if (typeof window.ethereum !== "undefined") {
        await ethereum.request({ method: 'eth_requestAccounts' });
    }
}


// export this functions to communicate with the frontend..
module.exports = {
    connect,
}


