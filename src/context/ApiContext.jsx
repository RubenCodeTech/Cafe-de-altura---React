import React, { useState } from "react";

export const ApiContext = React.createContext();
ApiContext.displayName = 'api'

function ApiContextProvider({ children }) {
    const [coffees, setCoffees] = useState([])

    return (
        <ApiContext.Provider value={{ coffees, setCoffees }}>
            {children}
        </ApiContext.Provider>
    )
}
export default ApiContextProvider