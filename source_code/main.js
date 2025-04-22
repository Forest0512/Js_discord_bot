// import(類python寫法)
import {Client,Events,GatewayIntentBits} from 'discord.js'
import dotenv from 'dotenv' //存取環境變數工具
import vuelnit from '@/core/vue'


vuelnit()
dotenv.config()//調用環境變數工具

// Create a new client instance
const client = new Client({ intents: [GatewayIntentBits.Guilds] });

client.once(Events.ClientReady, readyClient => {
	console.log(`Ready! Logged in as ${readyClient.user.tag}`);
});

client.login(process.env.token);
