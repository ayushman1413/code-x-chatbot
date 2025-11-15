import React from 'react';
import Navbar from './Navbar';
import Home from './Home';
import Footer from './Footer';
import Chatbot from './Chatbot';
import './App.css';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Home />
      <Footer />
      <Chatbot />
    </div>
  );
}

export default App;
