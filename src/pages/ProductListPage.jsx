// src/pages/ProductListPage.js
import React from 'react';
import { useParams, Link } from 'react-router-dom';
import Card from '../components/Card';

const productsData = {
    hair: [
        { id: 1, imgSrc: '../assets/img/hair.jpg', title: 'Hair Product 1', description: 'Description of Hair Product 1', price: '25.99' },
        { id: 2, imgSrc: '../assets/img/hair.jpg', title: 'Hair Product 2', description: 'Description of Hair Product 2', price: '30.99' },
    ],
    body: [
        { id: 1, imgSrc: '../assets/img/body.jpg', title: 'Body Product 1', description: 'Description of Body Product 1', price: '19.99' },
        { id: 2, imgSrc: '../assets/img/body.jpg', title: 'Body Product 2', description: 'Description of Body Product 2', price: '22.99' },
    ],
    skincare: [
        { id: 1, imgSrc: '../assets/img/skincare.jpg', title: 'Skincare Product 1', description: 'Description of Skincare Product 1', price: '29.99' },
        { id: 2, imgSrc: '../assets/img/skincare.jpg', title: 'Skincare Product 2', description: 'Description of Skincare Product 2', price: '32.99' },
    ],
    face: [
        { id: 1, imgSrc: '../assets/img/face.png', title: 'Face Product 1', description: 'Description of Face Product 1', price: '22.99' },
        { id: 2, imgSrc: '../assets/img/face.png', title: 'Face Product 2', description: 'Description of Face Product 2', price: '24.99' },
    ],
    makeup: [
        { id: 1, imgSrc: '../assets/img/makeup.jpg', title: 'Makeup Product 1', description: 'Description of Makeup Product 1', price: '35.99' },
        { id: 2, imgSrc: '../assets/img/makeup.jpg', title: 'Makeup Product 2', description: 'Description of Makeup Product 2', price: '38.99' },
    ],
};


const ProductListPage = ({ products }) => {
    const { category } = useParams();
    const filteredProducts = products.filter(product => product.category.toLowerCase() === category.toLowerCase());

    return (
        <div>
            <h1>{category.charAt(0).toUpperCase() + category.slice(1)} Products</h1>
            <div className="grid">
                {filteredProducts.map(product => (
                   <Card key={product.id} product={product} />
                ))}
            </div>
        </div>
    );
};

export default ProductListPage;
