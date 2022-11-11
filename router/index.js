const express = require('express');
const router = express.Router();
const homeController = require('../controller/home_controller');
const visionController =require('../controller/vision_controller');
const eventsController = require('../controller/events_controller');

router.get('/',homeController.home);
router.get('/vision',visionController.vision);
router.get('/events',eventsController.events);

module.exports = router;