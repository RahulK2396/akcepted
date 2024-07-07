import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { BrowserRouter } from 'react-router-dom';
import Portfolio from './components/portfolio';
import { register } from 'swiper/element/bundle';


const App = () => {
  register();
  return (
    <div>
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<Portfolio />} />
       
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;