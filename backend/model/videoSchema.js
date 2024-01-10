const mongoose = require('mongoose')
const videoSchema = new mongoose.Schema({
    id:{
        type:Number
    },
        imageUrl:{
        type:String},
        title:{
            type:String
        },
        views:{
            type:String
        },
        daysOld:{
            type:String
        },
        channelName:{
            type:String
        }
})

const Video = mongoose.model('video' , videoSchema)
module.exports = Video