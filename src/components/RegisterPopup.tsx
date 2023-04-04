import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setRegistered } from '../redux/authorization/slice';
import { selectRegistered } from '../redux/authorization/selectors';
import { useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

const RegisterPopup: React.FC = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const registered = useSelector(selectRegistered);

  const { t } = useTranslation();

  React.useEffect(() => {
    const popupOpenTimeout = setTimeout(() => {
      if (registered) {
        dispatch(setRegistered(false));

        navigate('/login');
      }
    }, 3000);

    return () => clearTimeout(popupOpenTimeout);
  }, [registered]);

  return (
    <section className={registered ? 'register__popup show' : 'register__popup'}>
      <div className="register__popup-inner">
        <h2 className="register__popup-title">{t('registerPopupTitle')}</h2>
        <p className="register__popup-desc">{t('registerPopupDesc')}</p>
        <i className="register__popup-done">
          <svg
            id="Layer_1"
            viewBox="0 0 512 512"
            xmlSpace="preserve"
            xmlns="http://www.w3.org/2000/svg">
            <style>{'.st1{fill:none;stroke:#fff;stroke-width:30;stroke-miterlimit:10}'}</style>
            <path
              d="M489 255.9v-.7c0-1.6 0-3.2-.1-4.7 0-.9-.1-1.8-.1-2.8 0-.9-.1-1.8-.1-2.7-.1-1.1-.1-2.2-.2-3.3 0-.7-.1-1.4-.1-2.1l-.3-3.6c0-.5-.1-1.1-.1-1.6-.1-1.3-.3-2.6-.4-4 0-.3-.1-.7-.1-1C474.3 113.2 375.7 22.9 256 22.9S37.7 113.2 24.5 229.5c0 .3-.1.7-.1 1-.1 1.3-.3 2.6-.4 4-.1.5-.1 1.1-.1 1.6l-.3 3.6c0 .7-.1 1.4-.1 2.1-.1 1.1-.1 2.2-.2 3.3 0 .9-.1 1.8-.1 2.7 0 .9-.1 1.8-.1 2.8 0 1.6-.1 3.2-.1 4.7V256.9c0 1.6 0 3.2.1 4.7 0 .9.1 1.8.1 2.8 0 .9.1 1.8.1 2.7.1 1.1.1 2.2.2 3.3 0 .7.1 1.4.1 2.1l.3 3.6c0 .5.1 1.1.1 1.6.1 1.3.3 2.6.4 4 0 .3.1.7.1 1C37.7 398.8 136.3 489.1 256 489.1s218.3-90.3 231.5-206.5c0-.3.1-.7.1-1 .1-1.3.3-2.6.4-4 .1-.5.1-1.1.1-1.6l.3-3.6c0-.7.1-1.4.1-2.1.1-1.1.1-2.2.2-3.3 0-.9.1-1.8.1-2.7 0-.9.1-1.8.1-2.8 0-1.6.1-3.2.1-4.7V255.9c0 .1 0 .1 0 0z"
              id="XMLID_3_"
              style={{
                fill: '#2bb673',
              }}
            />
            <g id="XMLID_1_">
              <path className="st1" id="XMLID_2_" d="m213.6 344.2 156.1-156" />
              <path className="st1" id="XMLID_4_" d="m233.8 345.2-79.1-79.1" />
            </g>
          </svg>
        </i>
      </div>
    </section>
  );
};

export default RegisterPopup;
