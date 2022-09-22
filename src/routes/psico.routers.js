const {Router} = require ("express")
const router = Router();
const psicoCtrl = require("../controller/psico.controller")



router.get("/psico",psicoCtrl.getPsico)
router.post("/psicoFiltro",psicoCtrl.getFiltroPsico)
console.log("entramos al router")
router.get("/animo", psicoCtrl.getEstado)


module.exports = router;