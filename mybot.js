const Discord = require("discord.js");
const gkm = require("gkm");
const client = new Discord.Client();
var isReady = true;
var channel = "";
client.login("MzMwOTY3MzMzNjkyNjM3MTg0.DHQINQ.EDoqIAiHuapDwV2EEuWDsPsUmkc");
const ctr = "Left Control";
const alt = "Left Alt";
const event = "key.pressed";
var mod;

client.on("ready", () => {
  console.log("I am ready!");
});

client.on("message", (message) => {
  if (message.content.startsWith("ping")) {
    message.channel.send("pong!");
  }
  if(message.content === "Join Channel" && isReady){
  	isReady = false;
  	var voiceChannel = message.member.voiceChannel;
  	voiceChannel.join().then(connection => {
  		channel = connection;
  		connection.playFile("E:/PersonalProjects/memebot/sound/match.mp3");
  	}).catch(err => console.log(err));
  }
});
// Listen to all key events (pressed, released, typed)
gkm.events.on('key.*', function(data) {
	//console.log(JSON.stringify(this, null, 4));

	if(mod) {
		if(this.event == event && data == "W") {
			playSound(mod, data);
		}
		mod = 0;
	}
	else {
		if((data == ctr || data == alt) && this.event == event) {
			mod = data;
		}
	}


    if(data == "P" ){
    	process.exit(1);
    }

});

// // Listen to all mouse events (click, pressed, released, moved, dragged)
// gkm.events.on('mouse.*', function(data) {
// 	console.log(this.event + ' ' + data);
// });
function playSound(mod, key) {
	if(mod == ctr && key == "W") {
		console.log("Bingo!");
		//channel.playFile("E:/PersonalProjects/memebot/sound/match.mp3");
	}
}