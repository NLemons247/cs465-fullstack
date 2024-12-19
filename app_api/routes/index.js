const express = require('express');
const router = express.Router();

//This is where we import the controllers we will route
const tripController = require('../controllers/trips');

//define route for our trips endpoint
router
    .route('/trips')
    .get(tripController.tripsList) //GET method returns tripList
    .post(tripController.tripsAddTrip); //POST method Adds a Trip



//GET Method routes tripsFindByCode - requires parameter
//PUT Method routes tripsUpdateTrip - requires parameter
router
    .route('/trips/:tripCode')
    .get(tripController.tripsFindByCode)
    .put(tripController.tripsUpdateTrip);

module.exports = router;