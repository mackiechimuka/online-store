const express = require('express');
const router = express.Router();

const usersController = require('../controllers/users');

router.get('/',usersController.getAll);
router.post('/',usersController.addUser);
router.patch('/:id',usersController.updateUser)
router.delete('/:id',usersController.deleteUser)

module.exports = router;