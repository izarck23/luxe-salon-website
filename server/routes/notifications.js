import express from 'express';
import { db } from '../db.js';
import { getUserIdFromReq } from './auth.js';

export const notificationsRouter = express.Router();

// GET /api/notifications - List notifications (for current user or admin)
notificationsRouter.get('/', (req, res) => {
  try {
    const userId = getUserIdFromReq(req);
    const { appointmentReference, type } = req.query;

    let user = null;
    if (userId) {
      user = db.findUserById(userId);
    }

    const query = {};
    if (appointmentReference) query.appointmentReference = appointmentReference;
    if (type) query.type = type;

    if (user && user.role !== 'admin') {
      query.recipientEmail = user.email;
    }

    const notifications = db.getNotifications(query);
    res.json({ notifications });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// POST /api/notifications/send - Send direct custom customer notification
notificationsRouter.post('/send', (req, res) => {
  try {
    const { recipientName, recipientEmail, recipientPhone, appointmentReference, title, body, channel } = req.body;

    if (!recipientEmail && !recipientPhone) {
      return res.status(400).json({ error: 'Recipient email or phone number is required.' });
    }
    if (!body || !body.trim()) {
      return res.status(400).json({ error: 'Message body cannot be empty.' });
    }

    const notif = db.addNotification({
      appointmentReference: appointmentReference || null,
      recipientName: recipientName || 'Valued Client',
      recipientEmail: (recipientEmail || '').trim().toLowerCase(),
      recipientPhone: (recipientPhone || '').trim(),
      type: 'custom_direct',
      channel: channel || 'email',
      title: title || 'Luxe Salon Concierge Message',
      body: body.trim(),
      status: 'delivered'
    });

    res.status(201).json({
      message: 'Notification sent successfully!',
      notification: notif
    });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// POST /api/notifications/test-trigger - Trigger standard notification scenarios
notificationsRouter.post('/test-trigger', (req, res) => {
  try {
    const { type, appointmentReference, recipientEmail, recipientPhone, recipientName } = req.body;

    let apt = null;
    if (appointmentReference) {
      apt = db.getAppointmentByRef(appointmentReference);
    }

    if (!apt) {
      // Mock sample appointment for testing
      apt = {
        reference: appointmentReference || 'LX-SAMPLE',
        clientName: recipientName || 'Sample Guest',
        clientEmail: recipientEmail || 'guest@example.com',
        clientPhone: recipientPhone || '+1 (555) 019-2834',
        serviceName: 'Precision Haircut & Signature Blowout',
        staffName: 'Elena Rostova',
        date: new Date(Date.now() + 86400000 * 2).toISOString().split('T')[0],
        time: '14:00',
        price: 85,
        depositAmount: 25.5,
        balanceDue: 59.5
      };
    }

    db.dispatchNotification(type || 'booking_confirmation', {
      appointment: apt,
      alertType: 'Test Scenario Simulation'
    });

    const recent = db.getNotifications({ appointmentReference: apt.reference });

    res.json({
      message: `Triggered notification scenario '${type || 'booking_confirmation'}' successfully!`,
      recent
    });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});
