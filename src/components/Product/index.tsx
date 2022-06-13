import React, {useDeferredValue} from 'react';

const ProductList = ({products}) => {
    const deferredProducts = useDeferredValue(products);
    return (
        <ul>
            {products.map((product, index) => (<li key={index}>{product}</li>))}
        </ul>
    );
};

export default ProductList;