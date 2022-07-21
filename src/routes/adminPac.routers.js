const {Router} = require("express")
const router = Router();
const pacCtrl = require("../controller/adminPac.controller");

router.get("/pac",pacCtrl.getPac)
router.get("/pro",pacCtrl.getPro)
router.get("/mostrar",pacCtrl.mostrarSoloAceptadas)

router.put("/pac",pacCtrl.postPac)
router.put("/pin",pacCtrl.postPac)
router.put("/delete",pacCtrl.eliminarPaciente)




router.delete("/pac",pacCtrl.deletePac)


module.exports = router