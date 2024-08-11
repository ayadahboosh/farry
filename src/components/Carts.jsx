// // src/components/Carts.js
// import React from 'react';
// import { useCarts } from '../context/CartsContext';

// const Carts = () => {
//     const { cartsItems, removeFromCarts, updateQuantity } = useCarts();

//     const handleQuantityChange = (e, itemId) => {
//         const newQuantity = e.target.value;
//         updateQuantity(itemId, newQuantity);
//     };

//     return (
//         <div className="carts-page">
//             <h1>Your Carts</h1>
//             {cartsItems.length === 0 ? (
//                 <p>Your carts is empty</p>
//             ) : (
//                 <ul>
//                     {cartsItems.map((item) => (
//                         <li key={item.id}>
//                             <img src={item.imgSrc} alt={item.title} />
//                             <div>
//                                 <h2>{item.title}</h2>
//                                 <p className="price">${item.price}</p>
//                                 <input
//                                     type="number"
//                                     min="1"
//                                     value={item.quantity}
//                                     onChange={(e) => handleQuantityChange(e, item.id)}
//                                 />
//                                 <button onClick={() => removeFromCarts(item.id)}>Remove</button>
//                             </div>
//                         </li>
//                     ))}
//                 </ul>
//             )}
//         </div>
//     );
// };

// export default Carts;
