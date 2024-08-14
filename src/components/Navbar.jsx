import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = ({ cartItemCount }) => {
    return (
        <nav style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '10px 20px', backgroundColor: ' #D37676', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)' }}>
            <h2 style={{ flex: 1, color: '#ff79c6', margin: 0 }}>VelvetBeauty</h2>
            <div style={{ flex: 2, display: 'flex', justifyContent: 'center' }}>
                <input 
                    type="text" 
                    placeholder="Search for products..." 
                    style={{
                        padding: '5px 15px',
                        fontSize: '14px',
                        borderRadius: '20px',
                        border: '1px solid #ccc',
                        width: '300px'
                    }}
                />
            </div>
            <div className="nav-links" style={{ flex: 3, display: 'flex', justifyContent: 'flex-end', gap: '20px' }}>
                <Link to="/" style={{ textDecoration: 'none', color: '#f8f8f8', fontSize: '16px' }}>Home</Link>
                <Link to="/Categories" style={{ textDecoration: 'none', color: '#f8f8f8', fontSize: '16px' }}>Categories</Link>
                <Link to="/products" style={{ textDecoration: 'none', color: '#f8f8f8', fontSize: '16px' }}>Products</Link>
                <Link to="/skintype" style={{ textDecoration: 'none', color: '#f8f8f8', fontSize: '16px' }}>Skintype</Link>
                <Link to="/cart" style={{ textDecoration: 'none', color: '#f8f8f8', fontSize: '16px' }}>Cart ({cartItemCount})</Link>
            </div>
        </nav>
    );
};

export default Navbar;
