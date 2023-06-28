/* การใช้งาน module path

const path = require('path')
const indexPage = path.join(__dirname,'index.html')
app.get ('/',(req,res)=>{
    res.status(200) // แจ้ง status code
    res.type('text/html') //กำหนดรูปแบบเนื้อหา
    res.sendFile(indexPage)
})
*/