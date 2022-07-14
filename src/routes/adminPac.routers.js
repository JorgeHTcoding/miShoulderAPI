const {Router} = require("express")
const router = Router();
const pacCtrl = require("../controller/adminPac.controller");

router.get("/pac",pacCtrl.getPac)

router.put("/pac",pacCtrl.postPac)

router.delete("/pac",pacCtrl.deletePac)


module.exports = router