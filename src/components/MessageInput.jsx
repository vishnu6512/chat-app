import { useState } from 'react';
import { useSelector } from 'react-redux';
import socket from '../utils/socket';

const MessageInput = () => {
  // State to store the current message being typed
  const [message, setMessage] = useState('');
  
  // Get current username from Redux store
  const username = useSelector((state) => state.auth.username);

  // Function to send a message
  const handleSend = () => {
    // Only send if message is not empty and user is logged in
    if (message.trim() && username) {
      // Emit message through socket
      socket.emit('sendMessage', message);
      // Clear input field
      setMessage('');
    }
  };

  return (
    <div className="flex flex-col md:flex-row gap-2">
      {/* Message input field */}
      <input
        type="text"
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        onKeyPress={(e) => {
          // Send message when Enter key is pressed
          if (e.key === 'Enter') {
            handleSend();
          }
        }}
        placeholder="Type a message..."
        className="flex-1 rounded-lg border border-gray-300 px-4 py-2 focus:border-blue-500 focus:outline-none md:mr-2"
      />
      
      {/* Send button */}
      <button
        onClick={handleSend}
        className="rounded-lg bg-blue-600 px-6 py-2 font-semibold text-white transition hover:bg-blue-700"
      >
        Send
      </button>
    </div>
  );
};

export default MessageInput;