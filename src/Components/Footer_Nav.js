import React from 'react';

const Sprite = (props) => {
    const style = {
        width: "10rem",
        display: 'flex',
        alignItems: "center",
        justifyContent: 'center',
    }

    const iconStyle = {
        fontSize: "5rem",
        color: "rgb(226, 44, 44)"
    }

    const icon_link = props.icon;

    return (
        <div className="footer_nav-box" style={style}>
            <ion-icon className="footer_nav-box__icon" name={icon_link} style={iconStyle}></ion-icon>
        </div>
    )

}

const Footer_Nav = () => {
    const style = {
        height: "12rem",
        width: "100%",
        display: 'flex',
        alignItems: "center",
        justifyContent: 'space-around',
    }

    return (
        <section className="footer_nav" style={style}>
            <Sprite icon="search"/>
            <Sprite icon="heart"/>
            <Sprite icon="person"/>
        </section>
    )
}

export default Footer_Nav;