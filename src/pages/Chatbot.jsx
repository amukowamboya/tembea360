export default function Chatbot() {
    const messages = [
      {
        from: "user",
        text: "Show me youth-run eco-lodges near Mount Elgon.",
      },
      {
        from: "ai",
        text: "Here are 3 eco-lodges near Mount Elgon run by local youth:\n\n• Elgon Nest Homestay\n• Sabaot Eco Village\n• Mount View Cottages",
      },
      {
        from: "user",
        text: "Any cultural sites worth visiting nearby?",
      },
      {
        from: "ai",
        text: "Yes! You can visit the Chepkitale Cultural Grounds and the Luhya Community Museum for immersive experiences.",
      },
      {
        from: "user",
        text: "How do I get there from Eldoret?",
      },
      {
        from: "ai",
        text: "You can take a matatu or shuttle to Kitale, then a local boda or guide will take you up to Mt. Elgon region — it's about a 3-hour trip.",
      },
    ];
  
    return (
      <div className="min-h-screen bg-gray-50 p-6">
        <h2 className="text-3xl font-bold text-center text-green-700 mb-6">
          🤖 AI Concierge (Demo)
        </h2>
  
        <div className="bg-white max-w-2xl mx-auto rounded-xl shadow p-6 space-y-4 border border-gray-200">
          <div className="space-y-4 text-left">
            {messages.map((msg, i) => (
              <div
                key={i}
                className={`p-3 rounded-lg max-w-[80%] whitespace-pre-line ${
                  msg.from === "user"
                    ? "bg-blue-100 text-left"
                    : "bg-green-100 text-left ml-auto"
                }`}
              >
                <strong>{msg.from === "user" ? "You" : "AI"}:</strong> {msg.text}
              </div>
            ))}
          </div>
  
          <div className="text-center text-sm text-gray-500 pt-6 italic">
            * Live AI integration coming soon *
          </div>
        </div>
      </div>
    );
  }
  