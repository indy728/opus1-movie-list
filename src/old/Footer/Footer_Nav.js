import React from 'react';
import Sprite from '../../atoms/Sprite';

const Footer_Nav = () => {
   
    return (
        <section className="footer_nav">
            <Sprite classId="footer_nav-box" icon="search"/>
            <Sprite classId="footer_nav-box" icon="heart"/>
            <Sprite classId="footer_nav-box" icon="person"/>
        </section>
    )
}

export default Footer_Nav;