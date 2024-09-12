const {
  addUserUseCase,
  getUserByIdUsecase,
  getUserByEmailUsecase,
  loginUsecase,
  changePasswordUsecase,
  updateUserUsecase
} = require("../../usecase/user");

const addUserController = require("./add-user.controller");
const fetchUserDetailsController = require("./get-user-details.controller");
const fetchUserDetailsByEmailController = require("./get-user-details-by-email.controller");
const loginPath = require("./login-user.controller");
const changePasswordPath = require("./change-password.controller");
const updateUser = require("./edit-user.controller");

const postUserController = addUserController({ addUserUseCase });
const getUserByIdController = fetchUserDetailsController({ getUserByIdUsecase });
const getUserByEmailController = fetchUserDetailsByEmailController ({ getUserByEmailUsecase });
const loginController = loginPath({loginUsecase});
const changePasswordController = changePasswordPath({ changePasswordUsecase });
const updateUserController = updateUser({ updateUserUsecase });

const controller = Object.freeze({
  postUserController,
  getUserByIdController,
  getUserByEmailController,
  loginController,
  changePasswordController,
  updateUserController
});

module.exports = controller;

module.exports = {
  postUserController,
  getUserByIdController,
  getUserByEmailController,
  loginController,
  changePasswordController,
  updateUserController
};
