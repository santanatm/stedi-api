const express = require('express');
const app = express();
const port = 3000; 
const bodyParser = require('body-parser');
const Redis = require('redis');
const redisClient = Redis.createClient();//this creates a pending connection to redis


app.use(bodyParser.json()); //allow JSON (Javascript Object Notation) requests

app.listen(port, ()=> {
    redisClient.connect();
    console.log("Listening on port: " + port);
});

app.get('/', (req, res) => {
    res.send("<h1>Welcome to your Node Server!</h1>"); 
});

// To allow the user to send thier uername and pasword,
// we must create a psot endpoint in the server.js file
app.post('/login',async (req,res)=>{
    const userName = req.body.userName;
    const password = req.body.password;
    // The below line reads the password from Redis for the current user
    const redisPassword = await redisClient.hGet('users',userName);
    if(userName!=null && password ==redisPassword){
        res.send("Welcome: "+userName);        
    } else{
        res.status(401);
        res.send("Unauthorized");
    }

})