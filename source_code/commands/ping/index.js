import { SlashCommandBuilder } from 'discord.js'

export const command = new SlashCommandBuilder().setName('ping').setDescription('ping command')

export const action = async(ctx) => { //ctx:context(上下文)
    ctx.reply('pong!')
}
//export 調用方法之一