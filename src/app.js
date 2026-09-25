const express= require("express");

const app = express();

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


app.get("/admin/getAllData",(req,res)=>{
    //Logic of fetching all data
    res.send("All data sent");
});

app.get("/admin/deleteUser",(req,res)=>{
    //Logic to delete all User
    res.send("Deleted a user");
});

app.listen(3000,()=>{
    console.log("Server is successfully listening on port 3000"); 
});














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
