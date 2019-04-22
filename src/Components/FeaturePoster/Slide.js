import React from 'react';

const Slide = ({ poster }) => {
  const styles = {
    backgroundImage: `url(${poster})`,
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: '50% 20%',
    height: '100%'
  };
  return <div className="slide" style={styles}></div>;
};

export default Slide;
