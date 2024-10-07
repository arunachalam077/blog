import express from 'express';
import RAGData from '../models/RAGData';

const router = express.Router();

router.get('/message-count', async (req, res) => {
  try {
    const count = await RAGData.countDocuments();
    res.json({ count });
  } catch (error) {
    res.status(500).json({ message: 'Server error' });
  }
});

export default router;