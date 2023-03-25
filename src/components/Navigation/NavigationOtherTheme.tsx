import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { selectTheme } from '../../redux/theme/selectors';
import { setTheme } from '../../redux/theme/slice';

const NavigationOtherTheme: React.FC = () => {
  const dispatch = useDispatch();
  const theme = useSelector(selectTheme);
  return (
    <>
      {theme === 'light' ? (
        <div
          className="navigation__theme navigation__theme-light"
          onClick={() => dispatch(setTheme('dark'))}>
          <img
            className="navigation__theme-img"
            src={'/images/icons/dark_theme.svg'}
            alt="light_theme"
          />
        </div>
      ) : (
        <div
          className="navigation__theme navigation__theme-dark"
          onClick={() => dispatch(setTheme('light'))}>
          <img
            className="navigation__theme-img"
            src={'/images/icons/light_theme.svg'}
            alt="dark_theme"
          />
        </div>
      )}
    </>
  );
};

export default NavigationOtherTheme;
