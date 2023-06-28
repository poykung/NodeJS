const express = require('express');
const router = require('./routes/myrouter')

const app = express()
app.use(router)

app.listen(8080,()=>{
    console.log("start server at port 8080")
})