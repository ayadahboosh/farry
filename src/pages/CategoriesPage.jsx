// src/pages/CategoriesPage.js
import React from 'react';
import hair from '../assets/img/hair.jpg';
import body from '../assets/img/body.jpg';
import skincare from '../assets/img/skincare.jpg';
import face from '../assets/img/face.png';
import makeup from '../assets/img/makeup.jpg';
import { Link } from 'react-router-dom';

const CategoriesPage = () => {
    return (
        <div className="categories-grid">
            <Link to="/products/hair">
                <div>
                    <img src={hair} alt="Hair" />
                    <h1>Hair</h1>
                </div>
            </Link>
            <Link to="/products/body">
                <div>
                    <img src={body} alt="Body" />
                    <h1>Body</h1>
                </div>
            </Link>
            <Link to="/products/skincare">
                <div>
                    <img src={skincare} alt="Skincare" />
                    <h1>Skincare</h1>
                </div>
            </Link>
            <Link to="/products/face">
                <div>
                    <img src={face} alt="Face" />
                    <h1>Face</h1>
                </div>
            </Link>
            <Link to="/products/makeup">
                <div>
                    <img src={makeup} alt="Make-up" />
                    <h1>Make-up</h1>
                </div>
            </Link>
        </div>
    );
};

export default CategoriesPage;
