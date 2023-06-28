/* Routing

การกำหนดเส้นทางหรือ url ในการอนุญาติให้เข้าถึงข้อมูลรวมไปถึงการตรวจสอบ url request เพื่อจะได้รูปแบบการทำงาน

http status code เป็นรหัสที่บ่งบอกสถานะของ request เช่น
    - 200 ok ดำเนินการเสร็จสมบูรณ์
    - 201 create สร้างข้อมูลใหม่เรียบร้อย
    - 400 Bad Request (Server ไม่เข้าใจว่า request นี้เกี่ยวกับอะไร)
    - 404 Not found (หาข้อมูลที่เรียกไม่เจอหรือไม่สามารถใช้งานได้)
    - 500 Internal Server Error (Request ถูกต้องแต่มีข้อผิดพลาดที่ฝั่ง server)

*/

/* ตัวอย่างการใช้ routing ในการกำหนด path

const http = require('http');

const server = http.createServer((req,res)=>{
    const pathName = req.url
    console.log("url =",pathName)
    if(pathName === "/" || pathName === "/home"){
        res.end("<h1>hello! h0me page...</h1>")
    }else if(pathName === "/product"){
        res.end("Hello Product")
    }else{
        res.writeHead(404)
        res.end("<h1>Not Found....</h1>")
    }
})

server.listen(3000,'localhost',()=>{
    console.log("Start server in port 3000")
})


*/