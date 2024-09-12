const updateUserByIdUsecase = ({ userDB }) => {
    return async function updateUserByIdUsecase(info) {
        const result = await userDB.updateUser(info.user);     
        return result.rows;
      };
  };
  module.exports = updateUserByIdUsecase;
  