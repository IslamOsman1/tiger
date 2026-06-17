import { Router } from 'express';
import { getServices, createService, updateService, deleteService } from '../controllers/serviceController.js';
import { protect } from '../middleware/auth.js';

const router = Router();
router.get('/', getServices);
router.post('/', protect, createService);
router.put('/:id', protect, updateService);
router.delete('/:id', protect, deleteService);
export default router;
