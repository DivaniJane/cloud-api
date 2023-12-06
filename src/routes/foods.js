const express = require('express');

const FoodController = require('../controller/foods.js')

const router = express.Router();

// CREATE - POST

router.post('/', FoodController.createNewFoods);

router.get('/', FoodController.getAllFoods);

module.exports = router;