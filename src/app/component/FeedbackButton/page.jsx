'use client';

import { useState } from "react";
import { MessageSquare, X, Send } from "lucide-react";

export default function FeedbackButton() {
  const [isOpen, setIsOpen] = useState(false);
  const [message, setMessage] = useState("");
  const [email, setEmail] = useState("");
  const [isSending, setIsSending] = useState(false);
  const [isSent, setIsSent] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSending(true);

    try {
      const response = await fetch("/api/feedback", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ message, email }),
      });

      if (response.ok) {
        setIsSent(true);
        setMessage("");
        setEmail("");
        setTimeout(() => {
          setIsSent(false);
          setIsOpen(false);
        }, 3000);
      }
    } catch (error) {
      console.error("Error sending feedback:", error);
    } finally {
      setIsSending(false);
    }
  };

  return (
    <div className="fixed bottom-16 right-6 z-50">
      {isOpen ? (
        <div className="bg-white dark:bg-gray-900 rounded-lg shadow-lg p-4 w-80 border border-gray-200 dark:border-gray-700 transition-colors duration-300">
          <div className="flex justify-between items-center mb-3">
            <h3 className="font-semibold text-lg text-cyan-700 dark:text-cyan-400">
              Share Your Thoughts
            </h3>
            <button
              onClick={() => setIsOpen(false)}
              className="text-gray-500 dark:text-gray-400 cursor-pointer hover:text-cyan-600 dark:hover:text-cyan-400 p-1"
              aria-label="Close feedback form"
            >
              <X size={18} />
            </button>
          </div>

          {isSent ? (
            <div className="text-green-600 dark:text-green-400 py-8 text-center">
              <p className="font-medium mb-2">Thank you for your feedback!</p>
              <p className="text-sm text-gray-600 dark:text-gray-400">We appreciate your input.</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit}>
              <div className="mb-4">
                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1"
                >
                  How can we improve?
                </label>
                <textarea
                  id="message"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  required
                  rows={4}
                  className="w-full px-3 py-2 border border-gray-300 dark:border-gray-700 rounded-md bg-white dark:bg-gray-800 text-gray-800 dark:text-gray-200 focus:outline-none focus:ring-2 focus:ring-cyan-500"
                  placeholder="Share your experience, suggestions, or report any issues..."
                />
              </div>

              <div className="mb-4">
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1"
                >
                  Your Email{" "}
                  <span className="text-xs font-normal text-gray-500 dark:text-gray-400">
                    (optional)
                  </span>
                </label>
                <input
                  type="email"
                  id="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full px-3 py-2 border border-gray-300 dark:border-gray-700 rounded-md bg-white dark:bg-gray-800 text-gray-800 dark:text-gray-200 focus:outline-none focus:ring-2 focus:ring-cyan-500"
                  placeholder="your@email.com"
                />
              </div>
              <button
                type="submit"
                disabled={isSending || !message}
                className="w-full px-4 py-2 cursor-pointer rounded-md text-white font-medium transition-colors duration-300 ease-in-out 
                bg-gradient-to-r from-cyan-500 to-cyan-600
                hover:brightness-110 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-cyan-400 
                disabled:opacity-50 disabled:cursor-not-allowed 
                flex items-center justify-center"
              >
                {isSending ? (
                  "Sending..."
                ) : (
                  <>
                    <Send size={16} className="mr-2" />
                    Send Feedback
                  </>
                )}
              </button>
            </form>
          )}
        </div>
      ) : (
        <button
          onClick={() => setIsOpen(true)}
          className="bg-cyan-600 hover:bg-cyan-700 text-white rounded-full p-3 shadow-lg transition-all duration-200 hover:scale-110 flex items-center"
          aria-label="Send feedback"
        >
          <MessageSquare size={20} className="mr-1" />
          <span className="text-sm font-medium mr-1">Feedback</span>
        </button>
      )}
    </div>
  );
}
