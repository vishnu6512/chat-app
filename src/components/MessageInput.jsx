import { useState } from 'react';
import { useSelector } from 'react-redux';
import socket from '../utils/socket';

const MessageInput = () => {
  const [message, setMessage] = useState('');
  const username = useSelector((state) => state.auth.username);

  const handleSend = () => {
    if (message.trim() && username) {
      socket.emit('sendMessage', message);
      setMessage('');
    }
  };

  return (
    <div className="flex gap-2">
      <input
        type="text"
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        onKeyPress={(e) => e.key === 'Enter' && handleSend()}
        placeholder="Type a message..."
        className="flex-1 rounded-lg border border-gray-300 px-4 py-2 focus:border-blue-500 focus:outline-none"
      />
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