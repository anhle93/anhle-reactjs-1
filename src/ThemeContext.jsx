import React, { useState } from 'react';

export const ThemeContext = React.createContext();

function ThemeContextComp(props) {
    const [defaultTheme, setThemeValue] = useState('white');

    return (
        <ThemeContext.Provider value={{ defaultTheme, setThemeValue}}>
            {props.children}
        </ThemeContext.Provider>
    )
}

export default ThemeContextComp;