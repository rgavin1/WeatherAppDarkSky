import React from 'react';
import './App.css';
import { Header, Footer } from './layouts';
import { Home } from './pages';

const App: React.FC = () => {
  return (
    <div className="App">
      <Header />
      <Home />
      <Footer />
    </div>
  );
}

export default App;
