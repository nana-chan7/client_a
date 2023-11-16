// モジュール読み込み
const message = require('./message')
const dotenv = require('dotenv')
const fs = require('fs')

dotenv.config()
// dotenvの設定読み込み
const NAME = process.env.NAME
const NUMBER = process.env.NUMBER

const result = message.create(NAME, NUMBER)

fs.writeFile('result.txt', result, (err) => {
    if (err) {
        console.error("ファイルの書き込みに失敗しました。", err);
    } else {
        console.log("書き込み成功！");
    }
});


// 2023-11-15 3.week9 試験問題解説

// npm i fs

// const dotenv = require('dotenv')
// dotenv.config();
// const fs = require('fs')
// const message = require('./message')

// var name = process.env.NAME
// var number = process.env.NUMBER

// var result = message.create(name, number)
// console.log(result)

// try {
//     fs.writeFileSync('result.txt', result, 'utf8');
//     console.log('ファイルが正常に書き出されました。');
// } catch (err) {
//     console.error(err);
// }


