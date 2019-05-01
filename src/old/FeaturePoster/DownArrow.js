import React from 'react';
import Sprite from '../../atoms/Sprite';

const DownArrow = (props) => {
  return (<div className="nextArrow arrow" onClick={props.goToNextSlide}>
    <Sprite classId="arrow-icon" icon="arrow-round-down"/>
  </div>);
};

export default DownArrow;
