const getUserByIdUsecase = ({ userDB }) => {
    return async function getUserById(info) {
        const result = await userDB.getUserById(info.id);     
        return result.rows;
      };
  };
  module.exports = getUserByIdUsecase;
  