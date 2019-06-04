const HarmonyERC20 = artifacts.require("HarmonyERC20");

module.exports = function(deployer, network, accounts) {
  const name = "Harmony ERC20"
  const symbols = "ONE"
  const decimals = 18
  const amount = 12600000000
  const ratio_minted = 0.0001
  const mint_tokens = amount * ratio_minted
  const mint_tokens_wei = web3.utils.toWei(mint_tokens.toString(), 'ether')
  const owner = "0x44F2C713F788843c030f95824Dcc7c52Ad2e17c2"

  deployer.then(function() {
    return deployer.deploy(HarmonyERC20, name, symbols, decimals, mint_tokens_wei)
  }).then(function(instance) {
    instance.transfer(owner, mint_tokens_wei);
    return instance
  }).then(function(instance) {
    instance.addMinter(owner);
    return instance
  }).then(function(instance) {
    instance.addPauser(owner);
    return instance
  }).then(function(instance) {
    instance.renounceMinter();
    return instance
  }).then(function(instance) {
    instance.renouncePauser();
  });

  //let instance = await HarmonyERC20.deployed()
};
