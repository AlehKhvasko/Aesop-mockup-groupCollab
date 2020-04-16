import React from 'react';

import DalerComponent1 from './components/DalerComponent1';
import Gift from './components/Gift';
import GiftSecond from './components/GiftSecond';
import GiftThree from './components/GiftThree';

import Header from './components/Header';
import Storefinder from './components/Storefinder';
import Footer from './components/Footer';
import './App.css';

function App() {
  return (
    <div className="App">
      <Header />
      <DalerComponent1 />
      <Gift />
      <GiftSecond />
      <Storefinder />
      <GiftThree />
      <Footer />
    </div>
  );
}

export default App;


