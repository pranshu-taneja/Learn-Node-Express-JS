const express = require("express")
const app = express()
const fs = require('fs')
const path = require('path')
const mainrouter = require('./routes/router')

const PORT = process.env.PORT || 4444


app.set('view engine', 'ejs')
app.set('views', (path.resolve(__dirname)+'/views'))
app.use(mainrouter)


app.listen(PORT,()=>{
    console.log(`server is listening at PORT ${PORT}`)
})
