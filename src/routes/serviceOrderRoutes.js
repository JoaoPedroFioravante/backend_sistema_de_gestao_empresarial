import express from 'express';

const router = express.Router();

router.get("/", getAllServiceOrderController);
router.get("/:id", getOneServiceOrderController);
router.patch("/:id", patchServiceOrderController);
router.post("/", addServiceOrderController);
router.delete("/:id", deleteServiceOrderController);

export default router;