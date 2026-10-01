import { useState } from 'react';

function ChatInput({ chatMessages, setChatMessages }) {
  const [inputText, setInputText] = useState('');

  function saveInputText(event) {
    setInputText(event.target.value);
  }

  function getRobotResponse(message) {
    const text = message.toLowerCase();

    if (text.includes('hello') || text.includes('hi')) {
      return 'Hello! How can I help you?';
    }

    if (text.includes('time')) {
      const currentTime = new Date().toLocaleTimeString([], {
        hour: 'numeric',
        minute: '2-digit'
      });

      return `The current time is ${currentTime}`;
    }

    if (text.includes('date') || text.includes('today')) {
      const currentDate = new Date().toLocaleDateString([], {
        weekday: 'long',
        year: 'numeric',
        month: 'long',
        day: 'numeric'
      });

      return `Today is ${currentDate}`;
    }

    if (text.includes('flip') && text.includes('coin')) {
      return Math.random() < 0.5 ? 'Heads' : 'Tails';
    }

    if (text.includes('roll') && text.includes('dice')) {
      const number = Math.floor(Math.random() * 6) + 1;
      return `You rolled a ${number}`;
    }

    if (text.includes('thank')) {
      return 'No problem!';
    }

    if (text.includes('weather')) {
      return 'I cannot check live weather yet.';
    }

    return "Sorry, I don't understand that yet.";
  }

  function sendMessage() {
    if (inputText.trim() === '') {
      return;
    }

    const userMessage = {
      message: inputText,
      sender: 'user',
      id: crypto.randomUUID()
    };

    const robotMessage = {
      message: getRobotResponse(inputText),
      sender: 'robot',
      id: crypto.randomUUID()
    };

    setChatMessages([
      ...chatMessages,
      userMessage,
      robotMessage
    ]);

    setInputText('');
  }

  function handleKeyDown(event) {
    if (event.key === 'Enter') {
      sendMessage();
    }
  }

  return (
    <div className="chat-input-container">
      <input
        className="chat-input"
        placeholder="Send a message to Chatbot"
        value={inputText}
        onChange={saveInputText}
        onKeyDown={handleKeyDown}
      />

      <button
        className="send-button"
        onClick={sendMessage}
      >
        Send
      </button>
    </div>
  );
}

export default ChatInput;