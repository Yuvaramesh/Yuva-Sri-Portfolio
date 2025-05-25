"use client";

const ResumeCardWithChat = () => {
  const chatWithResume = () => {
    window.open(
      "https://your-resume-chat-link.com", // Replace with your actual chatbot link
      "_blank"
    );
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-black">
      <div className="bg-gradient-to-br from-purple-700 via-fuchsia-800 to-blue-700 text-white rounded-2xl p-8 shadow-lg w-full max-w-xl">
        <h2 className="text-2xl font-semibold text-center mb-8">
          Discover How I Add Value To Your Team
        </h2>

        <div className="flex justify-center">
          <button
            onClick={chatWithResume}
            className="flex items-center justify-center gap-2 px-6 py-3 bg-white text-purple-900 font-semibold rounded-lg shadow hover:bg-purple-100 transition-all"
          >
            💬 Chat with My Resume
          </button>
        </div>
      </div>
    </div>
  );
};

export default ResumeCardWithChat;
