const jwt =require ("jsonwebtoken");
const key= "jadifjiejeo";

function signToken(payload , cb){
    jwt.sign(payload, key , cb);
}

module.exports ={
    signToken: signToken
}
