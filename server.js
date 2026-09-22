import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';

import { authRouter } from './server/routes/auth.js';
import { servicesRouter } from './server/routes/services.js';
import { staffRouter } from './server/routes/staff.js';
import { appointmentsRouter } from './server/routes/appointments.js';
import { availabilityRouter } from './server/routes/availability.js';
import { reviewsRouter } from './server/routes/reviews.js';
import { blogRouter } from './server/routes/blog.js';
import { contactRouter } from './server/routes/contact.js';
import { paymentsRouter } from './server/routes/payments.js';
import { notificationsRouter } from './server/routes/notifications.js';
import { analyticsRouter } from './server/routes/analytics.js';
import { configRouter } from './server/routes/config.js';
import { adminRouter } from './server/routes/admin.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const PORT = 3000;

// Body parser
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// CORS & Security Headers
app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
  if (req.method === 'OPTIONS') {
    return res.sendStatus(204);
  }
  next();
});

// Health check endpoint
app.get('/api/health', (req, res) => {
  res.json({ status: 'ok', time: new Date().toISOString() });
});

// API Routes
app.use('/api/auth', authRouter);
app.use('/api/services', servicesRouter);
app.use('/api/staff', staffRouter);
app.use('/api/appointments', appointmentsRouter);
app.use('/api/availability', availabilityRouter);
app.use('/api/reviews', reviewsRouter);
app.use('/api/blog', blogRouter);
app.use('/api/contact', contactRouter);
app.use('/api/payments', paymentsRouter);
app.use('/api/notifications', notificationsRouter);
app.use('/api/analytics', analyticsRouter);
app.use('/api/config', configRouter);
app.use('/api/admin', adminRouter);

// Explicit 404 for unhandled API routes (ensures API always returns JSON, never HTML fallback)
app.all('/api/*', (req, res) => {
  res.status(404).json({ error: `API route ${req.method} ${req.originalUrl} not found` });
});

// Serve static assets from project root and images directory
app.use('/images', express.static(path.join(__dirname, 'images')));
app.use(express.static(__dirname));

// Clean URL router for static pages
const pages = ['services', 'about', 'booking', 'gallery', 'blog', 'contact', 'login', 'register'];
pages.forEach(p => {
  app.get(`/${p}`, (req, res) => {
    res.sendFile(path.join(__dirname, `${p}.html`));
  });
});

// Client-side fallback to index.html for page routing
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
});

// Error handling middleware
app.use((err, req, res, next) => {
  console.error('Server error:', err);
  if (req.path.startsWith('/api/')) {
    res.status(500).json({ error: err.message || 'Internal Server Error' });
  } else {
    res.status(500).send('Internal Server Error');
  }
});

app.listen(PORT, '0.0.0.0', () => {
  console.log(`Luxe Salon full-stack server running on http://0.0.0.0:${PORT}`);
});
