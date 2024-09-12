const userDB = require("../../model/user/index");
const {
  userEntity,
  userLoginEntity,
  userUpdateEntity,
  changePasswordEntity
} = require("../../entities/users/index");
// const { jwtGenerate, comparePassword } = require("../../utils/index");

const addUser = require("./add_user.usecase");
const getUser = require("./get-user.usecase");
const getUserByemail = require("./get-user-by-email.usecase");
const login = require("./login-user.usecase")
const changePassword = require("./change-password.usecase");
const updateUser = require("./update-user.usecase");

const addUserUseCase = addUser({ userDB });
const getUserByIdUsecase = getUser({ userDB });
const getUserByEmailUsecase = getUserByemail( { userDB });
const loginUsecase = login({userDB});
const changePasswordUsecase = changePassword({userDB});
const updateUserUsecase = updateUser({userDB});

const userServices = Object.freeze({
  addUserUseCase,
  getUserByIdUsecase,
  getUserByEmailUsecase,
  loginUsecase,
  changePasswordUsecase,
  updateUserUsecase
});

module.exports = userServices;

module.exports = {
  addUserUseCase,
  getUserByIdUsecase,
  getUserByEmailUsecase,
  loginUsecase,
  changePasswordUsecase,
  updateUserUsecase
};
