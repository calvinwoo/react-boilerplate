import React from 'react';
import { Link } from 'react-router-dom';
import './styles.css';

const About = () => {
  return (
    <div className="about">
      <h1>About page</h1>
      <Link to="/">Home</Link>
    </div>
  );
};

export default About;
