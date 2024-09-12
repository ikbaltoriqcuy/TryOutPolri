  const provinceController = require("./get-province.controller");
  const getCityController = require("./get-city.controller");
  const subdistrictController = require("./get-subdistrict.controller");
  const { getAllProvinceUsecase, getCityByIdUsecase,  getSubdistrictByIdUsecase} = require("../../usecase/address/index");
  
  const getProvinceController = provinceController({getAllProvinceUsecase});
  const getCityByIdController = getCityController({getCityByIdUsecase});
  const getSubdistrictController = subdistrictController({getSubdistrictByIdUsecase});

  const controller = Object.freeze({
    getProvinceController,
    getCityByIdController,
    getSubdistrictController
  });

  module.exports = controller;
  
  module.exports = {
    getProvinceController,
    getCityByIdController,
    getSubdistrictController
  };
