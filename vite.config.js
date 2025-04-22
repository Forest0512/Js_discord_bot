import { defineConfig } from 'vite'
import path from 'path'

export default defineConfig({
    resolve:{
        alias:{
            '@':path.resolve(__dirname,'./source_code'),  //將 '@' 替換 "./source_code"這個路徑，方便使用
        },
    },
})