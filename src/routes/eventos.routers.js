const {Router} = require ("express")
const router = Router();
const eventosCtrl = require("../controller/eventos.controller")


router.get("/", eventosCtrl.getStart);
//notocar abajo, es de alvaro
router.get("/eventos",eventosCtrl.getEventoProf)

router.get("/eventosUser",eventosCtrl.getEventosUser)

router.post("/eventos",eventosCtrl.postEventos)

// router.put("/eventos",eventosCtrl.putEventos)

// router.delete("/eventos",eventosCtrl.deleteEventos)

module.exports = router;