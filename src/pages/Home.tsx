import React from 'react';
import Header from '../components/Header';
import Navigation from '../components/Navigation';
import Weather from '../components/Weather';
import Login from '../components/Login';
import Register from '../components/Register';

const Home: React.FC = () => {
  return (
    <div className="home">
      <div className="container">
        <div className="content">
          <Header />

          <main className="content__block">
            <Navigation />

            {/* <Weather /> */}

            {/* <Login /> */}

            <Register />
          </main>
        </div>
      </div>
    </div>
  );
};

export default Home;
