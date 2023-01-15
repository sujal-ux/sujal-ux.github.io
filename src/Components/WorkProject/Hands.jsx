import React, { useContext } from "react";
import { ThemeContext } from "./../../themeProvider";

export const Hands = () => {
    const theme = useContext(ThemeContext);
    const darkmode = theme.state.darkmode;
    return (
        <>
            <div className = {
                    darkmode
                    ? "hands-light"
                    : "hands-dark"
                }
            >
                <h1 className="text-center text-6xl">Hands</h1>
            </div>
        </>
    )
}