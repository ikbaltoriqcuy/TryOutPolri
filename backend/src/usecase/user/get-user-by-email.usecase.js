const getUserByEmailUsecase = ({ userDB }) => {
    return async function getUserByEmail(info) {
        const result = await userDB.getUserByEmail(info.email);     
        return result.rows;
      };
  };
  module.exports = getUserByEmailUsecase;
  