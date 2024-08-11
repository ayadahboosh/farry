import React, { useState } from 'react';
import { useParams } from 'react-router-dom';

const ProductPage = ({ products, addToCart }) => {
    const { id } = useParams();
    const product = products.find(p => p.id === parseInt(id));
    const [quantity, setQuantity] = useState(1);

    const handleAddToCart = () => {
        addToCart(product, quantity);
        alert(`${product.name} added to cart!`);
    };

    const handleQuantityChange = (amount) => {
        setQuantity(prevQuantity => Math.max(1, prevQuantity + amount));
    };

    return (
        <div className="product-page">
            <img src={product.image} alt={product.name} />
            <div>
                <h2>{product.name}</h2>
                <p className="price">Price: {product.price}</p>
                <p className="description">{product.description}</p>
                <div className="quantity-input">
                    <button onClick={() => handleQuantityChange(-1)}>-</button>
                    <input
                        type="text"
                        value={quantity}
                        readOnly
                    />
                    <button onClick={() => handleQuantityChange(1)}>+</button>
                </div>
                <button onClick={handleAddToCart}>Add to Cart</button>
            </div>
        </div>
    );
};

export default ProductPage;
