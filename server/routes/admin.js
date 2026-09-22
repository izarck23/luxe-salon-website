import express from 'express';
import { db } from '../db.js';
import { getUserIdFromReq } from './auth.js';

export const adminRouter = express.Router();

// Middleware: Admin check
function requireAdmin(req, res, next) {
  const userId = getUserIdFromReq(req);
  if (!userId) {
    return res.status(401).json({ error: 'Authentication required' });
  }
  const user = db.findUserById(userId);
  if (!user || user.role !== 'admin') {
    return res.status(403).json({ error: 'Administrator privileges required' });
  }
  req.adminUser = user;
  next();
}

// GET /api/admin/overview - Consolidated admin dashboard data
adminRouter.get('/overview', (req, res) => {
  try {
    const analytics = db.getAnalytics();
    const appointments = db.getAllAppointments();
    const payments = db.getPayments();
    const notifications = db.getNotifications();
    const config = db.getConfig();
    const services = db.getServices();
    const staff = db.getStaff();

    res.json({
      analytics,
      appointments,
      payments,
      notifications,
      config,
      services,
      staff
    });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// GET /api/admin/appointments - List all appointments
adminRouter.get('/appointments', (req, res) => {
  try {
    const appointments = db.getAllAppointments();
    res.json({ appointments });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// PUT /api/admin/appointments/:id/status - Update appointment status (confirmed, completed, cancelled)
adminRouter.put('/appointments/:id/status', (req, res) => {
  try {
    const { id } = req.params;
    const { status, notes } = req.body;
    if (!status) {
      return res.status(400).json({ error: 'Status is required' });
    }

    const updated = db.updateAppointmentStatus(id, status, notes);
    res.json({
      message: `Appointment status updated to ${status}`,
      appointment: updated
    });
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

// DELETE /api/admin/appointments/:id - Delete an appointment
adminRouter.delete('/appointments/:id', (req, res) => {
  try {
    const { id } = req.params;
    const deleted = db.deleteAppointment(id);
    res.json({
      message: 'Appointment record deleted successfully',
      appointment: deleted
    });
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});
