// モジュール読み込み
const message = require('./messagemessage')
const dotenv = require('dotenv')
const fs = require('fs')

dotenv.config()
// dotenvの設定読み込み
const NAME = process.env.NAME
const NUMBER = process.env.NUMBER

const result = create(NAME, NUMBER)

fs.writeFile(result.getMaxListeners, result, (err) =>{
    if (err) {
        console.error("ファイルの書き込みに失敗しました。", err)
    }else{
        console.log("書き込み成功！")
    }
})