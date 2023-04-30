import web3 from "./web3";
import CampaignFactory from "./build/CampaignFactory.json";

const instance = new web3.eth.Contract(
  JSON.parse(CampaignFactory.interface),
  "0x35f9BE3B02F1aECC71a6523f2Db5d5B68c59F593"
);

export default instance;
