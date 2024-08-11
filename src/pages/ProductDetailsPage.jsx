// src/pages/ProductDetailsPage.js
import React from 'react';
import { useParams } from 'react-router-dom';
import { useCarts } from '../context/CartsContext';

const productsData = {
    hair: [
        { id: 1, imgSrc: '../assets/img/hair.jpg', title: 'Hair Product 1', description: 'Detailed description of Hair Product 1', price: '25.99' },
        { id: 2, imgSrc: '../assets/img/hair.jpg', title: 'Hair Product 2', description: 'Detailed description of Hair Product 2', price: '30.99' },
    ],
    // Add other categories with product details similarly
};

const ProductDetailsPage = () => {
    const { category, id } = useParams();
    const { addToCarts } = useCarts();
    const product = (productsData[category] || []).find(p => p.id === parseInt(id));

    const handleAddToCarts = () => {
        addToCarts({ ...product, quantity: 1 });
    };

    if (!product) return <p>Product not found</p>;

    return (
        <div className="product-details">
            <img src={product.imgSrc} alt={product.title} />
            <h1>{product.title}</h1>
            <p>{product.description}</p>
            <p className="price">${product.price}</p>
            <button onClick={handleAddToCarts}>Add to Carts</button>
        </div>
    );
};

export default ProductDetailsPage;
