/* 
Express.js เป็น framework ของ javascript ที่ใช้งานร่วมกับ node.js เพื่อสนับสนุนการทำงานของ web server ให้มีความง่ายและสะดวกมากยิ่งขึ้น
เนื่องจากมี feature หลายอย่างที่น่าสนใจ เช่น routing การจัดการ request , response และ middleware เป็นต้น

ในปัจจุบันนิยมนำ express.js มาสร้าง web server มากกว่าที่จะทำผ่าน node.js โดยตรง

การติดตั้ง express.js
คำสั่ง npm install express

การนำมาใช้งาน
const express = require('express')


การใช้งาน express js
const express = require('express') //นำ express มาใช้งาน
const app = express() //เรียกใช้งาน express และเก็บลงในตัวแปร app
app.use((req,res)=>{
    res.send("Hello express.js")
})

all.listen(8080, ()=>{ // run server ผ่าน port
    console.log("Start server at port 8080.")
})
*/