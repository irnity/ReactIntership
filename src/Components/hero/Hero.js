import React, { Fragment, useEffect, useState } from 'react';
import '../../Style/hero.css';

function Hero() {
  const [people, setPeople] = useState([]);
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  useEffect(() => {
    fetch('https://swapi.dev/api/people')
      .then((res) => res.json())
      .then((response) => { setPeople(response.results); setIsLoaded(true); })
      .catch((err) => {
        setError(err);
      });
  }, []);
  if (error) {
    return (
      <p>
        Error:
        {error.message}
      </p>
    );
  } if (!isLoaded) {
    return <p> Loading...</p>;
  } 

  return (
    <div className="hero-top">
      <div className="hero-body">
        <h1 className="color">Star Wars</h1>
        <div className="hero">
          {error}
          {people.map((person) => (
            <Fragment key={person.name}>
              <div className="hero-main">
                <div className="hero-name">
                  Name:
                  {person.name}
                </div>
                <div className="hero-name">
                  Height:
                  {person.height}
                </div>
                <div className="hero-name">
                  Mass:
                  {person.mass}
                </div>
              </div>
            </Fragment>
          ))}
        </div>
        
      </div>
    </div>
  );
}

export default Hero;
