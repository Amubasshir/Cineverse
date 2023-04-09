import React from 'react';
import HeroBanner from './heroBanner/HeroBanner';
import './style.scss';
import Trending from './trending/Trending';

const Home = () => {
  return (
    <div className="homePage">
      <HeroBanner />
      <Trending />
    </div>
  );
};

export default Home;
