
import React, { createContext, useState, useContext, useEffect } from 'react';


const LoaderContext = createContext(null);

export const LoaderProvider = ({ children }) => {
    const [isLoading, setIsLoading] = useState(false)

    return (
        <LoaderContext.Provider value={{
            isLoading, setIsLoading
        }}>
            {children}
        </LoaderContext.Provider>
    );
};

export const useLoader = () => useContext(LoaderContext);
