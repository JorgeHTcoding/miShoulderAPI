const {Router} = require ("express")
const router = Router();
const psicoCtrl = require("../controller/psico.controller")



router.get("/psico",psicoCtrl.getPsico)
router.post("/psicoFiltro",psicoCtrl.getFiltroPsico)
router.get("/animo", psicoCtrl.getEstado)


module.exports = router;