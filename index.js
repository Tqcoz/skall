const Discord = require('discord.js')
const client = new Discord.Client({autoReconnect:true})

var token = process.env.token



client.on('message', message => {
const prefix = "/";
    
    if (message.channel.id == ['572551812931125248', '572072693915058208']) {
     const sayMessage = args.join(" ");

      let servIcon = message.guild.iconURL;
      let esayEmbed = new Discord.RichEmbed()
      .setTitle("New Announcement")
      .setColor("#0537ff")
      .setThumbnail(servIcon)
      .setDescription(`Written by ${message.author}`)
      .addField("Message", `${sayMessage}`)
      .setTimestamp();

      const esayMessage = args.join(" ");
      message.delete().catch(O_o=>{});

      message.channel.send(esayEmbed);
  }   
    }
    
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
    client.user.setActivity("development!", {url: "https://twitch.tv/discordapp", type: "STREAMING"});
})


client.login(token)
