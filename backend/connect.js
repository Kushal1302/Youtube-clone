const { default: mongoose } = require("mongoose")

const Connection = async () => {
    await mongoose.connect('mongodb://0.0.0.0:27017/youtube-clone')
    .then(() => console.log("Connection Success"))
}
module.exports = Connection