const Router = require("express");
const router = new Router();
const hotDogController = require("../controller/hotdog.controller");

router.post("/", hotDogController.createHotDog);
router.get("/", hotDogController.getHotDogs);
router.get("/:id", hotDogController.getOneHotDog);
router.put("/", hotDogController.updateHotDog);
router.delete("/:id", hotDogController.deleteHotDog);

module.exports = router;
