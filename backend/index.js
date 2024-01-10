const express = require('express')
const Video = require('./model/videoSchema')
const Connection = require('./connect')

const app = express()
const cors = require('cors');
app.use(cors());
Connection()
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

app.listen(8000 , () => console.log("Listening"))