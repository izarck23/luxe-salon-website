import express from 'express';
import { db } from '../db.js';

export const configRouter = express.Router();

// GET /api/config - Get Salon commercial settings
configRouter.get('/', (req, res) => {
  try {
    const config = db.getConfig();
    res.json({ config });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// PUT /api/config - Update Salon commercial settings
configRouter.put('/', (req, res) => {
  try {
    const updates = req.body;
    const updatedConfig = db.updateConfig(updates);
    res.json({
      message: 'Salon configuration updated successfully!',
      config: updatedConfig
    });
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});
