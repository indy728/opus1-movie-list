import React from 'react';

const Header = () => {
    const textStyle = {
        fontSize: "5rem",
        textTransform: "uppercase",
        fontWeight: "700",
        letterSpacing: ".2rem",
        display: "inline-block",
    }

    const icons = [
        [
            { name: "albums", link: "albums"},
            { name: "barcode", link: "barcode"},
        ],
        { name: "login", link: "log-in"},
    ]

    return (
        <section className="header">
            <div className="header-icon">
                <div className="header-icon__left">
                    <ion-icon name={icons[0][0].link} />
                </div>
                <div className="header-icon__left">
                    <ion-icon name={icons[0][1].link} />
                </div>
            </div>
            <div className="header-text" >
                <h1 style={textStyle}>movies</h1>
            </div>
            <div className="header-icon">
                <div className="header-icon__right">
                    <ion-icon name={icons[1].link} />
                </div>
            </div>
        </section>
    )
}

export default Header;