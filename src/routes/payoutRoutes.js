import e from 'express'
import validatorPatchSchemaPayout from '../middlewares/validatorPatchSchemaPayout.js';
import validatorPostSchemaPayout from '../middlewares/validatorPostSchemaPayout.js';
import PayoutController from '../controllers/PayoutController.js';
const router = e.Router();
let controller =  new PayoutController(); 

router.get("/", controller.getAll);
router.get("/:id", controller.getOne);
router.post("/" ,validatorPostSchemaPayout, controller.post);
router.patch("/:id", validatorPatchSchemaPayout, controller.patch);
router.delete("/:id", controller.delete);

export default router;