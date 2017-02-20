// subhsankalp
var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var morgan = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
var passport = require('passport');
var LocalStrategy = require('passport-local').Strategy;
var compression = require('compression');
var settings = require('./config/settings')
require('./config/passport')(passport);
var routes = require('./routes/routes');

var cors=require('cors');

var app = express();
var port = process.env.PORT || 8080 ;

// uncomment after placing your favicon in /public
//app.use(favicon(__dirname + '/public/favicon.ico'));
app.use(cors({origin:true,credentials: true}));
app.use(morgan('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(require('express-session')({
    secret: 'fiverrProject',
    resave: false,
    saveUninitialized: false
}));

app.use(compression());
app.use(express.static(path.join(__dirname, '/resources/public')));

// view engine setup
app.set('views', path.join(__dirname,'/resources', 'views'));
app.engine('.html', require('ejs').__express);
app.set('view engine', 'ejs');

app.use('/', routes);

// // Without this you would need to
// // supply the extension to res.render()
// // ex: res.render('users.html').
// app.set('view engine', 'html');


// mongoose
mongoose.connect(settings.dbUrl);

app.listen(port, '0.0.0.0', function(){
	console.log("Server running at http://localhost:"+port);
})

module.exports = app;