exports.get404 = (request,response,next)=>{
    response.status(404).render('404',{pageTitle:'Not Found'});
}