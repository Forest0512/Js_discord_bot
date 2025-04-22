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