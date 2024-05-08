const moment = require("moment");
const _ = require("lodash");
const axios = require("axios");
var ip = require("ip");
const requestIp = require("request-ip");
// replace these URLs with whatever is good for you
const remoteIPv4Url = "https://ipecho.io/json";
async function getExternalIPv4() {
  try {
    const res = await axios.get(remoteIPv4Url);

    return res.data.ip;
    // console.log("response", response);
    // if (response && response.data) {
    //   return response.data;
    // }
  } catch (error) {
    console.log(error);
  }
  return undefined;
}

const getExternalIP = async () => {
  // console.log("ipver", ipver);
  let address = await getExternalIPv4();
  return address;
};

let listcom = ["serverip"];
let helpcom = `   
---this command -----
    serverip 
---------------    
`;

module.exports = {
  config: {
    name: "ip",
    description: "Get IP of the bot",
    usage: `-ip`,
  },
  async run(bot, message, args) {
    // console.log("bot", bot);
    // console.log("message", message.channel);
    // console.log("args", args);
    // let switchjson = {
    //   myip: await getExternalIP(),
    //   serverip: await getExternalIP(),
    // };
    // if (args.length > 0 && listcom.includes(args[0])) {
    //   let res = await switchjson[args[0]];
    //   console.log("res", res);
    //   //   var clientIp = requestIp.getClientIp(req);
    //   //   var a = ip.address();
    //   message.channel.send(res);
    // } else {
    //   message.channel.send(helpcom);
    // }

    let res = await getExternalIP();
    // console.log("res", res);
    //   var clientIp = requestIp.getClientIp(req);
    //   var a = ip.address();
    message.channel.send(res);
  },
};
