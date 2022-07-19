const {Router} = require("express")
const router = Router();
const pacCtrl = require("../controller/adminPac.controller");

router.get("/pac",pacCtrl.getPac)
router.get("/pro",pacCtrl.getPro)

router.put("/pac",pacCtrl.postPac)
router.put("/pin",pacCtrl.postPac)




router.delete("/pac",pacCtrl.deletePac)


module.exports = router