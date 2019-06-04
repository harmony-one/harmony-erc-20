const HDWalletProvider = require("truffle-hdwallet-provider");

const privateKey = "";
const tokenKey = "";

module.exports = {
  // See <http://truffleframework.com/docs/advanced/configuration>
  // for more about customizing your Truffle configuration!

  networks: {
    development: {
      host: "127.0.0.1",
      port: 7545,
      network_id: "*" // Match any network id
    },
    rinkeby: {
      host: "localhost",
      provider: function() {
        return new HDWalletProvider(privateKey, "https://rinkeby.infura.io/v3/" + tokenKey)
      },
      network_id: 4,
      // gas: 67500000,
    }
  },
    // Configure your compilers
    compilers: {
      solc: {
        version: "0.5.2",
      }
    }
};