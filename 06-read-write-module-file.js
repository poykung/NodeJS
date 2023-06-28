/*
การอ่านและเขียน file
การอ่านและเขียน file จะใช้ module ที่มีชื่อว่า fs (file system)
โดยแบ่งออกเป็น 2รูปแบบ
    - อ่านและเขียน file แบบ Synchronous (Blocking)

    โครงสร้างคำสั่ง
    const data = fs.readFileSync('ตำแหน่ง file',encoding)
    **เก็บค่าที่ได้จากการอ่าน file ไว้ที่ตัวแปร data
    
    const data = "Hello world"
    fs.writeFileSync('ตำแหน่ง file',data)


    - อ่านและเขียน file แบบ Asynchronous (Non-Blocking)
    
    โครงสร้างคำสั่งการอ่าน file asynchronous
    fs.readFile('ตำแหน่ง file',edcoding,callback)

    fs.readFile('ตำแหน่ง file',edcoding(err,data){
        console.log(data) //แสดงข้อมูลที่เก็บใน data

    โครงสร้างคำสั่งการเขียน file asynchronous
    จัดเตรียมเนื้อหา file
    const data = "Hello"
    fs.writeFile('ตำแหน่ง file')
    })
*/