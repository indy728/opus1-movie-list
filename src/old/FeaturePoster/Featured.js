import React from 'react';
import FeaturePoster from './FeaturePoster';

const Featured = () => {
  const style = {
    display: "flex",
    justifyContent: "center",
    height: "60rem"
  }

  const featuredMovies = [
    {title: "The Big Lebowski"},
    {title: "The Matrix"},
    {title: "Cloud Atlas"},
    {title: "Princess Mononoke"},
    {title: "Snatch"},
    {title: "This Is Spinal Tap"},
  ]

  return (
    <section className="featured" style={style}>
      <FeaturePoster movies={featuredMovies}/>
    </section>
  )
}

export default Featured;
