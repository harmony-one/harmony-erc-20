const HarmonyERC20 = artifacts.require("HarmonyERC20");

module.exports = function(deployer, network, accounts) {
  const name = "Harmony ERC20"
  const symbols = "HMY"
  const decimals = 18
  const amount = 12600000000


  deployer.then(function() {
    return deployer.deploy(HarmonyERC20, name, symbols, decimals, amount)
  }).then(function(instance) {

    //investors
    instance.transfer("0x27C2D80C28115868f08D7960bc947c8022C7f965", amount * 0.3);

    //SRC
    instance.transfer("0xAA56D34F7271E31Aa83D9869036053CaAA0A36eA", amount * 0.3)

  });

  //let instance = await HarmonyERC20.deployed()
};
