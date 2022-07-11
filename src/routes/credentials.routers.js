
const {Router} = require ("express")
const router = Router();
const credentianlsCtrl = require("../controller/credentials.controller")



router.post("/registro",credentianlsCtrl.postUser)

router.post("/login",credentianlsCtrl.getLogin)

module.exports = router;