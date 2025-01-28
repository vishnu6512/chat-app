import { useSelector } from 'react-redux';

const MessageList = () => {
  const messages = useSelector((state) => state.chat.messages);
  const currentUser = useSelector((state) => state.auth.username);

  return (
    <div className="space-y-4">
      {messages.map((msg, index) => (
        <div
          key={index}
          className={`flex ${
            msg.username === currentUser ? 'justify-end' : 'justify-start'
          }`}
        >
          <div
            className={`max-w-[70%] rounded-lg px-4 py-2 ${
              msg.username === currentUser
                ? 'bg-blue-600 text-white'
                : 'bg-gray-100 text-gray-800'
            }`}
          >
            <div className={`mb-1 text-xs font-medium ${
              msg.username === currentUser
                ? 'text-blue-100'
                : 'text-gray-500'
            }`}>
              {msg.username}
            </div>
            <div className="text-sm">{msg.text}</div>
            <div className={`mt-1 text-xs ${
              msg.username === currentUser
                ? 'text-blue-100'
                : 'text-gray-400'
            }`}>
              {new Date().toLocaleTimeString([], { 
                hour: '2-digit', 
                minute: '2-digit' 
              })}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default MessageList; 