const UserController = require("../controllers/userController");
const router = require("express").Router();

router.get("/", UserController.getUser);
router.post("/", UserController.addUser);
router.put("/:id", UserController.updateUser);
router.delete("/:id", UserController.deleteUser);

module.exports = router;
