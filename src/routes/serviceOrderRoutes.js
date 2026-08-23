import express from 'express';

const router = express.Router();

router.get("/", getAllServiceOrder);
router.get("/:id", getOneServiceOrder);
router.patch("/:id", patchServiceOrder);
router.post("/", addServiceOrder);
router.delete("/:id", deleteServiceOrder);

export default router;