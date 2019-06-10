const fs = require('fs');
const contract = JSON.parse(fs.readFileSync('./build/contracts/HarmonyERC20.json', 'utf8'));
console.log(JSON.stringify(contract.abi));
