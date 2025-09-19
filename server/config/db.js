import mongoose from 'mongoose'

//function to connect to the mongoDB database
const connectDB = async () => {
    mongoose.connection.on('connected', () => console.log('DataBase Connected'))

    await mongoose.connect(`${process.env.MONGODB_URI}/Insider-Jobs`)
}

export default connectDB