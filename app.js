const express = require('express');
const app = express();
const cookieSession = require('cookie-session');
const passport = require('passport');
const authRoutes = require('./routes/auth');
const profileRoutes = require('./routes/profile');
const apiRoutes     = require('./routes/api');
const passportSetup = require('./config/passport-setup');
const mongoose = require('mongoose');
const keys = require('./config/keys');
const Bus = require('./models/bus');


const url = process.env.DATABASEURL || "mongodb://localhost/planner";

// connect to mongodb
mongoose.connect(url, { useNewUrlParser: true });



// set view engine
app.set('view engine', 'ejs');

// set up session cookies
app.use(cookieSession({
    maxAge: 1 * 60 * 60 * 1000,
    keys: [keys.session.cookieKey]
}));

// initialize passport
app.use(passport.initialize());
app.use(passport.session());
app.use((req, res, next) => {
    res.locals.user = req.user;
    next();
});


// set up routes
app.use('/auth', authRoutes);
app.use('/profile', profileRoutes);
app.use('/api', apiRoutes);

// create home route
app.get('/', (req, res) => {
	// Bus.create({
	// 	name : "Monday to Saturday",
	// 	collegeBus : [
	// 		{
	// 			time : "7:00 A.M",
	// 			from : "Ajmeri Gate",
	// 			to : "LNMIIT",
	// 			busNo : 1
	// 		},
	// 		{
	// 			time : "8:00 A.M",
	// 			to : "Ajmeri Gate",
	// 			from : "LNMIIT",
	// 			busNo : 2
	// 		}
	// 	]
	// }, (err, Bus) => {
	// 	if(err){
	// 		console.log(err);
	// 	}else{
	// 		console.log(Bus);
	// 	}
	// });
    res.render('home');
});


if (url === "mongodb://localhost/planner"){
	app.listen(3000, () => {
	    console.log('app now listening for requests on port 3000');
	});
}else{
	app.listen(process.env.PORT, process.env.IP, () => {
	    console.log('app now listening for requests on port 3000');
	});
}
