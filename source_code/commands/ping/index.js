import { SlashCommandBuilder } from 'discord.js'

export const command = new SlashCommandBuilder().setName('ping').setDescrioption('ping command')

export const action = async(ctx) => { //ctx:context(上下文)
    ctx.reply('pong!')
}