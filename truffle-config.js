require('dotenv').config();
const HDWalletProvider = require('@truffle/hdwallet-provider');
const { INFURA_API_KEY, MNEMONIC } = process.env;


module.exports = {
  // See <http://truffleframework.com/docs/advanced/configuration>
  // for more about customizing your Truffle configuration!
  networks: {
    development: {
      host: "127.0.0.1",
      port: 8545,
      network_id: "*" // Match any network id
    },
    staging: {
      provider: () => new HDWalletProvider(MNEMONIC, INFURA_API_KEY),
      network_id: '5',
    },
  }
};
