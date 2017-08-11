import React from 'react';
import { Link } from 'react-router-dom';
import './styles.css';

const Home = () => {
  return (
    <div className="home">
      <h1>Home page</h1>
      <Link to="/about">About</Link>
    </div>
  );
};

export default Home;
