const mongoose = require('mongoose');
require('dotenv').config()

const db = async () => {
    try {
       await mongoose.set('strictQuery',false)
        await mongoose.connect(process.env.MONGO_URL)
        console.log('DB Connected')
    } catch (error) {
        console.log('DB CONNECTION ERROR');
    }
}

module.exports = {db}   