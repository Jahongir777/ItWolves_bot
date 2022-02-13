const { Telegraf, Markup } = require('telegraf');
require('dotenv').config();

const bot = new Telegraf(process.env.BOT_TOKEN);

bot.command('start', async (ctx) => {
    return await ctx.reply(`Assalom alaykum ${ctx.message.from.first_name}!  Pastdan kerakli b\'limni tanlang! `, Markup
        .keyboard([
            ['🔹 Biz haqimizda', '🔹 Bizning kanal'],
            ['🔹 Buyurtma berish']
        ])
        .resize()
    )
})

bot.hears('🔹 Biz haqimizda', async (ctx) => {

    return await ctx.reply(
        `Biz haqimizda

Salom sizga jamoamiz haqida ma'lumot bersam.Biz IT Wolves 
jamoasimiz va biz bir qancha soha vakillarini o‘z ichimizga olgan 
holda 4 ta yo‘nalish bo'yicha xizmat ko'rsatamiz bular:

✅Logo dizayn
✅SMM dizayn(+post)
✅Telegram bot
✅Web sayt
✅Moushn grafika

Bizning afzallik tarafimiz shundaki siz internetda tepadagi vazifalarni 
bajartirish uchun bir qancha jamoalar bilan ishlash o'rniga bitta 
jamoada bularning barchasini topishingiz mumkin!
        `,
        { parse_mode: 'html' })
})


bot.hears('🔹 Buyurtma berish', async (ctx) => {

    return await ctx.reply(
        `
IT Wolves:
Buyurtma berish:

Agar siz bizga biror narsa buyurtma bermoqchi bo'lsangiz jamoa 
rahbari bilan bog'lanishingiz kerak: <a href="https://t.me/IT_Wolves_director">@IT_Wolves_director</a>
    `,
        { parse_mode: 'html', disable_web_page_preview: true })
})


bot.hears('🔹 Bizning kanal', async (ctx) => {

    return await ctx.reply(
        `
IT Wolves:
Bizning Kanal:

Bizning kanalimiz

<a href="https://t.me/IT_Wolves">@IT_Wolves_director</a>
    `,
        { parse_mode: 'html' })
})

bot.launch()