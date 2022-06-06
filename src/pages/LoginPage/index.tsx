import React, {useState, useTransition} from 'react';
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
  const [isPending, startTransition] = useTransition();
  const [filterTerm, setFilterTerm] = useState('');

  const handleChange = (event) => {
    startTransition(() => {
      setFilterTerm(event.target.value);
    });
  };

  const filteredProducts = filterProducts(filterTerm);

  return (
    <div>
      <input type="text" onChange={handleChange}/>
      {isPending && <p>Updating..List</p>}
      <ProductList products={filteredProducts} />
    </div>
  );
};

export default LoginPage;