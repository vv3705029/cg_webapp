import React, { createContext, useState, useEffect } from 'react';

// 1. Create the context
export const AppContext = createContext();

// 2. Create the provider component
export const AppProvider = ({ children }) => {
    // Load userData from localStorage if available
    const [userData, setUserData] = useState(() => {
        const savedUser = localStorage.getItem("userData");
        return savedUser ? JSON.parse(savedUser) : null;
    });

    // Whenever userData changes, save it to localStorage
    useEffect(() => {
        if (userData) {
            localStorage.setItem("userData", JSON.stringify(userData));
        } else {
            localStorage.removeItem("userData");
        }
    }, [userData]);

    return (
        <AppContext.Provider value={{ userData, setUserData }}>
            {children}
        </AppContext.Provider>
    );
};
