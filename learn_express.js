 //------------------- The concept of ejs and template engine is powerfull and useful read it carefully -------------------


 const express = require('express')
 const app = express()
 const path = require('path')
 const emitter = require('events')
 const http = require('http')
 const fs = require('fs')
 const axios = require('axios')
 const PORT = process.env.PORT || 4444
const mainrouter = require('./routes/router')

function routing_normal_traditional_1(){

}

function routing_express_way_2(){             
    //------------------- routing with express and static middlewares  -------------------

    app.use(express.static('public'))      //static middleware it reads file automatically inside given folder
    //But i don't understand how does it resolves the extensions type of the files
    
    app.get("/", (req,res)=>{
        res.sendFile(path.resolve(__dirname) + "/public" + "/index.html")
    })
    
    app.get("/about.html", (req,res)=>{
        res.sendFile(path.resolve(__dirname)+ '/public' + '/about.html')
    })
    
    app.get("/download",(req,res)=>{
        res.download(path.join(__dirname,'file.txt'),(err)=>{
            if(err){
                    throw (err)
                }
                console.log("File downloaded successfully!!!")
            })
        })
        
    //------------------- routing with express and static middlewares  -------------------
}


function template_engine_3(){            //Template engine is basically used to make the code reusable kind of like a template (its a ejs file tbh)
    //typical   hard to code--
    
    app.set('view engine', 'ejs')               //sets the view engine
    const engine = app.get('view engine')       //shows which view engine you are using 
    // app.set('views', path.join(__dirname, "public"))            //Here i chnaged the folders for views (views is basically the template folder)
    const views = app.get('views')              //shows the path of views folder (you can change the dir path tho)
    
    console.log(views)          //show the view/templates path


    app.use(mainrouter)     //the whole task of routing is being handled by this shit here//

    /* ------------------- routing being handled here which is actually now passed into routes folder rn to reuse/not repeate things -------------------
    app.get('/', (req,res)=>{
        res.render('home',{         //use res.render() while using ejs--- the second argument is for the template (key:value) passing
            title:'Idhr dekh!!'
        })
    })
    app.get('/about', (req,res)=>{
        res.render('about',{        //use these key value type templates or either use templates through include placed in partials folder 
            title:'About page'
        })
    }) */
}

function middleware_understand(){
    /* Middleware comes in the middle of the request and response cycle of the node.js execution.It also provides access to many functions like request and response objects with the Next function of the cycle.

    Tasks that can be performed with the middleware functions include:

    - Making quick changes to the request and response objects
    - Calling the next middleware immediately as per the stack
    - Effectively executing any code
    - Automatically terminating the request - response cycle 
    
    //------------------- IMage -------------------
    https://d2mk45aasx86xg.cloudfront.net/How_Node_js_Middleware_works_9b03a80ff6.webp
    
    */



}
app.listen(PORT, ()=>{
    console.log(`server is listening on PORT ${PORT}`)
    //------------------- write the going to be used function here -------------------
    template_engine_3();
})