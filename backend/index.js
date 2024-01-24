const express = require('express')
require('dotenv').config()
const Video = require('./model/videoSchema')
const Connection = require('./connect')


const app = express()
const cors = require('cors');
app.use(cors());

const MONGO_URL = process.env.MONGO_URL
Connection(MONGO_URL)
app.get('/videos/:id' , async (req , res) => {
        try {
            
        const {id} = req.params
        const data = await Video.findOne({id})
        return res.send(data)
        } catch (error) {
            console.log(error)
        }
   
        
    
    
})
app.get('/videos' , async (req , res) => {
    try {
        const data = await Video.find()
        return res.send(data)
    } catch (error) {
        console.log(error)
    }
})
const PORT = process.env.PORT
app.listen(PORT , () => console.log("Listening" , PORT))