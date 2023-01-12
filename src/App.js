import React from 'react'

import Header from './Components/Header'
import HotelDetails from './Components/HotelDetails';
import MainContent from './Components/MainContent';

function App() {
  return (
    <div className="h-screen w-full">
      <Header/>
      <MainContent/>
      <HotelDetails/>
    </div>
  );
}

export default App;
