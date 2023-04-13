import type Bot from '../structure/mineflayer/Bot.js';

const bookMessage = "You can write in the People of UV book today! Every player gets to write 1 page a year. Every month Iberium choose's one random day where you can write. At the end of the year, copies of the original will be distributed as a limited item for ~1 month!
"

export default {
    commands: ['book', 'uvbook'],
    minArgs: 0,
    maxArgs: 0,
    execute: async (user: string, args: any[], bot: Bot) => {
      
        bot.bot.chat(bookMessage)
    }
} as MCommand
