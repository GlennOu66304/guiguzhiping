import express from "express";

const router = express.Router();

// data model import
import userController from "./controller.js"; //need to add extension js, other wise will cause the error

// test router:private
router.post("/test", (req, res) => {
  res.json({ msg: "auth route connected" });
});
// register
router.post("/register", userController.register);
router.post("/login", userController.login);
router.get("/:id", userController.getAUser);
//update User
router.post("/:id", userController.updateUser);
// delete the User
router.delete("/:id", userController.deletetUser);

export default router;
