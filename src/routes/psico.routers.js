const {Router} = require ("express")
const router = Router();
const psicoCtrl = require("../controller/psico.controller")



router.get("/psico",psicoCtrl.getPsico)



module.exports = router;