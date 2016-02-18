var irc = require("tmi.js");
var commands = require("./commands/commands.js");
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

console.log(Object.keys(commands));

var client = new irc.client(options);

client.connect();

client.on("chat", function(channel, user, message, self) {
    if (self === false) {
        if (message.startsWith("!")) { // This message is a command TODO: customisable per channel 
            var message_array = message.split(" ");
            var command = message[0].substring(1);
            var args = message.substring(command.length+1).split(" ");
            process_command(channel, user, command, args);
        }
    }
});

var process_command = function(channel, user, cmd, argv) {
    
}
