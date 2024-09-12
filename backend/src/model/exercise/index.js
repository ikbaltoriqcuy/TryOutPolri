
const makeDb = require("../../config/db_config");
const db = require("./exercise.query");

const exercise_categoriesDB = makeDb ({ db });

module.exports = exercise_categoriesDB;
