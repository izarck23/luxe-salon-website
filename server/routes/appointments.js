import express from 'express';
import { db } from '../db.js';
import { getUserIdFromReq } from './auth.js';

export const appointmentsRouter = express.Router();

// GET /api/appointments (user's appointment list)
appointmentsRouter.get('/', (req, res) => {
  const userId = getUserIdFromReq(req);
  if (!userId) {
    return res.status(401).json({ error: 'Please sign in to view your appointments.' });
  }
  const appointments = db.getAppointments(userId);
  res.json({ appointments });
});

// GET /api/appointments/lookup?reference=LX-84920&contact=demo@luxesalon.com
appointmentsRouter.get('/lookup', (req, res) => {
  const { reference, contact } = req.query;
  if (!reference) {
    return res.status(400).json({ error: 'Booking reference is required.' });
  }

  const appointment = db.getAppointmentByRef(reference, contact);
  if (!appointment) {
    return res.status(404).json({ error: 'No matching appointment found with the provided reference and contact information.' });
  }

  res.json({ appointment });
});

// POST /api/appointments (create a booking)
appointmentsRouter.post('/', (req, res) => {
  try {
    const userId = getUserIdFromReq(req);
    const {
      serviceId,
      staffId,
      date,
      time,
      clientName,
      clientEmail,
      clientPhone,
      addOns,
      notes,
      price,
      duration
    } = req.body;

    if (!serviceId || !date || !time || !clientName || !clientEmail || !clientPhone) {
      return res.status(400).json({ error: 'Service, date, time, name, email, and phone are required to reserve.' });
    }

    const appointment = db.createAppointment({
      userId,
      serviceId,
      staffId,
      date,
      time,
      clientName,
      clientEmail,
      clientPhone,
      addOns: addOns || [],
      notes: notes || '',
      price,
      duration
    });

    res.status(201).json({
      message: 'Appointment confirmed successfully!',
      appointment
    });
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

// PUT /api/appointments/:reference/reschedule
appointmentsRouter.put('/:reference/reschedule', (req, res) => {
  try {
    const { reference } = req.params;
    const { newDate, newTime, newStaffId } = req.body;

    if (!newDate || !newTime) {
      return res.status(400).json({ error: 'New date and time are required to reschedule.' });
    }

    const updated = db.rescheduleAppointment(reference, newDate, newTime, newStaffId);
    res.json({
      message: `Appointment ${reference} has been rescheduled to ${newDate} at ${newTime}.`,
      appointment: updated
    });
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

// PUT /api/appointments/:reference/cancel
appointmentsRouter.put('/:reference/cancel', (req, res) => {
  try {
    const { reference } = req.params;
    const { reason } = req.body || {};

    const updated = db.cancelAppointment(reference, reason);
    res.json({
      message: `Appointment ${reference} has been cancelled.`,
      appointment: updated
    });
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});
