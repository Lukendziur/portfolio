const express = require('express');
const router = express.Router();
const projectController = require('../controller/projectController');

router.get('/jardin', projectController.jardin);
router.get('/gifGenerator', projectController.gif);
router.get('/relojesRonin', projectController.relojes);
router.get('/portfolio', projectController.portfolio);





module.exports = router;