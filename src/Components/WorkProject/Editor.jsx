import React, { useContext } from "react";
import { ThemeContext } from "./../../themeProvider";

export const Editor = () => {
    const theme = useContext(ThemeContext);
    const darkmode = theme.state.darkmode;
    return (
        <>
            <div className = {
                    darkmode
                    ? "editor-light"
                    : "editor-dark"
                }
            >
                <h1 className="text-center text-6xl">SQL Editor</h1>
            </div>
        </>
    )
}