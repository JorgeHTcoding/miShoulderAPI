const {Router} = require ("express")
const router = Router();
const chatCtrl = require("../controller/chat.controller")



router.get("/chat",chatCtrl.getMensaje)

router.post("/chat",chatCtrl.postMensaje)

router.get("/conversacion",chatCtrl.getConversacion)

// router.get("/filtro", chatCtrl.getEventos)

//Cartas Presentacion

router.get("/presentacion",chatCtrl.getPresentacion)

router.post("/presentacion",chatCtrl.postPresentacion)

module.exports = router;