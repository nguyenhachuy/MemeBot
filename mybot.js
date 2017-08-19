const Discord = require("discord.js");
const gkm = require("gkm");
const client = new Discord.Client();
const config = require("./config.json");
//var isReady = true;
var channel = "";
client.login("MzMwOTY3MzMzNjkyNjM3MTg0.DHQINQ.EDoqIAiHuapDwV2EEuWDsPsUmkc");
const ctr = "Left Control";
const alt = "Left Alt";
const event = "key.pressed";
var mod;

var map = new Map();
map.set("Q", false);
map.set("W", false);
map.set("R", false);
map.set(ctr, false);


client.on("ready", () => {
  console.log("I am ready!");
});

client.on("message", (message) => {

  if (message.content.startsWith("ping")) {
    message.channel.send("pong!");
  }
  if(message.content === "Join Channel") {
  	//isReady = false;
  	var voiceChannel = message.member.voiceChannel;
  	voiceChannel.join().then(connection => {
  		channel = connection;
  		//connection.playFile("E:/PersonalProjects/memebot/sound/match.mp3");
  	}).catch(err => console.log(err));
  }
  if(message.content === "Leave Channel") {
  	channel = channel.disconnect();
  }
});


// Listen to all key events (pressed, released, typed)
gkm.events.on("key.pressed", function(data) {
	data = data.toString();
	//console.log(JSON.stringify(this, null, 4));

	if(map.get(ctr)) {
		//console.log("hotkey");
		if(isHotKey(data) && !isMod(data)) {// && data == "W") {
			playSound(data);
			//map.set(ctr, false);
		}	
	}
	else if(isMod(data)) {
		map.set(ctr, true);	
	}


    else if(data == "P" ){
    	process.exit(1);
    }
 	//playSound(data, data);
});

gkm.events.on("key.released", function(data) {
	data = data.toString();
	if(map.has(data)){
		map.set(data, false);
		//console.log("Key is: " + data + " status: " + map.get(data));
	}
});
// // Listen to all mouse events (click, pressed, released, moved, dragged)
// gkm.events.on('mouse.*', function(data) {
// 	console.log(this.event + ' ' + data);
// });
function playSound(key) {
	// if(mod == ctr && key == "W") {
	//console.log("Bingo!");
	// 	console.log(client.voiceConnections.size);
	// 	//channel.playFile("E:/PersonalProjects/memebot/sound/match.mp3");
	// 	client.voiceConnections.first().playFile(config.dir + config.sad_bone);
	// }
	//console.log(client.voiceConnections);
	if(key == "W"){
		channel.playFile(config.dir + config.sad_bone);
	}
	if(key == "Q"){
		channel.playFile(config.dir + config.cricket);
	}
	if(key == "R"){
		//client.voiceConnections.first().playFile(config.dir + config.charge);
		channel.playFile(config.dir + config.charge);
	}

	
}
function isMod(key) {
	if(key == ctr || key == alt)
		return true;
	else
		return false;
}
function isHotKey(key){
	//console.log("key is "  + key + " result: " + map.has(key));
	if(map.has(key)) 
		return true;
	else 
		return false;
}