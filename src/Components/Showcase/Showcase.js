import React from 'react';
import Row from './Row';

const subArrays = (bigarray) => {
  const size = 2;
  const arrayOfArrays = [];
  for (let i=0; i<bigarray.length; i+=size) {
      arrayOfArrays.push(bigarray.slice(i,i+size));
  }
  return arrayOfArrays;
}

const Showcase = () => {

  const renderRows = (movieArray) =>{
    return (
      movieArray.map((subArray, index) => <Row movies={subArray} key={index} />)
    )
  }

  const outNowMovies = [
    "Shazam!",
    "They Shall Not Grow Old",
    "Mr. Holland's Opus",
    "The Sound of Music",
  ]

  const movieArrays = subArrays(outNowMovies);

  return (
    <section className="showcase">
      <div className="showcase-fixed_height">
        {renderRows(movieArrays)}
      </div>
    </section>
  )
};

export default Showcase;
