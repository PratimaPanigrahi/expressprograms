// const mongoose = require('mongoose')
import mongoose from 'mongoose';
const DATABASE_URL ="mongodb://localhost:27017//Pratimadb"
const connectDB =(DATABASE_URL)=>{
    return mongoose.connect(DATABASE_URL).then(()=>{
        console.log('connected succesfully')
    })
    .catch((err)=>{
        console.log(err)
    })
}

// const connectDB =async (DATABASE_URL)=>{
//     try{
//         await mongoose.connect(DATABASE_URL);
//         console.log("Connected succesfully...")
//     }catch (err){
//         console.log(err);
//     }
// }
export default connectDB