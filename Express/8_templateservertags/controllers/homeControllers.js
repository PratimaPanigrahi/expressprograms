const homeController =(req,res)=>{
    const data ={
        'name':'infobyte',
        'id':21,
        'marks' :[40,30,45,54,20]
    }
    res.render('index',data)
}
export { homeController }