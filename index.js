const express = require('express');
const app = express();
const port = 8000;
const path = require('path');


app.set('view engine','ejs');
app.set('views',path.join(__dirname,'views'));

app.use('/',require('./router'));

app.listen(port,function (err) {
    if(err){
        console.log("Error while creating Server");
        return;
    }
    console.log("Successfully setup Server");
})