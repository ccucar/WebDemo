const path = require("path");
const bodyParser = require("body-parser");
const express = require("express");
const app = express();
const signToken = require("./utils/jwt.js").signToken;

app.use(function(req,res,next){
    console.log(new Date()); //display on cmd , not browser
    next();
})



app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

app.get("/", function(req, res){
    res.send("hello world!ssaaw");
});

app.get("/login", function(req ,res ){
    res.sendFile(path.resolve(__dirname, "./views/login.html"));
})
app.post('/login', function(req, res){
    let username =req.body.username;
    let password =req.body.password;

    console.log(req.body);
    //驗證帳密
    if(username === "a" && password === "a"){
        //正確
        signToken({username:"a"},function(err,token){
            res.json({
                login: true,
                token: token
            });
        }
            
        )
       
    }else{
        //錯誤
        // console.log(res.json);
        res.json({
            login: false
        });
    }
});

app.listen(3000, function(){
    console.log("server start!");
})