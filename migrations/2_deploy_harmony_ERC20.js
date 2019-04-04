const HarmonyERC20 = artifacts.require("HarmonyERC20");

module.exports = function(deployer, network, accounts) {
  const name = "Harmony ERC20"
  const symbols = "HMY"
  const decimals = 18
  const amount = 12600000000
  const tokens = web3.utils.toWei(amount.toString(), 'ether')
  const investoramount = 12600000000 * 0.3
  const investortokens = web3.utils.toWei(investoramount.toString(), 'ether')


  deployer.then(function() {
    return deployer.deploy(HarmonyERC20, name, symbols, decimals, tokens)
  }).then(function(instance) {

    //investors
    instance.transfer("0x27C2D80C28115868f08D7960bc947c8022C7f965", investortokens);

    //SRC
    instance.transfer("0xAA56D34F7271E31Aa83D9869036053CaAA0A36eA", investortokens)

  });

  //let instance = await HarmonyERC20.deployed()
};
