const homeController =(req,res)=>{
    res.render('index',{'name':'infobyte'})
}
export {homeController}