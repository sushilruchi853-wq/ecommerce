import mongoose from "mongoose";

const connectDB = async () => {
    try {
        const conn = await mongoose.connect(process.env.MONGO_URL)
        console.log(`connected to mongoodb Dtabase ${conn.connection.host} `.bgMagenta.white)
    } catch (error) {
        console.log(`error in Mongodb ${error}.bgRed`.white)
        
    }
    
}
export default connectDB;