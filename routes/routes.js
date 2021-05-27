const UserController = require('../controllers/userController');
const Router = require("express");

const router = new Router();

router.get('/database', UserController.getAllUsers)
router.post('/form', UserController.createUser)
router.get('/database/:id', UserController.getUserById)
router.delete('/database/:id', UserController.deleteUserById)
router.put('/database/:id/:column/:edit', UserController.updateUserById)
router.get('/database10', UserController.getTen)
router.get('/databasecount/:count', UserController.getSome)
router.get('/databasecounter', UserController.getCounter)
module.exports = router;