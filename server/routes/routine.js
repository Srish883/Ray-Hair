const express = require('express');
const router = express.Router();
const auth = require('../middleware/auth');
const { Routine } = require('../models');
const scheduler = require('../utils/scheduler');


router.post('/', auth, async (req, res) => {
  try {
    const { title, items } = req.body;
    let routine = await Routine.findOne({ where: { userId: req.user.id } });
    if (routine) {
      await routine.update({ title, items });
    } else {
      routine = await Routine.create({ userId: req.user.id, title, items });
    }
    scheduler.scheduleRoutineReminders(routine); // stub
    res.json(routine);
  } catch (err) {
    console.error(err);
    res.status(500).send('Server error');
  }
});

router.get('/', auth, async (req, res) => {
  try {
    const routine = await Routine.findOne({ where: { userId: req.user.id } });
    res.json(routine);
  } catch (err) { console.error(err); res.status(500).send('Server error'); }
});

module.exports = router;
