import express from 'express';
import { db, verifyPassword } from '../db.js';

export const authRouter = express.Router();

// Simple bearer/session token implementation
const activeSessions = new Map(); // token -> userId

export function getUserIdFromReq(req) {
  const authHeader = req.headers.authorization;
  if (!authHeader || !authHeader.startsWith('Bearer ')) {
    return null;
  }
  const token = authHeader.split(' ')[1];
  return activeSessions.get(token) || null;
}

// POST /api/auth/register
authRouter.post('/register', (req, res) => {
  try {
    const { name, email, phone, password, preferredStylist, hairType, skinType } = req.body;
    if (!name || !email || !password) {
      return res.status(400).json({ error: 'Name, email, and password are required.' });
    }
    if (password.length < 6) {
      return res.status(400).json({ error: 'Password must be at least 6 characters long.' });
    }

    const user = db.createUser({ name, email, phone, password, preferredStylist, hairType, skinType });
    const token = 'tok_' + Math.random().toString(36).substring(2) + Date.now().toString(36);
    activeSessions.set(token, user.id);

    res.status(201).json({
      message: 'Account created successfully',
      user,
      token
    });
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

// POST /api/auth/login
authRouter.post('/login', (req, res) => {
  try {
    const { email, password } = req.body;
    if (!email || !password) {
      return res.status(400).json({ error: 'Email and password are required.' });
    }

    const user = db.findUserByEmail(email);
    if (!user) {
      return res.status(401).json({ error: 'Invalid email or password.' });
    }

    const isValid = verifyPassword(password, user.passwordHash, user.passwordSalt);
    if (!isValid) {
      return res.status(401).json({ error: 'Invalid email or password.' });
    }

    const token = 'tok_' + Math.random().toString(36).substring(2) + Date.now().toString(36);
    activeSessions.set(token, user.id);

    res.json({
      message: 'Signed in successfully',
      user: db.sanitizeUser(user),
      token
    });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// GET /api/auth/me
authRouter.get('/me', (req, res) => {
  const userId = getUserIdFromReq(req);
  if (!userId) {
    return res.status(401).json({ error: 'Not authenticated' });
  }
  const user = db.findUserById(userId);
  if (!user) {
    return res.status(404).json({ error: 'User not found' });
  }
  res.json({ user: db.sanitizeUser(user) });
});

// PUT /api/auth/profile
authRouter.put('/profile', (req, res) => {
  const userId = getUserIdFromReq(req);
  if (!userId) {
    return res.status(401).json({ error: 'Not authenticated' });
  }
  try {
    const updated = db.updateUserProfile(userId, req.body);
    res.json({ message: 'Profile updated successfully', user: updated });
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

// POST /api/auth/forgot-password
authRouter.post('/forgot-password', (req, res) => {
  const { email } = req.body;
  if (!email) {
    return res.status(400).json({ error: 'Email address is required.' });
  }
  const user = db.findUserByEmail(email);
  if (!user) {
    return res.status(404).json({ error: 'No account found with this email address.' });
  }
  // Generate temporary recovery code
  const resetCode = Math.floor(100000 + Math.random() * 900000).toString();
  res.json({
    message: `Password reset code generated. For demonstration, your verification code is: ${resetCode}`,
    resetCode
  });
});

// POST /api/auth/reset-password
authRouter.post('/reset-password', (req, res) => {
  const { email, newPassword } = req.body;
  if (!email || !newPassword) {
    return res.status(400).json({ error: 'Email and new password are required.' });
  }
  try {
    db.resetUserPassword(email, newPassword);
    res.json({ message: 'Password updated successfully. You may now sign in with your new password.' });
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

// GET /api/auth/demo-accounts
authRouter.get('/demo-accounts', (req, res) => {
  res.json({
    demoUser: {
      email: 'demo@luxesalon.com',
      password: 'password123',
      name: 'Isabella Moreau'
    }
  });
});
