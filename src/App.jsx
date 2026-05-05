import React from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';

function App() {
  return (
    <div className="font-sans text-slate-200 bg-darker selection:bg-accent-red selection:text-white min-h-screen">
      <Navbar />
      <Home />
      <Footer />
    </div>
  );
}

export default App;
