const express = require('express');
const router = express.Router();
const eshomeController = require('../controller/eshomeController');

router.get('/', eshomeController.index);
router.get('/jardin', eshomeController.jardin);
router.get('/gifGenerator', eshomeController.gif);
router.get('/relojesRonin', eshomeController.relojes);
router.get('/portfolio', eshomeController.portfolio);
module.exports = router;