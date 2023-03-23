import React from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../redux/store';
import FavoriteDay from '../components/FavoriteDay';
import { useTranslation } from 'react-i18next';

const Favorites: React.FC = () => {
  const weatherFavorites = useSelector((state: RootState) => state.weatherSlice.weatherFavorites);
  const { t } = useTranslation();

  return (
    <section className="favorites">
      <h2 className="favorites__title title">{t('titleFavorite')}</h2>
      <div className="favorites__box">
        {weatherFavorites && weatherFavorites.map((day) => <FavoriteDay key={day.dt} {...day} />)}
      </div>
    </section>
  );
};

export default Favorites;
