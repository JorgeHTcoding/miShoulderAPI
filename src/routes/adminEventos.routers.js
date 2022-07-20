const {Router} = require ("express")
const router = Router();
const adminEventosCtrl = require("../controller/adminEventos.controller")


// router.get("/", admisnEventosCtrl.getStart);

// router.get("/eventos",admisnEventosCtrl.getEventoProf)

router.get("/gestion-evento",adminEventosCtrl.getGEvento)

router.put("/gestion-evento",adminEventosCtrl.putGEventos)

router.delete("/gestion-evento",adminEventosCtrl.deleteGEventos)

module.exports = router;