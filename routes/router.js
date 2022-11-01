const router = require("express").Router();
const middleapikey = require("../middlewares/apikey")       //adding middleware why we are adding it??
// cuz we need to get its functionality i.e:- getting the control of the cycle between req and res that's it... so down there we will be controlling the apikey being passed through url using middleware(i.e just adding this var to get the middleware developed functionality) and then verify the passed req key with the global apikey to check its verification i.e was in the middleware (apikey) function functionality

router.get('/', (req,res)=>{
    res.render('home',{         //use res.render() while using ejs--- the second argument is for the template (key:value) passing
        title:'Idhr dekh!!'
    })
})

router.get('/about', (req,res)=>{       //if you apply apikey here also they can only be accessed with the correct api key in url only (user must need to provide a apikey in url for this routing page then)
    res.render('about',{        //use these key value type templates or either use templates through include placed in partials folder 
        title:'About page'
    })
})

//------------------- api key router -------------------
router.get('/about/products', middleapikey, (req,res)=>{        //added middleware functionality just by the extra argument
    res.json([
        {
            id: '123',
            name: 'chrome'
        },
        {
            id: '124',
            name: 'brave'
        },
        {
            id: '125',
            name: 'firefox'
        }
    ])
})

module.exports = router         //router needs to be spread out to give all the routing table to the main server js file