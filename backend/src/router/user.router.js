const router = require("express").Router();
const makeExpressCallback = require("../express-callback/index")

router.get('/users', makeExpressCallback());