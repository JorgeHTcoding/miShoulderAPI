const {Router} = require ("express")
const router = Router();
const cartaPreCtrl = require("../controller/presentacion.controller")

router.post("/cartaPre", cartaPreCtrl.postPresentacion);




module.exports = router;