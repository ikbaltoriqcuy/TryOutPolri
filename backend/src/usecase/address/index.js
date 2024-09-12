const addressDB = require("../../model/address/index");

const getAllProvince = require("./get-province.usecase");
const getCityById = require("./get-city.usecase");
const getSubdistrictById = require("./get-subsdistrict.usecase");

const getAllProvinceUsecase = getAllProvince({ addressDB });
const getCityByIdUsecase = getCityById({ addressDB });
const getSubdistrictByIdUsecase = getSubdistrictById({ addressDB });

const addressService = Object.freeze({
    getAllProvinceUsecase,
    getCityByIdUsecase,
    getSubdistrictByIdUsecase
});

module.exports = addressService;
module.exports = { 
    getAllProvinceUsecase,
    getCityByIdUsecase,
    getSubdistrictByIdUsecase
 };