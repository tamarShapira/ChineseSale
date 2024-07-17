const router = require('express').Router();
const user = require('../controllers/user.controller');

router.post('/addUser', user.addUser);
router.get('/getUserByName/:name', user.getUserByName);
router.get('/getAllUsers', user.getAllUsers);

module.exports = router;