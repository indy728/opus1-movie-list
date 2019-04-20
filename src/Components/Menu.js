import React from 'react';

const Option = (props) => {
  
  const style = {
    width: "30rem",
    fontSize: "3rem"
  }
  
  return (
    <div className="menu-option" style={style}>
      <h1>{props.menuText}</h1>
    </div>  
  )
}

const Menu = () => {
  const style = {
    display: 'flex',
    alignItems: "center",
    justifyContent: 'space-around',
    height: "10rem",
  }

  return (
      <section className="menu" style={style}>
        <Option menuText="Out Now" />
        <Option menuText="Coming Soon" />
      </section>
  )
}

export default Menu;
