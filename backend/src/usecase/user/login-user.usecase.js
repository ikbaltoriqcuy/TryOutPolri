const loginUser = ({
  userDB
}) => {
  return async function postLoginUser(info) {
    const user = await userDB.getUserByEmail(info.email);

    if (user.rowCount === 0) {
      throw new Error("User does not exist!");
    }
  
    const bcrypt = require('bcrypt');
    const isValidPas = await bcrypt.compare(info.password, user.password);

    if (isValidPas) {
      return user;
    } else {
      throw new Error("Incorrect Password!");
    }
  };
};
module.exports = loginUser;
