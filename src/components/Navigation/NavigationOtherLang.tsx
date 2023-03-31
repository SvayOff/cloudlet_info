import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { selectIsLangOpen } from '../../redux/weather/selectors';
import { useTranslation } from 'react-i18next';
import { setIsLangOpen } from '../../redux/weather/slice';

const NavigationOtherLang: React.FC = () => {
  const dispatch = useDispatch();
  const isLangOpen = useSelector(selectIsLangOpen);
  const { i18n } = useTranslation();

  const onChangeLanguage = (lng: string | undefined) => {
    i18n.changeLanguage(lng);
  };

  React.useEffect(() => {
    const handleClickOutside = (event: any) => {
      !event.target.className.includes('lang') && dispatch(setIsLangOpen(false));
    };

    document.body.addEventListener('click', handleClickOutside);

    return () => {
      document.body.removeEventListener('click', handleClickOutside);
    };
  });

  return (
    <div
      className={isLangOpen ? 'navigation__lang show' : 'navigation__lang'}
      onClick={() => dispatch(setIsLangOpen(!isLangOpen))}>
      <div className="navigation__lang-active">
        <img
          className="navigation__lang-img"
          src={`/images/icons/${i18n.language === 'en' ? 'en' : 'ua'}.svg`}
          alt="uk"
        />
      </div>

      <ul className="navigation__lang-list">
        <li className="navigation__lang-item" onClick={() => onChangeLanguage('en')}>
          <img className="navigation__lang-img" src="/images/icons/en.svg" alt="en" />
        </li>
        <li className="navigation__lang-item" onClick={() => onChangeLanguage('ua')}>
          <img className="navigation__lang-img" src="/images/icons/ua.svg" alt="ua" />
        </li>
      </ul>
    </div>
  );
};

export default NavigationOtherLang;
