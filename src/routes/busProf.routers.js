const {Router} = require("express")
const router = Router();
const profCtrl = require("../controller/busProf.controller");

router.get("/prof",profCtrl.getProf)

module.exports = router