const path = require("path");
const HDWalletProvider = require('@truffle/hdwallet-provider');
const mnemonic = "street wheel render pave raise interest elevator random during citizen wish desert";
const infuraID = "10e39de8f88e4de8a1bbb29a0ebc8a83";


module.exports = {
  // See <http://truffleframework.com/docs/advanced/configuration>
  // to customize your Truffle configuration!
  contracts_build_directory: path.join(__dirname, "client/src/contracts"),
  networks: {
    goerli:{
      provider:() => {return new HDWalletProvider(mnemonic,`https://goerli.infura.io/v3/${infuraID}`)},
      network_id:5,
      chain_id:5,
      // gas:5500000,
      // confirmations:2,
      // timeoutBlocks:200,
      // skipDryRun:true 
    },
    // development: {
    //   network_id: "*",
    //   host: "127.0.0.1",
    //   // port: 7545, // for ganache gui
    //   port: 8545, // for ganache-cli
    //   gas: 6721975,
    //   gasPrice: 20000000000,
    // },
  },
};
