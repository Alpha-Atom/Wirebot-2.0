var irc = require("tmi.js");
var twitch_username = process.argv[2];
var api_key  = process.argv[3];

var options = {
  options: {
    debug: false
  },
  connection: {
    random: "chat",
    reconnect: true
  },
  identity: {
    username: twitch_username,
    password: api_key
  },
};

var client = new irc.client(options);

client.connect();
