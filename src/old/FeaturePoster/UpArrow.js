import React from 'react';
import Sprite from '../Sprite';

const UpArrow = (props) => {
  return (<div className="backArrow arrow" onClick={props.goToPrevSlide}>
    <Sprite classId="arrow-icon" icon="arrow-round-up"/>
  </div>);
};

export default UpArrow;
