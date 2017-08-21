const Discord = require("discord.js");
const gkm = require("gkm");
const client = new Discord.Client();
const config = require("./config.json");
//var isReady = true;
var channel = "";
var dispatcher = "";
client.login("MzMwOTY3MzMzNjkyNjM3MTg0.DHQINQ.EDoqIAiHuapDwV2EEuWDsPsUmkc");
const ctr = "Left Control";
const alt = "Left Alt";
const event = "key.pressed";
var mod;

var map = new Map();
map.set("Minus", false);
map.set("Equals", false);
map.set("Back Slash", false);


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
  		console.log("Channel joined!");
  		//connection.playFile("E:/PersonalProjects/memebot/sound/match.mp3");
  	}).catch(err => console.log(err));
  }
  if(message.content === "Leave Channel") {
  	if(channel)
  		channel = channel.disconnect();
  }

});


// Listen to all key events (pressed, released, typed)
gkm.events.on("key.pressed", function(data) {
	data = data.toString();
	//console.log(JSON.stringify(this, null, 4));
	//console.log(data);
	if(map.get(ctr)) {
		//console.log("hotkey");
		if(isHotKey(data) && !isMod(data)) {// && data == "W") {
			playSound(ctr, data);
			//map.set(ctr, false);
		}	
	}

	else if(isMod(data)) {
		//console.log("hotkey1");

		map.set(ctr, true);	
	}

	else if(isHotKey(data)) {
		//console.log("hotkey2");

		playSound("", data)
	}

    else if(data == "P" ){
    	process.exit(1);
    }
    else if(data === "Close Bracket"){
    	if(dispatcher){ 
    		console.log("dispatched");
    		dispatcher.end();
    	}
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
function playSound(mod, key) {
	// if(mod == ctr && key == "W") {
	//console.log("Bingo!");
	// 	console.log(client.voiceConnections.size);
	// 	//channel.playFile("E:/PersonalProjects/memebot/sound/match.mp3");
	// 	client.voiceConnections.first().playFile(config.dir + config.sad_bone);
	// }
	//console.log(client.voiceConnections);
	//console.log("bingo!");
	if(channel) { 

		if(mod == ctr) {
			if(key == "Minus"){
				dispatcher = channel.playFile(config.dir + config.aegis);
			}
			if(key == "Equals"){
				dispatcher = channel.playFile(config.dir + config.arteezy_donation);
			}
			if(key == "Back Slash"){
			//client.voiceConnections.first().playFile(config.dir + config.charge);
				dispatcher = channel.playFile(config.dir + config.drop_your_stick);
			}
		}

		else {
			if(key == "Minus") {
				dispatcher = channel.playFile(config.dir + config.furion_tp_top);
			}
			if(key == "Equals") {
				dispatcher = channel.playFile(config.dir + config.gebak);
			}
			if(key == "Back Slash") {
				dispatcher = channel.playFile(config.dir + config.we_lost);
			}
		}
	}
	
}
function isMod(key) {
	if(key == ctr)
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