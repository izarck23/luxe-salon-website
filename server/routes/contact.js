import express from 'express';
import { db } from '../db.js';

export const contactRouter = express.Router();

// POST /api/contact
contactRouter.post('/', (req, res) => {
  try {
    const { name, email, phone, subject, message } = req.body;
    if (!name || !email || !message) {
      return res.status(400).json({ error: 'Name, email, and message are required.' });
    }
    const record = db.addContactMessage({ name, email, phone, subject, message });
    res.status(201).json({
      message: 'Thank you for contacting Luxe Salon. Our concierge team will respond within 24 hours.',
      contactId: record.id
    });
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

// POST /api/newsletter
contactRouter.post('/newsletter', (req, res) => {
  const { email } = req.body;
  if (!email || !email.includes('@')) {
    return res.status(400).json({ error: 'A valid email address is required.' });
  }
  res.json({
    message: 'Welcome to the Luxe Salon Circle. You have been subscribed to seasonal care guides and exclusive private events.'
  });
});
