import React from 'react';
import FavoriteDay from '../components/FavoriteDay';
import { useSelector } from 'react-redux';
import { selectWeatherFavorites } from '../redux/weather/selectors';
import { useTranslation } from 'react-i18next';

const Favorites: React.FC = () => {
  const weatherFavorites = useSelector(selectWeatherFavorites);

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
