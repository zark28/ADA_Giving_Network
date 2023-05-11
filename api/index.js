const express = require("express")
const app = express()
require("dotenv").config()
const port = process.env.PORT
const db=require('./db/dbconfig')
app.use(express.json())



db().then((res)=>{
    app.listen(port, () => {
        console.log(`Server running on port ${port}`)
    })
}
)
