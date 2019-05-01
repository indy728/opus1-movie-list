import React from 'react';

const Option = (props) => {
  const style = {
    width: "30rem",
    fontSize: "2.5rem",
    textTransform: "uppercase"
  };
  return (<div className="menu-option" style={style}>
    <h1>{props.menuText}</h1>
  </div>);
};

export default Option;
