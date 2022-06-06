import React, {useState} from 'react';
import ProductList from 'components/Product';
import {generateProduct} from 'components/Product/data';
const dummyProducts = generateProduct();

const filterProducts = (filterTerm) => {
  if(!filterTerm) {
    return dummyProducts;
  }

  return dummyProducts.filter((product) => product.includes(filterTerm));
}

const LoginPage: React.FC = ({}) => {
  const [filterTerm, setFilterTerm] = useState('');

  const handleChange = (event) => {
    setFilterTerm(event.target.value);
  };

  const filteredProducts = filterProducts(filterTerm);

  return (
    <div>
      <input type="text" onChange={handleChange}/>
      <ProductList products={filteredProducts} />
    </div>
  );
};

export default LoginPage;