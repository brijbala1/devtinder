const adminAuth = (req,res,next)=>{
    token ="xyz";
    isAutherized = token === "xyy";
    if(!isAutherized){
        res.status(401).send("Unauthorized request");
    }else{
    next();
}
};

const userAuth = (req,res,next)=>{
    token ="xyz";
    isAutherized = token === "xyz";
    if(!isAutherized){
        res.status(401).send("Unauthorized request");
    }else{
    next();
}
};

module.exports ={
    adminAuth,
    userAuth
};