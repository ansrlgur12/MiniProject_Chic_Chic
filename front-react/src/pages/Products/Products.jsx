import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";


const ProductsStyle = styled.div`
.product {
  display: flex;
  flex-direction: column;
  align-items: center;
 
}

.product_image {
  
  width: 15rem;
  height: 15rem;
  border-radius: 50%;
  margin: 1.5rem;
}

.product_image img {
  width: 100%;
  height: 100%;
  border-radius: 20%;
  border: 1px solid #6c6c6c;
}

.store {
  margin-bottom: 10px;
}

.store span {
  font-size: 16px;
  line-height: 22px;
  color: #767676;
}

.product_name {
  margin-bottom: 10px;
}

.product_name span {
  font-size: 18px;
  line-height: 22px;
  color: #000000;
}

.price {
  font-size: 24px;
  font-weight: bold;
  line-height: 30px;
  color: #000000;
}

.unit {
  font-size: 16px;
  line-height: 20px;
  color: #000000;
}

@media (max-width: 968px) {
  .product_image {
    width: 220px;
    height: 220px;
  }
  .product_name span {
    font-size: 14px;
  }
}

@media (max-width: 768px) {
  .product_image {
    width: 300px;
    height: 300px;
  }
}

@media (max-width: 360px) {
  .product_image {
    width: 200px;
    height: 200px;
  }

  .store span {
    font-size: 12px;
    line-height: 22px;
    color: #767676;
  }

  .product_name span {
    font-size: 12px;
  }
}

`

export const Products = ({ product }) => {
  return (
    <ProductsStyle>
    <div className="product">
      <Link to={`/PerfumeList/${product.id}`}>
        <div className="product_image">
          <img src={product.image} alt="product" />
        </div>
      </Link>
      <div className="store">
        <span>{product.provider}</span>
      </div>

      <div className="product_name">
        <span>{product.name}</span>
      </div>

      <div className="product_price">
        <span className="oz">{product.oz}</span>
        <span className="unit">oz</span>
      </div>

    </div>
    </ProductsStyle>
    
  );
};
// export default가 선언이 되지않아 export할 수 없었음
export default Products;