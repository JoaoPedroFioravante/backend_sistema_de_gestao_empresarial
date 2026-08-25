import express from "express";
import ClientController from "../controllers/clientsController.js";
import validatorPostSchema from "../middlewares/validatorPostSchemaClient.js";
import validatorPatchSchema from "../middlewares/validatorPatchSchemaClient.js";

const router = express.Router();
const controller = new ClientController();
router.get("/", controller.getAll);
router.get("/:id", controller.getOne);
router.patch("/:id", validatorPatchSchema, controller.patch);
router.post("/", validatorPostSchema, controller.post);
router.delete("/:id", controller.remove);

export default router;
