import React from 'react';
import { HashRouter as Router, Route } from 'react-router-dom';
import Home from '../Home';
import About from '../About';
import './styles.css';

const Base = () => {
  return (
    <Router>
      <div className="base">
        <Route exact path="/" component={Home} />
        <Route path="/about" component={About} />
      </div>
    </Router>
  );
};

export default Base;
