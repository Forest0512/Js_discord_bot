// import(類python寫法)
import {Client,Events,GatewayIntentBits} from 'discord.js'
import dotenv from 'dotenv' //存取環境變數工具
import vuelnit from '@/core/vue'
import { loadCommands,loadEvents } from '@/core/loader'
import { useAppStore } from '@/store/app'

vuelnit()
dotenv.config()//調用環境變數工具

loadCommands()
// Create a new client instance
const client = new Client({ intents: [GatewayIntentBits.Guilds] });
const appstore = useAppStore()
appstore.client = client

loadEvents()



client.login(process.env.token);

/*client.once(Events.ClientReady, readyClient => {
	console.log(`Ready! Logged in as ${readyClient.user.tag}`);
});
client.on( Events.InteractionCreate, (c) => {

} ); */ //此處使用event loader create替代
