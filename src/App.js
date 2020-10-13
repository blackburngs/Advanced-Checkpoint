import React from 'react';
import './App.css';
import ProductTable from './Component/ProductTable'
const products = [
  {category: 'Electronics', name: 'Laptop', price: 700},
  {category: 'Clothes', name: 'T-shirt', price: 100}
]

function App() {
  return (
    <div className="App">
      <h1> Welcome Home</h1>
      <ProductTable products = {products}/>
    </div>
  );
}

export default App;
