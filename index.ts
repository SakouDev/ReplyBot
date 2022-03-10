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
    console.log("The Bot is Ready to Troll")
})

client.on('messageCreate', (message) => {

    let MessageGood = message.content.toLowerCase()
    MessageGood = MessageGood.split('.').join("");
    MessageGood = MessageGood.replace(/[^a-z]+/g, '');
    
    if(MessageGood.includes('ping')){
        message.reply({
            content: 'pong',
        })
    }
    if(MessageGood.includes('quoi')){
        message.reply({
            content: 'feur',
        })
    }
    if(MessageGood.includes('qwa')){
        message.reply({
            content: 'feur',
        })
    }
    if(MessageGood.includes('kwa')){
        message.reply({
            content: 'feur',
        })
    }
    if(MessageGood.includes('koi')){
        message.reply({
            content: 'feur',
        })
    }
    if(MessageGood.includes('koa')){
        message.reply({
            content: 'feur',
        })
    }
    if(MessageGood.includes('koua')){
        message.reply({
            content: 'feur',
        })
    }
    if(MessageGood.includes('oui')){
        message.reply({
            content: 'stisti',
        })
    }
    if(MessageGood.includes('ui')){
        message.reply({
            content: 'stisti',
        })
    }
})

client.login(process.env.TOKEN)
