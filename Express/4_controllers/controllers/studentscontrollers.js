const allStudent =(req,res)=>{
    res.send("All student")
}
const updateStudent =(req,res)=>{
    const { id }=require.params
    res.send(`${id} Student Data uploaded`)
}
const deleteStudent =(req,res)=>{
    console.log(req.params)
    const{ id }=req.params
    console.log(id)
    if(id == 10){
        res.send('this ID cannot be deleted')
    } else {
        res.send(`student Delete ${ id }`)
    }
}
export{ allStudent, deleteStudent, updateStudent }