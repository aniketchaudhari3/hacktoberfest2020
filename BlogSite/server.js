"use strict";
const e = require('express');
const express = require('express');
const fs = require('fs');
const app = express();
const port = 80;
const camelCaseSpace = /([A-Z])([A-Z])([a-z])|([a-z])([A-Z])/g;
// Static content
app.use('/static', express.static('./Webpage/Resources'))

// Main Index
app.get('/', (req, res) => {
  res.sendFile(__dirname + '/Webpage/index.html')
});

// Blog Routing
app.get('/blog', (req, res) => {
    if (req.query.blog == null)
    {
        const path = require('path');
        const fs = require('fs');
        const directoryPath = path.join(__dirname, 'BlogPosts/');
        var files = fs.readdirSync(directoryPath);
        files.sort(function(a, b) {
            return fs.statSync(directoryPath + a).mtime.getTime() - fs.statSync(directoryPath + b).mtime.getTime();
        });
        req.query.blog = files[0];
    }

    res.redirect(`/getblog?blog=${req.query.blog}`); 
});

app.get('/getblog', (req, res) => {
    res.sendFile(__dirname + "/Webpage/blog.html");
});

app.get('/loadPosts', (req, res) => {
    if (req.query.blog == null)
        res.send("Error loading blog post");

    fs.readFile( __dirname + "/BlogPosts/" + req.query.blog, function (err, data) {
        if (err)
            throw err; 
        else
            res.send(data) 
    });
});

app.get('/getBlogPosts', function(req, res) {
    //requiring path and fs modules
    const path = require('path');
    const fs = require('fs');
    //joining path of directory 
    const directoryPath = path.join(__dirname, 'BlogPosts/');

    var Output = "";

    //passsing directoryPath and callback function
    fs.readdir(directoryPath, function (err, blog) {
        //handling error
        if (err) {
            console.log('Unable to scan directory: ' + err);
            res.send(`<p>Error Fetching...</p>`)
        } 
        //listing all files using forEach
        blog.forEach(function (blog) {
            var fileName = blog.substring(0, blog.indexOf('.')).toString();
            Output += `<a class="blogPosts" href="/blog?blog=${blog}">${fileName.replace(camelCaseSpace, '$1$4 $2$3$5')}</a><br>`;
        });
        
        res.send(Output);
    });    
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
});