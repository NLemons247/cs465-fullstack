const express = require('express');
const router = express.Router();
const jwt = require('jsonwebtoken');

function authenticateJWT(req, res, next) {
    const authHeader = req.headers['authorization'];
    if (authHeader == null) {
        console.log('Auth Header Required but NOT PRESENT!');
        return res.sendStatus(401);
    }

    let headers = authHeader.split(' ');
    if(headers.length < 1) {
        console.log('Not enough tokens in Auth Header: ' + headers.length);
        return res.sendStatus(501);
    }

    const token = authHeader.split(' ')[1];
    if (token == null) {
        console.log('Null Bearer Token');
        return res.sendStatus(401);
    }

    const verified = jwt.verify(token, process.env.JWT_SECRET, (err, verified) => {
        if (err) {
            return res.sendStatus(401).json('Token Validation Error!');
        }
        req.auth = verified;
    });

    next();

}

//This is where we import the controllers we will route
const tripController = require('../controllers/trips');
const authController = require('../controllers/authentication');

router.route("/register").post(authController.register);
router.route("/login").post(authController.login);

//define route for our trips endpoint
router
    .route('/trips')
    .get(tripController.tripsList) //GET method returns tripList
    .post(authenticateJWT, tripController.tripsAddTrip); //POST method Adds a Trip



//GET Method routes tripsFindByCode - requires parameter
//PUT Method routes tripsUpdateTrip - requires parameter
router
    .route('/trips/:tripCode')
    .get(tripController.tripsFindByCode)
    .put(authenticateJWT, tripController.tripsUpdateTrip);

module.exports = router;