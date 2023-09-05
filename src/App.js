

import React from 'react';
import './App.css';
import MenuBar from './MenuBar.js';
import './MenuBar.css'
import Banner from './Banner.js';
import './Banner.css';
import ProductList from './ProductList';
import ContactForm from './ContactUsform';
const navbar = [
  { name: 'Home', id: 'home' },
  { name: 'About', id: 'about' },
  {
    name: 'Our Products',
    id: 'product',
    child: [
      { name: 'Product 1', id: 'p1' },
      { name: 'Product 2', id: 'p2' },
      { name: 'Product 3', id: 'p3' },
      { name: 'Product 4', id: 'p4' },
    ],
  },
  { name: 'Contact Us', id: 'contact' },
     
  
  
  
];

function App() {
  return (
    <div className="App">
      <header className="head">
        <MenuBar items={navbar} />
        <Banner />
      </header>
      <main className='main'>
        <ProductList />
    
      </main>
      <footer>
         <ContactForm />
      </footer>
      
    </div>
  );
}

export default App;







