import express from 'express';
import { db } from '../db.js';

export const blogRouter = express.Router();

// GET /api/blog
blogRouter.get('/', (req, res) => {
  const posts = db.getBlogPosts();
  res.json({ posts });
});

// GET /api/blog/:slug
blogRouter.get('/:slug', (req, res) => {
  const post = db.getBlogPostBySlug(req.params.slug);
  if (!post) {
    return res.status(404).json({ error: 'Article not found' });
  }
  res.json({ post });
});
