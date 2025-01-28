import { useSelector } from 'react-redux';

const OnlineUsers = () => {
  const onlineUsers = useSelector((state) => state.chat.onlineUsers);
  const currentUser = useSelector((state) => state.auth.username);

  return (
    <div className="space-y-2">
      {onlineUsers.map((user, index) => (
        <div
          key={index}
          className="flex items-center gap-2 rounded-lg px-3 py-2 hover:bg-gray-100"
        >
          <div className="h-2 w-2 rounded-full bg-green-500"></div>
          <span className="text-sm text-gray-700">
            {user === currentUser ? `${user} (You)` : user}
          </span>
        </div>
      ))}
    </div>
  );
};

export default OnlineUsers; 