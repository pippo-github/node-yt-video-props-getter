const router = require("express").Router();
const {appController, controllerRestAPI} = require("../appController/routeController");

router.get("/",(req, res) => {
    appController(req, res);
});

router.get("/show_restAPI", async (req, res) => {
    controllerRestAPI(req, res);
});

module.exports = { router };