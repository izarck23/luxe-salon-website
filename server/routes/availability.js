import express from 'express';
import { db } from '../db.js';

export const availabilityRouter = express.Router();

// GET /api/availability?date=2026-08-28&staffId=stf-1&duration=60
availabilityRouter.get('/', (req, res) => {
  const { date, staffId = 'any', duration = 60 } = req.query;
  if (!date) {
    return res.status(400).json({ error: 'Date parameter (YYYY-MM-DD) is required.' });
  }

  const result = db.getAvailableSlots(date, staffId, parseInt(duration, 10));
  res.json(result);
});
