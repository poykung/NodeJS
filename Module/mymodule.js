
/* Module 
//สร้าง function สำหรับให้บริการต่างๆ
function getCurrenTime(){
    return new Date()
}

function sumation(x,y){
    return x+y;
}

function formatNumber(num){
    return num.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g,'$1,') //แปลงตัวเลขให้มี , ขั้นกรณีที่มากกว่า 1000 ขึ้นไป
}


//ส่งออกบริการต่างๆโดย exports module ออกไปใช้งาน
module.exports.getCurrenTime = getCurrenTime
module.exports.sumation = sumation
module.exports.formatNumber = formatNumber
*/

/* read and write module file */