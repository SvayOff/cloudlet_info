import React from "react";
import Header from '../components/Header';
import Navigation from '../components/Navigation';

const Home: React.FC = () => {
  return (
    <div className="home">
      <div className="container">
      <div className="content">
        <Header/>

        <main className='content__block'>

          <Navigation/>

        </main>

        </div>
      </div>

    </div>
  )
}

export default Home;