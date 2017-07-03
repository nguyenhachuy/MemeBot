const Discord = require("discord.js");
const client = new Discord.Client();

client.login("MzMwOTY3MzMzNjkyNjM3MTg0.DDt37w.ANCTQs4cAq-HJ2JwBJyLXzYtaWQ");

client.on("ready", () => {
  console.log("I am ready!");
});

client.on("message", (message) => {
	let prefix = "!";
	  // Voice only works in guilds, if the message does not come from a guild,
  // we ignore it
 	if(!message.guild) return;
 	if(!message.content.startsWith(prefix)) return;
 	if(message.content.startsWith(prefix +"ping")) {
    	message.channel.send("pong!");
  	} else

  	if(message.content.startsWith(prefix + "foo")) {
    	message.channel.send("bar!");
  	}	
});

 

