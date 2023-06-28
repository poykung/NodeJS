/* Promise
ถูกนำมาใช้งานเกี่ยวกับการทำงานแบบ Asynchronous คือ ให้รอในระหว่างที่ผลลัพธ์ยังไม่เกิดขึ้นใช้กับงานที่มีลักษณะหน่วงเวลา delay
หรืองานที่ต้องทำเบื้องหลัง แล้วจะมีผลเกิดขึ้นในเวลาต่อมาและถูกนำมาใช้แก้ปัญหา callback hell

การสร้าง promise

Promise(function(resolve,reject){

})
Callback Function ใช้กำหนดการกระทำบางอย่าง
การทำงานใน promise จะมี 3 สถานะคือ pedding, resolve, reject
    - pedding เป็นสถานะเริ่มต้นของ promise
        ถ้าหากทำงานเสร็จแล้วจะเป็น resolve
        ถ้าหากล้มเหลวจะเป็น reject
    - resolve/fulfilled เป็น parameter ของ callback ซึ่งใช้กำหนดสถานะหากทำงาน "สำเร็จ"
    - reject เป็น parameter ของ callback ซึ่งกำหนดสถานะหากทำงาน "ผิดพลาด"

method then(),catch(),finally()
    การทำงานของ Promise ระหว่างที่รอตรวจสอบสถานะของ Promise อยู่ว่าเป็น resolve หรือ reject สามารถกำหนดขั้นตอนต่อไปในการทำงานได้
    โดยอาศัย then(), catch() มาใช้ ตอบสนองสถานะดังกล่าว
    - then() ใช้งานร่วมกับสถานะ resolve หรือเมื่อ promise ทำงานสำเร็จ
    - catch() ใช้ทำงานร่วมกับสถานะ reject หรือเมื่อ promise ทำงานผิดพลาด
    - finally() ไม่ว่าผลลัพธ์จะเป็นอย่างไรให้ทำงานต่อที่ส่วนนี้ได้เลย

*/


const connect = true
const url1 = 'poykung.dev/file1.json'
const url2 = 'poykung.dev/file2.json'
const url3 = 'poykung.dev/file3.json'
const url4 = 'poykung.dev/file4.json'

function downloading(url){
    return new Promise(function(resolve,reject){
        console.log(`download...${url} please..wait..!`)
        setTimeout(()=>{
            if(connect){
                resolve(`download ${url} complete...:xD`)
            }else{
                reject('Something Wrong....:(')
            }
        },1000)
    })
}

/*downloading(url1).then(result=>{
    console.log(result)
}).catch(err=>{
    console.log(err)
}).finally(()=>{
    console.log('process success....')
})

*/


downloading(url1).then(function(result){
    console.log(result)
    return downloading(url2)
}).then(function(result){
    console.log(result)
    return downloading(url3)
}).then(function(result){
    console.log(result)
    return downloading(url4)
}).then(function(result){
    console.log(result)
}).finally(()=>{
    console.log('process..complete...')
})