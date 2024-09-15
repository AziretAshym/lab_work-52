import { useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';
import Card from "./components/card.tsx";

const App = () => {

  return (
    <>
      <Card rank="K" suit="diams" />
    </>
  );
};

export default App;
