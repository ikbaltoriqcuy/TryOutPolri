const router = require("express").Router();
const {
    postUserController,
    getUserByIdController,
    getUserByEmailController,
    loginController,
    changePasswordController,
    updateUserController
} = require("../controller/user/index");
const makeExpressCallback = require("../express-callback/index")


// router.get('/users', makeExpressCallback(getAllUsersController));
router.post('/change-password', makeExpressCallback(changePasswordController));
router.post('/login', makeExpressCallback(loginController));
router.get('/get-user-by-email', makeExpressCallback(getUserByEmailController));
router.get('/get-user', makeExpressCallback(getUserByIdController));
router.post('/update-user', makeExpressCallback(updateUserController));
router.post('/register', makeExpressCallback(postUserController));

module.exports = router;