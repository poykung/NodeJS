/* Class Router
การกระทำที่มีความซับซ้อนมากขึ้น มีเส้นทาง(route) มากขึ้น การเขียนระแบบเส้นทาง (routing) แบบเดิมอาจไม่ตอบโจทย์
จึงมีการจัดการ Routing โดยใช้ Class ที่มีชื่อว่า Router

โครงสร้างคำสั่ง

const express = require('express')
const router = express.Router()
router get('/',function(req,res)=>{})
router get('/product',function(req,res)=>{})
app.express()
app.use(router) //นำ router ไปกำหนดเส้นทางในแอพ

*/