const {Router} = require ("express")
const router = Router();
const eventosCtrl = require("../controller/eventos.controller")


router.get("/", eventosCtrl.getStart);

router.get("/eventos",eventosCtrl.getEventos)

router.post("/eventos",eventosCtrl.postEventos)

router.put("/eventos",eventosCtrl.putEventos)

router.delete("/eventos",eventosCtrl.deleteEventos)

module.exports = router;