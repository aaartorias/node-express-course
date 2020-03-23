// get access to the express library by searching our node_modules for express
// create instance of the express constructor, calling it "app"
const express = require('express');
const app = express();
const bodyParser = require('body-parser');
app.use(bodyParser.json());

// Mock JSON data to return 
const mockUserData=[
    {name:'Mark'},
    {name: 'Jill'}
]

app.get('/users', function(req,res){
    res.json({
        success: true,
        message: 'successfully got users. Nice!',
        users: mockUserData
    })
})
//You can access the value of each variable through req.params
app.get('/users/:id', function(req,res){
    console.log(req.params.id)
    res.json({
        success: true,
        message: 'got one user',
        user: req.params.id
    })
})

app.post('/login', function(req,res){
    const username=req.body.username;
    const password=req.body.password;

    const mockUsername="billyTheKid";
    const mockPassword="superSecret";

    if (username==mockUsername && password==mockPassword) {
        res.json({
            success: true,
            message: 'password and username match!',
            token: 'encrypted token goes here'  
        })
    } else {
        res.json({
            success: false,
            message: 'password and username don\'t match'
        })
    }
})

// access methods used for making a server by including their name afer app
// app.listen method will start up the server locally on the post 8000
// base url here is http://localhost:8000
app.listen(8000, function(){
    console.log("server is running...")
})