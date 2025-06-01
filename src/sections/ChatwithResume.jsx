import React, { useState } from "react";
import axios from "axios";

const MultiDocChat = () => {
  const [uploadedFiles, setUploadedFiles] = useState([]);
  const [question, setQuestion] = useState("");
  const [answer, setAnswer] = useState("");
  const [chatHistory, setChatHistory] = useState([]);
  const [loading, setLoading] = useState(false);

  const handleFileChange = (event) => {
    setUploadedFiles([...event.target.files]);
  };

  const handleUpload = async () => {
    const formData = new FormData();
    uploadedFiles.forEach((file) => {
      formData.append("files", file);
    });

    try {
      setLoading(true);
      const response = await axios.post("/api/upload", formData);
      alert(
        `Uploaded ${response.data.chunkCount} chunks from ${uploadedFiles.length} documents.`
      );
    } catch (error) {
      alert("Error uploading files: " + error.message);
    } finally {
      setLoading(false);
    }
  };

  const handleQuestionSubmit = async () => {
    try {
      setLoading(true);
      const response = await axios.post("/api/ask", { question });
      setAnswer(response.data.answer);
      const newHistory = [
        ...chatHistory,
        { question, answer: response.data.answer },
      ];
      setChatHistory(newHistory);
    } catch (error) {
      alert("Error generating answer: " + error.message);
    } finally {
      setLoading(false);
    }
  };

  const handleDownloadHistory = () => {
    const historyText = chatHistory
      .map(
        (chat, idx) =>
          `Q${idx + 1}: ${chat.question}\nA${idx + 1}: ${chat.answer}`
      )
      .join("\n\n");

    const blob = new Blob([historyText], { type: "text/plain" });
    const link = document.createElement("a");
    link.href = URL.createObjectURL(blob);
    link.download = "chat_history.txt";
    link.click();
  };

  return (
    <div className="p-6 max-w-4xl mx-auto">
      <h1 className="text-2xl font-bold mb-4">
        📚 Upload & Chat with Your Documents
      </h1>

      <div className="mb-4">
        <input
          type="file"
          multiple
          accept=".pdf,.docx,.txt"
          onChange={handleFileChange}
          className="mb-2"
        />
        <button
          onClick={handleUpload}
          className="bg-blue-600 text-white px-4 py-2 rounded"
          disabled={loading || uploadedFiles.length === 0}
        >
          {loading ? "Uploading..." : "Upload Files"}
        </button>
      </div>

      <hr className="my-6" />

      <div>
        <h2 className="text-xl font-semibold mb-2">
          💬 Ask a Question About Your Documents
        </h2>
        <input
          type="text"
          placeholder="Type your question here..."
          value={question}
          onChange={(e) => setQuestion(e.target.value)}
          className="border px-3 py-2 w-full rounded mb-2"
        />
        <button
          onClick={handleQuestionSubmit}
          className="bg-green-600 text-white px-4 py-2 rounded"
          disabled={!question || loading}
        >
          {loading ? "Generating..." : "Ask"}
        </button>
      </div>

      {answer && (
        <div className="mt-6">
          <h3 className="text-lg font-medium">🧠 Answer:</h3>
          <p className="bg-gray-100 p-4 rounded mt-2">{answer}</p>
        </div>
      )}

      {chatHistory.length > 0 && (
        <div className="mt-6">
          <button
            onClick={handleDownloadHistory}
            className="bg-gray-700 text-white px-4 py-2 rounded"
          >
            📄 Download Chat History as TXT
          </button>
        </div>
      )}
    </div>
  );
};

export default MultiDocChat;
