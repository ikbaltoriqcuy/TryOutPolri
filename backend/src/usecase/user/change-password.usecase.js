const changePassword = ({ userDB}) => {
  return async function putPassword(info) {
    const user = await userDB.getUserByEmail(info.email);
    
    if (user.rowCount === 0) {
      throw new Error("User does not exist!");
    }

    const bcrypt = require('bcrypt');
    const isValidPas = await bcrypt.compare(info.currentPassword, user.rows[0].password);

    if (!isValidPas) {
      throw new Error("Current Password Incorrect!");
    }

    const changePassword = await userDB.changePassword(info.email, info.newPassword)

    if (changePassword.rowCount > 0) {
       return {
        success: true, 
        message: 'Password updated successfully' 
       }
    } else {
      return { 
        success: false, 
        message: 'No user found with the provided Email' 
      };

    }
  };
};
module.exports = changePassword;
