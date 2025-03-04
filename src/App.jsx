import { useState } from 'react';
import Contact from './components/Contact';
import './index.css';
import Navar from './components/Navbar';
import Navbar from './components/Navbar';

function App() {
  return (
    <div>
      <Navbar />
      <Contact />
      <p className="-mt-8 animate-bounce text-center text-lime-300">
        &copy;by Bharat patel
      </p>
    </div>
  );
}

export default App;
