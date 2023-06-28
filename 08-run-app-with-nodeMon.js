/* 
การ run app ด้วย nodemon

ในกรณีที่มีการเปลี่ยนแปลงการทำงานในแอพที่พัฒนาด้วย node.js ต้องหยุดการ run app ด้วย ctrl+c ทุกครั้งแล้ว run app ใหม่
จะสามารถแก้ไขปัญหาดังกล่าวได้ด้วย nodemon

nodemon คือ โมดูลที่จะคอยติดตามการทำงานการเปลี่ยนแปลงที่เกิดขึ้นกับ file JavaScript (.js) ทั้งหมดที่อยู่ในแอพ
เมื่อใดที่ file ดังกล่าวมีการเปลี่ยนแปลงและถูกบันทึก file เกิดขึ้น nodemon ก็จะ restart แอพให้โดยอัตโนมัติโดยที่ไม่ต้องทำการ restart

การติดตั้ง
-   npm install nodemon

การ run nodemon
แบบเดิม node index.js
nodemon npx nodemon index.js

หรือตั้งค่าใน script
"start:"nodemon./bin/www"
และรันโดยใช้ npm start

*/