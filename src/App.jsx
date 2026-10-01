import { useState } from 'react';
import ChatInput from './components/ChatInput.jsx';
import ChatMessages from './components/ChatMessages.jsx';

function App() {
  const [chatMessages, setChatMessages] = useState([
    {
      message: 'Hello! How can I help you?',
      sender: 'robot',
      id: 'id2'
    },

  ]);

  return (
    <div className="app-container">
      <ChatMessages chatMessages={chatMessages} />

      <ChatInput
        chatMessages={chatMessages}
        setChatMessages={setChatMessages}
      />
    </div>
  );
}

export default App;