import React from 'react';
import Header from '../components/Header';
import Navigation from '../components/Navigation';
import Weather from '../components/Weather';
import Login from '../components/Login';
import Register from '../components/Register';
import Favorites from '../components/Favorites';
import Error from '../components/Error';
import DayFull from '../components/DayFull';
import Maps from '../components/Maps';
import Empty from '../components/Empty';

const Home: React.FC = () => {
  return (
    <div className="home">
      <div className="container">
        <div className="content">
          <Header />

          <main className="content__block">
            <Navigation />

            <Weather />

            {/* <Login /> */}

            {/* <Register /> */}

            {/* <Favorites /> */}

            {/* <Error /> */}

            {/* <DayFull /> */}

            {/* <Maps /> */}

            {/* <Empty /> */}
          </main>
        </div>
      </div>
    </div>
  );
};

export default Home;
