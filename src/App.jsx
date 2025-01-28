import { useSelector } from 'react-redux';
import LoginPage from './components/LoginPage';
import ChatPage from './components/ChatPage';

const App = () => {
  // Check if user is logged in (username exists in Redux state)
  const username = useSelector((state) => state.auth.username);

  return (
    <div className="min-h-screen bg-gray-100">
      <div className="container mx-auto px-4 py-8">
        {username ? <ChatPage /> : <LoginPage />}
      </div>
    </div>
  );
};

export default App;