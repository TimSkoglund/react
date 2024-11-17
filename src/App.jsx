import { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Main from './pages/Main/Main';
import ContactUs from './pages/ContactUs/ContactUs';
import { initializeDarkMode } from './utils/darkmode';

function App() {
  useEffect(() => {
    initializeDarkMode();
  }, []); // Runs only once on initial load

  return (
    <Router>
      <div className="wrapper">
        <Header />
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/contact" element={<ContactUs />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
