// Required Modules
const path = require("path")
const http = require("http")
const fs = require("fs")
const emitter = require('events')

/* #1 working of require in js */
function require_working_1(){
    /* 
    
    learning about node js

    In reality whatever you write in a module(all components that you make and export) is actually gets wrapped in a function(which pass require argument) that's why the "REQUIRE" in javascript works cuz "require" isn't exactly in js its a part of node js
    
    the function in which each module gets wrapped in is:-
    
    (function(exports, require, module, __direname, __filename){
        --HERE REQUIRE WORKS--
    })()

    */
}

function N_JS_Fundamental_2(){
    /* 
    #(1)-- Node.js is a JavaScript runtime(not language) built on the V8 JavaScript engine. (line from official doc)

    Means that the chrome's "V8" engine got pulled out (in history) and some extra "OS" kinda functionalities got added into it and here you go node js is built bitch
    Yes, that means that V8 is the baap of node JS.

    #(2)-- Core modules exists in node js i.e the modules that got default installed with node.
    globally installed are different OK!!

    #(3)-- How node js works as multi threading even though it is single threaded by birth
    
    SO node/JS is single threaded synchronous that means that it can handle only single request at once Yes only single.
    
    So to handle billion clients request on server what is does is it send the req to kernel of os and that bitch you know can be super multithreaded YUP it scammed multi threading but it works!! 
    
    Same happens in normal usage also.. to get multithreading..

    Also node js has workers which get the command or task and they do the boom boom with kernel to make it done.
    */
}

function npm_commands_3(){
    /* 
        
        npm install pk_name	
        npm install pk_name --save   
        (same working i.e: get added to project dependencies)
        
        npm install -g global
        (to install package globally )
        
        npm uninstall -g pk_name
        (uninstall package from global source)
        
        npm init 	
        (IT takes input like pak_name etc )

        npm init -y
        (directly create pk_json --no input--)
        
        npm list 		
        (list of packages installed locally)
        
        npm list -g
        (list of globally packages installed)

        npm install --D pk_name  
        (install the package as a dev dependencies)
        
        npx install pk_name		
        (doesn't install pk on machine but simply executes the line/command that you given without installing package)

        (mostly used for once in a project used command ex- create-react-app)
    */
}

function path_module_4(){
    // dirname 
    console.log('Folder name: ', path.dirname(__filename))

    // filename
    console.log('File name: ', path.basename(__filename))

    // Extension
    console.log('Ext name: ', path.extname(__filename))

    // parse 
    console.log('Parse : ', path.parse(__filename))
    //parse returns object containing root_name, dir, filename.ext, ext_name, filename

    // Join 
    console.log('Join : ', path.join(__dirname, 'order', 'app.js'))
}

function fs_module_5(){
    
    // Make a directory 
    fs.mkdir(path.join(__dirname, 'dummy'), (err) => {
        if(err) {
            console.log(err)
            return
        }
        console.log('Folder created...')
    })

    // Create a file
    fs.writeFile(path.join(__dirname,'file.txt'), 'Hello Node\n', (err) => {
        if(err) {
            throw err
        }
        fs.appendFile(path.join(__dirname, 'file.txt'), 'More data', (err) => {
            if(err) {
                throw err
            } 
            console.log('Data added...') 
        })
        console.log('File created...')
    })

    // Read a file 
    fs.readFile(path.join(__dirname,'file.txt'), 'utf-8', (err, data) => {
        if(err) {
            throw err
        }
        //  const content = Buffer.from(data)
        // console.log(content.toString())

        console.log(data)
    })
}


function os_module_6(){
    const os = require("os")

    console.log('Os type: ', os.type())

    console.log('Os platform: ', os.platform()) 

    console.log('Cpu architecture: ', os.arch())

    console.log('Cpu details: ', os.cpus())

    console.log('Free memory : ', os.freemem())

    console.log('Total memory : ', os.totalmem())

    console.log('Uptime : ', os.uptime())
}

function event_module_7(){
    
    // Events module 
    const Emitter = require('events')
    const myEmitter = new Emitter()

    myEmitter.on('somename', (data) => {
        console.log(data)
    })

    myEmitter.emit('somename', {
        name: 'Rakesh'
    })

    class Auth extends Emitter{
        register(username) {
            console.log('Registered successfully...')
            this.emit('registered', username)
        }
    }

    const auth = new Auth()

    // Verify email
    auth.on('registered', (data) =>{
        console.log(`Sending email to ${data}`)
    })

    // welcome email 
    auth.on('registered', (data) =>{
        console.log(`Sending welcome email to ${data}`)
    })


    auth.register('codersGyan')
}

function how_auth_works_8(){
    // Local module
    const auth = require('./auth')
    
    auth.register('codersGyan')
    auth.login('codersGyan', 'secret')
}


function traditional_way_routing_8(){      //normal way of routing 
        const server = http.createServer((req,res)=>{
            const url = req.url;
            res.setHeader("Content-Type","text/html");
            if(url === "/"){
                res.write("<html>")
                res.write("<header>Plain text</header>")
                res.write("<h1>This is header text</h1>")
                res.write("</html>")
                console.log("The server worked!!")
                return res.end()
            }
            if(url === "/file"){
                fs.writeFileSync("NeWfile.txt","Brother");   //(Not good way)
                res.statusCode = 333;
                res.setHeader("Location","/abc")
                return res.end();
            }
            res.write("<html>")
            res.write("<header>Wet text</header>")
            res.write("<h1>This is Second Header text</h1>")
            res.write("</html>")
            console.log("The server JUST worked Again!!")
            res.end()
        })
    
        //------------------- reading data through stream and pipeline -------------------
       /*  const server = http.createServer((req,res)=>{
            // bad way of reading file 
            const read = fs.readFileSync("file.txt");    //first read file using readfilesync
            res.writeHead(200,{'Content-Type':'video/mp4'});     //add type
            return res.end(read);        //return to response which eventually is going to return data to browser
        
            // good way of reading file (i.e with stream and buffer)
            const read = fs.createReadStream("hello.mp4");
            res.writeHead(200,{'Content-Type':'video/mp4'});
            read.pipe(res);
        }) */
}
     