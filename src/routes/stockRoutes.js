import express from 'express';

const router = express.Router();

router.get("/", getAllStockController);
router.get("/:id", getOneStockController);
router.patch("/:id", patchOneStockController);
router.post("/", addStockController);
router.delete("/:id", deleteStockController);

export default router;

