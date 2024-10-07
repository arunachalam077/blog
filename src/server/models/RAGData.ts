import mongoose from 'mongoose';

const ragDataSchema = new mongoose.Schema({
  question: { type: String, required: true },
  answer: { type: String, required: true },
  createdAt: { type: Date, default: Date.now },
});

export default mongoose.model('RAGData', ragDataSchema);