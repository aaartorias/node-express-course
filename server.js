// get access to the express library by searching our node_modules for express
// create instance of the express constructor, calling it "app"
const express = require('express');
const app = express();

// access methods used for making a server by including their name afer app
// app.listen method will start up the server locally on the post 8000
// base url here is http://localhost:8000
app.listen(8000, function(){
    console.log("server is running...")
})