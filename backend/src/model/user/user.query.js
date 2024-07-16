const carData = ({ dbs }) => {
  return Object.freeze({
    getAllCars,
    getAllCarsForSale,
    getCarById,
    addCar,
    editCar,
    softDeleteCar,
    findBySerial
  });

  async function getAllUsers() {
    const connect = await dbs();
    const sql =
      "SELECT * FROM police_course";
    return connect.query(sql);
  }

  async function getUser(email, password) {
    const connect = await dbs();
    const sql = "SELECT * FROM police_course WHERE email = $1 AND password = $2" ;
    const params = [email, password];
    return connect.query(sql, params);
  }

  async function addUser(user) {
    const connect = await dbs();
    const { name, place_birth, date_birth, address, city, province, subdistrict, password, email, packet_id } = user;
    const sql = 
      "INSERT INTO User (name, place_birth, date_birth, address, city, province, subdistrict, password, email, packet_id) VALUES ( $1, $2, $3, $4, $5, $6, $7, $8, $9, $10) RETURNING *;";

    let hashedPassword = await encryptPassword(password);

    const params = [name, place_birth, date_birth, address, city, province, subdistrict, password, email, packet_id ];

    return connect.query(sql, params);
  }

};

module.exports = carData;
