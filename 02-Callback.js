/* 
Callback Function คือ function ที่จะถูกเรียกใช้งานเมื่ออีก function ทำงานเสร็จ
- ใช้ควบคุมลำดับการทำงาน


คำสั่ง Asynchronous ใน JavaScript
- setTimeout
- setInterval
- Promise
*/

/*
console.log("download")
setTimeout(()=>{
    console.log("loading....") //ผลลัพธ์จะข้ามการทำงานใน function เนื่องจากเป็นการทำงานแบบ asynchronous
},3000)
console.log("success...")
*/

/* function ปกติ

function summation(x,y){
    return x+y;
}

function display(result){
    console.log(`ผลบวก = ${result}`)
}
const sum = summation(100,50)
display(sum)
*/


/* callback function 
function summation(x,y,callback){
    console.log("loading....")
    setTimeout(()=>{
        const sum = x+y;
        callback(sum)
    },3000)
}

function display(result){
    console.log(`ผลบวก = ${result}`)
}
const sum = summation(100,50,display)*/

/*ตัวอย่างเขียนโปรแกรมลำดับการ download โดยใช้ function callback 

const url1 = "poykung.dev/file.json"

function downloading(url,callback){ //สร้าง function สำหรับแสดงการ download ข้อมูล รับค่า parameter และ callback function
    console.log(`กำลังดาวน์โหลด ${url}`) 
    setTimeout(()=>{ //ใช้ function สำหรับหน่วงเวลาการ downloadfile
        callback(url)
    },3000)
}

function complete(result){
    console.log(`ดาวน์โหลด ${result} เสร็จสิ้น...!`) //function สำหรับแสดงสถานะ download
}

downloading(url1,complete)
*/






