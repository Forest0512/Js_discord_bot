import { REST,Routes,Collection } from 'discord.js'
import fg from 'fast-glob'
import { useAppStore } from '@/store/app'

const updateSlashCommands = async(commands) => {
    const rest = new REST( {version:10} ).setToken(process.env.token)
    //REST功能物件化，設定v10版本的discord.api
    const result = await rest.put(
        Routes.applicationGuildCommands(
            process.env.ApplicationID,
            '966503421534437427' //伺服器id
        ),
        {
            body:commands,
        },
    )
    //console.log( result )
}



export const loadCommands = async() => {
    const appStore = useAppStore()
    const commands = []
    const actions = new Collection()
    const files = await fg('./source_code/commands/**/index.js') //  * 代表任何
    for ( const file of files ){
        const cmd = await import(file)
        commands.push(cmd.command)
        actions.set(cmd.command.name, cmd.action)
        //console.log(cmd.command)
    }
    // load commands
    await updateSlashCommands(commands)//註冊指令
    appStore.commandActionMap = actions

    console.log(appStore.commandActionMap)
}

export const loadEvents = async() => {
    const appstore = useAppStore()
    const client = appstore.client //調用store裡面的client出來用
    const files = await fg('./source_code/events/**/index.js') //讀取指令事件
    for (const file of files){ //取出，依次產生事件
        const eventFile = await import(file)

        if (eventFile.event.once){
            client.once(
                eventFile.event.name,
                eventFile.action,
            )
        }
        else{
            client.on(
                eventFile.event.name,
                eventFile.action,
            )
        }
    }
}


/*手動請求方法之一
const updateSlashCommands = () => { //取名updateSlashCommands功能，此功能為上傳伺服器斜線指令去註冊
    axios({ //axios，是一個專門發送app註冊or各種請求的套件
        method:'POST',
        url:'https://discord.com/api/v10/applications/<my_application_id>/guilds/<guild_id>/commands',
        headers:{
            Authorization:'Bot {botToken}'
        },
        data:{
            body:[
                {name:'ping',description:'this is a ping slash commands'},
                {name:'pong',description:'this is a pong slash commands'},
            ],
        },
    })
}
*/