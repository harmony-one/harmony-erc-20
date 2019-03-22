const HarmonyERC20 = artifacts.require("HarmonyERC20");

module.exports = function(deployer) {
  const name = "Harmony ERC20"
  const symbols = "HMY"
  const decimals = 18
  const amount = 12600000000
  deployer.deploy(HarmonyERC20, name, symbols, decimals, amount);
};
