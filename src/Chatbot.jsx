import React, { useState, useRef, useEffect } from 'react';
import './Chatbot.css';

const Chatbot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    { text: "Hello! I'm CODEx, your coding assistant. How can I help you with programming today?", sender: 'bot' }
  ]);
  const [inputMessage, setInputMessage] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const toggleChat = () => {
    setIsOpen(!isOpen);
  };

  const handleSendMessage = async () => {
    if (inputMessage.trim() === '') return;

    const userMessage = { text: inputMessage, sender: 'user' };
    setMessages(prev => [...prev, userMessage]);
    setInputMessage('');
    setIsTyping(true);

    const apiKey = process.env.REACT_APP_GEMINI_API_KEY;
    if (!apiKey || apiKey === 'your_gemini_api_key_here') {
      setMessages(prev => [...prev, {
        text: 'Please set your Gemini API key in the .env file. Get it from Google AI Studio.',
        sender: 'bot'
      }]);
      setIsTyping(false);
      return;
    }

    try {
      const response = await fetch(`https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'X-goog-api-key': apiKey,
        },
        body: JSON.stringify({
          contents: [{
            parts: [{
              text: `You are CODEx, an intelligent coding assistant.

Your purpose:
- Help users with programming, debugging, errors, algorithms, and computer science concepts.
- Allow natural conversation (e.g., greetings, introductions like "my name is Mohan") but always guide the discussion back toward coding topics.
- Be friendly, clear, and concise in your explanations.

When explaining:
- Always give correct code and explain it in easy, beginner-friendly language.
- Avoid complex jargon unless you clearly explain it.
- Keep answers short, direct, and logical.
- Use examples when it helps understanding.

If a user asks about "CODEx":
  Say:
  "CODEx is a focused coding learning platform that provides simplified coding notes, clear explanations, and a distraction-free coding path. Its main goal is to help learners master coding through structured, focused study without confusion or overload."

If a user asks about the developer or creator of CODEx:
  Say:
  "CODEx was developed by Kanhaiya Kumar.  
  Email: kanhaiyakumarmailme@gmail.com  
  GitHub: https://github.com/kumar-kanhaiya"

Behavior rules:
- Accept casual or polite user messages (like introductions or greetings).
- Politely redirect unrelated or off-topic questions toward coding.
- Never generate offensive or irrelevant content.
- Maintain a professional, helpful tone at all times.

User message: ${inputMessage}`
            }]
          }]
        })
      });

      if (!response.ok) {
        throw new Error(`API request failed: ${response.status} ${response.statusText}`);
      }

      const data = await response.json();

      if (data.candidates && data.candidates[0] && data.candidates[0].content && data.candidates[0].content.parts && data.candidates[0].content.parts[0]) {
        const botResponse = data.candidates[0].content.parts[0].text;
        setMessages(prev => [...prev, { text: botResponse, sender: 'bot' }]);
      } else {
        throw new Error('Invalid response format from API');
      }
    } catch (error) {
      console.error('Error:', error);
      let errorMessage = 'Sorry, I encountered an error. Please try again.';
      if (error.message.includes('API request failed')) {
        errorMessage = 'API request failed. Please check your API key and try again.';
      } else if (error.message.includes('Invalid response format')) {
        errorMessage = 'Received invalid response from API. Please try again.';
      }
      setMessages(prev => [...prev, { text: errorMessage, sender: 'bot' }]);
    } finally {
      setIsTyping(false);
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      handleSendMessage();
    }
  };

  return (
    <>
      {/* Chatbot Icon */}
      <div className="chatbot-icon" onClick={toggleChat}>
        💬
      </div>

      {/* Chat Window */}
      {isOpen && (
        <div className="chatbot-window">
          <div className="chatbot-header">
            <h3>CODEx Assistant</h3>
            <button className="close-btn" onClick={toggleChat}>×</button>
          </div>

          <div className="chatbot-messages">
            {messages.map((message, index) => (
              <div key={index} className={`message ${message.sender}`}>
                <div className="message-bubble">
                  {message.text}
                </div>
              </div>
            ))}
            {isTyping && (
              <div className="message bot">
                <div className="message-bubble typing">
                  ...
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          <div className="chatbot-input">
            <input
              type="text"
              value={inputMessage}
              onChange={(e) => setInputMessage(e.target.value)}
              onKeyPress={handleKeyPress}
              placeholder="Ask me about coding..."
            />
            <button onClick={handleSendMessage}>Send</button>
          </div>
        </div>
      )}
    </>
  );
};

export default Chatbot;
