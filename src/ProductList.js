// src/components/ProductList.js

import React, { useEffect, useState } from 'react';
import axios from 'axios';

const ProductList = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Fetch the product data from the API
    axios.get('https://fakestoreapi.com/products')
      .then((response) => {
        setProducts(response.data);
        setLoading(false);
      })
      .catch((error) => {
        console.error('Error fetching product data:', error);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <p>Loading...</p>;
  }

  return (
    <>
    <h2>Product List</h2>
    <div className='grid' >
         {products.map((post)=>{
           const{id,title,image,price,description}= post;
           return (
           <div className='card' key={id}>
            <img src={image} className='product-image'/>
            <h2>{title}</h2>
             <p className='price'>{price}</p>
             <p className='product-description'>{description}</p>
             <p><button>Add to cart</button></p>
             </div>
            )

         })}
         
    </div>
  
  </>
  );
};

export default ProductList;
