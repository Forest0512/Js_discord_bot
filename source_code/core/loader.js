import { REST,Routes } from 'discord.js'

const updateSlashCommands = () => {
    const rest = new REST( {version:10} ).setToken(process.env.token)
    //REST功能物件化，設定v10版本的discord.api
    rest.put(
        Routes.applicationGuildCommands(
            process.env.ApplicationID,
            '966503421534437427' //伺服器id
        ),
        {
            body:{}
        }
    )
}


const loadCommands = () => {
    
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