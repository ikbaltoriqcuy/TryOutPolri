
const makeDb = require("../../config/db_config");
const db = require("./user.query");

const userDB = makeDb ({ db });

module.exports = userDB;
