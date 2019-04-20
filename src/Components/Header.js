import React from 'react';

const Header = () => {

    const style = {
        width: "100%",
        height: "12rem",
        display: "flex",
        alignItems: "center",
        justifyContent: "center"
    }

    const textStyle = {
        fontSize: "5rem",
        textTransform: "uppercase",
        fontWeight: "700",
        letterSpacing: ".2rem",
        display: "inline-block",
    }

    return (
        <section className="header" style={style}>
        <div>
            <h1 className="header-text" style={textStyle}>movies</h1>
        </div>
        </section>
    )
}

export default Header;