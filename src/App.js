import React from 'react';
// import logo from './logo.svg';
import ProductImageDef from './ProductImage';
import ProductInfoDef from './ProductInfo';
import './App.css';
import datajson from './data.json';

function App() {
  const data = datajson.data;
  return (
    <div className="App">
      {data.map(ele => (
        <div key={ele.product_id} className="product-item">
          <ProductImageDef 
            src={ele.img_url}
            saleText={ele.promotion_percent_upto}
          />
          <ProductInfoDef 
            type={ele.shop_name} 
            name={ele.name} 
            finalprice={ele.final_price} 
            price={ele.price}
            />
        </div>
      ))}
    </div>
    
  );
}

export default App;
