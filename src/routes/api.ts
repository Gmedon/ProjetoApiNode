import { Router } from 'express';

import * as ApiController from '../controllers/apiController';

const router = Router();

router.get("/todo", ApiController.all);
router.post("/todo", ApiController.add);
router.put("/todo/:id", ApiController.update);
router.delete("/todo/:id", ApiController.remove)

export default router;