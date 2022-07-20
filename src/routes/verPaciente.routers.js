const {Router} = require ("express")
const router = Router();
const verpacCtrl = require("../controller/verPaciente.controller")



router.get("/veruser",verpacCtrl.getPacientes)

router.put("/veruser",verpacCtrl.putPacientes)

module.exports = router;