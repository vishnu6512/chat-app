import { useSelector } from 'react-redux';

const OnlineUsers = () => {
  // Get list of online users and current user from Redux store
  const onlineUsers = useSelector((state) => state.chat.onlineUsers);
  const currentUser = useSelector((state) => state.auth.username);

  return (
    <div className="space-y-2">
      {/* Loop through each online user */}
      {onlineUsers.map((user, index) => (
        <div
          key={index}
          className="flex items-center gap-2 rounded-lg px-3 py-2 hover:bg-gray-100"
        >
          {/* Green dot to show online status */}
          <div className="h-2 w-2 rounded-full bg-green-500"></div>
          
          {/* Username - show (You) next to current user */}
          <span className="text-sm text-gray-700">
            {user === currentUser ? `${user} (You)` : user}
          </span>
        </div>
      ))}
    </div>
  );
};

export default OnlineUsers; 