"use client";
import React, { useState } from "react";

export default function RAGChatApp() {
  const [uploadedFiles, setUploadedFiles] = useState([]);
  const [uploadStatus, setUploadStatus] = useState("");
  const [question, setQuestion] = useState("");
  const [answer, setAnswer] = useState("");
  const [chatHistory, setChatHistory] = useState([]);
  const [loading, setLoading] = useState(false);

  const handleFileChange = (e) => {
    setUploadedFiles([...e.target.files]);
  };

  const handleUpload = async () => {
    if (!uploadedFiles.length) return;
    setUploadStatus("Uploading...");
    const formData = new FormData();
    uploadedFiles.forEach((file) => formData.append("files", file));

    try {
      const response = await axios.post("/api/upload", formData);
      setUploadStatus(response.data.message);
    } catch (error) {
      setUploadStatus(`Error: ${error.response?.data?.error || error.message}`);
    }
  };

  const handleAsk = async () => {
    if (!question.trim()) return;
    setLoading(true);
    try {
      const res = await axios.post("/api/ask", { question });
      const generatedAnswer = res.data.answer;
      setAnswer(generatedAnswer);
      const newHistory = [
        ...chatHistory,
        { question, answer: generatedAnswer },
      ];
      setChatHistory(newHistory);
    } catch (err) {
      setAnswer(`Error: ${err.message}`);
    } finally {
      setLoading(false);
    }
  };

  const downloadChat = () => {
    const text = chatHistory
      .map(
        (item, i) => `Q${i + 1}: ${item.question}\nA${i + 1}: ${item.answer}\n`
      )
      .join("\n");
    const blob = new Blob([text], { type: "text/plain" });
    const href = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = href;
    a.download = "chat_history.txt";
    a.click();
    URL.revokeObjectURL(href);
  };

  return (
    <main className="max-w-4xl mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-4">
        📚 Upload & Chat with Your Documents
      </h1>

      {/* Upload Section */}
      <div className="mb-6">
        <label className="block font-semibold mb-2">
          Upload PDF, DOCX, TXT files
        </label>
        <input
          type="file"
          accept=".pdf,.docx,.txt"
          multiple
          onChange={handleFileChange}
          className="mb-2"
        />
        <button
          onClick={handleUpload}
          className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
        >
          Upload
        </button>
        <p className="text-sm mt-2">{uploadStatus}</p>
      </div>

      <hr className="my-6 border-gray-300" />

      {/* Chat Section */}
      <h2 className="text-xl font-semibold mb-2">
        💬 Ask a Question About Your Documents
      </h2>
      <input
        type="text"
        value={question}
        onChange={(e) => setQuestion(e.target.value)}
        placeholder="Type your question..."
        className="w-full p-2 border rounded mb-4"
      />
      <button
        onClick={handleAsk}
        className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700"
        disabled={loading}
      >
        {loading ? "Loading..." : "Ask"}
      </button>

      {answer && (
        <div className="mt-6 p-4 bg-gray-100 rounded shadow">
          <h3 className="text-lg font-semibold mb-2">🧠 Answer:</h3>
          <p>{answer}</p>
        </div>
      )}

      {/* Chat History & Download */}
      {chatHistory.length > 0 && (
        <div className="mt-8">
          <h3 className="text-lg font-semibold mb-2">Chat History:</h3>
          <pre className="bg-gray-100 p-4 rounded overflow-x-auto max-h-60">
            {chatHistory.map(
              (item, i) =>
                `Q${i + 1}: ${item.question}\nA${i + 1}: ${item.answer}\n\n`
            )}
          </pre>
          <button
            onClick={downloadChat}
            className="mt-4 bg-purple-600 text-white px-4 py-2 rounded hover:bg-purple-700"
          >
            📄 Download Chat History as TXT
          </button>
        </div>
      )}
    </main>
  );
}
