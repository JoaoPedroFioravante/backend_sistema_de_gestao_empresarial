import express from "express";

const router = express.Router();

router.get("/", controller.getAll);
router.get("/:id", controller.getOne);
router.patch("/:id", controller.patch);
router.post("/", controller.post);
router.delete("/:id", controller.delete);

export default router;
