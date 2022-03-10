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

    let messageLower = message.content.toLowerCase()

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
    if(messageLower.includes('oui')){
        message.reply({
            content: 'stisti',
        })
    }
})

client.login(process.env.TOKEN)