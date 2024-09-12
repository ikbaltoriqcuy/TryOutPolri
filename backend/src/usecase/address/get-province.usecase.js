const getAllProvince = ({ addressDB }) => {
    return async function getAllProvince() {
      const result = await addressDB.getProvince();
      return result.rows;
    };
  };
  
module.exports = getAllProvince;
  