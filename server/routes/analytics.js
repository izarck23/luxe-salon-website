import express from 'express';
import { db } from '../db.js';

export const analyticsRouter = express.Router();

// GET /api/analytics - Comprehensive Salon Analytics
analyticsRouter.get('/', (req, res) => {
  try {
    const analytics = db.getAnalytics();
    res.json(analytics);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});
