import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './component/Header';

const Home: React.FC = () => {
  return <h2>Home Page</h2>;
};

const Menu: React.FC = () => {
  return <h2>Menu Page</h2>;
};

const Locations: React.FC = () => {
  return <h2>Locations Page</h2>;
};

const Contact: React.FC = () => {
  return <h2>Contact Page</h2>;
};

const App: React.FC = () => {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/menu" element={<Menu />} />
        <Route path="/locations" element={<Locations />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </Router>
  );
};

export default App;