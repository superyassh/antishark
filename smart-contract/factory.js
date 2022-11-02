import web3 from "./web3";
import CampaignFactory from "./build/CampaignFactory.json";

const instance = new web3.eth.Contract(
  JSON.parse(CampaignFactory.interface),
  "0x82F175608e09d4909d0ab8607bC77CAAc8B22FD7"
);

export default instance;
