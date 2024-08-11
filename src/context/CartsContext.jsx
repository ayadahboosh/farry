// // src/context/CartsContext.js
// import React, { createContext, useState, useContext } from 'react';

// const CartsContext = createContext();

// export const useCarts = () => {
//     return useContext(CartsContext);
// };

// export const CartsProvider = ({ children }) => {
//     const [cartsItems, setCartsItems] = useState([]);

//     const addToCarts = (item) => {
//         setCartsItems((prevItems) => [...prevItems, item]);
//     };

//     const removeFromCarts = (itemId) => {
//         setCartsItems((prevItems) => prevItems.filter(item => item.id !== itemId));
//     };

//     const updateQuantity = (itemId, quantity) => {
//         setCartsItems((prevItems) =>
//             prevItems.map((item) =>
//                 item.id === itemId ? { ...item, quantity } : item
//             )
//         );
//     };

//     return (
//         <CartsContext.Provider value={{ cartsItems, addToCarts, removeFromCarts, updateQuantity }}>
//             {children}
//         </CartsContext.Provider>
//     );
// };
