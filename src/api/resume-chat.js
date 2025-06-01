// pages/api/resume-chat.js
import formidable from "formidable";
import fs from "fs";
import { QdrantClient } from "@qdrant/js-client-rest";
import { GoogleGenerativeAI } from "@google/generative-ai";
import pdf from "pdf-parse";

export const config = {
  api: {
    bodyParser: false,
  },
};

// Initialize Qdrant and Gemini (fill in your actual keys and URLs)
const QDRANT_URL = "https://your-qdrant-endpoint";
const QDRANT_API_KEY = "your-qdrant-api-key";
const GEMINI_API_KEY = "your-gemini-api-key";
const COLLECTION_NAME = "resume_chat_rag";

const qdrant = new QdrantClient({ url: QDRANT_URL, apiKey: QDRANT_API_KEY });
const gemini = new GoogleGenerativeAI(GEMINI_API_KEY);

async function extractText(buffer) {
  const data = await pdf(buffer);
  return data.text;
}

function splitIntoChunks(text, chunkSize = 100) {
  const words = text.split(/\s+/);
  const chunks = [];
  for (let i = 0; i < words.length; i += chunkSize) {
    chunks.push(words.slice(i, i + chunkSize).join(" "));
  }
  return chunks;
}

export default async function handler(req, res) {
  const form = formidable({ multiples: false });

  form.parse(req, async (err, fields, files) => {
    if (err) return res.status(500).json({ error: "Form parse error" });

    const file = files.pdf;
    const question = fields.question || "";

    if (!file || !question)
      return res.status(400).json({ error: "Missing inputs" });

    const pdfFile = Array.isArray(file) ? file[0] : file;
    const buffer = fs.readFileSync(pdfFile.filepath);
    const text = await extractText(buffer);
    const chunks = splitIntoChunks(text);

    // For now, simulate top 5 relevant chunks
    const mockResults = chunks.slice(0, 5);

    const prompt = `Use the following context to answer the question:\n\nContext:\n${mockResults.join(
      "\n\n"
    )}\n\nQuestion: ${question}`;

    try {
      const model = gemini.getGenerativeModel({ model: "gemini-1.5-flash" });
      const result = await model.generateContent(prompt);
      const response = await result.response;
      const answerText = response.text();
      res.status(200).json({ answer: answerText });
    } catch (e) {
      res.status(500).json({ error: "Gemini Error", details: e.message });
    }
  });
}
