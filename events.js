const env = require('./.env')
const Telegraf = require('telegraf')
const bot = new Telegraf(env.token)
var name = ''

bot.start(ctx =>{
name = ctx.update.message.from.first_name
    ctx.reply(`Seja bem vindo, ${name}! 🤓`)
})

bot.on('text', ctx => {
    const texto = ctx.update.message.text
    switch(texto){
        case 'Oi':
        ctx.reply(`Olá!
O que posso fazer por você hoje? 🤔`)
        break; 
    
        case 'Estou perdido, pode me ajudar?':
        ctx.reply(`Claro que sim, me mande sua localização, por favor. 😎`)
        break; 

        case 'Obrigado':
        ctx.reply(`Nada, fico feliz em poder ajudar.
Precisa de algo mais? 😜`)
        break; 

        case 'Não':
        ctx.reply(`Ok Eduardo, se precisar de algo é só me chamar. 🤖`)
        break; 
    }
    })

bot.on('location', ctx => {
    const location = ctx.update.message.location
    ctx.reply(`Entendido, você está em 
        Lat: ${location.latitude},
        Lon: ${location.longitude}!`)
})

bot.on('voice', ctx =>{
    const voice = ctx.update.message.voice
    console.log(voice)
})

bot.on('photo', ctx => {
    const photo = ctx.update.message.photo
    console.log(photo)
    photo.forEach((ph, i) => {
        ctx.reply(`Photo ${i+1} Tem resolução de ${ph.width} x ${ph.height}`)
    });
})

bot.on('contact', ctx => {
    const contact = ctx.update.message.contact
    console.log(contact)
    ctx.reply(`Lembrarei do(a)
${contact.first_name} (${contact.phone_number})`)
})

bot.on('sticker', ctx =>{
    const sticker = ctx.update.message.sticker
    console.log(sticker)
    ctx.reply(`${sticker.emoji}`)
})

bot.startPolling()