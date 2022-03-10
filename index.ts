import DiscordJS, { Intents } from 'discord.js'
import dotenv from 'dotenv'
dotenv.config()

const client = new DiscordJS.Client({
    intents: [
        Intents.FLAGS.GUILDS,
        Intents.FLAGS.GUILD_MESSAGES
    ]
})

client.on('ready', () => {
    console.log("The Bot is Ready")
})

client.on('messageCreate', (message) => {

    let messageL = message.content.toLowerCase()
    let messageLower = messageL.replace(/\s/g, '');
    
    if(messageLower.includes('ping')){
        message.reply({
            content: 'pong',
        })
    }
    if(messageLower.includes('quoi')){
        message.reply({
            content: 'feur',
        })
    }
    if(messageLower.includes('qwa')){
        message.reply({
            content: 'feur',
        })
    }
    if(messageLower.includes('kwa')){
        message.reply({
            content: 'feur',
        })
    }
    if(messageLower.includes('koi')){
        message.reply({
            content: 'feur',
        })
    }
    if(messageLower.includes('koa')){
        message.reply({
            content: 'feur',
        })
    }
    if(messageLower.includes('koua')){
        message.reply({
            content: 'feur',
        })
    }
    if(messageLower.includes('oui')){
        message.reply({
            content: 'stisti',
        })
    }
    if(messageLower.includes('ui')){
        message.reply({
            content: 'stisti',
        })
    }
})

client.login(process.env.TOKEN)
