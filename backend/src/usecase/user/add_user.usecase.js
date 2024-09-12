const addUser = ({ userDB }) => {
    return async function postUser(info) {

      const userExists = await userDB.getUserByEmail(info.user.email);
  
      if (userExists.rowCount !== 0) {
        const result = {
          msg: "User already exists"
        };
        return result;
      } 

      const addUser = await userDB.addUser(info.user);  
      return addUser.rows
    };
  };
  module.exports = addUser;
  