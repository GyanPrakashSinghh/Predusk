import React, { useState } from 'react';
import axios from 'axios';

const Chatbot = () => {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState('');

  const handleSend = async () => {
    if (input.trim()) {
      const newMessage = { text: input, isUser: true };
      setMessages((prevMessages) => [...prevMessages, newMessage]);
      setInput('');

      try {
        // Make API call to GroqCloud
        const response = await axios.post(
          'https://api.groqcloud.com/v1/completions', // Confirm the correct endpoint
          {
            prompt: input,
            max_tokens: 150,
          },
          {
            headers: {
              Authorization: `Bearer YOUR_GROQ_API_KEY`, // Confirm the API key
            },
          }
        );

        console.log('API response:', response.data); // Debug line

        if (response.data && response.data.choices && response.data.choices.length > 0) {
          const botMessage = {
            text: response.data.choices[0].text.trim(),
            isUser: false,
          };
          setMessages((prevMessages) => [...prevMessages, botMessage]);
        } else {
          console.error('Invalid response structure', response.data);
          const errorMessage = {
            text: 'Sorry, something went wrong with the response structure.',
            isUser: false,
          };
          setMessages((prevMessages) => [...prevMessages, errorMessage]);
        }
      } catch (error) {
        console.error('Error fetching response:', error);
        const errorMessage = {
          text: 'Sorry, something went wrong. Please try again later.',
          isUser: false,
        };
        setMessages((prevMessages) => [...prevMessages, errorMessage]);
      }
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      handleSend();
    }
  };

  return (
    <div className="fixed bottom-5 right-5 w-full max-w-lg p-4 bg-gray-800 rounded-lg shadow-lg md:w-80 md:bottom-5 md:right-5">
      <div className="mb-4 max-h-64 overflow-y-auto">
        {messages.map((msg, index) => (
          <div
            key={index}
            className={`mb-2 p-2 rounded ${
              msg.isUser
                ? 'bg-blue-500 text-white self-end'
                : 'bg-gray-200 text-black self-start'
            }`}
          >
            {msg.text}
          </div>
        ))}
      </div>
      <div className="flex">
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyPress={handleKeyPress}
          placeholder="Type your message..."
          className="flex-grow p-2 border border-gray-300 rounded-l-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <button
          onClick={handleSend}
          className="p-2 bg-blue-500 text-white rounded-r-md hover:bg-blue-600 transition-colors duration-300"
        >
          Send
        </button>
      </div>
    </div>
  );
};

export default Chatbot;
