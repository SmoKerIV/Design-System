import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Menu from './components/navigation/menus/menus';

const App = () => {
  const menuItems = [
    { label: 'Home', url: '/' },
    { label: 'About', url: '/about' },
    { label: 'Services', url: '/services' },
    { label: 'Contact', url: '/contact' }
  ];

  const handleItemClick = (item) => {
    console.log(`Selected item: ${item.label}`);
  };

  return (
    <>

    </>
  );
};

export default App;
