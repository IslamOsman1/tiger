import { Router } from 'express';
import { getDashboardConfig } from '../controllers/publicController.js';

const router = Router();

router.get('/dashboard-config', getDashboardConfig);

export default router;
