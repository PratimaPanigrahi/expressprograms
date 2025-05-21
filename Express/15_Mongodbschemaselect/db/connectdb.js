import mongoose from 'mongoose';

const connectDB =async (DATABASE_URL)=>{

    try{

        const DB_OPTIONS ={
            dbName:'Pratimadb',
        }

        await mongoose.connect(DATABASE_URL,DB_OPTIONS);

        console.log("Connected succesfully...")
    }catch (err){
        console.log(err);
    }
}
export default connectDB