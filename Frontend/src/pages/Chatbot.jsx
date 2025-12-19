import React, { useState } from 'react';

const Chatbot = () => {
  const [messages, setMessages] = useState([
    { text: 'Hello! How can I assist you today?', sender: 'bot' }
  ]);
  const [inputMessage, setInputMessage] = useState('');

  const handleSendMessage = (e) => {
    e.preventDefault();
    if (inputMessage.trim()) {
      setMessages([...messages, { text: inputMessage, sender: 'user' }]);
      setInputMessage('');
      setTimeout(() => {
        setMessages((prevMessages) => [
          ...prevMessages,
          { text: 'I am here to help!', sender: 'bot' }
        ]);
      }, 1000);
    }
  };

  return (
    <div className="h-screen bg-gray-100 p-2 flex flex-col justify-center items-center">
      <div className="bg-white p-4 rounded-lg shadow-lg w-25 sm:w-250 h-180 flex flex-col justify-between">
        <div className="text-2xl font-bold text-center mb-4 text-blue-700">Chatbot</div>
        
        {/* Messages Section */}
        <div className=" overflow-y-scroll mb-4 p-4 bg-gray-50 rounded-lg">
          {messages.map((msg, index) => (
            <div
              key={index}
              className={`mb-3 ${msg.sender === 'bot' ? 'text-blue-700' : 'text-gray-900'} `}
            >
              <div className={`p-2 rounded-lg ${msg.sender === 'bot' ? 'bg-blue-200' : 'bg-gray-200'}`}>
                {msg.text}
              </div>
            </div>
          ))}
        </div>

        {/* Input Area */}
        <form onSubmit={handleSendMessage} className="flex items-center">
          <input
            type="text"
            className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Type your message..."
            value={inputMessage}
            onChange={(e) => setInputMessage(e.target.value)}
          />
          <button
            type="submit"
            className="ml-2 px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 focus:outline-none"
          >
            Send
          </button>
        </form>
      </div>
    </div>
  );
};

export default Chatbot;
