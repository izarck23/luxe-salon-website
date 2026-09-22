import express from 'express';
import { db } from '../db.js';

export const reviewsRouter = express.Router();

// GET /api/reviews
reviewsRouter.get('/', (req, res) => {
  const result = db.getReviews();
  res.json(result);
});

// POST /api/reviews
reviewsRouter.post('/', (req, res) => {
  try {
    const { author, rating, service, text } = req.body;
    if (!author || !text) {
      return res.status(400).json({ error: 'Author name and review feedback are required.' });
    }
    const review = db.addReview({ author, rating, service, text });
    res.status(201).json({
      message: 'Thank you for sharing your experience! Your review has been posted.',
      review
    });
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});
