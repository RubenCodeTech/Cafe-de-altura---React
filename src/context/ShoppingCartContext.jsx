import React, { useState } from "react";

export const ShoppingCartContext = React.createContext();
ShoppingCartContext.displayName = 'shopping_cart'


function ShoppingCartContextProvider({ children }) {
    const [shoppingCart, setShoppingCart] = useState([])

    return (
        <ShoppingCartContext.Provider value={{ shoppingCart, setShoppingCart }}>
            {children}
        </ShoppingCartContext.Provider>
    )
}
export default ShoppingCartContextProvider