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


// const createDoc =async()=>{
//     try{
//         const studentDoc = new studentModel({
//             name:'Rahul',
//             age:25,
//             fees:8500.40,
//             isactive:true,
//             comments:[{value:'This is good'}]

//         })
//         //saving documents
//         const result = await studentDoc.save()
//         console.log(result)
//     }catch(error){
//         console.log(error)
//     }
// }




// const createDoc =async(nm,ag,fe,isact,comt)=>{
//     try{
//         const studentDoc = new studentModel({
//             name:nm,
//             age:ag,
//             fees:fe,
//             isactive:isact,
//             comments:comt
//         })
//         //saving documents
//         const result = await studentDoc.save()
//         console.log(result)
//     }catch(error){
//         console.log(error)
//     }
// }



const createMultiDoc =async()=>{
    try{
        const PritiDoc = new studentModel({
            name:'Priti',
            age:25,
            fees:8500.40,
            isactive:true,
            comments:[{value:'This is good'}]

        })

        const JayDoc = new studentModel({
            name:'Jay',
            age:35,
            fees:8900.40,
            isactive:true,
            comments:[{value:'This is bad'}]
        })

        const kabirDoc = new studentModel({
            name:'Kabir',
            age:25,
            fees:8500.40,
            isactive:true,
            comments:[{value:'This is good'}]

        })

        //saving documents
        const result = await studentModel.insertMany([PritiDoc,kabirDoc,JayDoc])
        console.log(result)
    }catch(error){
        console.log(error)
    }
}

export  { createMultiDoc }