const express = require('express');
const router = express.Router();
const routeController = require('../controllers/routeController');

// Home route
router.get('/', routeController.getHome);

// About route
router.get('/about', routeController.getAbout);

module.exports = router;