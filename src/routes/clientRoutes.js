import express from 'express';

const router = express.Router();

router.get("/", getAllClientsController);
router.get("/:id", getOneClientController);
router.patch("/:id", patchClientController);
router.post("/", addClientController);
router.delete("/:id", deleteClientController);

export default router;