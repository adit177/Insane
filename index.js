const express = require('express');
const app = express();
const port = process.env.PORT || 8080;
const path = require('path');
const expresslayout = require('express-ejs-layouts');

app.use(expresslayout);
app.use(express.static('assets'));
app.use(express.urlencoded({extended:false}));

app.set('layout extractStyles', true);
app.set('layout extractScripts', true);
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