import mongoose from 'mongoose';

const studentSchema =new mongoose.Schema({
    name:{type:String,required:true,trim:true},
    age:{type:Number,required:true,min:18,max:50},
    fees:{type:mongoose.Decimal128,required:true,validate:v=>v >= 5500.00},
    isactive:{type:Boolean},
    join:{type:Date,default:Date.now},
    comments:[{value :{type:String},publish:{type:Date,default:Date.now}}]
})

console.log(studentSchema.path('age'))

const studentModel =mongoose.model('student',studentSchema)

//retrive all record
// const getAllDoc =async()=>{
//     const result = await studentModel.find()    
//     console.log(result)
//     result.forEach(
//         (item)=>console.log(
//             item.name,
//             item.age,
//             item.fees.toString(),
//             item.isactive,
//             item.comments[0].value,
//             item.comments[0].publish,
//             item.join
//         )
//     )
// }


//const getAllspecificfield=async()=>{
    // const result = await studentModel.find().select('name age')//include
    // const result = await studentModel.find().select(['name','age'])//include
    // const result = await studentModel.find().select({name:1,age:1})//include
    // const result = await studentModel.find().select('-name -age')//exclude
    // const result = await studentModel.find().select(['-name','-age'])//exclude
    // const result = await studentModel.find().select({name:1,age:1}) //exluce
    // const result = await studentModel.find({},'name age')

    // console.log(result)
//}

//retrive single record by id
// const getsingledocspsecified = async()=>{
//     const result = await studentModel.findById("67fe2a20b13c9e193283c043",'name age')
//     console.log(result)
// }

// export{ getAllDoc }
//export { getAllspecificfield }
// export { getsingledocspsecified }