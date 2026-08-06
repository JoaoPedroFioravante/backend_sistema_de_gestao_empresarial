import express from 'express';
import ClientController from '../controllers/clientsController.js';
import errorTreatment from '../middlewares/errorTreatment.js';

const router = express.Router();
const controller = new ClientController();
router.get("/", controller.getAll);
router.get("/:id", controller.getOne);
router.patch("/:id", controller.patch);
router.post("/", controller.post);
router.delete("/:id", controller.remove);

export default router;