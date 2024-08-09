import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import MainContent from './components/MainContent'; 
import Login from './components/Login'; 
import './styles.css';

const App = () => {
  return (
    <Router>
      <div style={{ minHeight: '100vh', backgroundColor: '#949c96' }}>
        {/* Navbar component */}
        <Navbar />
        {/* Main content */}
        <main style={{ padding: '20px' }}>
          <Routes>
            <Route path="/" element={<MainContent />} />
            <Route path="/login" element={<Login />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
};

export default App;
