import React, { useContext } from "react";
import { ThemeContext } from "./../../themeProvider";

export const Intellects = () => {
    const theme = useContext(ThemeContext);
    const darkmode = theme.state.darkmode;

    return (
        <>
            <div className = {
                    darkmode
                    ? "bg-gray-100 pt-24 md:h-screen"
                    : "bg-black pt-24 text-white md:h-screen"
                }
            >
                <h1 className="text-center text-6xl">Intellects</h1>
            </div>
        </>
    )
}