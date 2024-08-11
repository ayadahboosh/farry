import React from 'react';
import Card from '../components/Card';

const ProductsPage = ({ products }) => {
    return (
        <div className="products-page">
            <h2>Products</h2>
            <div className="grid">
                {products.map(product => (
                    <Card key={product.id} product={product} />
                ))}
            </div>
        </div>
    );
};

export default ProductsPage;
