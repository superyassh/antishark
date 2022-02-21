import web3 from "./web3";
import CampaignFactory from "./build/CampaignFactory.json";

const instance = new web3.eth.Contract(
  JSON.parse(CampaignFactory.interface),
  "0x08400f51ba2c71980d66611f5593021deD52dd02"
);

export default instance;
