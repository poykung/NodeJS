/* 
Router parameter

การกำหนด parameter หรือตัวแปรส่งไปพร้อมกับ path โดยใช้เครื่องหมาย : (colon) กำกับไว้หน้าชื่อ parameter
ในแต่ละ path สามารถกำหนด parameter ได้มากกว่า 1 ตัวเช่น

product/:id
product/:category:id

การรับค่า parameter
    - request.params['ชื่อ parameter'] หรือ
    - request.params.ชื่อ parameter
*/