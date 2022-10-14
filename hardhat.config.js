require('dotenv').config();
require("@nomiclabs/hardhat-ethers");
const { REACT_APP_ALCHEMY_KEY, PRIVATE_KEY } = process.env;
module.exports = {
   solidity: "0.8.4",
   defaultNetwork: "goerli",
   networks: {
      hardhat: {},
      goerli: {
         url: REACT_APP_ALCHEMY_KEY,
         accounts: [`0x${PRIVATE_KEY}`]
      }
   },
}