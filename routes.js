const express = require("express");
const app = new express();
const router = express.Router();
const helpers = require("./helpers");
const controler = require("./controler");

router.route("/").get(controler.getToDoList).post(controler.addNewToDo);
router
  .route("/:id")
  .delete(controler.deleteOneToDo)
  .put(controler.editOneToDo)
  .patch(controler.checkOneToDo);

module.exports = router;
