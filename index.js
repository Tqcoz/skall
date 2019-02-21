const Discord = require('discord.js')
const client = new Discord.Client()




client.on('message', message => {
const prefix = "/";
    if (message.author.bot) return;
    const args = message.content.slice(prefix.length).trim().split(/ +/g)
    const command = args.shift().toLowerCase();
    
    if (message.content.indexOf(prefix) !== 0) return;

    try {
        let commandFile = require(`./commands/${command}.js`);
        commandFile.run(client, message, args)
    } catch (err) {
        return;
    }



})

client.on('ready', () => {
    console.log(`Logged in as ${client.user.tag}`)
    //client.channels.get('518473049197117445').send(`Logged in as ${client.user.tag}`)
})


client.login(process.env.token)
