const {Router} = require ("express")
const router = Router();
const verpacCtrl = require("../controller/verPaciente.controller")



router.get("/veruser",verpacCtrl.getPacientes)

router.put("/veruser2",verpacCtrl.putPacientes)

// router.put("/cartarechazo",verpacCtrl.putNegacionPac)

router.put("/cambioestadoneg",verpacCtrl.putEstadoPac)

module.exports = router;