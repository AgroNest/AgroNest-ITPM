const express = require("express");
const router = express.Router();
const FarmerReport = require("../../models/thamuditha/farmerReport");
const Reply = require("../../models/thamuditha/ReplyFarmer");t


router.get("/farmers", async (req, res) => {
  try {
    const farmers = await FarmerReport.find({ category: "Farmer" });
    res.json(farmers);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

router.get("/farmers/:id/reply", async (req, res) => {
  try {
    const farmerId = req.params.id;
    const reply = await Reply.findOne({ farmerId });
    res.json(reply);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

router.post("/farmers/:id/reply", async (req, res) => {
  try {
    const farmerId = req.params.id;
    const { replyText } = req.body;

    const reply = new Reply({
      farmerId,
      replyText,
    });

    await reply.save();

    res.status(201).json(reply);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});


router.put('/farmers/:id/status', async (req, res) => {
  try {
    const { id } = req.params;
    const updatedFarmer = await FarmerReport.findByIdAndUpdate(
      id,
      { status: 'Resolved' },
      { new: true } 
    );
    res.json(updatedFarmer);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

router.get('/replies/:farmerId', async (req, res) => {
  try {
    const { farmerId } = req.params;
    const replies = await Reply.find({ farmerId });
    res.json(replies);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

router.delete('/replies/:replyId', async (req, res) => {
  try {
    const { replyId } = req.params;
    await Reply.findByIdAndDelete(replyId);
    res.json({ message: 'Reply deleted successfully' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

module.exports = router;
