import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { receiveMessage, setOnlineUsers } from '../redux/chatSlice';
import socket from '../utils/socket';
import MessageInput from './MessageInput';
import MessageList from './MessageList';
import OnlineUsers from './OnlineUsers';

const ChatPage = () => {
  const { messages, onlineUsers } = useSelector((state) => state.chat);
  const dispatch = useDispatch();
  const username = useSelector((state) => state.auth.username);

  useEffect(() => {
    socket.on('receiveMessage', (message) => {
      dispatch(receiveMessage(message));
    });

    socket.on('onlineUsers', (users) => {
      dispatch(setOnlineUsers(users));
    });

    return () => {
      socket.off('receiveMessage');
      socket.off('onlineUsers');
    };
  }, []);

  return (
    <div className="mx-auto max-w-6xl rounded-lg bg-white shadow-lg">
      <div className="flex h-[80vh]">
        {/* Online Users Sidebar */}
        <div className="w-64 border-r border-gray-200 bg-gray-50">
          <div className="p-4">
            <h2 className="mb-4 text-lg font-semibold text-gray-700">Online Users</h2>
            <OnlineUsers />
          </div>
        </div>

        {/* Chat Area */}
        <div className="flex flex-1 flex-col">
          {/* Chat Header */}
          <div className="border-b border-gray-200 bg-white p-4">
            <h2 className="text-lg font-semibold text-gray-700">
              Chat Room
              <span className="ml-2 text-sm font-normal text-gray-500">
                (Logged in as {username})
              </span>
            </h2>
          </div>

          {/* Messages */}
          <div className="flex-1 overflow-y-auto p-4">
            <MessageList />
          </div>

          {/* Message Input */}
          <div className="border-t border-gray-200 p-4">
            <MessageInput />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChatPage;