// client/src/utils/socket.js
import { io } from 'socket.io-client';

// Connect to your backend Socket.io server
const socket = io('http://localhost:3001'); // Replace with your server URL

export default socket;