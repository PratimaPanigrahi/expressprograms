const homeController = (req,res)=>{
    res.render('index',{'title':'HOME'})
}
export { homeController }