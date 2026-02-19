import express from 'express'
import { userApp } from "./API/userApi.js"
import { productApp } from "./API/productApi.js"
import { connect } from "mongoose"

// create HTTP server
const app = express()
//body parse middleware
app.use(express.json())

// connect to db
async function connectdb() {
try {
    await connect('mongodb://127.0.0.1:27017/db')
    console.log("db connected")
    app.listen(4001, () => console.log(`Server listening on port 4001...`))
}
catch (err) {
    console.log("error in db connextion", err)
}
}
connectdb();

app.use('/userApi', userApp)

app.use('/productApi', productApp)
