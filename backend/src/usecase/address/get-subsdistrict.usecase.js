const getSubDistrictById = ({ addressDB }) => {
    return async function getSubDistrictById(data) {
      const result = await addressDB.getSubDistrict(data.provinceId, data.cityId);
      return result.rows;
    };
  };
  
module.exports = getSubDistrictById;
  