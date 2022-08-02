const express = require("express");
const {
  getCookies,
  setCookies,
  deleteCookies,
} = require("../controllers/cookies.controller");
const cookiesRouter = express.Router();

cookiesRouter.route("/get").get(getCookies);
cookiesRouter.route("/set").get(setCookies);
cookiesRouter.route("/del").get(deleteCookies);

module.exports = cookiesRouter;
