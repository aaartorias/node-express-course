// get access to the express library by searching our node_modules for express
// create instance of the express constructor, calling it "app"
const express = require('express');
const app = express();

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

app.get('/users/:id', function(req,res){
    console.log(req.params.id)
    res.json({
        success: true,
        message: 'got one user',
        user: req.params.id
    })
})

// access methods used for making a server by including their name afer app
// app.listen method will start up the server locally on the post 8000
// base url here is http://localhost:8000
app.listen(8000, function(){
    console.log("server is running...")
})