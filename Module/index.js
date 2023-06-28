/* Module 
//สร้างตัวแปรไว้สำหรับรับค่า module ที่ส่งเข้ามาทำงานโดยใช้คำสั่ง require ตามด้วยที่อยู่ของ file module
const mymodule = require('./mymodule');
const now = require('./mymodule').getCurrenTime //สามารถใช้ตัวแปรในการอ้างอิงการเข้าถึง function ได้
const number = 5000000

console.log(now()) //เรียกใช้งานบริการต่างๆที่อยู่นอก file โดยใช้ module อ้างอิง
console.log(mymodule.sumation(10,50))
console.log(mymodule.formatNumber(number))

*/


/* read and write with module synchronous


const fs = require('fs')
const data = fs.readFileSync('Module/mymodule/input.txt','utf-8')


const outputText = `${data} \n This file created with ${new Date()}`
fs.writeFileSync('Module/mymodule/write-with-module.txt',outputText)
console.log("created success...!")

*/

/* read and write with module asynchronous */

const fs = require('fs');

fs.readFile('Module/mymodule/input.txt','utf-8',(err,data)=>{
    if(err) return console.log('error...!!!', err)
    const outputText = `${data}\nThis file create with ${new Date()}`
    fs.writeFile('Module/mymodule/output.txt',outputText,err=>{
        if(err) return console.log('error...!!!', err)
        console.log('end process...')
    })
})

