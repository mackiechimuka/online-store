const express = require('express');
const router = express.Router();

const usersController = require('../controllers/users');

router.get('/',usersController.getAll);
router.post('/',usersController.addUser);

module.exports = router;