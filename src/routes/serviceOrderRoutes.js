import express from "express";
import ServiceOrderController from "../controllers/ServiceOrderControler.js";
import validatorPostSchemaServiceOrder from "../middlewares/validatorPostSchemaServiceOrder.js";
import validatorPatchSchemaClient from "../middlewares/validatorPatchSchemaClient.js";

const router = express.Router();
const controller = new ServiceOrderController();

router.get("/", controller.getAll);
router.get("/:id", controller.getOne);
router.patch("/:id", validatorPatchSchemaClient, controller.patch);
router.post("/", validatorPostSchemaServiceOrder, controller.post);
router.delete("/:id", controller.delete);

export default router;
