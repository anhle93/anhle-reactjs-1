import React from 'react';
// import logo from './logo.svg';
import ProductImageDef from './ProductImage';
import ProductInfoDef from './ProductInfo';
import './App.css';

function App() {
  return (
    <div className="App">
      <div>
        <ProductImageDef src='https://vntrip.cdn.vccloud.vn/cam-nang/wp-content/uploads/2017/06/1dl.jpg' saleText='sale' />
        <ProductInfoDef type='FURNITURE' name='Minimal Deco Furniture' finalprice='119$' price='230$' />
      </div>
    </div>
  );
}

export default App;
