const express = require('express');
const router = express.Router();
const Dealer = require('../../models/udana/dealer'); 

router.get('/viewdealers', async (req, res) => {
  try {
    const dealers = await Dealer.find(); 
    res.json(dealers);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});


router.delete('/viewdealers/delete/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const deletedDealer = await Dealer.findByIdAndDelete(id);
    if (!deletedDealer) {
      return res.status(404).json({ message: 'Dealer not found' });
    }
    res.json({ message: 'Dealer deleted successfully' });
  } catch (error) {
    console.error('Error deleting dealer:', error);
    res.status(500).json({ message: 'Internal server error' });
  }
});
module.exports = router;
