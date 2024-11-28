
import React, { createContext, useState, useContext, useEffect } from 'react';


const DataContext = createContext(null);

export const DataProvider = ({ children }) => {
    const [userToken, setUserToken] = useState(``)
    const [userDetails, setUserDetails] = useState({})


    return (
        <DataContext.Provider value={{
            userToken, setUserToken,
            userDetails, setUserDetails,

        }}>
            {children}
        </DataContext.Provider>
    );
};

export const useData = () => useContext(DataContext);
