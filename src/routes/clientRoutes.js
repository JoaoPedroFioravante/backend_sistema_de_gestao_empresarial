import express from 'express';

const router = express.Router();

router.get("/", clientsController.getAll());
router.get("/:id", clientsController.getOne());
router.patch("/:id", clientsController.patch());
router.post("/", clientsController.post());
router.delete("/:id", clientController.remove());

export default router;