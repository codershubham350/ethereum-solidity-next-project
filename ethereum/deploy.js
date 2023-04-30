const HDWalletProvider = require("@truffle/hdwallet-provider");
const Web3 = require("web3");
const compiledFactory = require("./build/CampaignFactory.json");

const provider = new HDWalletProvider(
  "like foot void observe work follow mass agent message rather fat bone",
  "https://sepolia.infura.io/v3/45f43cd76b654a73b3a97db0b4d3b0eb"
);
const web3 = new Web3(provider);

const deploy = async () => {
  const accounts = await web3.eth.getAccounts();

  console.log("Attempting to deploy from account", accounts[0]);

  const result = await new web3.eth.Contract(
    JSON.parse(compiledFactory.interface)
  )
    .deploy({ data: compiledFactory.bytecode })
    .send({ gas: "1000000", from: accounts[0] });

  //console.log(compiledFactory.interface);
  console.log("Contract deployed to", result.options.address);
  provider.engine.stop();
};
deploy();
