const express = require('express');
const router = express.Router();
const auth = require('../middleware/auth');
const { User, HairProfile } = require('../models');
const ingredientChecker = require('../utils/ingredientChecker');

router.get('/', auth, async (req, res) => {
  try {
    const user = await User.findByPk(req.user.id, { attributes: { exclude: ['password'] } });
    const profile = await HairProfile.findOne({ where: { userId: req.user.id } });
    res.json({ user, profile });
  } catch (err) { console.error(err); res.status(500).send('Server error'); }
});

router.post('/hair', auth, async (req, res) => {
  try {
    const [profile, created] = await HairProfile.findOrCreate({
      where: { userId: req.user.id },
      defaults: { userId: req.user.id, ...req.body }
    });
    if (!created) {
      await profile.update(req.body);
    }
    res.json(profile);
  } catch (err) { console.error(err); res.status(500).send('Server error'); }
});

router.post('/push-token', auth, async (req, res) => {
  try {
    const { expoPushToken } = req.body;
    await User.update({ expoPushToken }, { where: { id: req.user.id } });
    res.json({ msg: 'Token saved' });
  } catch (err) { console.error(err); res.status(500).send('Server error'); }
});

router.post('/check-ingredients', auth, async (req, res) => {
  try {
    const { productA, productB } = req.body;
    const warnings = ingredientChecker(productA, productB);
    res.json({ warnings });
  } catch (err) { console.error(err); res.status(500).send('Server error'); }
});

module.exports = router;
