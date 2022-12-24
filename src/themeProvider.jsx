import React, { useReducer, createContext } from 'react'

export const ThemeContext = createContext();
const initialState = {darkmode: true};

const themeReducer = (state, action) => {
    switch (action.type) {
        case "LIGHTMODE":
            return {darkmode: false};
        case "DARKMODE":
            return {darkmode: true};
        default:
            return state;
    }
};

export function ThemeProvider(props) {
    const [state, dispatch] = useReducer(themeReducer, initialState);
    return (
        <ThemeContext.Provider
            value={{state: false || state, dispatch: dispatch}}
        >
        {props.children}
        </ThemeContext.Provider>
    );
}