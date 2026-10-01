function ChatMessage({ message, sender }) {
  return (
    <div className={`chat-message ${sender}`}>
      {sender === 'robot' && (
        <div className="profile-picture">🤖</div>
      )}

      <div className="message-text">
        {message}
      </div>

      {sender === 'user' && (
        <div className="profile-picture">👤</div>
      )}
    </div>
  );
}

export default ChatMessage;