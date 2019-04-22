import React from 'react';
import FeaturePoster from './FeaturePoster';

const Featured = () => {
  const style = {
    display: "flex",
    justifyContent: "center",
    height: "60rem"
  }

  return (
    <section className="featured" style={style}>
      <FeaturePoster />
    </section>
  )
}

export default Featured;
