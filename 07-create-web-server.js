/* สร้าง web server ด้วย node js
คำศัพท์พื้นฐาน
    -   server ผู้ให้บริการ
    -   client ผู้ใช้บริการ (User/Browser)
    -   request คำขอการเข้าถึง
    -   response การตอบกลับคำขอ

ก่อนที่จะทำการสร้าง web server โดยใช้ node.js จะต้องทำการสร้าง app ของ node.js ขึ้นมาก่อน
    -   npm init หรือ npm init -y (ไม่ต้องใส่รายละเอียด)
    -   package.json เป็น file ที่เก็บข้อมูลหรือรายละเอียดต่างๆ
        รวมถึง module/package ที่จะใช้งานภายในโปรเจค

สร้าง web server with node.js
    - http คือ module ที่ใช้นำมาควบคุมการทำงานของ server

    - http.createServer() คำสั่งสำหรับสร้าง server โดยสร้างการเชื่อมต่อและรับส่งข้อมูลผ่าน callback function
    และรับค่าเข้ามาทำงานได้แก่ 2 ค่า
        1.) req (request) รับข้อมูลผู้ใช้จาก browser มาที่ server
        2.) res (response) ส่งข้อมูลตอบกลับจาก server ไปหาผู้ใช้งาน

    - response.write() เขียนผลลัพธ์ตอบกลับไปหาผู้ใช้ ระบุเป็นข้อความหรือ html ก็ได้หรือไม่เขียนก็ได้
    - response.end() กำหนดจุดสิ้นสุดการรับส่งข้อมูลหรือการระบุการตอบกลับไปหาผู้ใช้งาน
    - listen(3000) สั่งให้ web server เริ่มรันแล้วเชื่อมต่อที่ port หมายเลข 3000 หรือ port หมายเลขอื่นได้เช่น 5000 , 8000 เป็นต้น



*/

/* ตัวอย่างการสร้าง web server with node.js
const http = require('http');

const server = http.createServer((req,res)=>{
    const myhtml = `
    <h1>Hello Node Js</h1>
    <p>Hi my name is | Poykung<p>
    `

    res.write(myhtml)
    res.end()
})

server.listen(3000,'localhost',()=>{
    console.log("Start server in port 3000")
})
*/