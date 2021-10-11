let express = require('express');
let app = express();
let bodyParser = require('body-parser');
let session = require('express-session');
let fs = require("fs");


app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');
app.engine('html', require('ejs').renderFile);

let server = app.listen(3000, function() {
    console.log("Express server has started on port 3000 http://127.0.0.1:3000/")
})

app.use(express.static('public'));

app.use(bodyParser.json())
app.use(bodyParser.urlencoded())
app.use(session({
    secret: ';)',
    resave: false,
    saveUninitialized: true
}))

let routher = require('./router/main') (app, fs);