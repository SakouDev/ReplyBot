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

client.on('messageUpdate', (oldMessage, newMessage) => {3

    let MessageGood:any = ''
    MessageGood = newMessage.content?.toLowerCase()
    MessageGood = MessageGood?.replace(/[^a-zA-Z]+/g, '');


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
    if(MessageGood.includes('qwa')){
        newMessage.reply({
            content: 'feur',
        })
    }
    if(MessageGood.includes('kwa')){
        newMessage.reply({
            content: 'feur',
        })
    }
    if(MessageGood.includes('koi')){
        newMessage.reply({
            content: 'feur',
        })
    }
    if(MessageGood.includes('koa')){
        newMessage.reply({
            content: 'feur',
        })
    }
    if(MessageGood.includes('koua')){
        newMessage.reply({
            content: 'feur',
        })
    }
    if(MessageGood.includes('ui')){
        newMessage.reply({
            content: 'stiti',
        })
    }
    if(MessageGood.includes('wi')){
        newMessage.reply({
            content: 'stiti',
        })
    }
    if(MessageGood.includes('ouai')){
        newMessage.reply({
            content: 'stern',
        })
    }
    if(MessageGood.includes('oé')){
        newMessage.reply({
            content: 'stern',
        })
    }
    if(MessageGood.includes('oué')){
        newMessage.reply({
            content: 'stern',
        })
    }
    if(MessageGood.includes('wé')){
        newMessage.reply({
            content: 'stern',
        })
    }
    if(MessageGood.includes('woé')){
        newMessage.reply({
            content: 'stern',
        })
    }
    if(MessageGood.includes('wai')){
        newMessage.reply({
            content: 'stern',
        })
    }
    
})

client.on('messageCreate', (message) => {

    let MessageGood = message.content.toLowerCase()
    MessageGood = MessageGood.replace(/[^a-zA-Z]+/g, '');
    
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
    if(MessageGood.includes('ui')){
        message.reply({
            content: 'stiti',
        })
    }
    if(MessageGood.includes('wi')){
        message.reply({
            content: 'stiti',
        })
    }
    if(MessageGood.includes('ouai')){
        message.reply({
            content: 'stern',
        })
    }
    if(MessageGood.includes('oé')){
        message.reply({
            content: 'stern',
        })
    }
    if(MessageGood.includes('oué')){
        message.reply({
            content: 'stern',
        })
    }
    if(MessageGood.includes('wé')){
        message.reply({
            content: 'stern',
        })
    }
    if(MessageGood.includes('woé')){
        message.reply({
            content: 'stern',
        })
    }
    if(MessageGood.includes('wai')){
        message.reply({
            content: 'stern',
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
