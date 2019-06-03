const HarmonyERC20 = artifacts.require("HarmonyERC20");

module.exports = function(deployer, network, accounts) {
  const name = "Harmony ERC20"
  const symbols = "ONE"
  const decimals = 18
  const amount = 12600000000
  const tokens = web3.utils.toWei(amount.toString(), 'ether')
  const ratio_minted = 0.0001
  const mint_tokens = amount * ratio_minted
  const mint_tokens_wei = web3.utils.toWei(mint_tokens.toString(), 'ether')

  deployer.then(function() {
    return deployer.deploy(HarmonyERC20, name, symbols, decimals, mint_tokens_wei)
  }).then(function(instance) {
    // instance.transfer("0x27C2D80C28115868f08D7960bc947c8022C7f965", mint_tokens_wei);
  });

  //let instance = await HarmonyERC20.deployed()
};
