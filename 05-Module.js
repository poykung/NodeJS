/* 
Module คือ file ที่จัดเก็บ code ของ javascript ซึ่งประกอบด้วยการทำงานต่างๆ ได้แก่ ตัวแปร ฟังก์ชั่น , class,object,หรืออื่นๆ
เพื่อนำไปใช้งานในส่วนต่างๆของโปรเจค

ในปัจจุบันมีผู้สร้าง module สำหรับสนับสนุนและให้บริการอยู่หลายแบบเพื่ออำนวยความสะดวกเกี่ยวกับงานแต่ละด้าน เช่น จัดการ request ,database,dateTime เป็นต้น

การสร้างและส่งออก module
ชื่อ module.js
const PI = 3.14
function add(x,y){
    return x+y
}

module.exports.PI = PI
module.exports.add = add

การนำ module มาใช้งาน
ตัวแปรสำหรับรับค่า module = require(location)
const util = require('mymodule')

*/