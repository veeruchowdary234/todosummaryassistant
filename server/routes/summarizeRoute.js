import express from 'express';
import { summarizeAndPostToSlack } from '../controllers/summaryController.js';

const router = express.Router();

router.post('/', summarizeAndPostToSlack);

export default router;