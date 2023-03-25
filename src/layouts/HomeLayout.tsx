import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from '../components/Header';
import Navigation from '../components/Navigation/Navigation';

const HomeLayout: React.FC = () => {
  return (
    <div className="home">
      <div className="container">
        <div className="content">
          <Header />

          <main className="content__block">
            <Navigation />
            <Outlet />
          </main>
        </div>
      </div>
    </div>
  );
};

export default HomeLayout;
