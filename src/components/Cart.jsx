import React from 'react';

const Cart = ({ cart }) => {
    const totalPrice = cart.reduce((acc, item) => acc + parseFloat(item.product.price.slice(1)) * item.quantity, 0);

    return (
        <div className="cart-page">
            <h2>Cart</h2>
            {cart.length > 0 ? (
                <>
                    {cart.map((item, index) => (
                        <div key={index} className="cart-item">
                            <img src={item.product.image} alt={item.product.name} className="cart-item-image" />
                            <div className="cart-item-details">
                                <h3>{item.product.name}</h3>
                                <p>Price: {item.product.price}</p>
                                <p>Quantity: {item.quantity}</p>
                                <p>Total: ${(parseFloat(item.product.price.slice(1)) * item.quantity).toFixed(2)}</p>
                            </div>
                        </div>
                    ))}
                    <div className="cart-total">
                        <h3>Total Price: ${totalPrice.toFixed(2)}</h3>
                    </div>
                </>
            ) : (
                <p>Your cart is empty.</p>
            )}
        </div>
    );
};

export default Cart;
