import React, { useState } from 'react';
import './App.css';
import { ResponseData } from './helpers/types';
import { Header, Footer } from './layouts';
import { Home } from './pages';

const App: React.FC = () => {
  const [currentWeatherForCountry, setCurrentWeatherForCountry] = useState<ResponseData | null>(null)
  const [weatherForecast, setWeatherForecast] = useState<any | null>(null)

  return (
    <div className="App">
      <Header {...{ setCurrentWeatherForCountry, setWeatherForecast }} />
      <Home {...{ currentWeatherForCountry, weatherForecast }} />
      <Footer />
    </div>
  );
}

export default App;
