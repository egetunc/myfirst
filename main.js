const Discord = require('discord.js');
require('dotenv').config();
const client = new Discord.Client({partials: ["MESSAGE", "CHANNEL", "REACTION"]});
const prefix = '-';
const fs = require('fs');

const memberCounter = require('./counters/member.counter');

client.commands = new Discord.Collection();

const commandFiles = fs.readdirSync('./commands/').filter(file => file.endsWith('.js'));
for (const file of commandFiles) {
    const command = require(`./commands/${file}`);
    

    client.commands.set(command.name, command);
}












client.once('ready', () => {
    console.log('RLA Bot is online');
    client.user.setActivity('Yardım etmek için buradayım!', { type: 'LISTENING'});
    memberCounter(client);  
});



client.on('guildMemberAdd', guildMember =>{
    let welcomeRole = guildMember.guild.roles.cache.find(role => role.name === 'Sunucuya katıldın!');
    
    
 guildMember.roles.add(welcomeRole);
 

})
client.on('messageReactionAdd', async (reaction, user) => {
    if(reaction.message.partial) await reaction.message.fetch()
    if(reaction.partial) await reaction.fetch()
    if(user.bot) return;
    if(!reaction.message.guild) return 

    let name = reaction.emoji.id
    
    
                    
            const unrankedEmoji = '813824701587652608'
            const bronzeEmoji = '813824422997786676'
            const silverEmoji = '813824686369931274'
            const goldEmoji = '813830201771163728'
            const platEmoji = '813824720570679326'
            const diaEmoji = '813824733295673354'
            const ChampionEmoji = '813824761532252171'
            const gcEmoji = '813824770373320704'
            const sslEmoji = '813824779169431643'

            
        
        if(name === unrankedEmoji) await reaction.message.guild.members.cache.get(user.id).roles.add('813814025624354827')
        if(name === bronzeEmoji) await reaction.message.guild.members.cache.get(user.id).roles.add('813812668552577066')
        if(name === silverEmoji) await reaction.message.guild.members.cache.get(user.id).roles.add('813813325724385311')
        if(name === goldEmoji) await reaction.message.guild.members.cache.get(user.id).roles.add('813852077204701296')
        if(name === platEmoji) await reaction.message.guild.members.cache.get(user.id).roles.add('813814136819417129')
        if(name === diaEmoji) await reaction.message.guild.members.cache.get(user.id).roles.add('813814200786223174')
        if(name === ChampionEmoji) await reaction.message.guild.members.cache.get(user.id).roles.add('813814328725471303')
        if(name === gcEmoji) await reaction.message.guild.members.cache.get(user.id).roles.add('813814460875538502')
        if(name === sslEmoji) await reaction.message.guild.members.cache.get(user.id).roles.add('813814801427202098')
        

        
    })

    
    client.on('messageReactionRemove', async (reaction, user) => {
        if(reaction.message.partial) await reaction.message.fetch()
        if(reaction.partial) await reaction.fetch()
        if(user.bot) return;
        if(!reaction.message.guild) return 
    
        let name = reaction.emoji.id
        
        
                        
                const unrankedEmoji = '813824701587652608'
                const bronzeEmoji = '813824422997786676'
                const silverEmoji = '813824686369931274'
                const goldEmoji = '813830201771163728'
                const platEmoji = '813824720570679326'
                const diaEmoji = '813824733295673354'
                const ChampionEmoji = '813824761532252171'
                const gcEmoji = '813824770373320704'
                const sslEmoji = '813824779169431643'
    
                
            
            if(name === unrankedEmoji) await reaction.message.guild.members.cache.get(user.id).roles.remove('813814025624354827')
            if(name === bronzeEmoji) await reaction.message.guild.members.cache.get(user.id).roles.remove('813812668552577066')
            if(name === silverEmoji) await reaction.message.guild.members.cache.get(user.id).roles.remove('813813325724385311')
            if(name === goldEmoji) await reaction.message.guild.members.cache.get(user.id).roles.remove('813852077204701296')
            if(name === platEmoji) await reaction.message.guild.members.cache.get(user.id).roles.remove('813814136819417129')
            if(name === diaEmoji) await reaction.message.guild.members.cache.get(user.id).roles.remove('813814200786223174')
            if(name === ChampionEmoji) await reaction.message.guild.members.cache.get(user.id).roles.remove('813814328725471303')
            if(name === gcEmoji) await reaction.message.guild.members.cache.get(user.id).roles.remove('813814460875538502')
            if(name === sslEmoji) await reaction.message.guild.members.cache.get(user.id).roles.remove('813814801427202098')
            
    
            
        })

        client.on('messageReactionAdd', async (reaction, user) => {
            if(reaction.message.partial) await reaction.message.fetch()
            if(reaction.partial) await reaction.fetch()
            if(user.bot) return;
            if(!reaction.message.guild) return 
            
        
            let name = reaction.emoji.name

            const reactEmoji = '✅'
            if(name === reactEmoji) await reaction.message.guild.members.cache.get(user.id).roles.add('813817370518355968')
        })

        client.on('messageReactionRemove', async (reaction, user) => {
            if(reaction.message.partial) await reaction.message.fetch()
            if(reaction.partial) await reaction.fetch()
            if(user.bot) return;
            if(!reaction.message.guild) return 
        
            let name = reaction.emoji.name
            
            
                            
                    const reactEmoji = '✅'
                    if(name === reactEmoji) await reaction.message.guild.members.cache.get(user.id).roles.remove('813817370518355968')

                })


 //KLAVYE - CONTROLLER
 client.on('messageReactionAdd', async (reaction, user) => {
    if(reaction.message.partial) await reaction.message.fetch()
    if(reaction.partial) await reaction.fetch()
    if(user.bot) return;
    if(!reaction.message.guild) return 
    

    let name = reaction.emoji.name

    const kolEmoji = '🎮'
    const klavyeEmoji = '⌨️'
    if(name === kolEmoji) await reaction.message.guild.members.cache.get(user.id).roles.add('815892221236346942')
    if(name === klavyeEmoji) await reaction.message.guild.members.cache.get(user.id).roles.add('815710880171032576')
})

client.on('messageReactionRemove', async (reaction, user) => {
    if(reaction.message.partial) await reaction.message.fetch()
    if(reaction.partial) await reaction.fetch()
    if(user.bot) return;
    if(!reaction.message.guild) return 

    let name = reaction.emoji.name
    
    
                    
    const kolEmoji = '🎮'
    const klavyeEmoji = '⌨️'
    if(name === kolEmoji) await reaction.message.guild.members.cache.get(user.id).roles.remove('815892221236346942')
    if(name === klavyeEmoji) await reaction.message.guild.members.cache.get(user.id).roles.remove('815710880171032576')
        })



               





    
client.on('message', message => {
    if (!message.content.startsWith(prefix) || message.author.bot) return;

    const args = message.content.slice(prefix.length).split(/ +/);
    const command = args.shift().toLowerCase();

    if (command === 'tanıtım') {
        client.commands.get('tanıtım').execute(message, args);
    } else if (command == 'youtube') {
        client.commands.get('youtube').execute(message, args);
    } else if (command === 'temizle') {
        client.commands.get('temizle').execute(message, args);
    } else if (command === 'kick') {
        client.commands.get('kick').execute(message, args);
    } else if (command === 'ban') {
        client.commands.get('ban').execute(message, args);
    } else if (command === 'mute') {
        client.commands.get('mute').execute(message, args,);
    } else if (command === 'kurallar') {
            client.commands.get('kurallar').execute(message, args);
    } else if (command === 'temizle') {
            client.commands.get('temizle').execute(message, args);                  
    } else if (command === 'unmute') {
        client.commands.get('unmute').execute(message, args);
    } else if (command === 'play') {
        client.commands.get('play').execute(message, args);
    } else if (command === 'leave') {
        client.commands.get('leave').execute(message, args);
    } else if (command === 'tanitim2') {
        client.commands.get('tanitim2').execute(message, args);
    } else if (command === 'tanitim3') {
        client.commands.get('tanitim3').execute(message, args);
    } else if (command === 'reactionrole') {
        client.commands.get('reactionrole').execute(message, args);
    } else if (command === 'öneri') {
        client.commands.get('öneri').execute(message, args);
    } else if (command === 'ticket') {
        client.commands.get('ticket').execute(message, args);
    } else if (command === 'ticketikapat') {
        client.commands.get('ticketikapat').execute(message, args);    
    } else if (command === 'rps') {
        client.commands.get('rps').execute(message, args);    
    } else if (command === 'react') {
        client.commands.get('react').execute(message, args);    
    } else if (command === 'reactkc') {
        client.commands.get('reactkc').execute(message, args);    
    }
     else if (command === 'güncelleme') {
        client.commands.get('güncelleme').execute(message, args);    
    }
    else if (command === 'güncelleme2') {
       client.commands.get('güncelleme2').execute(message, args);    
   }
 
else if (command === 'emoji') {
 client.commands.get('emoji').execute(message, args);    
}

   
   
   
});




 




client.login(process.env.DISCORD_TOKEN)