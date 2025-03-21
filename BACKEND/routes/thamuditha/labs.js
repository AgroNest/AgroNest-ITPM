const express = require('express');
const router = express.Router();
const Lab = require('../../models/vinuka/labAccount');

router.get('/', async (req, res) => {
  try {
    const labs = await Lab.find({}, { }); 
    res.json(labs);
  } catch (err) {
    res.status(500).json({ message: err.message }); 
  }
});

module.exports = router;
