const Router = require("express");
const router = new Router();
const hotDogController = require("../controller/hotdog.controller");

router.post("/hotDog", hotDogController.createHotDog);
router.get("/hotDog", hotDogController.getHotDogs);
router.get("/hotDog/:id", hotDogController.getOneHotDog);
router.put("/hotDog", hotDogController.updateHotDog);
router.delete("/hotDog/:id", hotDogController.deleteHotDog);

module.exports = router;
