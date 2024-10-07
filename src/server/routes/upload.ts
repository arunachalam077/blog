import express from 'express';
import multer from 'multer';
import path from 'path';
import fs from 'fs';
import csv from 'csv-parser';
import RAGData from '../models/RAGData';

const router = express.Router();
const upload = multer({ dest: 'uploads/' });

router.post('/', upload.single('file'), async (req, res) => {
  if (!req.file) {
    return res.status(400).json({ message: 'No file uploaded' });
  }

  const results: any[] = [];

  fs.createReadStream(req.file.path)
    .pipe(csv())
    .on('data', (data) => results.push(data))
    .on('end', async () => {
      try {
        await RAGData.insertMany(results);
        fs.unlinkSync(req.file!.path); // Delete the uploaded file
        res.json({ message: 'File processed successfully', count: results.length });
      } catch (error) {
        res.status(500).json({ message: 'Error processing file' });
      }
    });
});

export default router;