const Discord = require('discord.js');
const client = new Discord.Client();
console.log("Scrpit By Dream");


client.on("ready", () => {
let channel =     client.channels.get("542480770854551563")
setInterval(function() {
channel.send(`sdfg`);
}, 30)
})

client.login(process.env.BOT_TOKEN);
