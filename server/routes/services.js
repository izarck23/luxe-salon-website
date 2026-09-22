import express from 'express';
import { db } from '../db.js';

export const servicesRouter = express.Router();

// GET /api/services
servicesRouter.get('/', (req, res) => {
  const { category } = req.query;
  const services = db.getServices(category);
  res.json({ services });
});

// GET /api/services/:id
servicesRouter.get('/:id', (req, res) => {
  const service = db.getServiceById(req.params.id);
  if (!service) {
    return res.status(404).json({ error: 'Service not found' });
  }
  res.json({ service });
});
