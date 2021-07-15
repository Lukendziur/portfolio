const express = require('express');
const router = express.Router();
const eshomeController = require('../controller/eshomeController');

router.get('/', eshomeController.index);

module.exports = router;