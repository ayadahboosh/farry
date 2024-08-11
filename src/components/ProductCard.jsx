// // src/components/ProductCard.js
// import React from 'react';
// import { useNavigate } from 'react-router-dom';
// import { useCarts } from '../context/CartsContext';

// const ProductCard = ({ imgSrc, altText, title, price, description, link }) => {
//     const navigate = useNavigate();
//     const { addToCarts } = useCarts();

//     const handleAddToCarts = (e) => {
//         e.stopPropagation();
//         addToCarts({ id: Date.now(), imgSrc, title, price, quantity: 1 });
//         navigate('/carts');
//     };

//     return (
//         <div className="product-card" onClick={() => navigate(link)}>
//             <img src={imgSrc} alt={altText} />
//             <h2>{title}</h2>
//             <p>{description}</p>
//             <p className="price">${price}</p>
//             <button onClick={handleAddToCarts}>Add to Carts</button>
//         </div>
//     );
// };

// export default ProductCard;
