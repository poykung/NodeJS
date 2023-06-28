/* Express&Routing เบื้องต้น
    - ใช้คำสั่ง use (path เริ่มต้น)
    - ใช้ http method (get,post)

ตัวอย่าคำสั่ง use
const express  = require('express') //นำ express เข้ามาใช้งาน
const app = express() //เรียกใช้งาน express และเก็บไว้ในตัวแปร app
app.use('/',(req,res)=>{ //ระบุ path เริ่มต้น
    res.send('hello express.js')
})

method get post
app.method(path, callback function)

get() เป็น method สำหรับกำหนดการทำงานตามเส้นทางที่ระบุเมื่อ request ถูกส่งเข้ามา เช่น การส่งค่ามาพร้อมกับ url เป็นต้น
callback function สำหรับกำหนดรูปแบบการตอบสนองที่เกิดขึ้นเพื่อส่ง request เข้ามาในเส้นทางดังกล่าว


const express = require('express') //นำ express เข้ามาใช้งาน
const app = express() //เรียกใช้งาน express และเก็บไว้ในตัวแปร app
app.get('/',(req,res)=>{ //ให้กำหนด url เป็น / ในรูปแบบของ (http method)
    res.send("Hello Express JS")  //response ข้อความไปหาผู้ใช้
})

app.get('/product',(req,res)=>{
    res.send("Hello Product")
})
*/