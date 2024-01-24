const { default: mongoose } = require("mongoose")

const Connection = async (MONGO_URL) => {
    await mongoose.connect(MONGO_URL)
    .then(() => console.log("Connection Success"))
}
module.exports = Connection