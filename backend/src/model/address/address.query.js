const addressData = ({ dbs }) => {
  return Object.freeze({
    getProvince,
    getCity, 
    getSubDistrict
  });

  async function getProvince() {
    const connect = await dbs();
    const sql = "SELECT * FROM province";
    return connect.query(sql);
  }

  async function getCity(provinceCode) {
    const connect = await dbs();
    const sql = "SELECT * FROM kabupaten_kota WHERE split_part(id::text, '.', 1) = $1";
    const params = [provinceCode];
    return connect.query(sql, params);
  }

  async function getSubDistrict(provinceCode, cityCode) {
    const connect = await dbs();
    const sql = "SELECT * FROM kecamatan WHERE split_part(id::text, '.',1) = $1 AND split_part(id::text,'.',2) = $2" ;
    const params = [provinceCode, cityCode];
    return connect.query(sql, params);
  }
};

module.exports = addressData;
