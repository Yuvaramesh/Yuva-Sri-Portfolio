"use client";
import { useState } from "react";

export default function ResumeChat() {
  const [pdfFile, setPdfFile] = (useState < File) | (null > null);
  const [question, setQuestion] = useState("");
  const [answer, setAnswer] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async () => {
    if (!pdfFile || !question) return;

    const formData = new FormData();
    formData.append("pdf", pdfFile);
    formData.append("question", question);
    setLoading(true);

    const res = await fetch("/api/resume-chat", {
      method: "POST",
      body: formData,
    });

    const data = await res.json();
    setAnswer(data.answer || "No answer received.");
    setLoading(false);
  };

  return (
    <div className="max-w-2xl mx-auto p-6 bg-gray-900 text-white rounded-lg mt-10">
      <h1 className="text-3xl font-bold text-center mb-6">
        👣 Unveiling Yuva Sri Ramesh 🎭
      </h1>

      <input
        type="file"
        accept="application/pdf"
        onChange={(e) => setPdfFile(e.target.files?.[0] || null)}
        className="w-full mb-4 bg-white text-black p-2 rounded"
      />

      <input
        type="text"
        value={question}
        onChange={(e) => setQuestion(e.target.value)}
        placeholder="💬 Ask a question about the resume"
        className="w-full border px-3 py-2 rounded text-black"
      />

      <button
        onClick={handleSubmit}
        className="bg-blue-600 hover:bg-blue-700 mt-4 px-4 py-2 rounded text-white w-full"
        disabled={loading}
      >
        {loading ? "Processing..." : "Ask Gemini"}
      </button>

      {answer && (
        <div className="mt-6 p-4 bg-gray-800 rounded">
          <h2 className="text-xl font-semibold mb-2">Answer:</h2>
          <p>{answer}</p>
        </div>
      )}
    </div>
  );
}
