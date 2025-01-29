import { useSelector } from 'react-redux';

const MessageList = () => {
  // Select state from Redux
  const messages = useSelector((state) => state.chat.messages);
  const currentUser = useSelector((state) => state.auth.username);

  return (
    <div className="chat-container space-y-4 p-4 md:p-0 overflow-y-auto">
      {messages.map((msg, index) => (
        <div
          key={index}
          className={`flex ${
            msg.sender === currentUser ? 'justify-end' : 'justify-start'
          }`}
        >
          <div
            className={`max-w-[70%] rounded-lg px-4 py-2 ${
              msg.sender === currentUser
                ? 'bg-blue-600 text-white'
                : 'bg-gray-100 text-gray-800'
            }`}
          >
            {/* Sender */}
            <div
              className={`mb-1 text-xs font-medium ${
                msg.sender === currentUser ? 'text-blue-100' : 'text-gray-500'
              }`}
            >
              {msg.sender === currentUser ? `` : msg.sender}
            </div>

            {/* Message Content */}
            <div className="text-sm">{msg.text}</div>

            {/* Timestamp */}
            <div
              className={`mt-1 text-xs ${
                msg.sender === currentUser ? 'text-blue-100' : 'text-gray-400'
              }`}
            >
              {new Date(msg.timestamp).toLocaleTimeString([], {
                hour: '2-digit',
                minute: '2-digit',
              })}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default MessageList;
