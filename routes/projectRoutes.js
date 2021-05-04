const express = require('express');
const router = express.Router();
const projectController = require('../controller/projectController');

router.get('/', projectController.project);

module.exports = router;