import { useState, useRef, useEffect } from "react";
import { Bot, X, Send } from "lucide-react";

const ChatBot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    {
      role: "assistant",
      content: "Hi! I'm the club assistant. How can I help you today?",
    },
  ]);
  const [input, setInput] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages]);

  const sendMessage = async () => {
    if (!input.trim() || isLoading) return;

    const userMessage = { role: "user", content: input };
    setMessages((prev) => [...prev, userMessage]);
    const currentInput = input;
    setInput("");
    setIsLoading(true);

    try {
      const conversationHistory = messages
        .map((m) => `${m.role === "user" ? "User" : "Assistant"}: ${m.content}`)
        .join("\n");

      const response = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ 
          input: currentInput, 
          conversationHistory 
        }),
      });

      if (!response.ok) {
        if (response.status === 429) {
          throw new Error("API rate limit exceeded. Please wait a moment and try again.");
        }
        const errText = await response.text().catch(() => "");
        throw new Error(`API error: ${response.status} ${errText}`);
      }

      const data = await response.json();
      const assistantText = data?.message;

      if (assistantText) {
        const assistantMessage = { role: "assistant", content: assistantText };
        setMessages((prev) => [...prev, assistantMessage]);
      } else {
        throw new Error("Invalid response format from server");
      }
    } catch (error) {
      console.error("Chat error:", error);
      let errorMessage = "Sorry, I encountered an error. Please try again.";
      
      if (error instanceof Error) {
        if (error.message.includes("rate limit")) {
          errorMessage = error.message;
        } else if (error.message.includes("fetch")) {
          errorMessage = "Network error. Please check your connection.";
        }
      }

      const assistantMessage = { role: "assistant", content: errorMessage };
      setMessages((prev) => [...prev, assistantMessage]);
    } finally {
      setIsLoading(false);
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      sendMessage();
    }
  };

  return (
    <div className="pointer-events-none fixed inset-0 z-50 flex items-end justify-end p-4">
      {/* Floating Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="pointer-events-auto fixed bottom-6 right-6 h-14 w-14 rounded-full bg-blue-600 hover:bg-blue-700 text-white shadow-lg z-50 flex items-center justify-center transition-all transform hover:scale-110"
        aria-label="Toggle chat"
      >
        {isOpen ? <X size={24} /> : <Bot size={24} />}
      </button>

      {/* Chat Window */}
      {isOpen && (
        <div className="pointer-events-auto fixed bottom-24 right-6 w-96 h-[500px] bg-white rounded-lg shadow-2xl flex flex-col z-50 border border-gray-200">
          {/* Header */}
          <div className="bg-blue-600 text-white p-4 rounded-t-lg">
            <h3 className="font-bold text-lg">Club Assistant</h3>
            <p className="text-sm text-blue-100">Ask me anything about our club!</p>
          </div>

          {/* Messages */}
          <div
            ref={scrollRef}
            className="flex-1 overflow-y-auto p-4 space-y-4 bg-gray-50"
          >
            {messages.map((message, index) => (
              <div
                key={index}
                className={`flex ${
                  message.role === "user" ? "justify-end" : "justify-start"
                }`}
              >
                <div
                  className={`max-w-[80%] p-3 rounded-lg ${
                    message.role === "user"
                      ? "bg-blue-600 text-white"
                      : "bg-white text-gray-800 border border-gray-200"
                  }`}
                >
                  {message.content}
                </div>
              </div>
            ))}
            {isLoading && (
              <div className="flex justify-start">
                <div className="bg-white text-gray-800 p-3 rounded-lg border border-gray-200">
                  <div className="flex space-x-2">
                    <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"></div>
                    <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>
                    <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* Input */}
          <div className="p-4 border-t border-gray-200 bg-white rounded-b-lg">
            <div className="flex gap-2">
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyPress={handleKeyPress}
                placeholder="Type your message..."
                disabled={isLoading}
                className="flex-1 px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent disabled:bg-gray-100 disabled:cursor-not-allowed"
              />
              <button
                onClick={sendMessage}
                disabled={isLoading || !input.trim()}
                className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 disabled:bg-gray-300 disabled:cursor-not-allowed transition-colors"
              >
                <Send size={20} />
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ChatBot;