const getCityById = ({ addressDB }) => {
    return async function getCityById(data) {
      const result = await addressDB.getCity(data.provinceId);
      return result.rows;
    };
  };
  
module.exports = getCityById;
  