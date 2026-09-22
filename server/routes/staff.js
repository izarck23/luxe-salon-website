import express from 'express';
import { db } from '../db.js';

export const staffRouter = express.Router();

// GET /api/staff
staffRouter.get('/', (req, res) => {
  const staff = db.getStaff();
  res.json({ staff });
});

// GET /api/staff/:id
staffRouter.get('/:id', (req, res) => {
  const member = db.getStaffById(req.params.id);
  if (!member) {
    return res.status(404).json({ error: 'Staff member not found' });
  }
  res.json({ staff: member });
});
