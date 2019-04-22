import React from 'react';
import Option from './Option';

const Menu = () => {
  const style = {
    marginTop: "2rem",
    display: 'flex',
    alignItems: "center",
    justifyContent: 'space-around',
    height: "10rem",
    boxShadow: "0 1rem 1rem -1rem #999999",
    zIndex: "10000"
  }

  return (
      <section className="menu" style={style}>
        <Option menuText="Out Now" />
        <Option menuText="Coming Soon" />
      </section>
  )
}

export default Menu;
