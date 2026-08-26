import e from 'express'

const router = e.Router();
let controller;

router.get("/", controller.get);
router.get("/:id", controller.getOne);
router.post("/", controller.post);
router.patch("/:id", controller.patch);
router.delete("/:id", controller.delete);

export default router;