import React, { createContext, useState } from 'react';

export const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
    const [isClicked, setIsClicked] = useState(false);

    const toggleDarkMode = () => {
        let element = document.body;
        element.classList.toggle("dark");
        setIsClicked(isClicked => !isClicked);
    };

    return (
        <ThemeContext.Provider value={{ isClicked, toggleDarkMode }}>
            {children}
        </ThemeContext.Provider>
    );
};