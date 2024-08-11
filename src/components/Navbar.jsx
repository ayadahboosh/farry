import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = ({ cartItemCount }) => {
    return (
        <nav>
            <h2>velvetbeauty</h2>
            <div className="nav-links">
                <Link to="/">Home</Link>
                {/* <Link to="/about">About Us</Link> */}
                <Link to="/Categories">Categories</Link>
                <Link to="/products">Products</Link>
                <Link to="/skintype">Skintype</Link>
                <Link to="/cart"> Cart ({cartItemCount})</Link>
            </div>
        </nav>
    );
};

export default Navbar;