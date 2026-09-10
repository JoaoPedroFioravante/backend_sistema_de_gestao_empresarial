import express from "express";
import StockController from '../controllers/StockController.js';
import validatorPostSchemaStock from "../middlewares/validatorPostSchemaStock.js"
import validatorPatchSchemaStock from "../middlewares/validatorPatchSchemaStock.js"
const router = express.Router();
const controller = new StockController();
router.get("/", controller.getAll);
router.get("/:id", controller.getOne);
router.patch("/:id", validatorPatchSchemaStock, controller.patch);
router.post("/", validatorPostSchemaStock, controller.post);
router.delete("/:id", controller.delete);

export default router;
