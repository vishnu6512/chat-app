// client/src/utils/socket.js
import { io } from 'socket.io-client';

// Connect to your backend Socket.io server
const socket = io('https://chat-app-server-0dkd.onrender.com'); // Replace with your server URL

export default socket;