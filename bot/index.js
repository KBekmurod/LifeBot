require('dotenv').config();
const { Bot } = require('grammy');

if (!process.env.BOT_TOKEN) {
  console.error('Error: BOT_TOKEN is not set. Please check your .env file.');
  process.exit(1);
}

const bot = new Bot(process.env.BOT_TOKEN);

bot.command('start', (ctx) =>
  ctx.reply(
    "Salom! Men Life Archive botiман. Xotiralaringizni saqlab borish uchun ovozli xabar yoki matn yuboring."
  )
);

bot.on('message', (ctx) => {
  ctx.reply('Xabaringiz qabul qilindi.');
});

bot.start();
console.log('Bot is running...');
