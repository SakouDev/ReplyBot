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

client.on('messageUpdate', (oldMessage,newMessage) => {3

    let MessageGood:any = ''
    MessageGood = newMessage.content?.toLowerCase()
    MessageGood = MessageGood?.replace(/[^a-zA-Z\u00C0-\u00FF]+/g, '');

    if(MessageGood.includes('ping')){
        newMessage.reply({
            content: 'pong',
        })
    }
    if(MessageGood.includes('quoi')){
        newMessage.reply({
            content: 'feur',
        })
    }
    if(MessageGood.includes('ouai')){
        newMessage.reply({
            content: 'stern',
        })
    }
    if(MessageGood.includes('oui')){
        newMessage.reply({
            content: 'stiti',
        })
    }
    
})

client.on('messageCreate', (message) => {

    let MessageGood = message.content.toLowerCase()
    MessageGood = MessageGood.replace(/[^a-zA-Zàè\u00C0-\u00FF]+/g, '');
    
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
    if(MessageGood.includes('ouai')){
        message.reply({
            content: 'stern',
        })
    }
    if(MessageGood.includes('oui')){
        message.reply({
            content: 'stiti',
        })
    }
})

client.on('messageCreate', (message) => {

    if(message.content.includes('🇵 ℹ️ 🇳 🇬')){
        message.reply({
            content: 'pong',
        })
    }
    if(message.content.includes('🅾️ 🇺 🇮')){
        message.reply({
            content: 'stiti',
        })
    }
})


client.login(process.env.TOKEN)
