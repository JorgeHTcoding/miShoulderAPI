const {Router} = require ("express")
const router = Router();
const userCtrl = require("../controller/user.controller")



router.get("/user",userCtrl.getUser)

router.post("/user",userCtrl.postUser)

router.put("/user",userCtrl.putUser)

router.delete("/user",userCtrl.deleteUser)


module.exports = router;