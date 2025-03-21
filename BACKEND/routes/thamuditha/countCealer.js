const express = require('express');
const router = express.Router();
const Dealer = require('../../models/udana/dealer'); 
const Farmer = require('../../models/vinuka/Farmer');

router.get('/countDealer', async (req, res) => {
  try {
    const count = await Dealer.countDocuments();
    res.json({ count });
  } catch (error) {
    console.error("Error fetching dealers count:", error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

module.exports = router;

router.get('/countFarmer', async (req, res) => {
    try {
      const count = await Farmer.countDocuments();
      res.json({ count });
    } catch (error) {
      console.error("Error fetching farmers count:", error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  });
  
  module.exports = router;