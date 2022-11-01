function apikey(req, res, next){
    //the whole concept of middleware is here working actually
    const apikey = '1234567'
    const userkey = req.query.apikey            //req.query.apikey will fetch the passed the api key in the url
    
    console.log(userkey)

    if(userkey && userkey === apikey){
        next()          //need to use next (won't do the unlimited loading ) also need to focus to next middleware right away...
    }
    else{
        res.json([{'status':'NOT A VALID KEY'}])
    }
}

module.exports = apikey