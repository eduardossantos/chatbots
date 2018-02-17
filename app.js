const env = require('./.env')
const Telegraf = require('telegraf')
const bot = new Telegraf(env.token)

bot.start(ctx =>{
    const from = ctx.update.message.from
    console.log(from);
    ctx.reply(`Seja bem vindo, ${from.first_name}`)
    
})
bot.on('text', async (ctx, next) => {
  await ctx.reply('Olá! Recentemente você utilizou um de nossos serviços e gostaríamos de saber sua opinião')
  next()
})

bot.on('text', async (ctx) => {
   await ctx.reply('Vai levar apenas 1 minuto, vamos começar?')
    
  })
bot.startPolling()