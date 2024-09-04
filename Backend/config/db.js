import mongoose from "mongoose"
export const  connectDb= async () => {
try {
    const con=mongoose.connect(process.env.MONGODB_URL)
    console.log(`MongoDb connected `)
} catch (error) {
 console.log(error) 
 process.exit(1)  //1 code mean failure O mean success
}
};