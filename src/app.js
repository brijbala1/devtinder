const express= require("express");
const app = express();
const {adminAuth,userAuth} = require("./middleWares/auth");

//middleware is generally use to "use" request, whenever we are using post, get and more request.
//Handle Auth Middlewear for only Get requests GET, POST

app.get("/getUserData",(req,res)=>{
    try{
        throw new Error("there is an error");
        res.send("All data sent");
    }catch(err){
       res.status(500).send("Some Error contact support team");
    } 
});

app.use("/",(err, req, res, next)=>{
    if(err){
        // Log your error
        res.status(500).send(" something went wrong");
    }
});// if you will add error on first one and next should be add in last param

app.listen(3000,()=>{
    console.log("Server is successfully listening on port 3000"); 
});










//GET  /User => It check all the app.xxx("matching route") function
// app.use("/",(req,res)=>{
//     // res.send("Handeling/ route");
//     next();
// });
// app.use('/route',rH,[rH2,rH3],rH4); //route in array nothing break over here or do not impact over here
// app.use("/user",
//     (req,res,next)=>{
// //Route handler
//     // res.send("Route handler 2");
//     // console.log("Handeling the route user");
//     next();
// }, (req,res,next)=>{
// //Route handler
//     // res.send("Route handler 2");
//     // console.log("Handeling the route user");
//     next();
// },(req,res,next)=>{
//     res.send("2nd route Handler");
// });
// app.use("/user",
//     (req,res,next)=>{
// //Route handler
//     // res.send("Route handler 1");
//     console.log("Handeling the route user");
//     next();
// });


// //This will only handle GET call to /user
// // req /user, user/xyz, user/1
// app.get(/^\/ab?c$/,(req,res)=>{
//     res.send({firstName:"Brij", lastName:"Rasotra"});
// }); //b is optional here
// app.get(/^\/ai+c$/,(req,res)=>{
//     res.send({firstName:"Brij",lastName:"Bala"});
// }); // you can add i on multiple time

// app.get(/^\/a(bc)?d$/,(req,res)=>{
//     res.send({firstName:"Brij",lastName:"Bala"});
// }); //bc is optional

// app.get(/^\/jk.*l$/,(req,res)=>{
//     res.send({firstName:"Brij",lastName:"Bala"});
// }); //you can add after k anything

// // app.get(/a/,(req,res)=>{
// //     res.send("it will work");
// // });// we can call it in any word but we need to use a on that word and then it will work 

// app.get(/.*fly$/,(req,res)=>{
//     res.send("Hello Sir");
// }); //if the route start with star nd then end with fly it will work

// app.get("/user/:userId/:name/:password",(req,res)=>{
//     console.log(req.params);
//     // console.log(req.query);
//     res.send({firstName:"Akshay",lastName:"Saini"});
// });
