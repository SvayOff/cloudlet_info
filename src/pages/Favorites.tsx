import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../redux/store';
import FavoriteDay from '../components/FavoriteDay';

const Favorites: React.FC = () => {
  const dispatch = useDispatch();
  const weatherFavorites = useSelector((state: RootState) => state.weatherSlice.weatherFavorites);

  return (
    <section className="favorites">
      <h2 className="favorites__title title">Favorites</h2>
      <div className="favorites__box">
        {weatherFavorites && weatherFavorites.map((day) => <FavoriteDay key={day.dt} {...day} />)}
      </div>
    </section>
  );
};

export default Favorites;
